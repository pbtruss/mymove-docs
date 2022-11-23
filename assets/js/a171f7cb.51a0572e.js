"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[8480],{24245:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(87462),s=(a(67294),a(3905));a(16758);const i={sidebar_position:9},o="Running server tests inside a transaction",r={unversionedId:"backend/testing/running-server-tests-inside-a-transaction",id:"backend/testing/running-server-tests-inside-a-transaction",title:"Running server tests inside a transaction",description:"When our tests run, we often need to clear the database between tests so we can have a clean slate.",source:"@site/docs/backend/testing/running-server-tests-inside-a-transaction.md",sourceDirName:"backend/testing",slug:"/backend/testing/running-server-tests-inside-a-transaction",permalink:"/mymove-docs/docs/backend/testing/running-server-tests-inside-a-transaction",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/testing/running-server-tests-inside-a-transaction.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"backendSidebar",previous:{title:"Interacting with the database in Go server tests",permalink:"/mymove-docs/docs/backend/testing/interacting-with-the-db-in-go-server-tests"},next:{title:"Test data generation",permalink:"/mymove-docs/docs/backend/testing/test-data-generation"}},l={},p=[{value:"How to update a test to the new pattern",id:"how-to-update-a-test-to-the-new-pattern",level:2},{value:"What&#39;s different",id:"whats-different",level:3},{value:"How to update the package to the new pattern",id:"how-to-update-the-package-to-the-new-pattern",level:2},{value:"<strong>Check if package has been updated</strong>",id:"check-if-package-has-been-updated",level:3},{value:"<strong>Update the package to use the faster testing setup</strong>",id:"update-the-package-to-use-the-faster-testing-setup",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"My tests started failing after making these changes",id:"my-tests-started-failing-after-making-these-changes",level:3},{value:"I can&#39;t extract the db setup into a function, should I undo everything?",id:"i-cant-extract-the-db-setup-into-a-function-should-i-undo-everything",level:3},{value:"Background",id:"background",level:2},{value:"Why data setup has to be repeated within each subtest",id:"why-data-setup-has-to-be-repeated-within-each-subtest",level:3},{value:"Updating/adding to existing tests that use transactions",id:"updatingadding-to-existing-tests-that-use-transactions",level:2}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"running-server-tests-inside-a-transaction"},"Running server tests inside a transaction"),(0,s.kt)("p",null,"When our tests run, we often need to clear the database between tests so we can have a clean slate."),(0,s.kt)("p",null,"In our old coding pattern, this wasn't enforced so there were lots of dependencies between tests, which is not a good pattern. Tests should be isolated from each other."),(0,s.kt)("p",null,"If we did clear the database, we were using ",(0,s.kt)("inlineCode",{parentName:"p"},"TruncateAll()")," to delete all records in the database, which is slow."),(0,s.kt)("p",null,"For those reasons, as of June 2021, we have a new coding pattern that will use ",(0,s.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/postgresql-transactions/"},"transactions")," to clear the database between tests and manage database connections in a more optimized fashion."),(0,s.kt)("p",null,"Read more for ",(0,s.kt)("a",{parentName:"p",href:"#background"},"background")," on this."),(0,s.kt)("h2",{id:"how-to-update-a-test-to-the-new-pattern"},"How to update a test to the new pattern"),(0,s.kt)("p",null,"First let's look at the old pattern. The subtests often relied on db records that were created in the  ",(0,s.kt)("inlineCode",{parentName:"p"},"TEST SETUP")," section. Sometimes, a later subtest would even rely on a change from an earlier subtest."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Old pattern:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-golang"},'func (suite *MTOShipmentServiceSuite) TestMTOShipmentUpdater() {\n\n    // TEST SETUP\n    // Set up mocked objects and other local (non-db) variables\n    // Prepare the database with testdatagen and suite.DB() calls\n\n    suite.T().Run("Subtest 1", func(t *testing.T) {\n        // Run Test\n        // Check errors\n    })\n\n    suite.T().Run("Subtest 2", func(t *testing.T) {\n        // Run Test\n        // Check errors\n    })  \n')),(0,s.kt)("p",null,"In our new pattern, the database will be cleaned for each subtest. So we can't rely on any db records changed in the ",(0,s.kt)("inlineCode",{parentName:"p"},"TEST SETUP")," section, or any db records changed in previous subtests. We need to put all that setup into a function, called ",(0,s.kt)("inlineCode",{parentName:"p"},"setupTestData")," here, and call that in each subtest."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"New Pattern"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-golang"},'func (suite *MTOShipmentServiceSuite) TestMTOShipmentUpdater() {\n\n    // TEST SETUP\n    // Set up mocked objects and other local (non-db) variables\n    \n    // MOVE DB SETUP TO A FUNCTION\n    setupTestData := func() {  \n        // Prepare the database with testdatagen and suite.DB() calls\n    }\n\n    suite.Run("Subtest 1", func() {\n        setupTestData()    // <-- Call the DB setup function\n        // Run Test\n        // Check errors\n    }\n\n    suite.Run("Subtest 2", func() {\n        setupTestData()  \n        // Run Test\n        // Check errors\n    }\n\n')),(0,s.kt)("h3",{id:"whats-different"},"What's different"),(0,s.kt)("admonition",{title:"View in PR",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"You can see these ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/6650/commits/3baaff02ffa8ca745ffb9c75422a1598180635ec#diff-a9eeef9ef97657c461ec7c76226f6c6f5dd03b4938217e4ed0de9bbbfe161815"},"changes in a PR")," if you prefer.")),(0,s.kt)("p",null,"Follow these directions"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The function declaration for the main test needs to be simplified."),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"suite.T().Run")," \u2192 ",(0,s.kt)("inlineCode",{parentName:"li"},"suite.Run")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"func(t *testing.T)")," \u2192 ",(0,s.kt)("inlineCode",{parentName:"li"},"func()"))),(0,s.kt)("p",{parentName:"li"},"From:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-golang"},' suite.T().Run("Subtest 1", func(t *testing.T) {\n')),(0,s.kt)("p",{parentName:"li"},"To:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-golang"},' suite.Run("Subtest 1", func() {\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"All DB setup should be moved to a function that is called in each subtest. There are more than one ways of achieving this, the following is just one example."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-golang"},' // MOVE DB SETUP TO A FUNCTION\n setupTestData := func() {  \n     // Prepare the database with testdatagen and suite.DB() calls\n }\n\n suite.Run("Subtest 1", func() {\n     setupTestData()    // <-- Call the DB setup function\n     // Run Test\n     // Check errors\n }\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Remove any calls to ",(0,s.kt)("inlineCode",{parentName:"p"},"suite.TruncateAll()")," in the tests.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Replace ",(0,s.kt)("inlineCode",{parentName:"p"},"suite.T().Fatalf")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"suite.T().Fatal")," with ",(0,s.kt)("inlineCode",{parentName:"p"},"suite.Fail"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Remove ",(0,s.kt)("inlineCode",{parentName:"p"},"testing")," from the imports at the top of the file.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Run all tests in the package."))),(0,s.kt)("h2",{id:"how-to-update-the-package-to-the-new-pattern"},"How to update the package to the new pattern"),(0,s.kt)("p",null,"Hopefully the package  you are working on has already been updated to use the new pattern."),(0,s.kt)("h3",{id:"check-if-package-has-been-updated"},(0,s.kt)("strong",{parentName:"h3"},"Check if package has been updated")),(0,s.kt)("p",null,"To check, navigate to the file that sets up testing for the package, usually it is located at ",(0,s.kt)("inlineCode",{parentName:"p"},"<path_to_package>/api_test.go")),(0,s.kt)("p",null,"For example, for the ghcapi package, the file is in ",(0,s.kt)("inlineCode",{parentName:"p"},"pkg/handlers/ghcapi/api_test.go"),"."),(0,s.kt)("p",null,"Search for the new option ",(0,s.kt)("inlineCode",{parentName:"p"},"testingsuite.WithPerTestTransaction()"),"."),(0,s.kt)("p",null,"If it does not exist in the file, you should update the package."),(0,s.kt)("h3",{id:"update-the-package-to-use-the-faster-testing-setup"},(0,s.kt)("strong",{parentName:"h3"},"Update the package to use the faster testing setup")),(0,s.kt)("p",null,"You need to make two changes to this file."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Update the package testing suite to use the new option - which is called ",(0,s.kt)("inlineCode",{parentName:"li"},"testingsuite.WithPerTestTransaction()"))),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Fix package to use transaction option",src:a(20362).Z,width:"911",height:"385"})),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Remove calls to ",(0,s.kt)("inlineCode",{parentName:"p"},"TruncateAll()"),". ",(0,s.kt)("inlineCode",{parentName:"p"},"TruncateAll")," empties the database and we no longer have to do this since we use the magic of transactions."),(0,s.kt)("p",{parentName:"li"},"You can also remove the function SetupTest if all it did was call ",(0,s.kt)("inlineCode",{parentName:"p"},"TruncateAll()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"suite.FatalNoError(err)")))),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Remove TruncateAll",src:a(83539).Z,width:"913",height:"253"})),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Update the tests to remove ",(0,s.kt)("inlineCode",{parentName:"p"},"TruncateAll()")),(0,s.kt)("p",{parentName:"li"},"Now's a good time to remove all calls to ",(0,s.kt)("inlineCode",{parentName:"p"},"TruncateAll()")," from the tests in this package too!"))),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Remove TruncateAll from tests",src:a(70033).Z,width:"913",height:"212"})),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"Run the tests and see if any fail. If none fail, then you are done! If tests fail, read below to fix them.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Done! The package is now setup for faster tests. Thank you.")),(0,s.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,s.kt)("h3",{id:"my-tests-started-failing-after-making-these-changes"},"My tests started failing after making these changes"),(0,s.kt)("p",null,"If you use ",(0,s.kt)("inlineCode",{parentName:"p"},"Suite.Run"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"This could be because each subtest is sharing DB setup. Check that you have extracted ",(0,s.kt)("strong",{parentName:"p"},"all the shared db setup")," into a separate function, and call that function at the beginning of each subtest. A tip is to look for ",(0,s.kt)("inlineCode",{parentName:"p"},"suite.DB()"),". The call to ",(0,s.kt)("inlineCode",{parentName:"p"},"suite.DB()")," performs some of the setup to handle the per test transactions, so any call to ",(0,s.kt)("inlineCode",{parentName:"p"},"suite.DB()")," (even if you're creating a stubbed object) should be moved from the parent test. "),(0,s.kt)("p",{parentName:"li"},"  Look at the diff of ",(0,s.kt)("inlineCode",{parentName:"p"},"pkg/handlers/ghcapi/orders_test.go")," in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/8676/files#diff-afe14b5268a7dd9637cc140a082e29a7c61632a71fb43f32dd6402efe22e64a2"},"this example"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If the shared setup was already in a separate function, it could just be a matter of calling the setup function at the beginning of each subtest. ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/6650/commits/dc6d5805a104d10463a7fd5382d43a598b6626a8"},"Here's an example"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If you've properly extracted the DB setup, it's possible a subtest was depending on the previous subtest. This is not a good pattern, try to unwind that dependency. Each test should pass in isolation from each other.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Remove any calls to ",(0,s.kt)("inlineCode",{parentName:"p"},"suite.TruncateAll()")," in the tests. Here's an example of ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/6650/commits/3378f4c932d35f1cce58888d3a4f617af53df2d1#diff-3f780d99e8fc416373c42acd25dcdcb5a4bfdd85ddd03795b5a72c0a03c07d06"},"how the models tests were converted to use transactions"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Replace ",(0,s.kt)("inlineCode",{parentName:"p"},"suite.T().Fatalf")," with ",(0,s.kt)("inlineCode",{parentName:"p"},"suite.Fail"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If the issue is related to appContext, make sure to get the correct appContext inside the subtest using ",(0,s.kt)("inlineCode",{parentName:"p"},"suite.AppContextForTest()"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If you were using ",(0,s.kt)("inlineCode",{parentName:"p"},"t")," from the passed in ",(0,s.kt)("inlineCode",{parentName:"p"},"t *testing.T"),", use ",(0,s.kt)("inlineCode",{parentName:"p"},"suite.T()")," instead."))),(0,s.kt)("h3",{id:"i-cant-extract-the-db-setup-into-a-function-should-i-undo-everything"},"I can't extract the db setup into a function, should I undo everything?"),(0,s.kt)("p",null,"Sometimes, it's too much of refactor to pull out all the setup, or the setup takes a very long time."),(0,s.kt)("p",null,"In these cases, you can use ",(0,s.kt)("inlineCode",{parentName:"p"},"suite.PreloadData"),". This can only be called once per test and will set up data that will then be used by all subtests. Once it is called, it will set a savepoint from which all subtests will start. When a subtests ends, the db will rollback to the savepoint. This way, each subtest can reuse the preloaded data, but subtests cannot modify the data used by another test. In most situations, it is preferrable to extract db setup into a setup function."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"PreloadData")," can be preferred in one case:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Where there is a large amount of necessary setup, like populating the rate engine for payment calculations. In this case it can be valuable to have a preloaded setup.")),(0,s.kt)("p",null,"So ",(0,s.kt)("strong",{parentName:"p"},"if you absolutely must")," use ",(0,s.kt)("inlineCode",{parentName:"p"},"PreloadData"),", the process is easy. Create a ",(0,s.kt)("inlineCode",{parentName:"p"},"suite.PreloadData")," function and do all your test setup inside. ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/c4f7df208f4b63fd85b0cd7645156a3516902027/pkg/rateengine/nonlinehaul_test.go#L188"},"Here's an example")),(0,s.kt)("h2",{id:"background"},"Background"),(0,s.kt)("p",null,"In June 2021, we introduced the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/DATA-DOG/go-txdb"},"go-txdb")," tool to allow us to run tests within a transaction, and then roll back the transaction after the test. This allows each test to start with a clean DB state, and is much faster than truncating the DB, which is how we've been resetting the DB all this time. Here is the PR that introduced transactions in tests: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/6650"},"https://github.com/transcom/mymove/pull/6650")),(0,s.kt)("p",null,"The original PR was designed in a non-breaking way such that existing tests that still use truncation can continue to run. The idea was to make the transaction feature opt-in, and incrementally update each package to use transactions. The PR updated several packages to give examples of what it takes to start using transactions. Follow the steps below to convert more packages."),(0,s.kt)("admonition",{title:"About running tests in code editor or IDE",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Before you start running tests in Goland or other editor, make sure to run ",(0,s.kt)("inlineCode",{parentName:"p"},"make\nserver_test_setup")," first.")),(0,s.kt)("h3",{id:"why-data-setup-has-to-be-repeated-within-each-subtest"},"Why data setup has to be repeated within each subtest"),(0,s.kt)("p",null,"In ",(0,s.kt)("inlineCode",{parentName:"p"},"pkg/testingsuite/pop_suite.go"),", we created our own ",(0,s.kt)("inlineCode",{parentName:"p"},"Run")," function that overrides the default testify ",(0,s.kt)("inlineCode",{parentName:"p"},"suite.Run")," to ensure that the test DB is torn down for per-transaction tests."),(0,s.kt)("p",null,"It would be nice if subtests could start a new transaction inside\nthe current connection so they could reuse db setup between\nsubtests. Unfortunately, because ",(0,s.kt)("inlineCode",{parentName:"p"},"database/sql")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"pop")," do not\nsupport nested transactions, this gets complicated and hairy\nquickly. When testing that approach, connections wouldn't get\nclosed and cause other tests to hang or subtests would report\nincorrect errors about transactions already being closed."),(0,s.kt)("p",null,"And so, if per test transaction is enabled, each subtest gets a new\nconnection. This means subtests are really just like main tests,\nbut subtests are a helpful way to group tests together, which can\nbe useful. Therefore, shared setup has to be moved to a function that can be run once\nper subtest. In testing this approach, it was still faster with per test\ntransactions than the old way of cloning a DB per package."),(0,s.kt)("p",null,"If tests require a really large amount of data setup, you can use ",(0,s.kt)("inlineCode",{parentName:"p"},"suite.PreloadData"),". If ",(0,s.kt)("inlineCode",{parentName:"p"},"PreloadData")," is called, all subtests will start with the data that was set up in ",(0,s.kt)("inlineCode",{parentName:"p"},"PreloadData"),", but subtests won't be able to modify the data used by another test. "),(0,s.kt)("p",null,"Note that any call to ",(0,s.kt)("inlineCode",{parentName:"p"},"suite.DB()")," needs to be in a ",(0,s.kt)("inlineCode",{parentName:"p"},"setupTestData")," function, ",(0,s.kt)("inlineCode",{parentName:"p"},"suite.PreloadData"),", or in a subtest."),(0,s.kt)("h2",{id:"updatingadding-to-existing-tests-that-use-transactions"},"Updating/adding to existing tests that use transactions"),(0,s.kt)("p",null,"Make a note of how the tests are set up, and follow the existing patterns, such as using ",(0,s.kt)("inlineCode",{parentName:"p"},"suite.Run"),", and calling the shared DB setup function within each new subtest you add, where applicable."))}d.isMDXComponent=!0},83539:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/txn-delete-setuptest-a64e4ba084703ca6db4d8ca97a5077bc.jpg"},70033:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/txn-truncate-all-096e1efc78e23e74291ff0cce3ebecb1.jpg"},20362:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/txn-update-package-option-bb15d85e41767727ce1d4cac210b8699.png"}}]);