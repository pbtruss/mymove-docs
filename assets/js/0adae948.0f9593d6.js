"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2208],{12271:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));t(95657);const s={sidebar_position:2},i="Redocusaurus",r={unversionedId:"tools/docusaurus/redocusaurus",id:"tools/docusaurus/redocusaurus",title:"Redocusaurus",description:"This documentation is helpful for anyone editing documentation related to the",source:"@site/docs/tools/docusaurus/redocusaurus.md",sourceDirName:"tools/docusaurus",slug:"/tools/docusaurus/redocusaurus",permalink:"/mymove-docs/docs/tools/docusaurus/redocusaurus",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/tools/docusaurus/redocusaurus.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"toolsSidebar",previous:{title:"Using Docusaurus",permalink:"/mymove-docs/docs/tools/docusaurus/"},next:{title:"Locust",permalink:"/mymove-docs/docs/tools/locust/"}},u={},c=[{value:"What is Redocusaurus?",id:"what-is-redocusaurus",level:2},{value:"Redocusaurus configuration",id:"redocusaurus-configuration",level:2},{value:"Working with local changes to Swagger files",id:"working-with-local-changes-to-swagger-files",level:2},{value:"The two repositories",id:"the-two-repositories",level:3},{value:"Updating the Docusaurus configuration",id:"updating-the-docusaurus-configuration",level:3},{value:"Viewing changes in local Docusaurus",id:"viewing-changes-in-local-docusaurus",level:3},{value:"Undoing local configuration for Redocusaurus",id:"undoing-local-configuration-for-redocusaurus",level:2}],l={toc:c};function d(e){let{components:o,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"redocusaurus"},"Redocusaurus"),(0,a.kt)("admonition",{title:"Why do I need to read this?",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This documentation is helpful for anyone editing documentation related to the\nSwagger API definitions. It is helpful to understand those concepts first before\ndiving into this documentation.")),(0,a.kt)("admonition",{title:"Need help? Ask in Slack.",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This documentation leverages multiple projects that could lead to confusing\nerror messages and warnings. For help, please reach out in\n",(0,a.kt)("a",{parentName:"p",href:"https://ustcdp3.slack.com/archives/C027BDJ4678"},"#c-documentation"),"\ud83d\udd12 if you get stuck.")),(0,a.kt)("h2",{id:"what-is-redocusaurus"},"What is Redocusaurus?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri/redocusaurus"},"Redocusaurus")," is a preset for Docusaurus. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri/redocusaurus/tree/main/packages/redocusaurus"},"the packages\ndocumentation")," for more general information about\nRedocusaurus. The purpose of this documentation is to help MilMove developers\nunderstand how the preset is integrated into Docusaurus and how to work with it\nlocally."),(0,a.kt)("h2",{id:"redocusaurus-configuration"},"Redocusaurus configuration"),(0,a.kt)("p",null,"The presets for Docusaurus are set in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"transcom/mymove-docs")," repository. See ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/presets"},"the official Docusaurus\ndocumentation")," on using presets for more general information."),(0,a.kt)("admonition",{title:"How Docusaurus consumes Swagger documentation",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The way ",(0,a.kt)("inlineCode",{parentName:"p"},"transcom/mymove-docs")," uses this is by leveraging the raw GitHub URLs\nfor the Yaml files found in ",(0,a.kt)("inlineCode",{parentName:"p"},"transcom/mymove"),". This means the API documentation\nis in sync with the default branch for the ",(0,a.kt)("inlineCode",{parentName:"p"},"transcom/mymove")," repository. This\nmeans that until your Swagger file changes are merged into the default branch of\n",(0,a.kt)("inlineCode",{parentName:"p"},"transcom/mymove")," you cannot view the changes in the ",(0,a.kt)("inlineCode",{parentName:"p"},"transcom/mymove-docs"),"\nrepository neither locally nor on the published website.")),(0,a.kt)("p",null,"You can see this in the ",(0,a.kt)("inlineCode",{parentName:"p"},"./docusaurus.config.js")," file under the ",(0,a.kt)("inlineCode",{parentName:"p"},"presets")," named\n",(0,a.kt)("inlineCode",{parentName:"p"},"redocusaurus"),"."),(0,a.kt)("h2",{id:"working-with-local-changes-to-swagger-files"},"Working with local changes to Swagger files"),(0,a.kt)("p",null,"To view changes to the Swagger documentation locally with Docusaurus, you need\nto have both repositories cloned on your machine. While you will be working with\ntwo repositories, the actual commits associated with these changes will happen\nin the ",(0,a.kt)("inlineCode",{parentName:"p"},"transcom/mymove")," repository and not in the ",(0,a.kt)("inlineCode",{parentName:"p"},"trancom/mymove-docs"),"\nrepository."),(0,a.kt)("h3",{id:"the-two-repositories"},"The two repositories"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove"},"https://github.com/transcom/mymove")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove-docs"},"https://github.com/transcom/mymove-docs"))),(0,a.kt)("h3",{id:"updating-the-docusaurus-configuration"},"Updating the Docusaurus configuration"),(0,a.kt)("p",null,"Once you have these repositories cloned locally, you will need to edit the\n",(0,a.kt)("inlineCode",{parentName:"p"},"documentation.config.js")," file to have the local copy of compiled Swagger files\nrather than pointing to the raw GitHub URL for the default branch."),(0,a.kt)("p",null,"The Git patch below shows what these changes would look like locally. The\nimportant thing to consider here is the location of the Swagger specification.\nIn the example below, it is relative to the ",(0,a.kt)("inlineCode",{parentName:"p"},"transcom/mymove-docs")," repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="Updates to specification paths" {9,10,14,15}',title:'"Updates',to:!0,specification:!0,'paths"':!0,"{9,10,14,15}":!0},"diff --git a/docusaurus.config.js b/docusaurus.config.js\nindex 697ffef..30fdcc4 100644\n--- a/docusaurus.config.js\n+++ b/docusaurus.config.js\n@@ -144,11 +144,11 @@ module.exports = {\n       {\n         specs: [\n           {\n-            spec: 'https://raw.githubusercontent.com/transcom/mymove/main/swagger/prime.yaml',\n+            spec: '../mymove/swagger/prime.yaml',\n             routePath: '/api/prime',\n           },\n           {\n-            spec: 'https://raw.githubusercontent.com/transcom/mymove/main/swagger/support.yaml',\n+            spec: '../mymove/swagger/support.yaml',\n             routePath: '/api/support',\n           },\n         ],\n")),(0,a.kt)("admonition",{title:"About the diff output above",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Due to edits to the ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file since this documentation was\nwritten. The above diff is for illustrative purposes only and ",(0,a.kt)("strong",{parentName:"p"},"will not apply\ncleanly to the ",(0,a.kt)("inlineCode",{parentName:"strong"},"transcom/mymove")," repository"),".")),(0,a.kt)("h3",{id:"viewing-changes-in-local-docusaurus"},"Viewing changes in local Docusaurus"),(0,a.kt)("p",null,"Now that you have updated the ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," with the changes mentioned\nabove, you will need to edit Swagger files found in ",(0,a.kt)("inlineCode",{parentName:"p"},"transcom/mymove")," under\n",(0,a.kt)("inlineCode",{parentName:"p"},"swagger-def/")," and then run the ",(0,a.kt)("inlineCode",{parentName:"p"},"make swagger_generate")," command in order for\nthem to show up in Docusaurus."),(0,a.kt)("p",null,"You will have to repeat this section for every change to the Swagger files. Make\nsure you have the ",(0,a.kt)("inlineCode",{parentName:"p"},"transcom/mymove-docs")," server running locally. Whenever there\nare changes to the ",(0,a.kt)("inlineCode",{parentName:"p"},"trancom/mymove/swagger/*.yaml")," files mentioned above,\nDocusaurus will helpfully reload the page. Because of interconnectedness of\ndifferent technology, you may have to run the ",(0,a.kt)("inlineCode",{parentName:"p"},"make swagger_generate")," command\nmore than once if the changes aren't being reflected in your local Docusaurus\nAPI page."),(0,a.kt)("h2",{id:"undoing-local-configuration-for-redocusaurus"},"Undoing local configuration for Redocusaurus"),(0,a.kt)("p",null,"If the only changes that were made to ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," are related to the\nRedocusaurus, you can easily discard these changes using the following Git\ncommand in the terminal. Please make sure you do this after you've committed\nchanges in ",(0,a.kt)("inlineCode",{parentName:"p"},"transcom/mymove")," which are related to the Swagger documentation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout -- docusaurus.config.js\n")))}d.isMDXComponent=!0}}]);