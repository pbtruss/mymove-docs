"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[6674],{3451:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var o=a(87462),i=(a(67294),a(3905));a(8209);const n={title:"0030 IAM Authentication for Database",description:"Decision outcome: External IAM Authentication Provider\n"},r="IAM Authentication for Database",s={unversionedId:"adrs/rds-iam",id:"adrs/rds-iam",title:"0030 IAM Authentication for Database",description:"Decision outcome: External IAM Authentication Provider\n",source:"@site/docs/adrs/0030-rds-iam.md",sourceDirName:"adrs",slug:"/adrs/rds-iam",permalink:"/mymove-docs/docs/adrs/rds-iam",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0030-rds-iam.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"0030 IAM Authentication for Database",description:"Decision outcome: External IAM Authentication Provider\n"},sidebar:"adrsSidebar",previous:{title:"0029 Honeycomb Integration",permalink:"/mymove-docs/docs/adrs/honeycomb-integration"},next:{title:"0031 CSS Tooling",permalink:"/mymove-docs/docs/adrs/css-tooling"}},l={},p=[{value:"Context and Problem Statement",id:"context-and-problem-statement",level:2},{value:"Decision Drivers",id:"decision-drivers",level:2},{value:"Considered Options",id:"considered-options",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Options",id:"pros-and-cons-of-the-options",level:2},{value:"Internal PostgreSQL Authentication Provider",id:"internal-postgresql-authentication-provider",level:3},{value:"External IAM Authentication Provider",id:"external-iam-authentication-provider",level:3}],d={toc:p};function m(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,o.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"iam-authentication-for-database"},"IAM Authentication for Database"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Status: accepted"),(0,i.kt)("li",{parentName:"ul"},"Deciders: @dynamike, @pjdufour-truss"),(0,i.kt)("li",{parentName:"ul"},"Date: 2018-10-15")),(0,i.kt)("h2",{id:"context-and-problem-statement"},"Context and Problem Statement"),(0,i.kt)("p",null,"Rotating passwords to the MyMove database is a multi-step process that requires synchronizing changes among application servers and migrations.  AWS now provides an easy solution to outsource authentication for an RDS database to ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/iam/"},"AWS Identity and Access Management")," (IAM)."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/about-aws/whats-new/2018/09/amazon-rds-postgresql-now-supports-iam-authentication/"},"https://aws.amazon.com/about-aws/whats-new/2018/09/amazon-rds-postgresql-now-supports-iam-authentication/")),(0,i.kt)("p",null,"The default PostgreSQL authentication method is to use ",(0,i.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/10/static/auth-methods.html"},"password authentication"),".  A hash of the password is stored internally within the database.  There are other external authentication methods that support connecting from the same host machine or require running additional infrastructure, e.g., an LDAP service.  However, none of those methods are worth the operational burden for managing authentication for a single application or help with the credential rotation problem."),(0,i.kt)("p",null,"IAM is the access manager for many AWS services and has a standardized API for the AWS CLI (",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/cli/"},"https://aws.amazon.com/cli/"),"), Terraform (",(0,i.kt)("a",{parentName:"p",href:"https://www.terraform.io/"},"https://www.terraform.io/"),"), and Go SDK (",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/sdk-for-go/api/service/iam/"},"https://docs.aws.amazon.com/sdk-for-go/api/service/iam/"),").  Should we switch to using IAM?"),(0,i.kt)("h2",{id:"decision-drivers"},"Decision Drivers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Easy to rotate passwords or access keys"),(0,i.kt)("li",{parentName:"ul"},"Maximize Dev-prod parity"),(0,i.kt)("li",{parentName:"ul"},"Strong passwords / access keys"),(0,i.kt)("li",{parentName:"ul"},"Works with ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/jmoiron/sqlx"},"sqlx"),", our database driver for PostgreSQL"),(0,i.kt)("li",{parentName:"ul"},"Works with ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gobuffalo/pop"},"Pop"),", our ORM-like framework for interacting with our PostgreSQL database"),(0,i.kt)("li",{parentName:"ul"},"Works within our migrations workflow.")),(0,i.kt)("h2",{id:"considered-options"},"Considered Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Internal PostgreSQL Authentication Provider"),(0,i.kt)("li",{parentName:"ul"},"External IAM Authentication Provider")),(0,i.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,i.kt)("p",null,'Chosen option: "External IAM Authentication Provider".'),(0,i.kt)("h2",{id:"pros-and-cons-of-the-options"},"Pros and Cons of the Options"),(0,i.kt)("h3",{id:"internal-postgresql-authentication-provider"},"Internal PostgreSQL Authentication Provider"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Credential rotation is complex."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Same authentication method for development and production."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Strong passwords are supported and the responsibility of the infrastructure team.  PostgreSQL supports password lengths up to ",(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/19499058/pgsql-character-limitations"},"at most 100 bytes"),".  Only a hash of the database password is stored.  PostgreSQL stores password hashes using MD5 by default, but also now supports the more secure ",(0,i.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/11/static/auth-password.html"},"scram-sha-256"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Our database driver ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/jmoiron/sqlx"},"sqlx")," supports internal passwords out of the box."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+/-")," Our database framework Pop (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gobuffalo/pop"},"https://github.com/gobuffalo/pop"),") loads passwords from configuration files (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gobuffalo/pop#example-configuration-file"},"https://github.com/gobuffalo/pop#example-configuration-file"),").  This is not a great pattern and can be refractored using ",(0,i.kt)("a",{parentName:"li",href:"https://godoc.org/github.com/spf13/viper"},"Viper")," in the future, but it does currently work."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," As part of a migration, we can change passwords using the ",(0,i.kt)("inlineCode",{parentName:"li"},"ALTER ROLE")," SQL command (",(0,i.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/10/static/sql-alterrole.html"},"https://www.postgresql.org/docs/10/static/sql-alterrole.html"),").")),(0,i.kt)("h3",{id:"external-iam-authentication-provider"},"External IAM Authentication Provider"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Credential rotation is handled by AWS.  Using the ",(0,i.kt)("a",{parentName:"li",href:"https://forums.aws.amazon.com/thread.jspa?threadID=284417"},"Task Role")," without any use of static passwords, we can automatically retrieve a valid set of credentials, which are then used to generate an auth token to connect to the database, e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},'authToken, err := rdsutils.BuildAuthToken(host, region, cfg.User, stscreds.NewCredentials(sess, "arn:aws:iam::[AWS ID]:role/SomeRole"))')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Different authentication method for development and production."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Following of the ",(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/compliance/shared-responsibility-model/"},"Shared Responsibility Model"),", the AWS IAM service is responsible for generating strong access keys, with the specific hashing algorithm internal to AWS."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," rdsutils (",(0,i.kt)("inlineCode",{parentName:"li"},"github.com/aws/aws-sdk-go/service/rds/rdsutils"),") provides the ability to generate ephemeral authentication tokens to connect to AWS RDS using IAM (",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/sdk-for-go/api/service/rds/rdsutils/"},"https://docs.aws.amazon.com/sdk-for-go/api/service/rds/rdsutils/"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+/-")," Our database framework Pop (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gobuffalo/pop"},"https://github.com/gobuffalo/pop"),") may support IAM authentication by providing the connection string including the ephemeral access token as a URL string in ",(0,i.kt)("a",{parentName:"li",href:"https://godoc.org/github.com/gobuffalo/pop#ConnectionDetails"},"ConnectionDetails")," to ",(0,i.kt)("a",{parentName:"li",href:"https://godoc.org/github.com/gobuffalo/pop#NewConnection"},"NewConnection"),".  Hard to know if this will work out of the box without a proof of concept."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," As part of a migration, we can enable/disable RDS authentication for a given web application role using ",(0,i.kt)("inlineCode",{parentName:"li"},"GRANT rds_iam TO user_xyz;"),".")))}m.isMDXComponent=!0}}]);