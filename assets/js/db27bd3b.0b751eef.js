"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[8707],{68134:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));a(61839);const i={sidebar_position:4},s="Database Guides",r={unversionedId:"backend/guides/database",id:"backend/guides/database",title:"Database Guides",description:"Below are some helpful links that are a holdover from the GitHub Wiki",source:"@site/docs/backend/guides/database.md",sourceDirName:"backend/guides",slug:"/backend/guides/database",permalink:"/mymove-docs/docs/backend/guides/database",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/guides/database.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"backendSidebar",previous:{title:"Adding ShipmentLineItem records to the 400ng table (tariff400ng_items)",permalink:"/mymove-docs/docs/backend/guides/tariff400ng_items-update-data"},next:{title:"Feature flags in the app",permalink:"/mymove-docs/docs/backend/guides/feature-flags-in-the-app"}},l={},d=[{value:"Pop SQL logging on by default in development",id:"pop-sql-logging-on-by-default-in-development",level:2},{value:"Some problems to look out for with SQL logging on",id:"some-problems-to-look-out-for-with-sql-logging-on",level:3},{value:"Excessive Queries (e.g. n+1 Problem)",id:"excessive-queries-eg-n1-problem",level:4},{value:"Excessive Joins (e.g. open-ended <em>Eager</em> call)",id:"excessive-joins-eg-open-ended-eager-call",level:4},{value:"Using RDS IAM for database authentication",id:"using-rds-iam-for-database-authentication",level:2},{value:"Locally connecting to RDS using IAM authentication",id:"locally-connecting-to-rds-using-iam-authentication",level:3},{value:"ECS Task connecting to RDS using IAM authentication",id:"ecs-task-connecting-to-rds-using-iam-authentication",level:3},{value:"Reverting Task to use password authentication",id:"reverting-task-to-use-password-authentication",level:3}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"database-guides"},"Database Guides"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Table of contents")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Below are some helpful links that are a holdover from the GitHub Wiki\ndocumentation file structure. This may not be relevant since the shift to using\nDocusaurus and may change in the future."),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/backend/setup/backup-and-restore-dev-database"},"How to backup and restore the development database")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/backend/setup/database-migrations"},"How to migrate the database")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/backend/guides/how-to/soft-delete"},"How to soft delete")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/backend/setup/using-eagerpreload-in-pop"},"Using EagerPreload in Pop")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/mymove-docs/docs/backend/testing/interacting-with-the-db-in-go-server-tests"},"How database cleanup works in Go server tests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/mymove-docs/docs/backend/testing/understanding-testdatagen-functions"},"Understanding ",(0,o.kt)("inlineCode",{parentName:"a"},"Testdatagen")," functions"))))),(0,o.kt)("h2",{id:"pop-sql-logging-on-by-default-in-development"},"Pop SQL logging on by default in development"),(0,o.kt)("p",null,"Pop is an ORM which helps ease communication with the database by providing database API abstraction code. However, this can obscure the actual SQL that is being executed without a in-depth knowledge of the ORM. By enabling SQL logging in development a developer can see the queries being executed by Pop as they happen to hopefully help developers to catch issues in the setup of database calls with Pop."),(0,o.kt)("p",null,"If you want to turn this off ",(0,o.kt)("em",{parentName:"p"},"temporarily"),", just prefix your command with ",(0,o.kt)("inlineCode",{parentName:"p"},"DB_DEBUG=0")," for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"DB_DEBUG=0 make server_run\n")),(0,o.kt)("p",null,"If you need to turn this off ",(0,o.kt)("em",{parentName:"p"},"permanently")," on your local instance add the following to the ",(0,o.kt)("inlineCode",{parentName:"p"},".envrc.local")," file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export DB_DEBUG=0\n")),(0,o.kt)("h3",{id:"some-problems-to-look-out-for-with-sql-logging-on"},"Some problems to look out for with SQL logging on"),(0,o.kt)("h4",{id:"excessive-queries-eg-n1-problem"},"Excessive Queries (e.g. n+1 Problem)"),(0,o.kt)("p",null,"When looking up objects that have a one-to-many relationship, ORMs such as Pop can fire off n+1 queries to the database to do the look up for n number of child objects + 1 for the original parent object. Depending on the size of n this will cause performance issues loading such lists of objects that have many children. To help prevent this in Pop, developers should avoid using unbounded ",(0,o.kt)("inlineCode",{parentName:"p"},"Eager()")," calls and try and only fetch children when that data is needed. For more through description of the issue please read the following references."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/97197/what-is-the-n1-selects-problem-in-orm-object-relational-mapping"},'What is the "N+1 selects problem" in Object-Relational Mapping?')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@bretdoucette/n-1-queries-and-how-to-avoid-them-a12f02345be5"},"N+1 Queries and How to Avoid Them!")," -- This uses examples from Ruby on Rails but the concept is the same")),(0,o.kt)("p",null,"With our new version of Pop, there is a feature called EagerPreload that helps us mitigate the N+1 problem."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/backend/setup/using-eagerpreload-in-pop"},"Read this article")," to know how to use it properly."),(0,o.kt)("h4",{id:"excessive-joins-eg-open-ended-eager-call"},"Excessive Joins (e.g. open-ended ",(0,o.kt)("em",{parentName:"h4"},"Eager")," call)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.xaprb.com/blog/2009/04/08/the-dangerous-subtleties-of-left-join-and-count-in-sql/"},"The Dangerous Subtleties of LEFT JOIN and COUNT() in SQL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://alexpetralia.com/posts/2017/7/19/more-dangerous-subtleties-of-joins-in-sql"},"More Dangerous Subtleties of JOINs in SQL"))),(0,o.kt)("h2",{id:"using-rds-iam-for-database-authentication"},"Using RDS IAM for database authentication"),(0,o.kt)("p",null,"RDS IAM authentication is the method of connecting to the database using IAM as the authentication mechanism as opposed to a conventional username and password. More information can be found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html"},"here"),"."),(0,o.kt)("h3",{id:"locally-connecting-to-rds-using-iam-authentication"},"Locally connecting to RDS using IAM authentication"),(0,o.kt)("p",null,"An RDS instance must be configured with IAM authentication before connecting. All RDS in the MilMove environment has this enabled. If wishing to connect to a RDS instance first prepare the infrastructure to allow this with this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transcom/transcom-infrasec-com/blob/master/docs/runbook/0009-accessing-the-db-with-iam.md"},"guide"),". Once complete locally milmove server can be ran with the following"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/path/to/milmove serve --db-iam --db-iam-role arn:aws:iam::AWSACCOUNT:role/CONNECTROLE  --db-region us-east-2 --db-host RDSURL  --db-ssl-mode verify-full --db-ssl-root-cert bin/rds-ca-2019-root.pem  --db-user db_user\n")),(0,o.kt)("h3",{id:"ecs-task-connecting-to-rds-using-iam-authentication"},"ECS Task connecting to RDS using IAM authentication"),(0,o.kt)("p",null,"ECS tasks such use RDS IAM authentication to securely connect without a username or passwords to rotate. This is accomplished by ECS assigning a role to the container that is allowed to connect to a specific database via IAM."),(0,o.kt)("p",null,"The MilMove server through the use of environment variables will use reach out\nto IAM to generate a temporary connection token, almost similar to a password.\nThis token/password is valid for only 15 minutes. To enable IAM authentication\nensure these environment variables are present for ",(0,o.kt)("inlineCode",{parentName:"p"},"app"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"app-client-tls"),", and\n",(0,o.kt)("inlineCode",{parentName:"p"},"migration")," containers. Here is a snippet of the required environment\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/6426a37eaf0219323aef997deed5a43e0e1a824b/config/app.container-definition.json#L32-L39"},"variables"),"\nfor the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/config/app.container-definition.json"},(0,o.kt)("inlineCode",{parentName:"a"},"app.container-definition.json")),"\nthat is deployed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "DB_IAM",\n  "value": "{{ .DB_IAM }}"\n},\n{\n  "name": "DB_IAM_ROLE",\n  "value": "{{ .DB_IAM_ROLE }}"\n},\n{\n  "name": "DB_REGION",\n  "value": "us-west-2"\n},\n{\n  "name": "DB_USER",\n  "value": "{{ .DB_USER }}"\n},\n')),(0,o.kt)("p",null,"Update the related environment configuration to match. Note that the database user is normally different than ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," as additional configuration is needed to allow a database user to login via IAM. MilMove convention for IAM enabled user is ",(0,o.kt)("inlineCode",{parentName:"p"},"ecs_user"),". Below is a snippet of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/config/env/experimental.env"},"experimental environment config"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"DB_USER=ecs_user\nDB_IAM=true\nDB_IAM_ROLE=YOUR_CONTAINER_ROLE_ARN_HERE\n")),(0,o.kt)("h3",{id:"reverting-task-to-use-password-authentication"},"Reverting Task to use password authentication"),(0,o.kt)("p",null,"In the event of a IAM failure it may be desired to revert back to conventional username and password authentication."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get password from Infra from the admin vault in DP3 1Password.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the Parameter store with the new password")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chamber write app-YOURENV db_password NEW_PASSWORD\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the environment configuration files to disable IAM authentication. Keep in mind the database ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," will need to be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"master"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"DB_USER=master\nDB_IAM=false\n")))))}c.isMDXComponent=!0}}]);