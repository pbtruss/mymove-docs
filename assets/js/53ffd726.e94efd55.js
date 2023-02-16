"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[1389],{819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var i=n(87462),s=(n(67294),n(3905));n(8209);const a={},o="Testing",r={unversionedId:"about/development/testing",id:"about/development/testing",title:"Testing",description:"There are a few handy targets in the Makefile to help you run tests:",source:"@site/docs/about/development/testing.md",sourceDirName:"about/development",slug:"/about/development/testing",permalink:"/mymove-docs/docs/about/development/testing",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/about/development/testing.md",tags:[],version:"current",frontMatter:{},sidebar:"aboutSidebar",previous:{title:"Test Data Generator",permalink:"/mymove-docs/docs/about/development/test-data-generator"},next:{title:"Troubleshooting",permalink:"/mymove-docs/docs/about/development/troubleshooting"}},l={},u=[{value:"Troubleshooting tips -- integration / e2e tests",id:"troubleshooting-tips----integration--e2e-tests",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"testing"},"Testing"),(0,s.kt)("p",null,"There are a few handy targets in the Makefile to help you run tests:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"make client_test"),": Run front-end testing suites."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"make server_test"),": Run back-end testing suites. ",(0,s.kt)("a",{parentName:"li",href:"https://transcom.github.io/mymove-docs/docs/dev/testing/running-tests/run-go-tests"},"Additional info for running go tests")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"make e2e_test"),": Run end-to-end testing suite. ",(0,s.kt)("a",{parentName:"li",href:"https://transcom.github.io/mymove-docs/docs/dev/testing/running-tests/run-e2e-tests"},"Additional info for running E2E tests"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Note: this will not necessarily reflect the same results as in the CI\nenvironment, run with caution. One is your ",(0,s.kt)("inlineCode",{parentName:"li"},".envrc")," is going to\npopulate your dev environment with a bunch of values that ",(0,s.kt)("inlineCode",{parentName:"li"},"make e2e_test_docker"),"\nwon't have."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"make e2e_test_docker"),": Run e2e testing suite in the same docker container as is run in CircleCI.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Note: this runs with a full clean/rebuild, so it is not great for fast iteration.\nUse ",(0,s.kt)("inlineCode",{parentName:"li"},"make e2e_test")," to pick individual tests from the Cypress UI."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"make test"),": Run e2e, client- and server-side testing suites."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"yarn test:e2e"),": Useful for debugging. This opens the cypress test runner\nagainst your already running dev servers and inspect/run individual e2e tests.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Note: You must already have the servers running for this to work!")))),(0,s.kt)("h2",{id:"troubleshooting-tips----integration--e2e-tests"},"Troubleshooting tips -- integration / e2e tests"),(0,s.kt)("p",null,"When running locally, you may find that retries or successive runs have unexpected failures. Some of the integration tests are written with the assumption that they will only be run against a clean DB. If you're working with one of these and don't have time to fix them to properly set up and clean up their state, you can use this command to reset your local dev db before opening the test runner. Note that if you choose not to fix the offending test(s), you'll have to repeatedly close the test runner to re-clean the the DB. You won't be able to take advantage of Cypress's hot reloading!"),(0,s.kt)("p",null,"If you suspect memory issues, you can further inspect this with the commands:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"yarn test:e2e-debug"),", which runs ",(0,s.kt)("inlineCode",{parentName:"li"},"yarn test:e2e")," with DEBUG stats"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"yarn test:e2e-debug-clean"),", which runs ",(0,s.kt)("inlineCode",{parentName:"li"},"yarn test:e2e-clean")," with DEBUG stats")))}m.isMDXComponent=!0}}]);