"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9194],{92745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));n(61839);const o={title:"0026 Use Snyk Vulnerability Scanning",description:"Status: Accepted\n"},s="Use Snyk Vulnerability Scanning",l={unversionedId:"adrs/use-snyk-vulnerability-scanning",id:"adrs/use-snyk-vulnerability-scanning",title:"0026 Use Snyk Vulnerability Scanning",description:"Status: Accepted\n",source:"@site/docs/adrs/0026-use-snyk-vulnerability-scanning.md",sourceDirName:"adrs",slug:"/adrs/use-snyk-vulnerability-scanning",permalink:"/mymove-docs/docs/adrs/use-snyk-vulnerability-scanning",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0026-use-snyk-vulnerability-scanning.md",tags:[],version:"current",sidebarPosition:26,frontMatter:{title:"0026 Use Snyk Vulnerability Scanning",description:"Status: Accepted\n"},sidebar:"adrsSidebar",previous:{title:"0025 Client Side Feature Flags using Custom JavaScript",permalink:"/mymove-docs/docs/adrs/client-side-feature-flags"},next:{title:"0027 PDF Generation",permalink:"/mymove-docs/docs/adrs/pdf-generation"}},r={},u=[{value:"Context and Problem Statement",id:"context-and-problem-statement",level:2},{value:"Decision Drivers",id:"decision-drivers",level:2},{value:"Considered Options",id:"considered-options",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Options",id:"pros-and-cons-of-the-options",level:2},{value:"GitHub",id:"github",level:3},{value:"Sonatype",id:"sonatype",level:3},{value:"Snyk",id:"snyk",level:3},{value:"SonarQube",id:"sonarqube",level:3},{value:"Twistlock",id:"twistlock",level:3}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"use-snyk-vulnerability-scanning"},"Use Snyk Vulnerability Scanning"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Status: accepted"),(0,i.kt)("li",{parentName:"ul"},"Deciders: @dynamike, @pjdufour-truss"),(0,i.kt)("li",{parentName:"ul"},"Date: 2018-08-13")),(0,i.kt)("h2",{id:"context-and-problem-statement"},"Context and Problem Statement"),(0,i.kt)("p",null,"An area of security risk to MyMove is supply-chain risk.  In the context of software development, supply-chain risk is the risk that a malicious actor could insert malicious code somewhere into a source code dependency.  The actor could attack a dependency directly by modifying a git repo, upload bad code to a package manager, man in the middle during the build process, or a wide variety of other scenarios."),(0,i.kt)("p",null,"Scanning software for known vulnerabilities (e.g., CVEs) is a critical step for mitigating supply-chain risk.  However, it does not completely mitigate against zero-days, custom attacks, or other supply-chain attacks."),(0,i.kt)("h2",{id:"decision-drivers"},"Decision Drivers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Seamlessly integrates into our CI/CD workflow"),(0,i.kt)("li",{parentName:"ul"},"Scans JavaScript for known CVEs"),(0,i.kt)("li",{parentName:"ul"},"Scans Golang dependencies for known CVEs"),(0,i.kt)("li",{parentName:"ul"},"Maintenance cost")),(0,i.kt)("h2",{id:"considered-options"},"Considered Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GitHub"),(0,i.kt)("li",{parentName:"ul"},"Sonatype"),(0,i.kt)("li",{parentName:"ul"},"Snyk"),(0,i.kt)("li",{parentName:"ul"},"SonarQube"),(0,i.kt)("li",{parentName:"ul"},"Twistlock")),(0,i.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,i.kt)("p",null,'Chosen option: "Use Snyk for Vulnerability Scanning".  We\'ll use ',(0,i.kt)("inlineCode",{parentName:"p"},"snyk test")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"snyk monitor")," for one-time tests and monitoring of our dependency tree."),(0,i.kt)("h2",{id:"pros-and-cons-of-the-options"},"Pros and Cons of the Options"),(0,i.kt)("h3",{id:"github"},"GitHub"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Good, scans JavaScript"),(0,i.kt)("li",{parentName:"ul"},"Bad, does not scan Go"),(0,i.kt)("li",{parentName:"ul"},"Bad, run as a cron job scheduled by GitHub"),(0,i.kt)("li",{parentName:"ul"},"Bad, cannot run as part of our CI/CD workflow"),(0,i.kt)("li",{parentName:"ul"},"Good, no maintenance cost")),(0,i.kt)("h3",{id:"sonatype"},"Sonatype"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Good, scans JavaScript"),(0,i.kt)("li",{parentName:"ul"},"Bad, ",(0,i.kt)("a",{parentName:"li",href:"https://issues.sonatype.org/browse/NEXUS-13785"},"does not scan Go")," at this time."),(0,i.kt)("li",{parentName:"ul"},"Bad, it would require rearchitecting our entire CI/CD pipeline")),(0,i.kt)("h3",{id:"snyk"},"Snyk"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Good, scans JavaScript"),(0,i.kt)("li",{parentName:"ul"},"Good, scans Go"),(0,i.kt)("li",{parentName:"ul"},"Good, could fit into our CI/CD workflow with some shell scripting."),(0,i.kt)("li",{parentName:"ul"},"Bad, GitHub integration requires write access to repos."),(0,i.kt)("li",{parentName:"ul"},"Bad, ",(0,i.kt)("a",{parentName:"li",href:"https://snyk.io/vuln/page/1?type=golang"},"vulnerability database for Go")," seems limited.")),(0,i.kt)("h3",{id:"sonarqube"},"SonarQube"),(0,i.kt)("p",null,'SonarQube is a leading open source product for continuous code quality, including a "quality gate" that integrates seamlessly into CI/CD workflow.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Good, scans JavaScript"),(0,i.kt)("li",{parentName:"ul"},"Unsure, scans Go (not sure it scans for CVEs)"),(0,i.kt)("li",{parentName:"ul"},"Good, seamlessly integrates into CI/CD workflow"),(0,i.kt)("li",{parentName:"ul"},"Bad, requires running our own instance on EC2.")),(0,i.kt)("h3",{id:"twistlock"},"Twistlock"),(0,i.kt)("p",null,"Twistlock looks like it is working on ",(0,i.kt)("a",{parentName:"p",href:"https://www.twistlock.com/2018/08/07/announcing-twistlock-2-5-ga-release-notes/"},"amazing things"),", but doesn't satisfy our requirements for scanning for known vulnerabilities before deploy."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Good, container-first approach and we use containers."),(0,i.kt)("li",{parentName:"ul"},"Bad, no deep scans for known vulnerabilities (CVEs)"),(0,i.kt)("li",{parentName:"ul"},"Bad, doesn't seamlessly integrate into our CI/CD workflow for this requirement.")))}c.isMDXComponent=!0}}]);