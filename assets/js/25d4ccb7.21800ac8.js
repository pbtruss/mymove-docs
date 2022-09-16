"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[3215],{44225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var s=n(87462),a=(n(67294),n(3905));n(61839);const r={sidebar_position:4},o="GHC Invoicing Sequence Text",i={unversionedId:"backend/guides/ghc/ghc-invoicing-sequence-text",id:"backend/guides/ghc/ghc-invoicing-sequence-text",title:"GHC Invoicing Sequence Text",description:"The text used to generate the GHC Invoice Overview Sequence diagram is here.",source:"@site/docs/backend/guides/ghc/ghc-invoicing-sequence-text.md",sourceDirName:"backend/guides/ghc",slug:"/backend/guides/ghc/ghc-invoicing-sequence-text",permalink:"/mymove-docs/docs/backend/guides/ghc/ghc-invoicing-sequence-text",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/guides/ghc/ghc-invoicing-sequence-text.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"backendSidebar",previous:{title:"GHC Invoicing Packages",permalink:"/mymove-docs/docs/backend/guides/ghc/ghc-invoicing-packages"},next:{title:"GHC Pricing Parser",permalink:"/mymove-docs/docs/backend/guides/ghc/ghc-pricing-parser"}},c={},m=[],d={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ghc-invoicing-sequence-text"},"GHC Invoicing Sequence Text"),(0,a.kt)("p",null,"The text used to generate the ",(0,a.kt)("a",{parentName:"p",href:"https://miro.com/app/board/o9J_ls9Gt7E=/?moveToWidget=3074457365163319192&cot=14"},"GHC Invoice Overview Sequence diagram")," is here.\nYou can use something like ",(0,a.kt)("a",{parentName:"p",href:"https://sequencediagram.org/"},"https://sequencediagram.org/")," to generate a new and make changes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"note over Prime, PaymentRequest: Prime requests payment for services rendered\nPrime->PaymentRequest: Create PaymentRequest\nloop for each MTOServiceItem\nnote over PaymentRequest, ServcieParamValueLookups, GHCRateEnginePricer: Invoicing creates and prices a payment request\nPaymentRequest->PaymentRequest: Create PaymentRequestServiceItem that maps to the MTOServiceItem\nPaymentRequest->ServcieParamValueLookups: Lookup values for each PaymentServiceItemServiceParam\nPaymentRequest->PaymentRequest: Create PaymentServiceItemServiceParam\nPaymentRequest->GHCRateEnginePricer: Price PaymentRequestServiceItem\nend\nPrime->PaymentRequest: Upload ProofOfServiceDocs\nnote over TIO, PaymentRequest: TIO UI is able to view the payment request and details about service item inputs used.\\nTIO will approve or reject the service items\nTIO->PaymentRequest: Query database to view PaymentRequest and query details about PaymentRequestServiceItem & PaymentServiceItemServiceParams\nloop for each PaymentRequestServiceItem\nTIO->TIO: Review and approve/request PaymentRequestServiceItem\nend\nTIO->TIO: Approve PaymentRequest\nnote over PaymentRequestReviewedProcessor, PaymentRequestReviewedProcessor: Aysnc task that runs at a set interval. Polls  the database for REVIEWED payment requests and generates EDI 858s to send to Syncada\\nChecks the GEX SFTP servers for EDI responses from Syncada\nloop for each REVIEWED PaymentRequest\nPaymentRequestReviewedProcessor->PaymentRequestReviewedProcessor: Queries database for REVIWED PaymentRequests\nPaymentRequestReviewedProcessor->Invoice: Calls GHCPaymentRequestInvoiceGenerator and creates an EDI\nPaymentRequestReviewedProcessor->Invoice: Send EDI to Syncada\nend\nloop for each 824\nPaymentRequestReviewedProcessor->PaymentRequestReviewedProcessor: Checks SFTP folder for 824an EDI\nPaymentRequestReviewedProcessor->Invoice: Call EDI824Processor\nend\nloop for each 997\nPaymentRequestReviewedProcessor->PaymentRequestReviewedProcessor: Checks SFTP folder for 997\nPaymentRequestReviewedProcessor->Invoice: Call EDI997Processor\nend\n\n")))}u.isMDXComponent=!0}}]);