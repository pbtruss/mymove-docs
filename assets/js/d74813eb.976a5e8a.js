"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[8027],{81796:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var a=o(87462),i=(o(67294),o(3905));o(95657);const n={sidebar_position:1},s="Using Docusaurus",l={unversionedId:"tools/docusaurus/docusaurus",id:"tools/docusaurus/docusaurus",title:"Using Docusaurus",description:"Docusaurus is our documentation framework of choice (and you can see a record of that decision in this closed PR). One of the main reasons we picked this framework was because of how easy it was to manipulate the documentation without being an experienced software engineer. Here is a general outline of how to work with Docusaurus in a way that should be accessible to all of us on the project, from designers to product managers to engineers.",source:"@site/docs/tools/docusaurus/docusaurus.md",sourceDirName:"tools/docusaurus",slug:"/tools/docusaurus/",permalink:"/mymove-docs/docs/tools/docusaurus/",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/tools/docusaurus/docusaurus.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"toolsSidebar",previous:{title:"Use, Purpose, and Documentation",permalink:"/mymove-docs/docs/tools/dockerfile/dockerfile-use,-purpose,-and-documentation"},next:{title:"Redocusaurus",permalink:"/mymove-docs/docs/tools/docusaurus/redocusaurus"}},r={},d=[{value:"Edit a page",id:"edit-a-page",level:2},{value:"Add a page",id:"add-a-page",level:2},{value:"Delete a page",id:"delete-a-page",level:2},{value:"Move a page",id:"move-a-page",level:2},{value:"Common edits",id:"common-edits",level:2},{value:"Change the title",id:"change-the-title",level:3},{value:"Change the sidebar position",id:"change-the-sidebar-position",level:3},{value:"Change the URL",id:"change-the-url",level:3},{value:"Add images",id:"add-images",level:3},{value:"Add a code block",id:"add-a-code-block",level:3},{value:"Linking between pages",id:"linking-between-pages",level:2}],u={toc:d},c="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-docusaurus"},"Using Docusaurus"),(0,i.kt)("p",null,"Docusaurus is our documentation framework of choice (and you can see a record of that decision in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/6869"},"this closed PR"),"). One of the main reasons we picked this framework was because of how easy it was to manipulate the documentation without being an experienced software engineer. Here is a general outline of how to work with Docusaurus in a way that should be accessible to all of us on the project, from designers to product managers to engineers."),(0,i.kt)("p",null,"Note that to modify any part of the repo, you must be a member of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom"},"United States Transportation Command")," GitHub organization."),(0,i.kt)("h2",{id:"edit-a-page"},"Edit a page"),(0,i.kt)("p",null,"When you're browsing the docs and you come across a page you'd like to edit, scroll down to the very bottom and click the \"",(0,i.kt)("strong",{parentName:"p"},"Edit this page"),'" button.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Edit this page",src:o(48336).Z,width:"973",height:"669"})),(0,i.kt)("p",null,"This should take you to the edit screen in GitHub for this particular markdown file. In this screen, you can edit the page however you please (we have instructions for some ",(0,i.kt)("a",{parentName:"p",href:"#common-edits"},"common edits"),' below), and then preview your changes using the "',(0,i.kt)("strong",{parentName:"p"},"Preview"),'" tab at the top of the text box. Note there are some quirks about previewing your work in GitHub:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Embedded images will not be shown in GitHub, but you will see them in the Docusaurus site."),(0,i.kt)("li",{parentName:"ul"},"The frontmatter will be visible at the top of the page in GitHub, but this will not show up in Docusaurus.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Preview the page",src:o(29578).Z,width:"724",height:"358"})),(0,i.kt)("p",null,"You can also rename a file in GitHub. Keep in mind that this filename will be in the url for that page (unless otherwise specified in the frontmatter), so it should be lowercase and separated by hyphens (also known as ",(0,i.kt)("inlineCode",{parentName:"p"},"kebab-case"),")."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Edit a filename",src:o(6797).Z,width:"356",height:"41"})),(0,i.kt)("p",null,"Once you are done, scroll down to the bottom and save your changes. You can write a description about what you changed as well, which is optional but encouraged."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Commit changes",src:o(29418).Z,width:"524",height:"340"})),(0,i.kt)("h2",{id:"add-a-page"},"Add a page"),(0,i.kt)("p",null,"The file structure in our GitHub repo determines where your new page will show up in the deployed Docusaurus site. Therefore, you should first figure out what section your page belongs to and navigate to that directory in GitHub."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"mymove-docs/\n\u251c\u2500\u2500 docs/  <- All of our docs should go in this directory\n\u2502   \u251c\u2500\u2500 about/\n\u2502   \u2502   \u251c\u2500\u2500 ^ These docs give context on MilMove.\n\u2502   \u251c\u2500\u2500 api/\n\u2502   \u2502   \u251c\u2500\u2500 ^ These docs are about the MilMove internal or external APIs.\n\u2502   \u251c\u2500\u2500 backend/\n\u2502   \u2502   \u251c\u2500\u2500 ^ These docs are about the backend, which is a Golang server.\n\u2502   \u251c\u2500\u2500 frontend/\n\u2502   \u2502   \u251c\u2500\u2500 ^ These docs are about the React frontend.\n\u2502   \u251c\u2500\u2500 help/\n\u2502   \u2502   \u251c\u2500\u2500 ^ HALP! These docs should help folks resolve common issues encountered in the system.\n\u2502   \u251c\u2500\u2500 vault/\n\u2502   \u2502   \u251c\u2500\u2500 ^ This folder is the place to store experimental, archived, or deprecated docs.\n")),(0,i.kt)("p",null,"Once you're in the directory for your new page, click on the \"",(0,i.kt)("strong",{parentName:"p"},"Add file"),'" dropdown near the top right. Select the "',(0,i.kt)("strong",{parentName:"p"},"Create new file"),'" option.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create new page",src:o(83671).Z,width:"1228",height:"149"})),(0,i.kt)("admonition",{title:"Uploading Files",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},'You can also write a markdown document on your computer and upload it using the "',(0,i.kt)("strong",{parentName:"p"},"Upload files"),"\" option. If you have a markdown editor that you're comfortable with, or if you only want to add the document once it's fully complete, this might be the option for you.")),(0,i.kt)("p",null,"Add your content. This process is the same as ",(0,i.kt)("a",{parentName:"p",href:"#common-edits"},"editing a page"),". Once you are done, scroll down to the bottom and commit your changes."),(0,i.kt)("h2",{id:"delete-a-page"},"Delete a page"),(0,i.kt)("p",null,'Before you delete a page, first ask yourself: "Am I sure this content needs to be fully removed, or could it be useful somewhere else?" If you could envision the document being useful in Confluence, or by providing historical insight, consider ',(0,i.kt)("a",{parentName:"p",href:"#move-a-page"},"moving it")," to the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/mymove-docs/docs/vault/"},"Vault"))," instead. This folder is intended to hold archived, experimental, and misplaced documentation. It will be reviewed periodically and moved or deleted later, if deemed necessary."),(0,i.kt)("p",null,"If you are confident that this page can be truly deleted, first locate the markdown file in GitHub. While viewing the file, click the button near the top right corner that looks like a trashcan."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Delete a page",src:o(20233).Z,width:"270",height:"67"})),(0,i.kt)("p",null,"On the following screen, scroll down to the bottom and commit the deletion just like you would any other change."),(0,i.kt)("h2",{id:"move-a-page"},"Move a page"),(0,i.kt)("p",null,"Moving a page in GitHub is trickier than any other functionality. To do this in the browser, you would need to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Copy all the contents of the page in the old location."),(0,i.kt)("li",{parentName:"ul"},"Create a new page in the desired location, paste in the contents, and save."),(0,i.kt)("li",{parentName:"ul"},"Go back to the old page and delete it.")),(0,i.kt)("p",null,"This is kind of a pain. I would recommend checking the repo out and moving files locally on your machine, if that is something you're comfortable with doing. Some instructions for how to get set up are in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove-docs#running-locally-on-macos"},"README for this repo"),"."),(0,i.kt)("h2",{id:"common-edits"},"Common edits"),(0,i.kt)("p",null,"These are some common edits you might want to make to the documentation. The official documentation for Docusaurus also contains an ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features"},"exhaustive overview of the features available")," to you. It is recommended to read through their docs for more context and instructions."),(0,i.kt)("admonition",{title:"What is frontmatter?",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Frontmatter is the part of a markdown page that contains meta-information about that page. Tags, labels, and sidebar settings can be specified in the frontmatter. For more information, read Docusaurus' ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-frontmatter"},"official documentation"),".")),(0,i.kt)("h3",{id:"change-the-title"},"Change the title"),(0,i.kt)("p",null,"If there is no top-level header, the title of the page will default to the filename. We usually don't want this to be the case."),(0,i.kt)("p",null,"The easiest way to specify a different title is to set a top-level header with the desired value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"# My title\n")),(0,i.kt)("p",null,"This will appear as the name of the page on the sidebar and in the page itself. If you want to specify a different title for the sidebar, you can do so in the frontmatter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"---\ntitle: My sidebar title\n---\n\n# My title\n")),(0,i.kt)("p",null,"If you remove the top-level header from this document, Docusaurus will automatically replace it with whatever you have specified as the title in the frontmatter."),(0,i.kt)("h3",{id:"change-the-sidebar-position"},"Change the sidebar position"),(0,i.kt)("p",null,"Sidebars are set up to autogenerate based on their parent folder (within the ",(0,i.kt)("inlineCode",{parentName:"p"},"docs/")," directory). Without any other instructions, the order of the pages will default to an alphabetized order. If you want to specify a position, you can do so in the frontmatter of a page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"---\nsidebar_position: 1\n---\n")),(0,i.kt)("p",null,"If you are trying to change the position of a subfolder in the sidebar, you can add a ",(0,i.kt)("inlineCode",{parentName:"p"},"_category_.json")," file to the directory in question with the desired position:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "label": "My Subcategory",\n  "position": 2\n}\n')),(0,i.kt)("h3",{id:"change-the-url"},"Change the URL"),(0,i.kt)("p",null,"The URL for a page is tied to the filename, so one way to change the URL is to change the filename. This will be the best option for most situations. The other method is to specify the URL using the ",(0,i.kt)("inlineCode",{parentName:"p"},"slug")," option in the frontmatter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"---\nslug: /other-url\n---\n")),(0,i.kt)("h3",{id:"add-images"},"Add images"),(0,i.kt)("p",null,"Images and all other static files are saved in this repositories ",(0,i.kt)("inlineCode",{parentName:"p"},"static/")," folder. Within this folder, there is a directory for images specifically: ",(0,i.kt)("inlineCode",{parentName:"p"},"static/img/"),"."),(0,i.kt)("p",null,"To add your image, you must first upload it to this folder (ideally in a subdirectory that helps clarify what page it's used on). Once you have uploaded the image, you can embed it in any markdown file with the syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"![Image description](/img/image_filename.png)\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Broken image links will break the build for Docusaurus, so please be careful when moving or renaming images. You must follow the above syntax exactly for the link to work."),(0,i.kt)("p",{parentName:"admonition"},"If the build is broken and the site cannot redeploy, please contact an engineer to help resolve the issue. There will still be an old version of the site deployed, so this is not a crisis.")),(0,i.kt)("h3",{id:"add-a-code-block"},"Add a code block"),(0,i.kt)("p",null,"Code blocks work as they normally do in markdown files, but now you can add titles and highlight important lines. Use this syntax to add a title and highlight:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"    ```js title=\"Hello, JavaScript!\" {2}\n    function helloWorld() {\n      console.log('Hello, world!');\n    }\n    ```\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Hello, JavaScript!" {2}',title:'"Hello,','JavaScript!"':!0,"{2}":!0},"function helloWorld() {\n  console.log('Hello, world!');\n}\n")),(0,i.kt)("p",null,"More variations on this syntax are available in the ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/code-blocks"},"Docusaurus official documentation"),"."),(0,i.kt)("h2",{id:"linking-between-pages"},"Linking between pages"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This section of documentation deals with working with the documentation project\nlocally and can lead to errors or warnings in the server output of Docusaurus.\nFor help, please reach out in ",(0,i.kt)("a",{parentName:"p",href:"https://ustcdp3.slack.com/archives/C027BDJ4678"},"#wg-documentation"),"\ud83d\udd12 if\nyou get stuck.")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/versioning#linking-docs"},"the official Docusaurus documentation")," around linking documentation pages together for\nmore general information. The goal for this documentation is to help ease the\ntransition from linking documentation pages with GitHub wiki versus Docusaurus."),(0,i.kt)("p",null,"So the main differences between GitHub Wiki linking and Docusaurus linking is\nthat linking between documents can be relative to the file you're working with\nor absolute to how it's laid out in the directory structure of the\n",(0,i.kt)("inlineCode",{parentName:"p"},"transcom/mymove-docs")," documentation directory."),(0,i.kt)("p",null,"For example, linking to ",(0,i.kt)("em",{parentName:"p"},"Access a Global Application Variable")," in Docusaurus\nmeans that you can link to it like this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown",metastring:'title="Linking from the file at docs/about/Home.md with a relative link"',title:'"Linking',from:!0,the:!0,file:!0,at:!0,"docs/about/Home.md":!0,with:!0,a:!0,relative:!0,'link"':!0},"[Access a Global Application Variable](../dev/contributing/backend/environment_variables/access-global-variables.md#how-to-access-a-global-application-variable)\n")),(0,i.kt)("p",null,"Notice in the above example that the path (",(0,i.kt)("inlineCode",{parentName:"p"},"../dev/contributing/backend/"),")\nis relative to the file ",(0,i.kt)("inlineCode",{parentName:"p"},"docs/about/Home.md"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown",metastring:'title="Linking from the file at docs/about/Home.md with an absolute link"',title:'"Linking',from:!0,the:!0,file:!0,at:!0,"docs/about/Home.md":!0,with:!0,an:!0,absolute:!0,'link"':!0},"[Access a Global Application Variable](/docs/dev/contributing/backend/environment_variables/access-global-variables.md#how-to-access-a-global-application-variable)\n")),(0,i.kt)("p",null,"Notice in the above example that the path (",(0,i.kt)("inlineCode",{parentName:"p"},"/docs/dev/contributing/backend/"),")\nmatches the directory structure of the ",(0,i.kt)("inlineCode",{parentName:"p"},"transcom/mymove-docs")," project."))}h.isMDXComponent=!0},29418:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/commit_changes-af82619f49bac79eb68b5dd0c196802f.png"},83671:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/create_new_page-aabf549ee6fd60d0e8b0c80aa3dccbd5.png"},20233:(e,t,o)=>{o.d(t,{Z:()=>a});const a="data:image/png;base64,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"},6797:(e,t,o)=>{o.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWQAAAApCAYAAAACqlMmAAABQmlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSCwoyGFhYGDIzSspCnJ3UoiIjFJgf8rAySDOwMVgwmCWmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsisu45hORvvr1hWzPnJ4s4ZzQeY6lEAV0pqcTKQ/gPEyckFRSUMDIwJQLZyeUkBiN0CZIsUAR0FZM8AsdMh7DUgdhKEfQCsJiTIGci+AmQLJGckpgDZT4BsnSQk8XQkNtReEOD0CFAwMkouTyTgVpJBSWpFCYh2zi+oLMpMzyhRcASGUKqCZ16yno6CkYGRIQMDKLwhqj/fAIcjoxgHQiy1jYHBGOhXRl6EWOZkBoadH4BeiESIqe9lYBAC+vng8YLEIoQ/GL+xFKcZG0HY3NsZGFin/f//OZyBgV2TgeHv9f//f2/////vMgYG5lsMDAe+AQBWiWEfqZrcEgAAAFZlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA5KGAAcAAAASAAAARKACAAQAAAABAAABZKADAAQAAAABAAAAKQAAAABBU0NJSQAAAFNjcmVlbnNob3SGKC9AAAAB1WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj40MTwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4zNTY8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpVc2VyQ29tbWVudD5TY3JlZW5zaG90PC9leGlmOlVzZXJDb21tZW50PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KwPw6FQAAGMxJREFUeAHtXQlcVUUX/4OAAqIg4AKWoqmAipJrqLjmnlmfS6mkpmb2WZq45K6pn/ue26eZS5hbpZVmqZUrlJogiiwqaCyyKIsICKLfOfO4l8eTB48nT55+9/x+vDt35syZM+cOZ849c2auyWMCKKBIQJGAIgFFAmUuAdMy50BhQJGAIgFFAooEhATMFDkYrwRiUh4i+m42ku4/REb2YyjvMsb7rP5fODMxAawsTOBgbYaaVSzgbKuokNJ89iaKy6I0xVk6tO7ez0VgdBaS7j0sHYIKFUUCBpKAg40ZmtasgCrW5QzUwv8XWUUhG9nzZqv47PX7ijVsZM9FYUe7BNhq9qprrVjL2kWkc4mikHUWleER2TI+HppeQBnvO5+KgOsZiE7MBnKV9VfDPwWlhSIlUM4ENR0t0LquFfo3ryyjslLu7FpRsZRlieiXUBSyfnIzSK3fwu7LborY1BwsP5KExvQ6OL6LA7zrW6OCOY16BRQJlKEEsnIe42T4faw6loRgcqv5dneAU2VzwRG7Lzo1sC5D7p7/phWFbCTPkF0VZ67dl7nx3ROHke3tMLt3NTlPSSgSMCYJzP0pHltOJGP5wBoyW21eUVwXsjD0SChhb3oIzRBVOJpCAnZTsGWsKGNJIsrVGCXA45PHKY9XCdTHsZSnXHWXgKKQdZeVQTE5tE0C9hmzm0IBRQLGLgEepzxeJVAfx1KectVdAopC1l1WBsXkOGMJeAGPfcYKKBIwdgnwOBULznmMqo9jY+fdGPlTFLKRPJUCmz4omkJZwDOSB6OwUaQExDhVi/4pMI6LrKkUFiYBZZtNYVJR8hQJKBIwGgkk0fLKPYruePAIyH+PfHbscWxTeTJdbSjKycHCsO0qCtmw8lWoKxJQJKCnBLJJAcdkPkYWXcsSeBJgHrIePKaJAXC2NIGFgXwLT5CNpfCr+YcSEBr3oCxlILcdGxePbw8eRmraPTlP18St5BzRl2u8qcII4ejvpxBw7m8j5ExhSZHA00kgPiERW3fsRmLSHb0JGYMy1mSeFTPzZSh4QiGHxj/AzN1xYvuuoRotCd1Dvx7HNr89sLBQBZ+XpG5wdKboy/mozJJU0xv3IT2srafv4vzN4tvLzsnBmg1bcCEwWO/2jLFidHQsvvxqO7Zu2ynYO3DwR/x4+IhIh4aF46vtXxsj22XC0+kzZ2XZlAkDBmz0yLET+P6nn3Hsj9N6tcJuCkNaxpf/yURARLpevDFfzJ8h4AmFbIhGnoZm8JWrqFbVEZYVKjwNmWdSNyM7FyM2/YM1tIupOLgaek2gNG3sXhzqc1OenZ2NN97qh42bv0RMTKzge/2mLdi4abNIX7gYiKUrVj03/TE0o4d/OYodO/0M3UyZ0O/ftxfGjRmFvr276dU++4wNCbvIcFpJG1v0BUPxJ/uQeXWU96MXBc8Sh/l4+OgRIqNuoXNH76LYEmXPmrdiGSoGITD4isDwaOhWDObzUxwecQ0pKSk4+N0+eDRuKBjf981OGlfFDKznp4sKpzpKwMrKEl06ttWKzd/FKGpc8AKeIWECbWrJVosOKWlbhuLPdPhX0TD58DJM3wtC6wXXEZX4pO/4r6gMdFh6A6YjLsHk/UvosjwSgf9kFejDOQ2c5p9HFPBD33uQi75fRMFkZLBoy9k3FAeD0grQ0LwJD1dZkU0aFa60Mil2d8iWf2DygYqm7bgrWPRzgiYZ3E7LUfE/jPgn3IGbboH5UYdtZ1LQaGa44M107BW8QzhpWfk4g6mdulPD1Ksg6k4OTD66jA0n7mC7fwoqj78qyneeTBb57L7QBkGXL8POzhY2NhW1oZQoP+RqKLy8O2P/dwfQo/dbcG/SHIPeex9xcbdlOpweP3EKPFt4CZxNm7eKsqysLLTr+Dp+O3FSxh0ybCSmzZor328nS67/uz7yvWZi99798KE6DCNGj8EHY8aK9KJlK7ByzRcirfmT+zAXCxYtRYcu3QXv3F5Gpsrdo0t/jh3/Xe5r155v4mtybUngO2Ua5s5fiHETJglZsEzYZbJ67XrR/xZe3li8dIWELq7+AecwbMRogf/ukOFg+tpAH/pfbPgvOnfrLehPnTkH/EbxosLFoGAMHjkWIaHhootbd+7Ge6PHIeD8RYwcOxF9Bg4T5SfOBBQqgqLs43azw+A1KxTuY4Mx7qtb8pUJZZJl3XfJNZHn/tEldJ4XjpDYfF3FrorG00LQcWE4VmlYyN5zwjB7byzcJ1+B+8Qr2HFS+5tuUfwV2iEdM023/XYHtelwkKGd7BGakIURm6MLVL1BC2KtPr+GE5fT8earldCrSSUcv3QPnvMi8A8tmjFEkkOl5fzrAqePZyV0aWSDC9cz4TY9jJShagda9xVROPhnKga1tsWEN6oijhX0skgEx+QLq0DDdBN4OURkNc2ztjTL+66Lgt+Ju/BysRL8sw936q44sHJVh093xOIk+XV9vO3gVrU89p5ORu/VN2UU3vo5fONNXLmTjcHtq6BljQrYQzhtF14nK12FdouUL8tCHbJ4GfheLu6k58K1mgWGtbIVxU4UG/Pha3ZoUL28OrqcZuvgRuRNNHZ3lfOeNsFKNS4uDgsWLsE7A/th+FAfBAZdwo6vdwnSXD7yw38jMDAIE33Ho0P7dli0ZJlQYhXIHcSTw5nT/gL37p27OEP+Tfb/PqK3FIY/Tp6Cs7OTSBf206pFcwz1GSyKxo4ZLacT4uORkJRYWBXMmrcAft/swbsDB2Dk+8NEe76Tpwrc4vrzT3Q0RlF/Xqr1EubPnQU31/qYOWcuLlL/GOLjE7Bt+06YW1jg89kzaFE4DW8PGIRDP/+C6VMno2OH9tj43y046/+nwI+MjBITCfd37qzpsKlsI+hfvqIagwJJ7aek9HmyWE7umpYtm2PuzGkID4vAt99+r0bxxUpmZGYhjRbiHzxQGXjJyalITk7BkpXrUMelFpq/2lSUr/xik3gTLknv79D/aW/PymhC52YcvZSGNaNr4+i5FMSQPuLn1/BlS/hNrItvptRD5Qqm6Lf2hky+TrUK8PvQBa1ftsJNDeMzifTYvoC7WPpuTfRtZotFe+PwyFCaV+aoYMLM8xUrXJhVT7grsnKc8dKkq0gi5SPBuG/IF0izzvEZr8gnOf1IQuizNBJT9t/GrlEv4ZNdhEM2/JHP6qJbQ5XFx0puwOoorD2ehPl9q+NsSDpau1WE38iXBOkxHe2x+HACEkmZaYNLl6+iUiUb2NnmH/OnjssKr9OgGpjSo6rI/s9b1eH88RXsP5+CYW1UylEUWJoieakrKluqDtF+fUUkjl1Mw6mI+2hXzxoDyPoF4SQudgWfWMUw1i8G6+i0td30oIfkKVpRoOWnVR0ruDmVB09wnd2tscHHWQsmcO3GTeTmPoKHFstfa0UdCubMnI43+/QSmPEJCfj5l18xZdIEnA34CyEhV/HH8V9Q62XVM0hLT8dXO3ZiyOCBaOvlhdNnz4p6p84GoFatl3Hz5i2wpdrQ3Q1//nVeKD5tLLi41Ebbtl5kga5D1y6dUaNGdW2oIj8jIwO7du3GkoXz0b/f2yKvWjVHjP1kApLJ7SGBtv5UtLbG7l070NzTE+XMyqF3z+44Shbt+QsX4dm0iaju2qABli1aINI8CU7+bDpWLV8MdzdXvN23D/bt+5b6dxVer7XCrj37YF/FDls2raMFZAu8/eab6NHnLezd/x0aNSzcz18S+jv8dqFbt9excN4cwU93Snt30s+/Kgg8pz8jhg5Cr66dBPcHDv2CL7fvIiMhmBS06pnp2q0uHpVgRcHBaZm56NLYBjA1QQKdkOhsZ4UF7zjjRsID/En/33XJuAqNzJDJ8tdOPEhhO5IRynU1wcfbHr1I2bciZX/g1B1cJeu6ofOzW78ym967quw75l03k0m5Tf46RuYz4EYGarLiUztW7w0ShjV9usX/mqqjp+hAdSeyPCVlzJX5rNRHO1RCZheiSWUzBFxNx7jdsfAh67EZCWXz0JpyO4UlwiOuo5mnR2FFIm/NuyqLLYKEfzv1Ie7QecIMt9QO6uF7384OsjLm+zl9qgqF7E98N3QiYVO94Z3tZWXMOLP6VBMK+QwdNaiLQuY6ukJQ8GWB6unRSNcqOuNJvluu0LSxh2yFBV9W+axXf7FepvX99wdFmq2Ytm28sIEW3zLJsjnj74+ur3dBeHgEzpBytjA3RyYp0DZerYVV0713X5kGJzp2bI8FZKWWBK7Q5MCwn3jw/+ucSCdQqBQDTxyWlpYira0/dnZ2qGJXBes2bkZsbCxS76UJHiWXB1d2dWsgaPCPna1qgq5du5bIMzU1pUmjBh5kq4yPQxQJwm8Yn82YLdeJiIggt4LKwpMz1RK60s+hiBqm9f4wH7m2jY0NWjR/lSaf/IN55MIXONGx7Wty71qSlcwKOTgktMQKubyZKczpbObyZqRcGCg84UHOI+EXbjqDxhaFQjQmHZPOIREEOeQvZvziwKOWlUCRDLNUtTNmiqtbGuVmbqyQ1MDdyULtjsI7yFru2IRmIA1wr2qBc5Eqf1/q3Yd4tYnqH0gdTX0t58+JLui79hbWHEoUf7z1ZXIPRyz+V+GW1M1b0eCB3KRR4dYJt7OFfLSjttHkoeFhJ9dkAXCvUbBPbjRrMlyOeSA+lcRpKY/TDFXZUqZZ9xKd+VraEEiWvxUpnKqODqVNGubm+X01M1e9EXAjWXm+WQd7e7nNnr26w9HeAbn0mte8mafIDyTf3+nTZ7F00XxUr1YNv/1xAtZW1qhTpw5Fu1QVr6A+PoNkGpyok6fkCmQWc5ORoRo77AaReLInJVuxojXsiUe2oBm09Yf9vYN8hgpL/rXXWtNrsMsTLRa1aKSJnFmIfF7v2kVY4Jq40r2u9B/mDUi2vNXBvHzBe/WyFzXNi30S2NpWEsnHpegX2OefLJRx0LKGQgGv+yUB68hv/Iw9D1IXS3w144Up9xrl5YqRSfnuCpFpU44+tKmRRwW3kh+imq25QGHrNzLxSRyZKCVa1LZCzHJXsdB3IDAV8w8nYsmBeFQjxTeh65OKSYpCaNqkcCuSN7CMohCzylXMsGyYM9rSJ2QciZbDhJAnzoGIVHPBME838+5r05cPGlRT9f1mUkFLSCzo0UCpSxOPDBqhOLyAoA+Ekf/QvRT9x7rw4EZuB4aPPxpNC4mqCZat4dS0VDE5cFkbspL3fvutsBRbNG+GatWrY96ChWLh0btdG0ZB+fLlMWbUCJF+mh92GzD07tkDnTp4i3QuOewTyd/s6OCAoOCi47N/PHwYDjSh/fbrYbC1y1b++g2bBB19fnr06IbLtNA6bcpEuXpKaip9vUW/ZywToYSlZQXUrOmMv8m/za4SBu7rJZr8qpOMFSg9CTxi5U7WcGpGLhLom5QbT2hfmCu9VkuPkuk2jUiAbafuFqDenhbMIsiSZLeABGw1xvNin4tqtutEOFHka1FfoLt4Kwu1JodiLflU42lhbzVdOTLDlZT/Z+QWufp5fUGOvx9XGPCCnjm9KtfU4ouUDnOf1M0RI9tWEXTvZtACYqbqFUWd5tdnUwo4578k3xBD6zp5h2mTtb7nXCqyH+b/8207QzMt49Cnahhq2tHkQw87SM1iPhpSMEpEeiNIzFvIFBU1fuJuJ9AWzAdoWoTlr1GlVG69WrWELb22j/n4U7Hw9TfFBPd7ZzCGj/hQpu/dtg0OHPgB7b3bCT/qK3VcxGv9kSO/oh2VlSY4kjJt2bIFZlBkxYmTp4V7ZOLUaXitXccCPmRtbVYlpZ2UmESLjaq6E6ZM1YaqU34vUsjBFIo4b8FihFE0xq/HjovIj7XrNor6B384JCI62C+vD7zRqyf8/L6B3+694IXC6bPmIDo63zWoD80XuU7xzoUnw3RNYIK3ab2nhmN5eE8JQb/54WhSQ6WjJHqD19wAR1+wfziYfMycfpVdHHlgKv0T591L9aRy6aotXyrX92q2jxTPO0Tdm3zE311Iw4WIfAc4E51DvtSOIqriGqaSi4EnoFm0tZpf56dTtATD3DerisgLjwXXMJ980mxUzGQcikDo1qgiOd9NMH47DT7yUa8a5IRXHM2x6qhKKfb2qCxoaP6EkhXp2qCeZrZ870VOd4aZZGnzYl02Wau+392Wy9UTPFl4/ec6hnjZ4m+Ktvjq+B3hF+/iqqIxt29VzN5zmyJFrmGEdxVco8lnzc9Jwk8+OG9Bz7uBFXbTZNVzZRQm9SRlkEYhW2Thq4NN+XLCYj8SfA+zfojHoBa2YqJQxwm8pPIfN/VwV89+6nRhr8/qeQ4O9ti+dTOmzpiFt/u/K9prSotfq5YtlttuR4tyC+lWsoa5oF27tti7dx9at2oh42lL8D+EJqjzoFm2af0ajJ8wmULNPhBF7NPd+uUmMK8cRaEJ6rSGktvkjH8ARoxSTSgDBvQXVqjEg+Y/lkRLKpfv81huQ24PXmBcs24D7TLcLor7kjU7acJ4kY6Nv01hc2G4l36fXDc8/J/sKyNqo+87fhxukzKfMXOOoNe6VSuwyygpUfV/IDKVH1kCZCNp3akX8kVjgdekliU+6qrSQSFrVHlccHxmfcSl5KCylRl4EU8d/D6po35bIC3RlTJD1mtfv2L+DAFmzepZiRAvDvNi18Miilr4jELHpMHfgRT1nnG1RSTFjG/iBA+8gLd+tBNakhuCgT/bsv+TWvi3XywkHNBnwQ+Q37g+4TL8PKkOelJo2XiKexZAynlGv+oFoyFUJWL/ezoN/KI2TTjTouJKclVwSNvHW1U0P+rmgA0B+Sv0JiYqqXE7G3+/I+O50YM84usCi7wFgVkUJH4v6zGW0Q67T/L4a1jbEj+Nd5EXA8e0t8fvV++DJ7BP2W9NE9JUmogWfh8vL4oy+4v/VQMfbovGvH23wQqa3wjU4SJZYeXKmaJ2XqSDetnTpD2z0hE5wxeIjiRznhY7A85gYEYKBu7crCJL9x5hoTg0dQIyPDxhfs4f5lFRQBxFmFBEBeO7UXkk47cma5juQfeL3+iKxQvmyvdo4FqgXP2+mVSf32ry6m8ZPljGH/zgHgZvWi3zY0v420a9h+wNa5F78ndYxtBzzDu1pbj+2IWFYF/3DsgePRQPW7WBVdDfQH3qB/NHsGP0MMG/4IP608XaQiWfoAsyP2dHkC88D5/x+t9PRv+Fc5Ds2hB2Vy5ROEwEkIc/prErxkz7FEiIJae5S4nplzvvjxUNX8HyPhtwz+NVVAoh+tR/uX3B9Yv4o/ofLGz+knRMIfO4OFmND/PRF2rkuVP1rV9cPT75zRAgvqnHGyySyefiREquKEjNCxORwscKw2UcXsOwr5i/oKSOl0zlmSTooto69vtprN6wGcsWzEKDenXVqz+RZmv8Jvm42RdtqTEbaiJzTDTPmJUqFM4b48dRtIY9TSaSstakkUOvCDHkP2cXBi30Fgr8FpFOcdaskDUH4pAPPoETmVhL5s0oUHev2mdwBq6OwuOdqgiVAkhF3YxTWYoCZTW9Ziv3+dJ6HuSRz+1zlzLxCRJGm8T4ALWvUUt5+lwj75f9SW+F8U2hzXCxNoxCFiqFFVlRClJiihVxUcqY8bhcmzLmcjsqL66toDwrsl5dF65SJLDCq21vXqwyZiLVK5kVqYwZpwa9JWhTxlxuTpYxt6dNGTMOoYh2NJVxSmoaUinMycMQ/mMnZ7LmyOriK4Ny/3zJQ/XUlF81CfAxl6z8jAmYH+bLUGCUX52eu3glzM3MMM33Y0P1u0zoXqJ4yxVrN2HqhLFPWP5PbSGXSY+URhUJkN/cQBayJFs+WU05oF6SRhlcZ08hX90LCB4U6rZtw8oXsGdKlxQJGE4C/JUOh2LckYZr/dlSNrIXgmfbeWNqrYB7g3YUZekZ42xMfVJ4efElIMap2g64AuP4xe9+qfdQUcilLlL9CKqH59SkDSsnacu2AooEjF0CPE55vEqgPo6lPOWquwQUhay7rAyK6WCdH+HCm1FW6XDIvUEZUogrEtBBAjxOpc1TjK4+jnWorqBoSEBRyBoCKavbmlXyrQw+mCmYdgTO1Tivtax4U9pVJFCYBHh88jjl8SqB+jiW8pSr7hIwyigL3dl/sTB/C7uPJNp/zxBLRwkup+M/G9esgPFdHOBd3/qJMzperN4rvXkeJMA+Y3ZTsGXMyti3uwOc6ChLBj4hTf1UyOehP8bGo6KQjeiJ3KVjQI+Hpout5xJbfK50wPUMRPPh+E/xyRmJnnJVJPBUEqAFPPYZs5tC3TLmxbzOrhVRhTZVKaC/BBSFrL/sDFIzhk6x4wOXSuGQMYPwpxBVJKApAVbGXnTaIh9noMDTSUBRyE8nP4PUZks5kF4HJfeFQRpRiCoSKAUJsJuiKbnVFMu4FIRJJBSFXDpyNAgVtpaj6esnSfTVggw6b0Sxmg0iZoVoCSTA1jCHtnE0BS/gKVZxCYSnA6qikHUQkoKiSECRgCKBZyGB/wEgBNGMq/JIOAAAAABJRU5ErkJggg=="},48336:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/edit_this_page-8dae10ac857f92f1371d60cc066fc73b.png"},29578:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/preview_page-44656f544406fca8ad83128c32f5723d.png"}}]);