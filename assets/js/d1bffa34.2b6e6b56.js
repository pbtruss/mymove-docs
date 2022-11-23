"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[6266],{49650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=n(87462),i=(n(67294),n(3905));n(16758);const a={sidebar_position:5},o="How to run end to end (Cypress) tests",r={unversionedId:"backend/testing/run-e2e-tests",id:"backend/testing/run-e2e-tests",title:"How to run end to end (Cypress) tests",description:"Cypress tests run using the client-side code. This guide shows you how to run",source:"@site/docs/backend/testing/run-e2e-tests.md",sourceDirName:"backend/testing",slug:"/backend/testing/run-e2e-tests",permalink:"/mymove-docs/docs/backend/testing/run-e2e-tests",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/testing/run-e2e-tests.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"backendSidebar",previous:{title:"How to run acceptance tests",permalink:"/mymove-docs/docs/backend/testing/run-acceptance-tests"},next:{title:"How to run Go tests",permalink:"/mymove-docs/docs/backend/testing/run-go-tests"}},c={},l=[{value:"Using the Cypress UI",id:"using-the-cypress-ui",level:2},{value:"In Docker",id:"in-docker",level:2},{value:"Run Specific Tests in a File",id:"run-specific-tests-in-a-file",level:2},{value:"Automated tests artifacts from continuous integration",id:"automated-tests-artifacts-from-continuous-integration",level:2}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-run-end-to-end-cypress-tests"},"How to run end to end (Cypress) tests"),(0,i.kt)("p",null,"Cypress tests run using the client-side code. This guide shows you how to run\nthe Cypress test suite either as Docker container, as a command-line tool\nlocally, or using the Cypress UI. When running within these tests, make sure you\nbuild the client locally in order to ensure that the latest client code is what\nCypress is testing against."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"make client_build\n")),(0,i.kt)("p",null,"After completing the previous command, you should be able to run the commands\nbefore and utilize the same client-side code to test. If you make any changes\nwithin the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/")," directory, you will need to rebuild the client-side code. The\nsame is not true for the back-end work as that work is reloaded every time the\nCypress tests are started."),(0,i.kt)("h2",{id:"using-the-cypress-ui"},"Using the Cypress UI"),(0,i.kt)("p",null,'The fastest way to run end to end tests is with the following command, which will open the\nCypress UI, from which you can choose to run all integration specs (there should be a link in\nthe top right that says something like "Run 25 integration specs"), or click on individual ones.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"make e2e_test\n")),(0,i.kt)("p",null,"This command truncates most tables in the test DB (which is much faster than destroying it, running it again,\nand running all the migrations), then populates the DB from the data in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"/pkg/testdatagen/scenario/e2ebasic.go")," script, and then launches Cypress UI."),(0,i.kt)("p",null,"Sometimes, a new recently-merged migration might prevent the script from running.\nIn that case, or if something else seems wrong with the test DB, you can set everything\nup from scratch:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"make e2e_test_fresh\n")),(0,i.kt)("p",null,"If you have already run tests in the current database, and you want to keep Cypress open\nto run the tests again, you can empty and refill the test DB with this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"make db_e2e_up\n")),(0,i.kt)("h2",{id:"in-docker"},"In Docker"),(0,i.kt)("p",null,"If you instead would like to run all the tests in the terminal, use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"make e2e_test_docker\n")),(0,i.kt)("p",null,"To run just the office tests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"SPECS=cypress/integration/office/**/* make e2e_test_docker\n")),(0,i.kt)("h2",{id:"run-specific-tests-in-a-file"},"Run Specific Tests in a File"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn cypress run --spec cypress/integration/path/to/file.jsx\n")),(0,i.kt)("h2",{id:"automated-tests-artifacts-from-continuous-integration"},"Automated tests artifacts from continuous integration"),(0,i.kt)("admonition",{title:"External documentation call-out",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The intention of this documentation is to not repeat the official docs. At the\ntime of this writing, the documentation being referenced contains an ",(0,i.kt)("em",{parentName:"p"},"Artifacts\noverview")," section, which shows where Artifacts are stored in the\nCircleCI UI.")),(0,i.kt)("p",null,"We use CircleCI to store artifacts for failed Cypress tests. These are available\nto all Trussels with GitHub repository access in the CircleCI UI. ",(0,i.kt)("a",{parentName:"p",href:"https://circleci.com/docs/artifacts#artifacts-overview"},"Please see\nthe official CirclCI documentation about build\nartifacts"),". The project's Artifacts are only stored on\nfailed Integration Tests that run in CI. This is defined in our\n",(0,i.kt)("inlineCode",{parentName:"p"},".circleci/config.yml")," file in the project under the ",(0,i.kt)("inlineCode",{parentName:"p"},"e2e_tests_cypress:"),"\nstanza. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/35630d2f7e94371393860dfd63f9b6d49eededdb/.circleci/config.yml#L567-L633"},"Here's a link to an example at the time of this\nwriting"),"."))}u.isMDXComponent=!0}}]);