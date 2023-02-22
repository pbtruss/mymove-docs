"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[7384],{518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));n(95657);const r={},l="How to Create a Custom Go Linter",o={unversionedId:"backend/guides/how-to/create-a-custom-linter",id:"backend/guides/how-to/create-a-custom-linter",title:"How to Create a Custom Go Linter",description:"Creating custom GO linters can be a great way to analyze your",source:"@site/docs/backend/guides/how-to/create-a-custom-linter.md",sourceDirName:"backend/guides/how-to",slug:"/backend/guides/how-to/create-a-custom-linter",permalink:"/mymove-docs/docs/backend/guides/how-to/create-a-custom-linter",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/guides/how-to/create-a-custom-linter.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"How to Upgrade Go Version",permalink:"/mymove-docs/docs/backend/guides/how-to/upgrade-go-version"},next:{title:"How to Debug Go in VSCode",permalink:"/mymove-docs/docs/backend/guides/how-to/debug-go-with-vscode"}},s={},p=[{value:"Setting up your linter",id:"setting-up-your-linter",level:2},{value:"File structure",id:"file-structure",level:3},{value:"Analyzer:",id:"analyzer",level:3},{value:"Creating a linter",id:"creating-a-linter",level:3},{value:"Testing:",id:"testing",level:2},{value:"Writing linter tests",id:"writing-linter-tests",level:3},{value:"Utilizing test data",id:"utilizing-test-data",level:3},{value:"Testing the linter across files",id:"testing-the-linter-across-files",level:3},{value:"Running the linter in pre-commit",id:"running-the-linter-in-pre-commit",level:2},{value:"Additional Resources:",id:"additional-resources",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-create-a-custom-go-linter"},"How to Create a Custom Go Linter"),(0,i.kt)("p",null,"Creating custom GO linters can be a great way to analyze your\nproject's source code and alert you to bugs, errors,\nor other issues with your code."),(0,i.kt)("h2",{id:"setting-up-your-linter"},"Setting up your linter"),(0,i.kt)("h3",{id:"file-structure"},"File structure"),(0,i.kt)("p",null,"Start by setting up the files you'll need for your linter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-golang"},"-cmd\n    -example_linter_name\n        -main.go\n\n-pkg\n    -example_linter_name\n        -example_linter.go\n        -example_linter_test.go\n")),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd")," folder create a folder for your linter called ",(0,i.kt)("inlineCode",{parentName:"p"},"<example_linter_name>")," and add an empty file called ",(0,i.kt)("inlineCode",{parentName:"p"},"main.go")),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"pkg")," folder create another folder for your linter called ",(0,i.kt)("inlineCode",{parentName:"p"},"<example_linter_name>")," and in it you will\nplace your ",(0,i.kt)("inlineCode",{parentName:"p"},"example_linter.go")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"example_linter_test.go")),(0,i.kt)("h3",{id:"analyzer"},"Analyzer:"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd")," folder contains the analysis driver for your linter. The file ",(0,i.kt)("inlineCode",{parentName:"p"},"main.go")," will utilize a package called ",(0,i.kt)("inlineCode",{parentName:"p"},"singlechecker"),",\nwhich defines the main function for an analysis driver and provides a tool to run a standalone analysis."),(0,i.kt)("p",null,"The code in ",(0,i.kt)("inlineCode",{parentName:"p"},"main.go")," is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-golang"},'package main\n\nimport (\n    "golang.org/x/tools/go/analysis/singlechecker"\n\n    examplelinter "github.com/transcom/mymove/pkg/example-linter"\n)\n\nfunc main() { singlechecker.Main(examplelinter.LinterAnalyzer) }\n')),(0,i.kt)("h3",{id:"creating-a-linter"},"Creating a linter"),(0,i.kt)("p",null,"The linter will live in the ",(0,i.kt)("inlineCode",{parentName:"p"},"pkg")," folder, in a folder named after your linter.\nIn ",(0,i.kt)("inlineCode",{parentName:"p"},"example_linter.go")," you will store the linter analyzer that gets referenced in ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd/example_linter_name/main.go"),".\nIt will contain the name of the liner, documentation about the linter, a call to run the linter, and requirements:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-golang"},'var LinterAnalyzer = &analysis.Analyzer{\n    Name:     "linternamelint",\n    Doc:      "Make sure X object is properly used throughout codebase",\n    Run:      run,\n    Requires: []*analysis.Analyzer{inspect.Analyzer},\n}\n')),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"Run")," expects an interface and runs your linter code. This value can be the function that executes your linter. In this example, we are calling the function ",(0,i.kt)("inlineCode",{parentName:"p"},"run"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-golang"},"func run(pass *analysis.Pass) (interface{}, error) {\n    // Some code\n}\n")),(0,i.kt)("p",null,"The linter is analyzing an abstract syntax tree, AST, that represents code in a file.\nWhen your linter gets to a position in a file, where it catches an error, bug, or issue, it will flag this for the user.\nBecause the linter is analyzing an AST, your code must be able to search through a file and mark the position where the issue is caught.\nTo do this, you will mark the position in the file with a ",(0,i.kt)("inlineCode",{parentName:"p"},".Pos()")," method. Then the position of the object will be passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"pass.Reportf"),", where the linter message will be set as a second parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-golang"},'    if paramsIncludeYInStruct {\n        pass.Reportf(decl.Pos(), "Please use x.Something instead of y.Something.")\n    }\n')),(0,i.kt)("p",null,"There are great ",(0,i.kt)("a",{parentName:"p",href:"http://goast.yuroyoro.net/"},"online resources")," that you can use to visualize ASTs.\nWhile these are great to use to ",(0,i.kt)("a",{parentName:"p",href:"https://disaev.me/p/writing-useful-go-analysis-linter/"},"learn how to write code to search through an AST"),",\nthere may still be differences in what you see when working with your linter."),(0,i.kt)("h2",{id:"testing"},"Testing:"),(0,i.kt)("h3",{id:"writing-linter-tests"},"Writing linter tests"),(0,i.kt)("p",null,"Linter tests also do not look like your typical go tests. They function with want statements."),(0,i.kt)("p",null,"You will still create tests that test the happy and unhappy paths of your code. However, rather than your typical ",(0,i.kt)("inlineCode",{parentName:"p"},"expect"),"\nstatement, you will instead put a ",(0,i.kt)("inlineCode",{parentName:"p"},"want")," statement as a comment next to where you expect your linter to flag an issue:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-golang"},'package examplelinter\n\nimport (\n    "os"\n    "path/filepath"\n    "testing"\n\n    "golang.org/x/tools/go/analysis/analysistest"\n)\n\n// this test starts up Test runner and looks at tests in example_linter_tests and runs linter against those files\n// if there are no want statements, the linter moves on to the next statement\n// if there are no want statements and the test fails, our linter is failing because nothing is expected.\nfunc TestAll(t *testing.T) {\n    wd, err := os.Getwd()\n    if err != nil {\n        t.Errorf("Failed to get wd: %s", err)\n    }\n\n    testdata := filepath.Join(filepath.Dir(filepath.Dir(wd)), "testdata")\n\n    // Pass in the linter that we want to use, and location of linter tests:\n    analysistest.Run(t, testdata, LinterAnalyzer, "example_linter_tests/...")\n}\n')),(0,i.kt)("h3",{id:"utilizing-test-data"},"Utilizing test data"),(0,i.kt)("p",null,"Your linter's functionality may require you to use test data. In the mymove repo there is a folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"testdata")," for this purpose. You can utilize test data for\n",(0,i.kt)("inlineCode",{parentName:"p"},"App Context"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Handlers"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"Database"),", etc., or you can create your own test data folder, as was done with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Ato Linter"),". To create your own test data, create a folder in ",(0,i.kt)("inlineCode",{parentName:"p"},"testdata/src")," called ",(0,i.kt)("inlineCode",{parentName:"p"},"example_linter_tests"),".\nIn the new folder you created you can add files with data that you want your linter to run against or check:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-golang"},'package example_linter_tests\n\n// Test X is in the struct\ntype TestExampleStruct struct {\n    X         *x.Something // Look for the Something type\n    testString string\n}\n\n// TestHandler Test y is in struct and raise error if it is.\ntype TestExampleStructWithY struct { // want "Please remove y.Something from the struct if not in allowed places. See pkg/example_linter/example_linter.go for valid placements."\n    Y         *y.Something\n    testString string\n}\n\n// Test X is a parameter in a function\nfunc TestFuncWithPopConnection(x *x.Something) {}\n')),(0,i.kt)("p",null,"In the above example, there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"want")," statement that will trigger the linter to flag an unwanted object in the struct."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"testdata")," will then be passed into the ",(0,i.kt)("inlineCode",{parentName:"p"},"Run")," as a parameter as noted above\nin the sample linter test: ",(0,i.kt)("inlineCode",{parentName:"p"},'analysistest.Run(t, testdata, LinterAnalyzer,\n"example_linter_tests/...")')),(0,i.kt)("h3",{id:"testing-the-linter-across-files"},"Testing the linter across files"),(0,i.kt)("p",null,"To run your linter across files run this command in your terminal:\n",(0,i.kt)("inlineCode",{parentName:"p"},"go run ./cmd/example-linter/main.go -- ./...")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"-- ./...")," flag tells the linter to run against ",(0,i.kt)("strong",{parentName:"p"},"all")," files."),(0,i.kt)("p",null,"To run the linter tests only:\n",(0,i.kt)("inlineCode",{parentName:"p"},"go test ./pkg/example-linter/... -v")),(0,i.kt)("h2",{id:"running-the-linter-in-pre-commit"},"Running the linter in pre-commit"),(0,i.kt)("p",null,"Depending on the function of your linter, you may want to add it to precommit. You will do this by adding a new definition to precommit:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-golang"},"  - repo: local\n    hooks:\n      - id: example-linter\n        name: example-linter\n        entry: scripts/pre-commit-go-custom-linter example-linter\n        files: \\.go$\n        pass_filenames: false\n        language: script\n")),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"language")," key refers to a bash script, that is because we have had the most success with\ncreating a custom bash script (located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"script")," folder) for running all custom linters in precommit."),(0,i.kt)("p",null,"You can checkout this custom bash script at ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts/pre-commit-go-custom-linter"),"."),(0,i.kt)("h2",{id:"additional-resources"},"Additional Resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dp3.atlassian.net/wiki/spaces/~721089227/pages/1531150353/Debugging+custom+Golang+linters"},"Debugging custom Go linters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arslan.io/2019/06/13/using-go-analysis-to-write-a-custom-linter/"},"Using go/analysis to write a custom linter"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Provides more details on the GO/Analysis API"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pkg.go.dev/go/ast"},"AST documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/tree/d8d2b3862a28b344a1afdbb1a781d6529f04feb8/pkg/appcontext-linter"},"Custom AppContext Linter in mymove Repo"))))}d.isMDXComponent=!0}}]);