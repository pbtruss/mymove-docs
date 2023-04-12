"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9021],{77799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(87462),i=(n(67294),n(3905));n(95657);const r={title:"0021 Temporary use and plan for expunging Social Security Numbers in the prototype",description:"Using SSNs temporarily"},s="Temporary use and plan for expunging Social Security Numbers in the prototype",o={unversionedId:"adrs/ssn-use",id:"adrs/ssn-use",title:"0021 Temporary use and plan for expunging Social Security Numbers in the prototype",description:"Using SSNs temporarily",source:"@site/docs/adrs/0021-ssn-use.md",sourceDirName:"adrs",slug:"/adrs/ssn-use",permalink:"/mymove-docs/docs/adrs/ssn-use",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0021-ssn-use.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"0021 Temporary use and plan for expunging Social Security Numbers in the prototype",description:"Using SSNs temporarily"},sidebar:"adrsSidebar",previous:{title:"0020 Using Swagger to manage server route authentication",permalink:"/mymove-docs/docs/adrs/swagger-auth"},next:{title:"0022 Chose Excelize package to parse XLSX files",permalink:"/mymove-docs/docs/adrs/xlsx-lib"}},l={},m=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"<em>Generating a unique move ID</em>",id:"generating-a-unique-move-id",level:3},{value:"<em>Relying on EDIPI</em>",id:"relying-on-edipi",level:3},{value:"<em>Using SSNs temporarily</em>",id:"using-ssns-temporarily",level:3},{value:"<em>Using SSNs permanently</em>",id:"using-ssns-permanently",level:3}],p={toc:m},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"temporary-use-and-plan-for-expunging-social-security-numbers-in-the-prototype"},"Temporary use and plan for expunging Social Security Numbers in the prototype"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"User Stories:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Service members can access moving services without having their identity at risk of being stolen."),(0,i.kt)("li",{parentName:"ul"},"Counselor can locate a specific move record quickly."),(0,i.kt)("li",{parentName:"ul"},"Finance can link an account, a move, and a service member to each other.")),(0,i.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generating a unique move ID"),(0,i.kt)("li",{parentName:"ul"},"Relying on EDIPI"),(0,i.kt)("li",{parentName:"ul"},"Using SSNs temporarily"),(0,i.kt)("li",{parentName:"ul"},"Using SSNs permanently")),(0,i.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,i.kt)("p",null,"Chosen Alternative: ",(0,i.kt)("em",{parentName:"p"},"Using SSNs temporarily")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Will use EDIPIs wherever possible"),(0,i.kt)("li",{parentName:"ul"},"Will use SSNs where not possible so Finance can still have access to the information they need to do their work"),(0,i.kt)("li",{parentName:"ul"},"Once EDIPIs are present in Orders across all branches, we would like to switch to this method and delete all SSNs from our infrastructure."),(0,i.kt)("li",{parentName:"ul"},"SSN is not to be used as a key field for any data object so it can be masked and ultimately purged without breaking anything")),(0,i.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,i.kt)("h3",{id:"generating-a-unique-move-id"},(0,i.kt)("em",{parentName:"h3"},"Generating a unique move ID")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," ",(0,i.kt)("em",{parentName:"li"},"Diminishes attack surface for identity theft (pro)")," : not using SSNs prevents movers from seeing the number, as well as lessening the impact if the database ever experiences a breach."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," ",(0,i.kt)("em",{parentName:"li"},"Easily referenced by all stakeholders (pro)")," : just like airline codes!"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," ",(0,i.kt)("em",{parentName:"li"},"Creates a number which needs to be referenced by additional government databases (con)")," : we would need to link to government databases (specifically, to Orders and Accounting), and integration is hard + time consuming.")),(0,i.kt)("h3",{id:"relying-on-edipi"},(0,i.kt)("em",{parentName:"h3"},"Relying on EDIPI")),(0,i.kt)("p",null,"Linking EDIPI and SSN to each other through a different gov database"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," ",(0,i.kt)("em",{parentName:"li"},"Diminishes attack surface for identity theft (pro)")," : not using SSNs prevents movers from seeing the number, as well as lessening the impact if the database ever experiences a breach."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," ",(0,i.kt)("em",{parentName:"li"},"EDIPIs are already present in most DOD databases (pro)")," : easy to reference and cross-reference, including with finance, so long as the service member has a DODID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," ",(0,i.kt)("em",{parentName:"li"},"EDIPIs are not printed on every branch's orders (con)")," : we cannot consistently use them across the branches of service as of yet, as they do not appear on all orders.")),(0,i.kt)("h3",{id:"using-ssns-temporarily"},(0,i.kt)("em",{parentName:"h3"},"Using SSNs temporarily")),(0,i.kt)("p",null,"Use EDIPIs where possible and as rolled out, but use SSNs where they don't appear."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," ",(0,i.kt)("em",{parentName:"li"},"Diminishes attack surface for identity theft (pro)")," : not using SSNs when possible prevents all movers from seeing the number, as well as lessening the impact if the database ever experiences a breach."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," ",(0,i.kt)("em",{parentName:"li"},"Still allows some attack surface for identity theft (con)")," : some service members will still be at risk"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," ",(0,i.kt)("em",{parentName:"li"},"EDIPIs are already present in most DOD databases (pro)")," : easy to reference and cross-reference, including with finance, so long as the service member has a DODID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," ",(0,i.kt)("em",{parentName:"li"},"Finance can access accounts of members who do not have a EDIPI associated with their orders (pro)")," : and not everyone has a DODID on their Orders.")),(0,i.kt)("h3",{id:"using-ssns-permanently"},(0,i.kt)("em",{parentName:"h3"},"Using SSNs permanently")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," ",(0,i.kt)("em",{parentName:"li"},"fails to diminish attack surface for identity theft of the member (con)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," ",(0,i.kt)("em",{parentName:"li"},"finance is able to look up each service member's account (pro)"))))}d.isMDXComponent=!0}}]);