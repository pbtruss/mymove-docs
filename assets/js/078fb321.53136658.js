"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[6572],{53344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));n(61839);const o={title:"0029 Honeycomb Integration",description:"Decision outcome: Honeycomb was deprecated and removed from this project as\nit was never fully used for instrumentation.\n"},r="Honeycomb Integration",s={unversionedId:"adrs/honeycomb-integration",id:"adrs/honeycomb-integration",title:"0029 Honeycomb Integration",description:"Decision outcome: Honeycomb was deprecated and removed from this project as\nit was never fully used for instrumentation.\n",source:"@site/docs/adrs/0029-honeycomb-integration.md",sourceDirName:"adrs",slug:"/adrs/honeycomb-integration",permalink:"/mymove-docs/docs/adrs/honeycomb-integration",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0029-honeycomb-integration.md",tags:[],version:"current",sidebarPosition:29,frontMatter:{title:"0029 Honeycomb Integration",description:"Decision outcome: Honeycomb was deprecated and removed from this project as\nit was never fully used for instrumentation.\n"},sidebar:"adrsSidebar",previous:{title:"0028 Config Management",permalink:"/mymove-docs/docs/adrs/config-management"},next:{title:"0030 IAM Authentication for Database",permalink:"/mymove-docs/docs/adrs/rds-iam"}},l={},c=[{value:"Context and Problem Statement",id:"context-and-problem-statement",level:2},{value:"Decision Drivers",id:"decision-drivers",level:2},{value:"Operational Requirements",id:"operational-requirements",level:3},{value:"Usability Requirements",id:"usability-requirements",level:3},{value:"Security Requirements",id:"security-requirements",level:3},{value:"Considered Options",id:"considered-options",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Options",id:"pros-and-cons-of-the-options",level:2},{value:"Sumo Logic",id:"sumo-logic",level:3},{value:"New Relic",id:"new-relic",level:3},{value:"Honeycomb",id:"honeycomb",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"honeycomb-integration"},"Honeycomb Integration"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," Honeycomb was deprecated and removed from this project as it was never fully used for instrumentation."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Status: accepted"),(0,a.kt)("li",{parentName:"ul"},"Deciders: @elliottdotgov, @hlieberman-gov, @ntwyman"),(0,a.kt)("li",{parentName:"ul"},"Date: 2018-10-01")),(0,a.kt)("h2",{id:"context-and-problem-statement"},"Context and Problem Statement"),(0,a.kt)("p",null,"Currently, the best method for tracing a request through the MyMove site is done by inspecting the JSON formatted logs hosted in AWS CloudWatch Logs. The CloudWatch Logs service provides the ability to define point queries based on the fields in the JSON log entries.  For example, a query could be looking up all log entries with a severity level of \u201cerror\u201d. Simple searches like looking up errors do provide some value, particularly when looking for known issues and if the volume of requests flowing through the site is low. However, CloudWatch Logs doesn\u2019t provide engineers a good way to look into more abstract unknown problems that could be happening."),(0,a.kt)("p",null,"It\u2019s important to be able to ask high level and ad hoc questions like \u201cwhat are the top 5 slowest API calls right now?\u201d . More importantly, being able to ask follow up questions like \u201cFor those slow API calls, where is that time being spent?\u201d."),(0,a.kt)("p",null,"This decision record is meant to pick a path forward to increase the visibility on the state of the MyMove site."),(0,a.kt)("h2",{id:"decision-drivers"},"Decision Drivers"),(0,a.kt)("h3",{id:"operational-requirements"},"Operational Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Outsource to a Software as a Service (SaaS) provider")," - One way to solve these problems could be to build a better system in-house (e.g., deploying ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/elastic/elasticsearch"},"Elasticsearch"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/elastic/logstash"},"Logstash"),", and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/elastic/kibana"},"Kibana"),"), but the operational overhead needed to maintain such a system is significant and isn\u2019t a primary focus for MyMove.")),(0,a.kt)("h3",{id:"usability-requirements"},"Usability Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Be able to ask previously unknown questions")," - Provides a clear interface for asking both granular and coarse question about the state of the MyMove site."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"The service should be easy to use")," - Doesn\u2019t require learning a domain specific language(DSL) or deep understanding of regular expressions.")),(0,a.kt)("h3",{id:"security-requirements"},"Security Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Encrypt all data sent from MyMove")," - Service provides encryption at rest and in-transit."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Allow MyMove infrastructure to control access to encrypted data before being sent")," - MyMove remains in control of how the data is encrypted or hashed before leaving the infrastructure."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Provide controls to configure data retention and deletion")," - Strict controls on how data is persisted and has controls for deleting columns or narrowed subsets."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Provide access control policies for reading, writing or deleting data")," - Engineers accessing this service should only need to write and read access to the chosen service. The service should be able to restrict access.")),(0,a.kt)("h2",{id:"considered-options"},"Considered Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Log aggregation service")," - ",(0,a.kt)("a",{parentName:"li",href:"https://www.sumologic.com/"},"Sumo Logic")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Application Performance Monitoring (APM) service")," - ",(0,a.kt)("a",{parentName:"li",href:"https://newrelic.com/"},"New Relic")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Event based observability service")," - ",(0,a.kt)("a",{parentName:"li",href:"https://www.honeycomb.io/"},"Honeycomb"))),(0,a.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,a.kt)("p",null,"Honeycomb straddles a difficult balance that provides a pretty good user interface for debugging complex datasets, but also provides a mechanism to encrypt any data we send before it leaves the MyMove infrastructure. We\u2019ve been testing the service in the MyMove staging environment to verify its usefulness before moving forward with a roll out to production. We did this to understand what data we will and won\u2019t send to Honeycomb. Also it allowed us to understand what sorts of security controls are in place to protect and manage the data we do send."),(0,a.kt)("h2",{id:"pros-and-cons-of-the-options"},"Pros and Cons of the Options"),(0,a.kt)("h3",{id:"sumo-logic"},(0,a.kt)("a",{parentName:"h3",href:"https://www.sumologic.com/"},"Sumo Logic")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Integrates with CloudWatch Logs. ",(0,a.kt)("a",{parentName:"li",href:"https://help.sumologic.com/Send-Data/Collect-from-Other-Data-Sources/Amazon-CloudWatch-Logs"},"1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Encryption in-transit and at rest using keys maintained and rotated by Sumo Logic. ",(0,a.kt)("a",{parentName:"li",href:"https://www.sumologic.com/resource/white-paper/securing-the-sumo-logic-service/"},"2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Fine grained role based access controls. ",(0,a.kt)("a",{parentName:"li",href:"https://www.sumologic.com/resource/white-paper/securing-the-sumo-logic-service/"},"2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Doesn\u2019t support encrypting data before leaving MyMove infrastructure."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Requires managing search indexes and deciding which data is important to index ahead of time."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Querying JSON logs requires using JSONPath syntax, which isn\u2019t much better than CloudWatch."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-"),' Generating graphs around things like requests latencies requires defining dashboards and configuration ahead of time using complicated "Parse Expressions". ',(0,a.kt)("a",{parentName:"li",href:"https://www.sumologic.com/blog/it-operations/logs-to-metrics/"},"3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Very Limited controls around data persistence. All deletion requests must go through support. ",(0,a.kt)("a",{parentName:"li",href:"https://help.sumologic.com/Send-Data/Collector-FAQs/Delete-data-already-collected-to-Sumo-Logic"},"4"))),(0,a.kt)("h3",{id:"new-relic"},(0,a.kt)("a",{parentName:"h3",href:"https://newrelic.com/"},"New Relic")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Provides good library for integrating with Go codebase. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/newrelic/go-agent"},"5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," In the process of being FedRAMP approved. ",(0,a.kt)("a",{parentName:"li",href:"https://blog.newrelic.com/product-news/government-it-modernization/"},"6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Provides defining both coarse and fine grained queries."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Fine grained role based access controls. ",(0,a.kt)("a",{parentName:"li",href:"https://blog.newrelic.com/product-news/role-based-access-control-rbac/"},"7")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Data is encrypted in-transit, but not at rest. ",(0,a.kt)("a",{parentName:"li",href:"https://docs.newrelic.com/docs/using-new-relic/new-relic-security/security/security"},"8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Data cannot be deleted once written without an explicit support request. ",(0,a.kt)("a",{parentName:"li",href:"https://docs.newrelic.com/docs/insights/use-insights-ui/manage-account-data/editing-deleting-insights-data"},"9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Doesn\u2019t support encrypting data before leaving MyMove infrastructure."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Difficult to extend beyond the quick start functionality."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Querying the New Relic Events services requires learning New Relic Query Language (NRQL). ",(0,a.kt)("a",{parentName:"li",href:"https://docs.newrelic.com/docs/insights/nrql-new-relic-query-language/nrql-resources/nrql-syntax-components-functions"},"10"))),(0,a.kt)("h3",{id:"honeycomb"},(0,a.kt)("a",{parentName:"h3",href:"https://www.honeycomb.io/"},"Honeycomb")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Provides good library for integrating with Go codebase. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/honeycombio/beeline-go"},"11")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Data is encrypted in-transit and at rest. ",(0,a.kt)("a",{parentName:"li",href:"https://www.honeycomb.io/security/"},"12")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Supports encrypting data before leaving MyMove infrastructure using Secure Tenancy. ",(0,a.kt)("a",{parentName:"li",href:"https://docs.honeycomb.io/authentication-and-security/secure-tenancy/"},"13")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Web based UI for querying against any number of fields in the Honeycomb dataset."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," No complex query syntax to learn."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Limited role based access controls."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Secure Tenancy requires running new infrastructure in-house."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Datasets can be deleted through the web UI, but column based deletions need to be done through support. ",(0,a.kt)("a",{parentName:"li",href:"https://docs.honeycomb.io/getting-data-in/datasets/secure-manage/"},"14"))))}u.isMDXComponent=!0}}]);