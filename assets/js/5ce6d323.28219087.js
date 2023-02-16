"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[3630],{91735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));n(8209);const i={sidebar_position:8},r="How data will be imported into production",s={unversionedId:"backend/guides/ghc/ghc-import-pricing-production",id:"backend/guides/ghc/ghc-import-pricing-production",title:"How data will be imported into production",description:"References to bad links.",source:"@site/docs/backend/guides/ghc/ghc-import-pricing-production.md",sourceDirName:"backend/guides/ghc",slug:"/backend/guides/ghc/ghc-import-pricing-production",permalink:"/mymove-docs/docs/backend/guides/ghc/ghc-import-pricing-production",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/guides/ghc/ghc-import-pricing-production.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"backendSidebar",previous:{title:"How to run the GHC Transit Time Import and Verify Data",permalink:"/mymove-docs/docs/backend/guides/ghc/ghc-transit-time-import"},next:{title:"How to Access a Global Application Variable",permalink:"/mymove-docs/docs/backend/guides/access-global-variables"}},l={},d=[{value:"Problem",id:"problem",level:2},{value:"Proposed Solution (Solution 1: Create a Secure Migration Script)",id:"proposed-solution-solution-1-create-a-secure-migration-script",level:2},{value:"Step 1:",id:"step-1",level:3},{value:"Step 2:",id:"step-2",level:3},{value:"Step 3:",id:"step-3",level:3},{value:"Solution 1 Pros and Cons",id:"solution-1-pros-and-cons",level:3},{value:"Other Options Considered",id:"other-options-considered",level:2},{value:"Solution 2: Set up an ECS AWS Scheduled Task",id:"solution-2-set-up-an-ecs-aws-scheduled-task",level:3},{value:"Solution 2 Pros and Cons",id:"solution-2-pros-and-cons",level:4},{value:"Reference",id:"reference",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-data-will-be-imported-into-production"},"How data will be imported into production"),(0,o.kt)("admonition",{title:"Fix broken links",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"References to bad links.")),(0,o.kt)("h2",{id:"problem"},"Problem"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dp3.atlassian.net/browse/MB-1287"},"JIRA MB-1287"),"\nWe currently have a way to parse and import pricing information for the local dev database, we now need a way to import\npricing information into the production environment."),(0,o.kt)("p",null,"While the ",(0,o.kt)("a",{parentName:"p",href:"https://dp3.atlassian.net/browse/MB-1287"},"story")," as written emphasizes Solution 1 as a preferred solution  to achieve a production import, team infra\nbrought up a second option and accompanying considerations that should be weighed. Solution 2 will require some\ncollaboration and knowledge sharing about AWS infrastructure."),(0,o.kt)("h2",{id:"proposed-solution-solution-1-create-a-secure-migration-script"},"Proposed Solution (Solution 1: Create a Secure Migration Script)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JIRA STORIES")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dp3.atlassian.net/browse/MB-2262"},"https://dp3.atlassian.net/browse/MB-2262")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dp3.atlassian.net/browse/MB-2300"},"https://dp3.atlassian.net/browse/MB-2300")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dp3.atlassian.net/browse/MB-2301"},"https://dp3.atlassian.net/browse/MB-2301"))),(0,o.kt)("p",null,"We\u2019ve decided to proceed with using the secure migration route to get data into production."),(0,o.kt)("p",null,"In addition, future stories are to be planned to plan on automating more of the process, and incorporating\nrecommendations around creating a ECS scheduled task as an alternative to running a secure migration:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Versioning the table: we need a way to roll back the tables, potentially tied to the contract code of the upload.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Write a design and research story to explore how we can version tables"),(0,o.kt)("li",{parentName:"ol"},"Write a story for implementing the solution above"))),(0,o.kt)("li",{parentName:"ol"},"Story to write and execute the scheduled task.")),(0,o.kt)("h3",{id:"step-1"},"Step 1:"),(0,o.kt)("p",null,"Create a Go script that runs a pg-dump and generates a secure migration"),(0,o.kt)("p",null,"Create a pg_dump from a script"),(0,o.kt)("p",null,"Include a command from within a script to dump the contents of the table for use\nin the migration. This would be written in Go rather than in psql. How this\nmight look can be found in the following examples ",(0,o.kt)("a",{parentName:"p",href:"https://play.golang.org/p/YxoXuET1XK"},"Go\nPlayground")," and ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/57089144/write-file-from-exec-command"},"StackOverflow\nExample")),(0,o.kt)("p",null,"As reference the pg_dump in the terminal looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pg_dump -h localhost -U postgres -W dev_db -t re_* --data-only -T re_services* --data-only > table_name_dump.pgsql\n")),(0,o.kt)("p",null,"It includes parameters to dump several tables (",(0,o.kt)("inlineCode",{parentName:"p"},"-t -T"),") , using a ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/app-psql.html#APP-PSQL-PATTERNS"},"postgres pattern"),"\npointing to all tables that start with \u2018re_\u2019 and then exclude \u2018re_services\u2019, our solution written in Go should include these patterns."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Pg_dump the golang way (include in the script)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'cmd := exec.Command(\n    "pg_dump",\n    \u201c-h\u201d+DbHost,\n    \u201c-U"+DbUserName,\n    DbName,\n)\n\n// Open the output file\noutfile, err := os.Create(DbName + ".gz")\nif err != nil {\n    log.Fatal(err)\n}\ndefer outfile.Close()\n\n// Send stdout to the outfile. cmd.Stdout will take any io.Writer.\ncmd.Stdout = outfile\n\n// Start the command\nIf err cmd.Start(); err != nil {\n    log.Fatal(err)\n}\n\nlog.Print(\u201cWaiting for command to finish\u2026\u201d)\n\n// Wait for the command to finish.\nIf err = cmd.Wait(); err != nil {\n    log.Fatal(err)\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Write script to generate a secure migration")),(0,o.kt)("p",null,"We\u2019re following the route that involves writing a script, and we can model it after the following lines in the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/107872f9f6e7739f6b5d5efe988357b8fbe67192/cmd/milmove/gen_certs_migration.go#L199-L217"},"cac-migration script"),".\nFrom within the script, we will prompt the user to upload the migration to s3 as explained in ",(0,o.kt)("a",{parentName:"p",href:"/mymove-docs/docs/backend/setup/database-migrations#creating-secure-migrations"},"step 8")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"log.Print(\u201cUpload the migration to S3 with:upload-secure-migration <production_migration_file>\u201d)\n")),(0,o.kt)("p",null,"The command gets defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"cmd/milmove/main.go")," and list it\nin ",(0,o.kt)("a",{parentName:"p",href:"/mymove-docs/docs/backend/setup/database-migrations#creating-migrations"},"Creating a Migration")),(0,o.kt)("h3",{id:"step-2"},"Step 2:"),(0,o.kt)("p",null,"Run the pricing parser and spot check results. Generate the migration for production."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Run Importer")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"rm bin/ghc-pricing-parser\nmake bin/ghc-pricing-parser\nmake db_dev_reset db_dev_migrate\nghc-pricing-parser --filename real_data_file_name.xlsx --contract-code TEST\n")),(0,o.kt)("p",null,"After running the importer, verify the data ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/6f36e1fc63689c9852d8c6852340b4e61f4be6cf/docs/data/ghc-pricing-import.md#verifying-the-data"},"https://github.com/transcom/mymove/blob/6f36e1fc63689c9852d8c6852340b4e61f4be6cf/docs/data/ghc-pricing-import.md#verifying-the-data")),(0,o.kt)("h3",{id:"step-3"},"Step 3:"),(0,o.kt)("p",null,"Run the script defined in step 1, first in Experimental then Production."),(0,o.kt)("h3",{id:"solution-1-pros-and-cons"},"Solution 1 Pros and Cons"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Pros:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Handling human error: Developers on A-Team expressed concerns around solutions that put off identifying and addressing human errors that occur from the initial data import. For example, in the past developers have been able to catch missing and duplicate rows in spreadsheets received from USTC. Solutions that don\u2019t put a human eye on the problem earlier in the process (i.e. during a local import) forego the opportunity to debug on the local level and push the problem solving to a more complicated space, production data."),(0,o.kt)("li",{parentName:"ul"},"The Presence of UUIDs is incredibly helpful: By running a secure migration, we can debug and resolve errors by targeting corrective migrations to the records that is the source of the problem. The most direct source of this information is the unique key: UUID that is visible to us locally. Because there is no visibility with production data, we wouldn\u2019t be able to leverage this."),(0,o.kt)("li",{parentName:"ul"},"These migrations potentially will run so infrequently (< 1x per year) maintaining this as a manual developer task would likely be the best route.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cons:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A possible source of push back is the history of large migrations, and the persistence of inflated tables that past migrations attached to our production builds. Under the HHG system, tables of 1.5 million records were being created and slowed down production builds several orders of magnitude."),(0,o.kt)("li",{parentName:"ul"},"Secure migrations are not free, while this data isn\u2019t as large as the 1.5 million records we imported in the past, It is still going to add to the download that slows production builds.")),(0,o.kt)("h2",{id:"other-options-considered"},"Other Options Considered"),(0,o.kt)("h3",{id:"solution-2-set-up-an-ecs-aws-scheduled-task"},"Solution 2: Set up an ECS AWS Scheduled Task"),(0,o.kt)("p",null,"Build an ECS scheduled task that grabs XLSX data from S3 buckets, parses and\nruns a pg-dump and loads it asynchronously into the DB. This should automate\nmany steps a developer would do by hand, and if designed well, can allow a\ndeveloper to spot check the results of the parser, run the task locally before\ndata makes it into the Production environment."),(0,o.kt)("admonition",{title:"Interested in creating an ECS task from scratch?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Read our Confluence documentation on ",(0,o.kt)("a",{parentName:"p",href:"https://dp3.atlassian.net/l/cp/merdf22s"},"How To Create a ECS Scheduled Task"),".")),(0,o.kt)("p",null,"A scheduled task runs daily, and turns off if there are no actions to take.\nWhen the data changes (in our case for example, a new ",(0,o.kt)("inlineCode",{parentName:"p"},"xlsx")," data set gets\nuploaded) then the scheduled task should run. Our task is to design a way that\nthis process maintains debugging transparency and automation."),(0,o.kt)("p",null,"Thoughts: it\u2019s supposedly not too difficult to automate some of the steps  and this path does allow for a human eye on the data before its moved into the production database"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"cmd/milmove-tasks")),": This directory should house two tasks that will 1. Run\nthe GHC pricing parser, and possibly output a text file that displays the\nresults of the import 2. A task to connect and import the data into the\ndatabase."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Makefile"),": where we\u2019ll point to the scheduled tasks created in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"cmd/milmove-tasks")," directory. Make sure the target is named similar to the\nscheduled task function you created."),(0,o.kt)("h4",{id:"solution-2-pros-and-cons"},"Solution 2 Pros and Cons"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Pros:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Best option for avoiding the creation of enormous migrations that have historically caused production builds to take 10+ minutes"),(0,o.kt)("li",{parentName:"ul"},"This option allows us to separate out some load so we aren\u2019t adding data that devs are downloading for production migrations.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cons:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We wont be able to use UUIDs to identify and target errors in the data import,\nsince UUIDs are not visible in production data, and they are regenerated for\nall environments (prod UUIDs are different from dev-local or staging)"),(0,o.kt)("li",{parentName:"ul"},"This solution will take extra work to be designed in a way that allows for\ntransparency around errors present in the ",(0,o.kt)("inlineCode",{parentName:"li"},"xlsx")," imports, errors in the parser,\nand anything that can cause a failed database import.")),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1QVwY5uobUpz87WEeAXSnIXG0NE1o4YnFW0Lf7PnMqO0/edit#"},"Original GDoc for this work"),". This was quickly copied and leaving this here to double-check, if needed.")))}u.isMDXComponent=!0}}]);