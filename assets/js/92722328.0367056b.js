"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[8194],{52737:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));t(61839);const r={title:"0075 Remove CLI Spinner"},s="_Remove CLI Spinner_",o={unversionedId:"adrs/cli-spinner",id:"adrs/cli-spinner",title:"0075 Remove CLI Spinner",description:"A CLI spinner is a spinner that appears on the command line interface to visually indicate that the program being run is working on a task.",source:"@site/docs/adrs/0075-cli-spinner.md",sourceDirName:"adrs",slug:"/adrs/cli-spinner",permalink:"/mymove-docs/docs/adrs/cli-spinner",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0075-cli-spinner.md",tags:[],version:"current",sidebarPosition:75,frontMatter:{title:"0075 Remove CLI Spinner"},sidebar:"adrsSidebar",previous:{title:"0074 Refactor Move Event's Details Rendering ",permalink:"/mymove-docs/docs/adrs/move-history-details-refactor"}},l={},p=[{value:"Decision Drivers",id:"decision-drivers",level:2},{value:"Considered Decisions",id:"considered-decisions",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Decisions",id:"pros-and-cons-of-the-decisions",level:2},{value:"Remove all spinner code",id:"remove-all-spinner-code",level:3},{value:"Use YAC Spin",id:"use-yac-spin",level:3},{value:"Replace pterm",id:"replace-pterm",level:3},{value:"Continue to use pterm&#39;s spinner",id:"continue-to-use-pterms-spinner",level:3}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"remove-cli-spinner"},(0,a.kt)("em",{parentName:"h1"},"Remove CLI Spinner")),(0,a.kt)("p",null,"A CLI spinner is a spinner that appears on the command line interface to visually indicate that the program being run is working on a task.\nThe MilMove project uses such spinners when loading or parsing documents. pterm spinner, the current spinner being used on MilMove, is not thread safe. This was discovered while working on ",(0,a.kt)("a",{parentName:"p",href:"ttps://dp3.atlassian.net/browse/MB-12825"},"MB-12825 Race Conditions"),". pterm offers many other command line interface features that are thread safe; it is specifically the spinner that generates warnings when Go's ",(0,a.kt)("inlineCode",{parentName:"p"},"-race")," flag is turned on while running tests."),(0,a.kt)("h2",{id:"decision-drivers"},"Decision Drivers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We want to resolve the race conditions that appear when the ",(0,a.kt)("inlineCode",{parentName:"li"},"-race")," flag is turned on in Go")),(0,a.kt)("h2",{id:"considered-decisions"},"Considered Decisions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remove all the spinner code"),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/theckman/yacspin"},"YAC Spin")),(0,a.kt)("li",{parentName:"ul"},"Replace ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pterm/pterm"},"pterm")," completely"),(0,a.kt)("li",{parentName:"ul"},"Continue to use ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pterm/pterm"},"pterm")," spinner")),(0,a.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,a.kt)("p",null,"Remove all spinner code."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This allows us to resolve races conditions that are flagged by Go's ",(0,a.kt)("inlineCode",{parentName:"li"},"-race")," flag. Resolving these race conditions helps resolve ",(0,a.kt)("a",{parentName:"li",href:"https://www.stigviewer.com/stig/application_security_and_development/2018-12-24/finding/V-70185"},"STIG V-70185"),"."),(0,a.kt)("li",{parentName:"ul"},"Having a spinner display is not critical to the operation of the application. The text of the message should be retained to maintain context as to what is being run.")),(0,a.kt)("h2",{id:"pros-and-cons-of-the-decisions"},"Pros and Cons of the Decisions"),(0,a.kt)("h3",{id:"remove-all-spinner-code"},"Remove all spinner code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," No race conditions created from spinners."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Less code to maintain."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Work to be done to remove the spinners."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," No visibility on if the task that would be using the spinner is active.")),(0,a.kt)("h3",{id:"use-yac-spin"},"Use YAC Spin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," No race conditions from spinners because YAC Spin is thread safe."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," The features that we use for the terminal user interface are split across two libraries."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Some work will need to be done to replace pterm's spinner.")),(0,a.kt)("h3",{id:"replace-pterm"},"Replace pterm"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Wouldn't have to deal with race conditions from pterm."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," All the features for a terminal user interface are in one library."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Have to find a sutable replacement that is thread safe and does everything that MilMove uses pterm for."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Work needs to be done to refactor and replace pterm.")),(0,a.kt)("h3",{id:"continue-to-use-pterms-spinner"},"Continue to use pterm's spinner"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," All the terminal user interface related stuff are in one library."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," No code changes needed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," MilMove is stuck with race conditions since the race conditions are occurring in a third party library.")))}c.isMDXComponent=!0}}]);