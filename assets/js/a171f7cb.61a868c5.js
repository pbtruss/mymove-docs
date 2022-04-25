"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[8480],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(n),h=s,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24245:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(87462),s=n(63366),i=(n(67294),n(3905)),o=["components"],r={sidebar_position:9},l="Running server tests inside a transaction",p={unversionedId:"backend/testing/running-server-tests-inside-a-transaction",id:"backend/testing/running-server-tests-inside-a-transaction",isDocsHomePage:!1,title:"Running server tests inside a transaction",description:"When our tests run, we often need to clear the database between tests so we can have a clean slate.",source:"@site/docs/backend/testing/running-server-tests-inside-a-transaction.md",sourceDirName:"backend/testing",slug:"/backend/testing/running-server-tests-inside-a-transaction",permalink:"/mymove-docs/docs/backend/testing/running-server-tests-inside-a-transaction",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/testing/running-server-tests-inside-a-transaction.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"backendSidebar",previous:{title:"Interacting with the database in Go server tests",permalink:"/mymove-docs/docs/backend/testing/interacting-with-the-db-in-go-server-tests"},next:{title:"Test data generation",permalink:"/mymove-docs/docs/backend/testing/test-data-generation"}},u=[{value:"How to update a test to the new pattern",id:"how-to-update-a-test-to-the-new-pattern",children:[{value:"What&#39;s different",id:"whats-different",children:[]}]},{value:"How to update the package to the new pattern",id:"how-to-update-the-package-to-the-new-pattern",children:[{value:"<strong>Check if package has been updated</strong>",id:"check-if-package-has-been-updated",children:[]},{value:"<strong>Update the package to use the faster testing setup</strong>",id:"update-the-package-to-use-the-faster-testing-setup",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"My tests started failing after making these changes",id:"my-tests-started-failing-after-making-these-changes",children:[]},{value:"I can&#39;t extract the db setup into a function, should I undo everything?",id:"i-cant-extract-the-db-setup-into-a-function-should-i-undo-everything",children:[]}]},{value:"Background",id:"background",children:[{value:"Why data setup has to be repeated within each subtest",id:"why-data-setup-has-to-be-repeated-within-each-subtest",children:[]}]},{value:"Updating/adding to existing tests that use transactions",id:"updatingadding-to-existing-tests-that-use-transactions",children:[]}],c={toc:u};function d(e){var t=e.components,r=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"running-server-tests-inside-a-transaction"},"Running server tests inside a transaction"),(0,i.kt)("p",null,"When our tests run, we often need to clear the database between tests so we can have a clean slate."),(0,i.kt)("p",null,"In our old coding pattern, this wasn't enforced so there were lots of dependencies between tests, which is not a good pattern. Tests should be isolated from each other."),(0,i.kt)("p",null,"If we did clear the database, we were using ",(0,i.kt)("inlineCode",{parentName:"p"},"TruncateAll()")," to delete all records in the database, which is slow."),(0,i.kt)("p",null,"For those reasons, as of June 2021, we have a new coding pattern that will use ",(0,i.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/postgresql-transactions/"},"transactions")," to clear the database between tests and manage database connections in a more optimized fashion."),(0,i.kt)("p",null,"Read more for ",(0,i.kt)("a",{parentName:"p",href:"#background"},"background")," on this."),(0,i.kt)("h2",{id:"how-to-update-a-test-to-the-new-pattern"},"How to update a test to the new pattern"),(0,i.kt)("p",null,"First let's look at the old pattern. The subtests often relied on db records that were created in the  ",(0,i.kt)("inlineCode",{parentName:"p"},"TEST SETUP")," section. Sometimes, a later subtest would even rely on a change from an earlier subtest."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Old pattern:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-golang"},'func (suite *MTOShipmentServiceSuite) TestMTOShipmentUpdater() {\n\n    // TEST SETUP\n    // Set up mocked objects and other local (non-db) variables\n    // Prepare the database with testdatagen and suite.DB() calls\n\n    suite.T().Run("Subtest 1", func(t *testing.T) {\n        // Run Test\n        // Check errors\n    })\n\n    suite.T().Run("Subtest 2", func(t *testing.T) {\n        // Run Test\n        // Check errors\n    })  \n')),(0,i.kt)("p",null,"In our new pattern, the database will be cleaned for each subtest. So we can't rely on any db records changed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"TEST SETUP")," section, or any db records changed in previous subtests. We need to put all that setup into a function, called ",(0,i.kt)("inlineCode",{parentName:"p"},"setupTestData")," here, and call that in each subtest."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"New Pattern"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-golang"},'func (suite *MTOShipmentServiceSuite) TestMTOShipmentUpdater() {\n\n    // TEST SETUP\n    // Set up mocked objects and other local (non-db) variables\n    \n    // MOVE DB SETUP TO A FUNCTION\n    setupTestData := func() {  \n        // Prepare the database with testdatagen and suite.DB() calls\n    }\n\n    suite.Run("Subtest 1", func() {\n        setupTestData()    // <-- Call the DB setup function\n        // Run Test\n        // Check errors\n    }\n\n    suite.Run("Subtest 2", func() {\n        setupTestData()  \n        // Run Test\n        // Check errors\n    }\n\n')),(0,i.kt)("h3",{id:"whats-different"},"What's different"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"View in PR")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can see these ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/6650/commits/3baaff02ffa8ca745ffb9c75422a1598180635ec#diff-a9eeef9ef97657c461ec7c76226f6c6f5dd03b4938217e4ed0de9bbbfe161815"},"changes in a PR")," if you prefer."))),(0,i.kt)("p",null,"Follow these directions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The function declaration for the main test needs to be simplified."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"suite.T().Run")," \u2192 ",(0,i.kt)("inlineCode",{parentName:"li"},"suite.Run")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"func(t *testing.T)")," \u2192 ",(0,i.kt)("inlineCode",{parentName:"li"},"func()"))),(0,i.kt)("p",{parentName:"li"},"From:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-golang"},' suite.T().Run("Subtest 1", func(t *testing.T) {\n')),(0,i.kt)("p",{parentName:"li"},"To:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-golang"},' suite.Run("Subtest 1", func() {\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"All DB setup should be moved to a function that is called in each subtest. There are more than one ways of achieving this, the following is just one example."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-golang"},' // MOVE DB SETUP TO A FUNCTION\n setupTestData := func() {  \n     // Prepare the database with testdatagen and suite.DB() calls\n }\n\n suite.Run("Subtest 1", func() {\n     setupTestData()    // <-- Call the DB setup function\n     // Run Test\n     // Check errors\n }\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Remove any calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"suite.TruncateAll()")," in the tests.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"suite.T().Fatalf")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"suite.Fail"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Remove ",(0,i.kt)("inlineCode",{parentName:"p"},"testing")," from the imports at the top of the file.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run all tests in the package."))),(0,i.kt)("h2",{id:"how-to-update-the-package-to-the-new-pattern"},"How to update the package to the new pattern"),(0,i.kt)("p",null,"Hopefully the package  you are working on has already been updated to use the new pattern."),(0,i.kt)("h3",{id:"check-if-package-has-been-updated"},(0,i.kt)("strong",{parentName:"h3"},"Check if package has been updated")),(0,i.kt)("p",null,"To check, navigate to the file that sets up testing for the package, usually it is located at ",(0,i.kt)("inlineCode",{parentName:"p"},"<path_to_package>/api_test.go")),(0,i.kt)("p",null,"For example, for the ghcapi package, the file is in ",(0,i.kt)("inlineCode",{parentName:"p"},"pkg/handlers/ghcapi/api_test.go"),"."),(0,i.kt)("p",null,"Search for the new option ",(0,i.kt)("inlineCode",{parentName:"p"},"testingsuite.WithPerTestTransaction()"),"."),(0,i.kt)("p",null,"If it does not exist in the file, you should update the package."),(0,i.kt)("h3",{id:"update-the-package-to-use-the-faster-testing-setup"},(0,i.kt)("strong",{parentName:"h3"},"Update the package to use the faster testing setup")),(0,i.kt)("p",null,"You need to make two changes to this file."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Update the package testing suite to use the new option - which is called ",(0,i.kt)("inlineCode",{parentName:"li"},"testingsuite.WithPerTestTransaction()"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fix package to use transaction option",src:n(41064).Z})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Remove calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"TruncateAll()"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"TruncateAll")," empties the database and we no longer have to do this since we use the magic of transactions."),(0,i.kt)("p",{parentName:"li"},"You can also remove the function SetupTest if all it did was call ",(0,i.kt)("inlineCode",{parentName:"p"},"TruncateAll()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"suite.FatalNoError(err)")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Remove TruncateAll",src:n(99548).Z})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update the tests to remove ",(0,i.kt)("inlineCode",{parentName:"p"},"TruncateAll()")),(0,i.kt)("p",{parentName:"li"},"Now's a good time to remove all calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"TruncateAll()")," from the tests in this package too!"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Remove TruncateAll from tests",src:n(39812).Z})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Run the tests and see if any fail. If none fail, then you are done! If tests fail, read below to fix them.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Done! The package is now setup for faster tests. Thank you.")),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h3",{id:"my-tests-started-failing-after-making-these-changes"},"My tests started failing after making these changes"),(0,i.kt)("p",null,"If you use ",(0,i.kt)("inlineCode",{parentName:"p"},"Suite.Run"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This could be because each subtest is sharing DB setup. Check that you have extracted ",(0,i.kt)("strong",{parentName:"p"},"all the shared db setup")," into a separate function, and call that function at the beginning of each subtest."),(0,i.kt)("p",{parentName:"li"},"  Look at the diff of ",(0,i.kt)("inlineCode",{parentName:"p"},"pkg/handlers/ghcapi/orders_test.go")," in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/6650/commits/3baaff02ffa8ca745ffb9c75422a1598180635ec#diff-7ed9d49b328573d1e4b4c17ef8455b68ba22cedf910612f033634107ba60688a"},"this example"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the shared setup was already in a separate function, it could just be a matter of calling the setup function at the beginning of each subtest. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/6650/commits/dc6d5805a104d10463a7fd5382d43a598b6626a8"},"Here's an example"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you've properly extracted the DB setup, it's possible a subtest was depending on the previous subtest. This is not a good pattern, try to unwind that dependency. Each test should pass in isolation from each other.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Remove any calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"suite.TruncateAll()")," in the tests. Here's an example of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/6650/commits/3378f4c932d35f1cce58888d3a4f617af53df2d1"},"how the models tests were converted to use transactions"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"suite.T().Fatalf")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"suite.Fail"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the issue is related to appContext, make sure to get the correct appContext inside the subtest using ",(0,i.kt)("inlineCode",{parentName:"p"},"suite.AppContextForTest()"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you were using ",(0,i.kt)("inlineCode",{parentName:"p"},"t")," from the passed in ",(0,i.kt)("inlineCode",{parentName:"p"},"t *testing.T"),", use ",(0,i.kt)("inlineCode",{parentName:"p"},"suite.T()")," instead."))),(0,i.kt)("h3",{id:"i-cant-extract-the-db-setup-into-a-function-should-i-undo-everything"},"I can't extract the db setup into a function, should I undo everything?"),(0,i.kt)("p",null,"Sometimes, it's too much of refactor to pull out all the setup and figure out how tests depend on each other. This is not a great situation, and this is a reason why tests shouldn't depend on each other."),(0,i.kt)("p",null,"However, if you still want to keep some of the transactional performance benefits, you can use an alternate ",(0,i.kt)("inlineCode",{parentName:"p"},"Run")," function called ",(0,i.kt)("inlineCode",{parentName:"p"},"RunWithRollback"),". This is a ",(0,i.kt)("strong",{parentName:"p"},"less ideal pattern")," for the following reasons:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It doesn't actually use the newer txdb transactions"),(0,i.kt)("li",{parentName:"ul"},"You cannot use this if the underlying code under test uses transactions."),(0,i.kt)("li",{parentName:"ul"},"If someone later changes the underlying code to use transactions, they will have to do the work to fully switch to ",(0,i.kt)("inlineCode",{parentName:"li"},"suite.Run"),", the preferred pattern. This creates a deterrent to using transactions in the codebase, and we don't want to deter that."),(0,i.kt)("li",{parentName:"ul"},"It doesn't rollback each subtest, it only rolls back after each test, so tests can still depend on each other.")),(0,i.kt)("p",null,"However ",(0,i.kt)("strong",{parentName:"p"},"if you absolutely must")," use ",(0,i.kt)("inlineCode",{parentName:"p"},"RunWithRollback"),", the process is easy. Just change the ",(0,i.kt)("inlineCode",{parentName:"p"},"suite.Run")," calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"suite.RunWithRollback"),"."),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"In June 2021, we introduced the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DATA-DOG/go-txdb"},"go-txdb")," tool to allow us to run tests within a transaction, and then roll back the transaction after the test. This allows each test to start with a clean DB state, and is much faster than truncating the DB, which is how we've been resetting the DB all this time. Here is the PR that introduced transactions in tests: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/6650"},"https://github.com/transcom/mymove/pull/6650")),(0,i.kt)("p",null,"The original PR was designed in a non-breaking way such that existing tests that still use truncation can continue to run. The idea was to make the transaction feature opt-in, and incrementally update each package to use transactions. The PR updated several packages to give examples of what it takes to start using transactions. Follow the steps below to convert more packages."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"About running tests in code editor or IDE")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Before you start running tests in Goland or other editor, make sure to run ",(0,i.kt)("inlineCode",{parentName:"p"},"make\nserver_test_setup")," first."))),(0,i.kt)("h3",{id:"why-data-setup-has-to-be-repeated-within-each-subtest"},"Why data setup has to be repeated within each subtest"),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"pkg/testingsuite/pop_suite.go"),", we created our own ",(0,i.kt)("inlineCode",{parentName:"p"},"Run")," function that overrides the default testify ",(0,i.kt)("inlineCode",{parentName:"p"},"suite.Run")," to ensure that the test DB is torn down for per-transaction tests."),(0,i.kt)("p",null,"It would be nice if subtests could start a new transaction inside\nthe current connection so they could reuse db setup between\nsubtests. Unfortunately, because ",(0,i.kt)("inlineCode",{parentName:"p"},"database/sql")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pop")," do not\nsupport nested transactions, this gets complicated and hairy\nquickly. When testing that approach, connections wouldn't get\nclosed and cause other tests to hang or subtests would report\nincorrect errors about transactions already being closed."),(0,i.kt)("p",null,"And so, if per test transaction is enabled, each subtest gets a new\nconnection. This means subtests are really just like main tests,\nbut subtests are a helpful way to group tests together, which can\nbe useful. Therefore, shared setup has to be moved to a function that can be run once\nper subtest. In testing this approach, it was still faster with per test\ntransactions than the old way of cloning a DB per package."),(0,i.kt)("p",null,"In addition to the ",(0,i.kt)("inlineCode",{parentName:"p"},"suite.Run")," function, we also have ",(0,i.kt)("inlineCode",{parentName:"p"},"suite.RunWithRollback")," that could eliminate the need for calling the setup function within each subtest. This is the case if the code under test does not use transactions. If the code under test starts its own transaction, then ",(0,i.kt)("inlineCode",{parentName:"p"},"suite.Run")," should be used."),(0,i.kt)("h2",{id:"updatingadding-to-existing-tests-that-use-transactions"},"Updating/adding to existing tests that use transactions"),(0,i.kt)("p",null,"Make a note of how the tests are set up, and follow the existing patterns, such as using ",(0,i.kt)("inlineCode",{parentName:"p"},"suite.Run")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"suite.RunWithRollback"),", and calling the shared DB setup function within each new subtest you add, where applicable."),(0,i.kt)("p",null,"If you modify the code under test such that it now starts using transactions, and if the existing tests were using ",(0,i.kt)("inlineCode",{parentName:"p"},"suite.RunWithRollback"),", you'll need to update the tests to use ",(0,i.kt)("inlineCode",{parentName:"p"},"suite.Run"),"."))}d.isMDXComponent=!0},99548:function(e,t,n){t.Z=n.p+"assets/images/txn-delete-setuptest-a64e4ba084703ca6db4d8ca97a5077bc.jpg"},39812:function(e,t,n){t.Z=n.p+"assets/images/txn-truncate-all-096e1efc78e23e74291ff0cce3ebecb1.jpg"},41064:function(e,t,n){t.Z=n.p+"assets/images/txn-update-package-option-bb15d85e41767727ce1d4cac210b8699.png"}}]);