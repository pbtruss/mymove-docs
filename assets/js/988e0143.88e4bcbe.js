"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2943],{13495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));n(95657);const r={title:"0061 Use OpenTelemetry to instrument code for distributed tracing"},o="_Use OpenTelemetry to instrument code for distributed tracing_",s={unversionedId:"adrs/use-opentelemetry-for-distributed-tracing",id:"adrs/use-opentelemetry-for-distributed-tracing",title:"0061 Use OpenTelemetry to instrument code for distributed tracing",description:"User Story: Distributed Tracing ADR",source:"@site/docs/adrs/0061-use-opentelemetry-for-distributed-tracing.md",sourceDirName:"adrs",slug:"/adrs/use-opentelemetry-for-distributed-tracing",permalink:"/mymove-docs/docs/adrs/use-opentelemetry-for-distributed-tracing",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0061-use-opentelemetry-for-distributed-tracing.md",tags:[],version:"current",sidebarPosition:61,frontMatter:{title:"0061 Use OpenTelemetry to instrument code for distributed tracing"},sidebar:"adrsSidebar",previous:{title:"0060 Move statuses to support service counseling",permalink:"/mymove-docs/docs/adrs/move-state-for-service-counseling"},next:{title:"0062 Run tests within transactions",permalink:"/mymove-docs/docs/adrs/run-tests-in-transactions"}},l={},u=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Why Distributed Tracing?",id:"why-distributed-tracing",level:3},{value:"ADR Goals and Anti-goals",id:"adr-goals-and-anti-goals",level:3},{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"<del>Use a vendor&#39;s instrumentation libraries</del>",id:"use-a-vendors-instrumentation-libraries",level:3},{value:"<del>Do not instrument</del>",id:"do-not-instrument",level:3}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"use-opentelemetry-to-instrument-code-for-distributed-tracing"},(0,i.kt)("em",{parentName:"h1"},"Use OpenTelemetry to instrument code for distributed tracing")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"User Story:")," ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"https://dp3.atlassian.net/browse/MB-8053"},"Distributed Tracing ADR"))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Give developers and operators an easier way to understand the behavior and\nstructure of running systems by instrumenting code for distributed tracing.")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("h3",{id:"why-distributed-tracing"},"Why Distributed Tracing?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Observability is defined as the ability of the internal states of a system to\nbe determined by its external outputs.")),(0,i.kt)("p",null,"There are several established techniques for gaining observability into complex\nsoftware systems."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Logging",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"helpful for known knowns"),(0,i.kt)("li",{parentName:"ul"},'e.g. "I want to know when a specific condition is reached"'))),(0,i.kt)("li",{parentName:"ul"},"Metrics",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"helpful for assessing known unknowns"),(0,i.kt)("li",{parentName:"ul"},'e.g. "How many requests per second was the system handling last Tuesday?"'))),(0,i.kt)("li",{parentName:"ul"},"Distributed Tracing",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"helpful for learning about unknown unknowns"),(0,i.kt)("li",{parentName:"ul"},'e.g. "What was the execution context for User X that caused their\ninteraction to timeout last Tuesday?"')))),(0,i.kt)("p",null,"Some of the benefits of distributed tracing, as outlined in\n",(0,i.kt)("a",{parentName:"p",href:"https://petabridge.com/blog/why-use-distributed-tracing/"},"this")," article are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"radically improves developer productivity and output"),(0,i.kt)("li",{parentName:"ul"},"works across multiple applications, programming languages, and transports"),(0,i.kt)("li",{parentName:"ul"},"improve time to market"),(0,i.kt)("li",{parentName:"ul"},"facilitates excellent cross-team communication and cooperation")),(0,i.kt)("p",null,"Here are several example scenarios or questions that distributed tracing can\nhelp answer."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"As a new engineer on the team, I want to understand how many separate systems\nare involved when a certain user type logs in and the first page is rendered."),(0,i.kt)("li",{parentName:"ul"},"As an operations engineer, I want to know how many SQL queries are executed\nfor a given endpoint or interaction."),(0,i.kt)("li",{parentName:"ul"},"As a product manager, I want to know if a new feature is being used by a\ncertain cohort of users on a regular basis."),(0,i.kt)("li",{parentName:"ul"},"As an engineer, I want to prove that an optimization I wrote is effective\nin a production environment."),(0,i.kt)("li",{parentName:"ul"},"As a load tester, after I have shown that a problem exists, I want to\nunderstand how the system is interacting so I can debug and fix the issue.")),(0,i.kt)("h3",{id:"adr-goals-and-anti-goals"},"ADR Goals and Anti-goals"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Goal: Choose which set of libraries to use at callsites (across programming\nlanguages) within the MilMove codebase, which will be used to generate\ndistributed tracing data"),(0,i.kt)("li",{parentName:"ul"},'Anti-goal: Committing to a specific "backend", i.e. platform or service for\ngathering, exploring, and displaying trace information',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sub-goal: Leaving open as many options as possible for the backend")))),(0,i.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use OpenTelemetry"),(0,i.kt)("li",{parentName:"ul"},"Use a vendor's instrumentation libraries"),(0,i.kt)("li",{parentName:"ul"},"Do not instrument")),(0,i.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chosen Alternative: ",(0,i.kt)("em",{parentName:"li"},"Use OpenTelemetry")),(0,i.kt)("li",{parentName:"ul"},"OpenTelemetry is an emerging industry standard",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"vendors find benefit of being in the OpenTelemetry ecosystem because they\nno longer have to create or support instrumentation libraries in an ever\ngrowing array of languages, i.e. as soon as language library exists for\nOpenTelemetry, the vendors automatically become available to support that\ngiven language."))),(0,i.kt)("li",{parentName:"ul"},"OpenTelemetry is vendor agnostic",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"tracing information can be sent to hosted services (e.g. Honeycomb.io, AWS\nX-Ray, etc) or self-hosted Open Source implementations (e.g. Zipkin, Jaeger,\netc)"),(0,i.kt)("li",{parentName:"ul"},"if left unconfigured, OpenTelemetry instrumentation calls default to\nlightweight/noop executions"))),(0,i.kt)("li",{parentName:"ul"},"OpenTelemetry has well-maintained libraries for the languages used in the\nlayers of the MilMove project",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"i.e. Go (back-end); JavaScript (front-end); Python (load testing); etc"))),(0,i.kt)("li",{parentName:"ul"},"Easily swappable back-ends",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g. could choose a local Docker version of OpenZipkin for an all-local\ndevelopment environment"),(0,i.kt)("li",{parentName:"ul"},"e.g. can use Honeycomb.io in the experimental commercial-cloud hosted\nenvironment"),(0,i.kt)("li",{parentName:"ul"},"e.g. can swap in AWS X-Ray for use in GovCloud hosted environments"))),(0,i.kt)("li",{parentName:"ul"},"Cons",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"as an abstraction layer, OpenTelemetry may prohibit usage of vendor-\nspecific capabilities"),(0,i.kt)("li",{parentName:"ul"},"some OpenTelemetry libraries and tools may trail their vendor-supported\ncounterparts"),(0,i.kt)("li",{parentName:"ul"},"instrumentation for tracing may be a vector for performance overhead")))),(0,i.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,i.kt)("h3",{id:"use-a-vendors-instrumentation-libraries"},(0,i.kt)("del",{parentName:"h3"},"Use a vendor's instrumentation libraries")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Enables accessing vendor-specific capabilities"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Vendor lock-in in code",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"lock-in may be somewhat mitigated by translation layers available within\nthe OpenTelemetry ecosystem, at the expense of increased configuration burden"),(0,i.kt)("li",{parentName:"ul"},"example - choosing AWS X-Ray would work well in the deployed GovCloud\nenvironments, but it does not scale down to exclusively local development\nenvironments, i.e. X-Ray does not provide a UI for browsing distributed\ntraces with their local X-Ray daemon"),(0,i.kt)("li",{parentName:"ul"},"example - choosing Honeycomb.io's instrumentation libraries adds a lot of\nnice auto-instrumentation capabilities over OpenTelemetry, but since\nHoneycomb does not have FedRAMP (nor do most of their peers), the distributed\ntracing could not be enabled in the GovCloud deployed environments"),(0,i.kt)("li",{parentName:"ul"},"example - using an open source tool (e.g. OpenZipkin) can scale down to\nlocal development, but would require more infrastructure support to self-\nhost the data storage and UI tools in the GovCloud environments")))),(0,i.kt)("h3",{id:"do-not-instrument"},(0,i.kt)("del",{parentName:"h3"},"Do not instrument")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," No work to be done"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," developers and operators continue to use current methods to build their\nunderstanding of the system, which is likely slower and less complete than when\nusing distributed tracing")))}m.isMDXComponent=!0}}]);