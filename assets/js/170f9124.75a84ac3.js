"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9059],{10324:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var r=i(87462),o=(i(67294),i(3905));i(95657);const n={title:"0050 Fork & maintain react-file-viewer under @trussworks"},a="Fork & maintain react-file-viewer under @trussworks",s={unversionedId:"adrs/doc-viewer-fork",id:"adrs/doc-viewer-fork",title:"0050 Fork & maintain react-file-viewer under @trussworks",description:"User Story: MB-2346 Orders Document viewer (PDF)",source:"@site/docs/adrs/0050-doc-viewer-fork.md",sourceDirName:"adrs",slug:"/adrs/doc-viewer-fork",permalink:"/mymove-docs/docs/adrs/doc-viewer-fork",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0050-doc-viewer-fork.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"0050 Fork & maintain react-file-viewer under @trussworks"},sidebar:"adrsSidebar",previous:{title:"0049 Do not update child records using parent's E-tag",permalink:"/mymove-docs/docs/adrs/etag-for-child-updates"},next:{title:"0051 Use only Swagger supported formats for dates",permalink:"/mymove-docs/docs/adrs/swagger-date-formats"}},l={},d=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"Fork react-file-viewer and open PRs for improvements back to the original repo",id:"fork-react-file-viewer-and-open-prs-for-improvements-back-to-the-original-repo",level:3},{value:"Copy and paste the react-file-viewer source code directly into MilMove",id:"copy-and-paste-the-react-file-viewer-source-code-directly-into-milmove",level:3},{value:"Build our own document viewer from scratch",id:"build-our-own-document-viewer-from-scratch",level:3}],u={toc:d},c="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fork--maintain-react-file-viewer-under-trussworks"},"Fork & maintain react-file-viewer under @trussworks"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"User Story:")," ",(0,o.kt)("a",{parentName:"p",href:"https://dp3.atlassian.net/browse/MB-2346"},"MB-2346 Orders Document viewer (PDF)")),(0,o.kt)("p",null,"The goal of this story is to build out a new document viewer component that implements the custom UI that has been designed, and improves user experience for viewing uploaded PDFs and images over the existing solution (which relies on the native browser PDF viewer)."),(0,o.kt)("p",null,"Fortunately we've found an existing ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/plangrid/react-file-viewer"},"file viewer library for React")," that is open source, supports many different file types, and has a well-structured and easy-to-understand source code."),(0,o.kt)("p",null,"Unfortunately, using this library out of the box is not ideal for a few reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There is no way to customize the HTML markup used for PDF controls (zoom) which is needed, not just to customize the styling but also to make sure we're meeting a11y standards"),(0,o.kt)("li",{parentName:"ul"},"There are no existing rotation controls and no way to add them without editing the source code"),(0,o.kt)("li",{parentName:"ul"},"The library does not appear to be actively maintained, the last release being September 27, 2017")),(0,o.kt)("p",null,"It's my opinion that it would be beneficial for Truss in general to have a go-to library for displaying embedded binary files in React apps. Thankfully, using this library as a starting point gives us a solid foundation to extend and build off, and I don't believe will require a significant amount of overhead for completing the related stories. My suggestion is for us to fork the library under the @trussworks Github org, publish it to npm as @trussworks/react-file-viewer, and maintain it as open source, while expanding on it with features needed for MilMove\u2019s implementation but keeping it abstract enough for other applications as well."),(0,o.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fork & maintain react-file-viewer under @trussworks"),(0,o.kt)("li",{parentName:"ul"},"Fork react-file-viewer and open PRs for improvements back to the original repo"),(0,o.kt)("li",{parentName:"ul"},"Copy and paste the react-file-viewer source code directly into MilMove"),(0,o.kt)("li",{parentName:"ul"},"Build our own document viewer from scratch")),(0,o.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Chosen Alternative: Fork & maintain react-file-viewer under @trussworks"),(0,o.kt)("li",{parentName:"ul"},"With this option, we can immediately start editing & using the library to meet the requirements of MilMove, but also continue to maintain it for other future Truss projects as well."),(0,o.kt)("li",{parentName:"ul"},"This means that Truss will have another JavaScript open source library to maintain, which does mean some overhead internally. However I think this is a beneficial area for us to develop more experience in, and establishes further practices around sharing common frontend code.")),(0,o.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,o.kt)("h3",{id:"fork-react-file-viewer-and-open-prs-for-improvements-back-to-the-original-repo"},"Fork react-file-viewer and open PRs for improvements back to the original repo"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"+")," Truss takes no ownership of the library and doesn't have to maintain it or take responsibility for publishing future releases"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"+")," We might benefit from other contributions from the existing userbase if others also take this approach"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-")," The Github repo shows little to no activity by maintainers since fall of 2019, and this could indicate they are no longer interested in maintaining it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-")," We have less autonomy to take the library in a different direction (such as if we wanted to convert it to TypeScript)")),(0,o.kt)("h3",{id:"copy-and-paste-the-react-file-viewer-source-code-directly-into-milmove"},"Copy and paste the react-file-viewer source code directly into MilMove"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"+")," This is the most direct and (maybe) fastest way to get document viewer code into MilMove's codebase"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"+")," We can edit the source code specifically for MilMove's needs without worrying about keeping it extensible"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-")," The existing code was built under a different environment (i.e., with different webpack config, different lint rules, different dependencies) and some number of adjustments would be required to consolidate that"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-")," We would not immediately get the benefits of a shared library for other Truss projects that might need similar functionality")),(0,o.kt)("h3",{id:"build-our-own-document-viewer-from-scratch"},"Build our own document viewer from scratch"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"+")," We could use react-file-viewer as inspiration but write our own code directly in MilMove"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-")," This would probably be the most time consuming option, to set up everything from scratch in the MilMove code environment"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-")," We would not get the benefits of a shared library for other Truss projects that might need similar functionality")))}m.isMDXComponent=!0}}]);