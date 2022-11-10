"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[6490],{95455:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=o(87462),a=(o(67294),o(3905));o(61839);const i={sidebar_position:2},s="How to Use and Run Storybook",r={unversionedId:"frontend/setup/run-storybook",id:"frontend/setup/run-storybook",title:"How to Use and Run Storybook",description:"What is Storybook",source:"@site/docs/frontend/setup/run-storybook.md",sourceDirName:"frontend/setup",slug:"/frontend/setup/run-storybook",permalink:"/mymove-docs/docs/frontend/setup/run-storybook",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/frontend/setup/run-storybook.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"frontendSidebar",previous:{title:"Designers's guide to setting up app locally",permalink:"/mymove-docs/docs/frontend/setup/designers-guide-to-setting-up-app-locally"},next:{title:"Guide to Implementing UI",permalink:"/mymove-docs/docs/frontend/guides/guide-to-implementing-ui"}},l={},d=[{value:"What is Storybook",id:"what-is-storybook",level:2},{value:"Basics",id:"basics",level:2},{value:"Option A: Running with tooling installed locally",id:"option-a-running-with-tooling-installed-locally",level:3},{value:"Dependencies",id:"dependencies",level:4},{value:"How to run storybook server locally",id:"how-to-run-storybook-server-locally",level:4},{value:"How to generate static storybook site files",id:"how-to-generate-static-storybook-site-files",level:4},{value:"Option B: Running in a docker container",id:"option-b-running-in-a-docker-container",level:3},{value:"Option C: Viewing a Pull Request artifact",id:"option-c-viewing-a-pull-request-artifact",level:3},{value:"Adding Stories",id:"adding-stories",level:2},{value:"Addons",id:"addons",level:3},{value:"Actions",id:"actions",level:4},{value:"Knobs",id:"knobs",level:4},{value:"Story changes require approval of Design",id:"story-changes-require-approval-of-design",level:3}],p={toc:d};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-use-and-run-storybook"},"How to Use and Run Storybook"),(0,a.kt)("h2",{id:"what-is-storybook"},"What is Storybook"),(0,a.kt)("p",null,"Storybook is a user interface development environment and playground for UI components. The tool enables developers to create components independently and showcase components interactively in an isolated development environment. ",(0,a.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/basics/introduction/"},"Read more here")),(0,a.kt)("h2",{id:"basics"},"Basics"),(0,a.kt)("p",null,"Storybook expects ",(0,a.kt)("em",{parentName:"p"},"stories")," to be defined for each component to be showcased. These stories are defined in the stories directory ",(0,a.kt)("inlineCode",{parentName:"p"},"src/stories")),(0,a.kt)("h3",{id:"option-a-running-with-tooling-installed-locally"},"Option A: Running with tooling installed locally"),(0,a.kt)("p",null,"This is the flow that most engineers will likely take since they probably have all the dependencies installed already."),(0,a.kt)("h4",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"If this is your first time running storybook you should run ",(0,a.kt)("inlineCode",{parentName:"p"},"make client_deps")," first to ensure storybook packages are installed"),(0,a.kt)("h4",{id:"how-to-run-storybook-server-locally"},"How to run storybook server locally"),(0,a.kt)("p",null,"To see the components locally simply run ",(0,a.kt)("inlineCode",{parentName:"p"},"make storybook")," and the server will start and automatically open a browser window. If not open ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:6006"},"http://localhost:6006")),(0,a.kt)("h4",{id:"how-to-generate-static-storybook-site-files"},"How to generate static storybook site files"),(0,a.kt)("p",null,"If you wish to generate the static version of storybook run ",(0,a.kt)("inlineCode",{parentName:"p"},"make build_storybook")," and the command will generate the files in ",(0,a.kt)("inlineCode",{parentName:"p"},"storybook-static")),(0,a.kt)("h3",{id:"option-b-running-in-a-docker-container"},"Option B: Running in a docker container"),(0,a.kt)("p",null,"If you don't have all the typical development tools installed this will walk you through running storybook without that. It does require docker to be installed you can get Docker CE for Mac from ",(0,a.kt)("a",{parentName:"p",href:"https://download.docker.com/mac/stable/Docker.dmg"},"here"),". Detailed instructions for installation can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-mac/install/"},"Docker for Mac Documentation")),(0,a.kt)("p",null,"Once Docker CE for Mac is installed run the ",(0,a.kt)("inlineCode",{parentName:"p"},"make storybook_docker")," command to start the storybook server. This will not automatically start your browser so once you see the below you can open ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:6006/"},"http://localhost:6006/")," and view storybook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},">$ make storybook_docker\nstorybook_1  | webpack built e8e291d7822d6638fa63 in 18740ms\nstorybook_1  | \u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e\nstorybook_1  | \u2502                                                 \u2502\nstorybook_1  | \u2502   Storybook 5.3.14 started                      \u2502\nstorybook_1  | \u2502   15 s for manager and 20 s for preview         \u2502\nstorybook_1  | \u2502                                                 \u2502\nstorybook_1  | \u2502    Local:            http://localhost:6006/     \u2502\nstorybook_1  | \u2502    On your network:  http://172.18.0.2:6006/    \u2502\nstorybook_1  | \u2502                                                 \u2502\nstorybook_1  | \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f\n")),(0,a.kt)("h3",{id:"option-c-viewing-a-pull-request-artifact"},"Option C: Viewing a Pull Request artifact"),(0,a.kt)("p",null,"If you don't want to set up any development tools on your local machine, another option is to use the static copy of storybook which is automatically generated as part of every pull request created by developers, although finding this does require a little bit of work."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1"),": When viewing a pull request on GitHub, scroll down to the section of the page that talks about automated checks. (This is also where you'll find the link to review and approve Happo diffs.) Scroll to the line with the title ",(0,a.kt)("inlineCode",{parentName:"p"},"ci/circleci: build_storybook"),', and click on the "Details" link.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"build_storybook check",src:o(5884).Z,width:"2012",height:"1358"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2"),': On the CircleCI page, you\'ll see several tabs near the middle of the page. Click on "Artifacts." (In order to view this page, you may be prompted to log into CircleCI, since other tasks that are run may contain sensitive information. Use your GitHub account to log in.)'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CircleCI artifacts",src:o(60631).Z,width:"2002",height:"1364"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3"),": Find the ",(0,a.kt)("inlineCode",{parentName:"p"},"storybook/index.html")," link. (It'll be near the bottom of the page, as these links are in alphabetical order.) Clicking on that will take you to an externally-hosted copy of storybook; that copy will be up to date with the current state of this pull request's code."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CircleCI index.html",src:o(16587).Z,width:"1890",height:"1522"})),(0,a.kt)("p",null,"Please note: that ",(0,a.kt)("strong",{parentName:"p"},"you will need to go through this process for every change within a pull request.")," CircleCI generates these externally-hosted copies of storybook automatically, but it does that with unpredictable links. Any time a pull request is updated with additional code changes, CircleCI will generate new links, with a new build of storybook, rather than updating any existing copies."),(0,a.kt)("h2",{id:"adding-stories"},"Adding Stories"),(0,a.kt)("p",null,"To showcase a component add the ",(0,a.kt)("em",{parentName:"p"},"stories")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/stories")," folder in an appropriate file. The storybook documentation on ",(0,a.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/basics/writing-stories/"},"Writing Stories")," is a good place to start with how to create ones. If there is not an appropriate file you need to create a new file in the pattern ",(0,a.kt)("inlineCode",{parentName:"p"},"componentName.stories.js")," in the src/stories directory, and then modify the ",(0,a.kt)("inlineCode",{parentName:"p"},".storybook/config.js")," file to include your new file in the generated site."),(0,a.kt)("h3",{id:"addons"},"Addons"),(0,a.kt)("p",null,"Stories in Storybook can use addons to extend the features of Storybook. Some addons already included are the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/storybookjs/storybook/tree/master/addons/actions"},"actions")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/storybookjs/storybook/tree/master/addons/knobs"},"knobs")," addons. The controls for each of these addons shows up in a pane at the bottom of the page where they are used. If you cannot find the pane try toggling the ",(0,a.kt)("em",{parentName:"p"},"Change addons orientation")," from the ellipsis menu next to the logo in the upper left, or using the ",(0,a.kt)("strong",{parentName:"p"},"D")," keyboard short cut to toggle it."),(0,a.kt)("h4",{id:"actions"},"Actions"),(0,a.kt)("p",null,"Storybook Addon Actions can be used to display data received by event handlers in Storybook. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/storybookjs/storybook/tree/master/addons/actions"},"the documentation")," for more details."),(0,a.kt)("h4",{id:"knobs"},"Knobs"),(0,a.kt)("p",null,"Storybook Addon Knobs allow you to edit props dynamically using the Storybook UI. You can also use Knobs as a dynamic variable inside stories in Storybook. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/storybookjs/storybook/tree/master/addons/knobs"},"the documentation")," for more details."),(0,a.kt)("h3",{id:"story-changes-require-approval-of-design"},"Story changes require approval of Design"),(0,a.kt)("p",null,"As part of the new process of Design and Engineering collaboration, the design team has been made code owners of the code in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/stories")," and the reference, i.e. approved, images in ",(0,a.kt)("inlineCode",{parentName:"p"},".loki/reference"),". So if you are adding a new story, modifying an existing one, or updating Loki reference images you will be required to have a designer give their approval on the GitHub PR."))}c.isMDXComponent=!0},16587:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/circleci_artifacts-1e30b991efa8307f3ab80a90f78ff1af.png"},60631:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/circleci_tabs-7e8530810810bded9e0233a85515b5fc.png"},5884:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/github_check-5bcaac2cc320877d04a44c7400fc1477.png"}}]);