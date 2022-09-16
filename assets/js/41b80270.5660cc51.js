"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9008],{75587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));n(61839);const o={title:"0063 Using openapi CLI to compile API specs"},l="Using `openapi` CLI to compile API specs",s={unversionedId:"adrs/use-openapi-to-compile-api-specs",id:"adrs/use-openapi-to-compile-api-specs",title:"0063 Using openapi CLI to compile API specs",description:"Problem Statement",source:"@site/docs/adrs/0063-use-openapi-to-compile-api-specs.md",sourceDirName:"adrs",slug:"/adrs/use-openapi-to-compile-api-specs",permalink:"/mymove-docs/docs/adrs/use-openapi-to-compile-api-specs",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0063-use-openapi-to-compile-api-specs.md",tags:[],version:"current",sidebarPosition:63,frontMatter:{title:"0063 Using openapi CLI to compile API specs"},sidebar:"adrsSidebar",previous:{title:"0062 Run tests within transactions",permalink:"/mymove-docs/docs/adrs/run-tests-in-transactions"},next:{title:"0064 Use stateless services with context",permalink:"/mymove-docs/docs/adrs/use-stateless-services-with-context"}},r={},p=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Considered Solutions",id:"considered-solutions",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Chosen Alternative: <em>Use the <code>openapi</code> CLI tool to compile shared API definitions (Option 3)</em>",id:"chosen-alternative-use-the-openapi-cli-tool-to-compile-shared-api-definitions-option-3",level:3},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"Option 1: Use one YAML file for each API (status quo)",id:"option-1-use-one-yaml-file-for-each-api-status-quo",level:3},{value:"Option 2: Use split definitions without compiling into a new file",id:"option-2-use-split-definitions-without-compiling-into-a-new-file",level:3},{value:"Option 3: Use split definitions and compile them into a complete YAML spec",id:"option-3-use-split-definitions-and-compile-them-into-a-complete-yaml-spec",level:3},{value:"Option 4: Use split definitions and find a way to generate them into shared Go types",id:"option-4-use-split-definitions-and-find-a-way-to-generate-them-into-shared-go-types",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-openapi-cli-to-compile-api-specs"},"Using ",(0,a.kt)("inlineCode",{parentName:"h1"},"openapi")," CLI to compile API specs"),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"We have a specification-first development cycle for our APIs. This means that editing our API - adding endpoints,\nediting responses, changing functionality - starts in the YAML file that contains the API definition. From that, we use\n",(0,a.kt)("inlineCode",{parentName:"p"},"go-swagger")," to read our specification and generate Go types for use in our backend."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The good:")," With this model, we can focus on the API design without worrying about how to convert that into usable Go\ncode - ",(0,a.kt)("inlineCode",{parentName:"p"},"go-swagger")," does this for us. Code is neatly organized into separate packages for each API, so they can function\nindependently."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The problem:")," Our APIs are all concerned with the same data models, so even though they are ",(0,a.kt)("em",{parentName:"p"},"technically"),"\nindependent, they are highly related. We're defining the same objects over and over again in our YAML specs. All APIs\nhave a shipment, a move, an orders object, and the list goes on. When we make one change to these objects, we have to\nmake changes to each and every YAML file."),(0,a.kt)("p",null,"This means our YAML files quickly get out of sync. We've had to deal with bugs stemming from this disconnect many times.\nThis is also hugely redundant - there are hundreds of lines that are essentially identical in each API."),(0,a.kt)("p",null,"We have to do a lot of manual type conversions in the backend to turn the Swagger-generated Go types in our general\nmodel types. These type conversions are also redundant, and they're another place where we can miss changes that add or\nmodify fields. One possible negative is that having shared types between APIs would threaten their ability to function\nindependently. However, our APIs are extremely interconnected on the backend and use many of the same services, so there\nis a question of how independent they could possibly be regardless."),(0,a.kt)("p",null,"Lastly, we struggle with maintaining the same standards in each API. Some are more resistant to change, and we don't\nhave a good method for incrementally standardizing those APIs."),(0,a.kt)("h2",{id:"considered-solutions"},"Considered Solutions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Write our full API spec in one YAML file and use ",(0,a.kt)("inlineCode",{parentName:"p"},"go-swagger")," to generate types from that spec (status quo)."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"File structure:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"mymove/\n\u251c\u2500\u2500 swagger/\n\u2502   \u251c\u2500\u2500 prime.yaml\n\u2502   \u251c\u2500\u2500 support.yaml\n\u2502   \u251c\u2500\u2500 ...\n"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Break our spec up into separate files and share definitions between APIs. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"go-swagger")," to generate types from\nthe split files."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"File structure:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"mymove/\n\u251c\u2500\u2500 swagger/\n\u2502   \u251c\u2500\u2500 definitions/\n\u2502   \u2502   \u251c\u2500\u2500 move.yaml\n\u2502   \u2502   \u251c\u2500\u2500 shipment.yaml\n\u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u251c\u2500\u2500 prime.yaml   <- includes references to move.yaml, shipment.yaml\n\u2502   \u251c\u2500\u2500 support.yaml <- includes the same references\n\u2502   \u251c\u2500\u2500 ...\n"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Break our spec up into separate files and share definitions between APIs. Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"openapi")," CLI tool to compile the\nseparate files into one complete YAML file and use ",(0,a.kt)("inlineCode",{parentName:"p"},"go-swagger")," to generate types from the compiled files."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"File structure:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"mymove/\n\u251c\u2500\u2500 swagger/\n\u2502   \u251c\u2500\u2500 prime.yaml   <- these are generated files, will not be edited\n\u2502   \u251c\u2500\u2500 support.yaml\n\u2502   \u251c\u2500\u2500 ...\n\u251c\u2500\u2500 swagger-def/\n\u2502   \u251c\u2500\u2500 definitions/\n\u2502   \u2502   \u251c\u2500\u2500 Move.yaml\n\u2502   \u2502   \u251c\u2500\u2500 Shipment.yaml\n\u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u251c\u2500\u2500 prime.yaml   <- includes references to Move.yaml, Shipment.yaml\n\u2502   \u251c\u2500\u2500 support.yaml <- includes the same references\n\u2502   \u251c\u2500\u2500 ...\n"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Break up and share definitions in a way that prompts ",(0,a.kt)("inlineCode",{parentName:"p"},"go-swagger")," to share types between APIs."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"I did not find a method that would actually work for this.")))),(0,a.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,a.kt)("h3",{id:"chosen-alternative-use-the-openapi-cli-tool-to-compile-shared-api-definitions-option-3"},"Chosen Alternative: ",(0,a.kt)("em",{parentName:"h3"},"Use the ",(0,a.kt)("inlineCode",{parentName:"em"},"openapi")," CLI tool to compile shared API definitions (Option 3)")),(0,a.kt)("p",null,"This looks like the most complicated solution by far. And for the initial implementation, it is. We have already\nintroduced the ",(0,a.kt)("inlineCode",{parentName:"p"},"openapi")," tool to the project so that we can preview our API documentation, but now we will be dependent\non it for our development process. We will also have to work in a new folder, so all of our engineers will have to\nacclimate to the development cycle."),(0,a.kt)("p",null,"However, the benefits are significant. The ",(0,a.kt)("inlineCode",{parentName:"p"},"openapi")," compiler dictates a structure that is organized and fairly\nintuitive, making it easy to create, find, and reference separate definition files. Like option 2, edits to one file can\napply to all of our APIs. Furthermore, the compiler can handle our files as-is, so we can gradually split our\ndefinitions as we move forward."),(0,a.kt)("p",null,"Unlike option 2, this method won't change the outward behavior of our APIs. External tools like Load Testing, and\neventually the Prime integration, won't need to change the way they consume our content. This was ultimately the\ndeciding factor because, even though this option ",(0,a.kt)("em",{parentName:"p"},"looks")," more complicated, the overall impact of the switch will be\nminimal. Load Testing was also completely non-functional with option 2, and I have not yet figured out how to make it\nwork."),(0,a.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,a.kt)("h3",{id:"option-1-use-one-yaml-file-for-each-api-status-quo"},"Option 1: Use one YAML file for each API (status quo)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Same development cycle"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," All the information is in one place"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Each YAML file is thousands of lines long"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Difficult to keep our definitions in sync"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Difficult to apply and maintain standards")),(0,a.kt)("h3",{id:"option-2-use-split-definitions-without-compiling-into-a-new-file"},"Option 2: Use split definitions without compiling into a new file"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Same development cycle - no need to update how we generate code and we'll be working in the same folder"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," We can structure our sub-folders however we want to"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Third-party tools won't be able to use our APIs the same way. Integrations will\nbe challenging."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Load testing, as it's currently set up, will no longer work"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," No defined structure, so we could implement something non-standard or suboptimal"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," If you're not careful, the Go types it generates can be strangely different")),(0,a.kt)("h3",{id:"option-3-use-split-definitions-and-compile-them-into-a-complete-yaml-spec"},"Option 3: Use split definitions and compile them into a complete YAML spec"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," With a compiled API spec, third-party tools won't have to change how they integrate with us"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," The way ",(0,a.kt)("inlineCode",{parentName:"li"},"go-swagger")," generates code will be the same, so our Go types won't change"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Well-defined structure for the shared files so it's easy to navigate"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Makes use of a tool we were already using for documentation purposes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," New development cycle - different folder, new build process"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Looks complicated at first and requires more folders and files"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," We'll be relying on a third-party tool to compile our APIs")),(0,a.kt)("h3",{id:"option-4-use-split-definitions-and-find-a-way-to-generate-them-into-shared-go-types"},"Option 4: Use split definitions and find a way to generate them into shared Go types"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Shared Go types could make things easier for us on the backend"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Changing types would require us to update a huge number of files in our backend packages"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Purely hypothetical - I couldn't figure out how to actually do this")))}m.isMDXComponent=!0}}]);