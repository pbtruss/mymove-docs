"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[463],{6445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>g});var a=n(87462),s=(n(67294),n(3905));n(29420);const i={sidebar_position:6},l="How to run Go tests",r={unversionedId:"backend/testing/run-go-tests",id:"backend/testing/run-go-tests",title:"How to run Go tests",description:"Ask in DP3 Slack #g-database \ud83d\udd12 for help with these",source:"@site/docs/backend/testing/run-go-tests.md",sourceDirName:"backend/testing",slug:"/backend/testing/run-go-tests",permalink:"/mymove-docs/docs/backend/testing/run-go-tests",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/testing/run-go-tests.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"backendSidebar",previous:{title:"How to run end to end (Cypress) tests",permalink:"/mymove-docs/docs/backend/testing/run-e2e-tests"},next:{title:"How to write fast tests",permalink:"/mymove-docs/docs/backend/testing/how-to-write-fast-tests"}},o={},g=[{value:"Run All Go Tests",id:"run-all-go-tests",level:2},{value:"Run Specific Tests",id:"run-specific-tests",level:2},{value:"Run All Tests in a Single Package",id:"run-all-tests-in-a-single-package",level:3},{value:"Run Tests with Names Matching a String",id:"run-tests-with-names-matching-a-string",level:3},{value:"Run Subtest with Names Matching a String",id:"run-subtest-with-names-matching-a-string",level:3},{value:"Run Tests when a File Changes",id:"run-tests-when-a-file-changes",level:2},{value:"Run Tests with Coverage Report",id:"run-tests-with-coverage-report",level:2},{value:"Simple Coverage Report",id:"simple-coverage-report",level:3},{value:"Detailed Coverage Report",id:"detailed-coverage-report",level:3}],p={toc:g};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"how-to-run-go-tests"},"How to run Go tests"),(0,s.kt)("admonition",{title:"Having trouble setting this up?",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Ask in ",(0,s.kt)("a",{parentName:"p",href:"https://ustcdp3.slack.com/archives/CSGDM3NUW"},"DP3 Slack #g-database \ud83d\udd12")," for help with these\ncommands.")),(0,s.kt)("h2",{id:"run-all-go-tests"},"Run All Go Tests"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Running all the server tests"',title:'"Running',all:!0,the:!0,server:!0,'tests"':!0},"make server_test\n")),(0,s.kt)("h2",{id:"run-specific-tests"},"Run Specific Tests"),(0,s.kt)("p",null,"All of the commands in this section assume that ",(0,s.kt)("inlineCode",{parentName:"p"},"test_db")," is setup properly.\nProperly here is defined as having your Test database running in Docker, having\nthe Test database migrated, and seeded with DevSeed data."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Resetting and migrating the test database"',title:'"Resetting',and:!0,migrating:!0,the:!0,test:!0,'database"':!0},"make db_test_reset db_test_migrate\n")),(0,s.kt)("h3",{id:"run-all-tests-in-a-single-package"},"Run All Tests in a Single Package"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"$ go test ./pkg/handlers/internalapi/\n")),(0,s.kt)("h3",{id:"run-tests-with-names-matching-a-string"},"Run Tests with Names Matching a String"),(0,s.kt)("p",null,"The following will run any Testify tests that have a name matching ",(0,s.kt)("inlineCode",{parentName:"p"},"Test_Name")," in the ",(0,s.kt)("inlineCode",{parentName:"p"},"handlers/internalapi")," package:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"$ go test ./pkg/handlers/internalapi/ -testify.m Test_Name\n")),(0,s.kt)("h3",{id:"run-subtest-with-names-matching-a-string"},"Run Subtest with Names Matching a String"),(0,s.kt)("p",null,"Subtests often have non alpha numeric characters in the name, which testify translates to underscore. You can see the name of the test by running all of the tests like above, but with the verbose flag."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"$ go test -v ./pkg/handlers/internalapi/ -testify.m Test_name\n")),(0,s.kt)("p",null,"Then you can run the single subtest with:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"$ go test -count=1 -v -run 'Test_suite_name/Test_name/sub_test_name' ./pkg/handlers/ghcapi\n")),(0,s.kt)("h2",{id:"run-tests-when-a-file-changes"},"Run Tests when a File Changes"),(0,s.kt)("p",null,"You'll need to install ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/BurntSushi/ripgrep"},"ripgrep")," and ",(0,s.kt)("a",{parentName:"p",href:"http://www.entrproject.org/"},"entr")," (",(0,s.kt)("inlineCode",{parentName:"p"},"brew install ripgrep entr"),"):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"$ rg -t go --files | entr -c $YOUR_TEST_COMMAND\n")),(0,s.kt)("p",null,"Here is an example that will run all model tests when any Go file in the project is changed:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"$ rg -t go --files | entr -c go test ./pkg/models\n")),(0,s.kt)("p",null,"There is generally no need to be any more specific than ",(0,s.kt)("inlineCode",{parentName:"p"},"rg -t go"),", as watching all ",(0,s.kt)("inlineCode",{parentName:"p"},".go")," files is plenty fast enough."),(0,s.kt)("h2",{id:"run-tests-with-coverage-report"},"Run Tests with Coverage Report"),(0,s.kt)("p",null,"Go has a built-in test coverage tool. You can generate test coverage reports at any level outlined above."),(0,s.kt)("h3",{id:"simple-coverage-report"},"Simple Coverage Report"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"$ go test ./pkg/handlers/internalapi -cover\n")),(0,s.kt)("p",null,"You will see a result similar to the following, showing the amount of code coverage your tests produce:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"ok      github.com/transcom/mymove/pkg/handlers/internalapi 72.020s coverage: 73.5% of statements\n")),(0,s.kt)("h3",{id:"detailed-coverage-report"},"Detailed Coverage Report"),(0,s.kt)("p",null,"You can view line-by-line coverage in the browser using the following commands:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"$ go test ./pkg/handlers/internalapi -coverprofile=coverage.out\n$ go tool cover -html=coverage.out\n\n")),(0,s.kt)("p",null,"A browser window will automatically open. You can navigate files via dropdown in the top left corner."))}c.isMDXComponent=!0}}]);