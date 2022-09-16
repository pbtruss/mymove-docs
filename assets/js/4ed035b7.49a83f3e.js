"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[4232],{24769:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=i(87462),n=(i(67294),i(3905));i(61839);const o={title:"0058 Use Happo for visual regression testing"},s="Use Happo for visual regression testing",r={unversionedId:"adrs/replace-loki-with-happo",id:"adrs/replace-loki-with-happo",title:"0058 Use Happo for visual regression testing",description:"Background",source:"@site/docs/adrs/0058-replace-loki-with-happo.md",sourceDirName:"adrs",slug:"/adrs/replace-loki-with-happo",permalink:"/mymove-docs/docs/adrs/replace-loki-with-happo",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0058-replace-loki-with-happo.md",tags:[],version:"current",sidebarPosition:58,frontMatter:{title:"0058 Use Happo for visual regression testing"},sidebar:"adrsSidebar",previous:{title:"0057 Deprecate use of lodash over time",permalink:"/mymove-docs/docs/adrs/lodash"},next:{title:"0059 Use snapshot to cleanup load testing",permalink:"/mymove-docs/docs/adrs/use-snapshot-to-cleanup-loadtesting"}},l={},p=[{value:"Background",id:"background",level:2},{value:"Problem",id:"problem",level:2},{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Strategy",id:"strategy",level:3},{value:"References",id:"references",level:3},{value:"Additional Questions",id:"additional-questions",level:3},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"Continue using Loki (do nothing)",id:"continue-using-loki-do-nothing",level:3},{value:"Switch to Chromatic",id:"switch-to-chromatic",level:3},{value:"Use SauceLabs visual testing",id:"use-saucelabs-visual-testing",level:3},{value:"Stop visual regression testing",id:"stop-visual-regression-testing",level:3}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-happo-for-visual-regression-testing"},"Use Happo for visual regression testing"),(0,n.kt)("h2",{id:"background"},"Background"),(0,n.kt)("p",null,"Visual regression testing is a type of automated testing that is meant to catch unintended visual side effects in rendered UI. This is an area of risk due to the global nature of CSS -- when changing CSS code to modify one element, there is always a possibility of inadvertent changes to other elements without knowing anything happened until it is discovered by happenstance after the fact."),(0,n.kt)("p",null,"Visual regression testing occurs by first taking screenshots of selected portions of rendered UI to use as references, then comparing screenshots with code changes against those references, and finally alerting the team to differences between the images for review. Because any changes, whether they are intended or not, require explicit approval, building visual regression testing into our workflow can help ensure all UI changes have been reviewed by members of the design and product teams, as well as provide a visual of cross-browser implementations without needing manual QA."),(0,n.kt)("h2",{id:"problem"},"Problem"),(0,n.kt)("p",null,"MilMove currently uses a tool called Loki for performing visual regression tests on all components rendered in Storybook. While Loki has been helpful with catching unintended visual changes, it also has several downsides:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Loki is executed in local development & CI environments, so reference image assets must be checked into the code repo, and running/updating the tests locally is time- and resource-intensive."),(0,n.kt)("li",{parentName:"ul"},"Because reference images are checked into the repo, the action of approving changes requires an additional commit, push, and CI build."),(0,n.kt)("li",{parentName:"ul"},"Loki only runs tests in Chrome, so visual implementations in other browsers (Firefox, IE, Safari) are not tested."),(0,n.kt)("li",{parentName:"ul"},"Review and approval of changes happens in local dev environments, so actual changes can be relatively opaque and may not be explicitly reviewed by designers."),(0,n.kt)("li",{parentName:"ul"},"Loki only supports visual testing of Storybook components, so we would not be able to add visual tests to the application if we wanted.")),(0,n.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Continue using Loki (do nothing)"),(0,n.kt)("li",{parentName:"ul"},"Switch to Happo"),(0,n.kt)("li",{parentName:"ul"},"Switch to Chromatic"),(0,n.kt)("li",{parentName:"ul"},"Use SauceLabs visual testing"),(0,n.kt)("li",{parentName:"ul"},"Stop visual regression testing")),(0,n.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Chosen Alternative: Switch to Happo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Tests run on Happo's hosted platform, so engineers and CircleCI don't need to spend time/resources running them"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Visual tests can run against all of the browsers we support: Chrome, Firefox, IE11, Safari, iOS Safari, Edge (on all pricing plans, including free open source)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Happo provides a UI for users with access to view and approve or reject changes, and approving does not require committing changes"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Happo has a plugin to use with Storybook components, but can also be used to screenshot the application itself (for example, as part of Cypress E2E tests)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"~")," Happo has an on-premise option available if security is a concern (but pricing is by request, and will require additional infra support to set up and maintain)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Happo runs tests on its hosted platform, so it requires giving Happo access to our Github repo (which is currently public)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Happo costs money for non-open source projects (pricing tiers are $125 / $250 / \\$500 / month depending on usage)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Test reports for free open source projects are public to anyone who has the link")),(0,n.kt)("h3",{id:"strategy"},"Strategy"),(0,n.kt)("p",null,"My proposed steps for migrating from Loki to Happo are:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apps/happo"},"Happo Github app")," to this repo"),(0,n.kt)("li",{parentName:"ol"},"Install the JS dependencies (",(0,n.kt)("inlineCode",{parentName:"li"},"happo.io, happo-plugin-storybook"),")"),(0,n.kt)("li",{parentName:"ol"},"Add required configuration for Happo & Storybook"),(0,n.kt)("li",{parentName:"ol"},"Test trigger a Happo run from local environment"),(0,n.kt)("li",{parentName:"ol"},"Skip components that are currently skipped in Loki if needed"),(0,n.kt)("li",{parentName:"ol"},"Replace Loki script with Happo in CI (and test)"),(0,n.kt)("li",{parentName:"ol"},"Update relevant documentation around Storybook tests"),(0,n.kt)("li",{parentName:"ol"},"Remove deprecated Loki scripts, files, documentation from the repo")),(0,n.kt)("p",null,"Since Happo offers a 30 day free trial, the above ",(0,n.kt)("em",{parentName:"p"},"should be able to")," be completed independently of providing payment information for an account."),(0,n.kt)("h3",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.happo.io/docs/getting-started"},"Happo: Getting Started")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.happo.io/docs/storybook"},"Happo: Storybook plugin")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/happo-io/cross-browser-screenshot-testing-with-happo-io-and-storybook-bfb0b848a97a"},"Cross-browser screenshot testing with Happo.io and Storybook"))),(0,n.kt)("h3",{id:"additional-questions"},"Additional Questions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Do we have budget for this? Estimate # of runs, expected cost."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Budget is TBD. If we determine no budget, we can investigate whether MilMove qualifies for Happo's free open source plan (this would require test reports be public to anyone with the link, though). Budget should be weighed against the current amount of time Loki is requiring from both engineers and CircleCI, which is not insubstantial. Running the tests in CircleCI is one of our longest-running jobs, and debugging or even approving intended changes requires additional engineering time."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Does it actually help us ensure that we are maintaining IE compatibility?"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Loki does no testing in IE, and Happo does, so: yes."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Are we losing anything that Loki is providing?"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"No."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated time cost to implement (very rough estimate fine, determined by reading Happo \u201cgetting started\u201d docs, etc.)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1 day of engineering time to implement the strategy outlined above."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Does this feasibly integrate with our CI pipeline?"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.happo.io/docs/continuous-integration#happo-ci-circleci"},"Yes")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Does this feasibly run in a local dev environment? Is this extra development/infra effort?"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Happo tests can be triggered from local dev environments, but the report and screenshots will be generated in Happo's cloud environment. If we don't want to use the on-premise version, no extra dev/infra effort is required.")))),(0,n.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,n.kt)("h3",{id:"continue-using-loki-do-nothing"},"Continue using Loki (do nothing)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Requires no effort because no changes"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Loki is free, and runs locally so it has minimal security impact"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Continues to cost engineering & CI time having to run and approve changes locally"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Visual changes continue to be opaque since there is no UI for other team members to review them")),(0,n.kt)("h3",{id:"switch-to-chromatic"},"Switch to Chromatic"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Tests run on Chromatic's hosted platform, so engineers and CircleCI don't need to spend time/resources running them"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Visual tests run against Chrome & Firefox on all pricing plans"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Chromatic provides a UI for users with access to view and approve or reject changes, and approving does not require committing changes"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Chromatic is made by the same team as Storybook, and has first-class support for design systems and additional collaboration & documentation tools for teams"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Chromatic only tests Storybook components, so testing application screens is not an option"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Chromatic costs money (pricing tiers are $149 / $349 / \\$649 / month)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Testing on IE11 is only available in the Pro plan (most expensive)")),(0,n.kt)("h3",{id:"use-saucelabs-visual-testing"},"Use SauceLabs visual testing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," We already have a SauceLabs account that we use for manual cross-browser testing, and consolidating services is good"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," SauceLabs has recently acquired ",(0,n.kt)("a",{parentName:"li",href:"https://screener.io/"},"Screener.io")," (another automated visual testing service) and is adding a ",(0,n.kt)("a",{parentName:"li",href:"https://saucelabs.com/platform/visual-testing"},"visual testing product")," to its services"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," As far as I can tell, the offering is not yet ready and there is no way right now to sign up as a new customer as of this writing"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," SauceLabs also offers automated E2E testing, but we are not using it (using Cypress instead)"),(0,n.kt)("li",{parentName:"ul"},"Ultimately I think down the road we will want to make some decisions around what services we use for what tests, and consolidate technologies where possible, but this is not that moment. This ADR may be re-assessed once SauceLabs launches their visual testing service and we decide to re-evaluate.")),(0,n.kt)("h3",{id:"stop-visual-regression-testing"},"Stop visual regression testing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," We can stop using engineer & CI time/resources on automated visual testing"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," We lose insight into visual changes and have to find another way to do cross-browser testing")))}d.isMDXComponent=!0}}]);