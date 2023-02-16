"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9263],{97649:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>r});var n=o(87462),s=(o(67294),o(3905));o(8209);const i={title:"0038 Use Soft Delete Instead of Hard Delete",description:"Decision outcome: Introduce soft deletion into the system\n"},l="Use Soft Delete Instead of Hard Delete",a={unversionedId:"adrs/soft-delete",id:"adrs/soft-delete",title:"0038 Use Soft Delete Instead of Hard Delete",description:"Decision outcome: Introduce soft deletion into the system\n",source:"@site/docs/adrs/0038-soft-delete.md",sourceDirName:"adrs",slug:"/adrs/soft-delete",permalink:"/mymove-docs/docs/adrs/soft-delete",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0038-soft-delete.md",tags:[],version:"current",sidebarPosition:38,frontMatter:{title:"0038 Use Soft Delete Instead of Hard Delete",description:"Decision outcome: Introduce soft deletion into the system\n"},sidebar:"adrsSidebar",previous:{title:"0037 Put mymove outside of standard GOPATH",permalink:"/mymove-docs/docs/adrs/go-path-and-project-layout-revisited"},next:{title:"0039 Use React Lazy for code splitting",permalink:"/mymove-docs/docs/adrs/react-lazy-and-code-splitting"}},d={},r=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"Leave everything as is. Allow the system to continue hard deleting records",id:"leave-everything-as-is-allow-the-system-to-continue-hard-deleting-records",level:3},{value:"Introduce soft deletion into the system",id:"introduce-soft-deletion-into-the-system",level:3},{value:"Reference",id:"reference",level:2}],c={toc:r};function m(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"use-soft-delete-instead-of-hard-delete"},"Use Soft Delete Instead of Hard Delete"),(0,s.kt)("p",null,"Due to our contractual obligations with the federal government, we must be able to access deleted data even several years after it\u2019s been used in the system."),(0,s.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Leave everything as is. Allow the system to continue hard deleting records."),(0,s.kt)("li",{parentName:"ul"},"Introduce soft deletion into the system.")),(0,s.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Chosen Alternative: ",(0,s.kt)("strong",{parentName:"li"},"Introduce soft deletion into the system."))),(0,s.kt)("p",null,"This option allows the system to continue treating records as 'deleted' while maintaining the records. This will allow us to serve 'deleted' records when audited or other obligations demand so. Soft delete functionality has not yet been implemented throughout the entire codebase but it is expected to be the sole deletion method moving forward."),(0,s.kt)("p",null,"Please note that soft delete is to be treated like a hard delete in the regard that the process should never be reversed or that data can be 'un-deleted'."),(0,s.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,s.kt)("h3",{id:"leave-everything-as-is-allow-the-system-to-continue-hard-deleting-records"},"Leave everything as is. Allow the system to continue hard deleting records"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"+")," No changes needed to be done."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-")," Risk legal exposure."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-")," Fail to comply with contractual obligations with government.")),(0,s.kt)("h3",{id:"introduce-soft-deletion-into-the-system"},"Introduce soft deletion into the system"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"+")," Complies with contractual obligations to the government."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"+")," In possession of records when asked for."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-")," Implementing soft delete will be a long, involved process."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-")," Database will have to deal with holding both active and 'deleted' records.")),(0,s.kt)("h2",{id:"reference"},"Reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://transcom.github.io/mymove-docs/docs/backend/guides/how-to/soft-delete/"},"Documentation")," on how to implement soft deletion")))}m.isMDXComponent=!0}}]);