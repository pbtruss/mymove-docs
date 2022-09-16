"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2321],{27427:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var i=a(87462),n=(a(67294),a(3905));a(61839);const l={title:"0004 Use Both Absolute and Relative Paths for Imports"},o="Use Both Absolute and Relative Paths for Imports",s={unversionedId:"adrs/path-imports",id:"adrs/path-imports",title:"0004 Use Both Absolute and Relative Paths for Imports",description:"Imports should be as easy to use and consistent as possible across the project.",source:"@site/docs/adrs/0004-path-imports.md",sourceDirName:"adrs",slug:"/adrs/path-imports",permalink:"/mymove-docs/docs/adrs/path-imports",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0004-path-imports.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"0004 Use Both Absolute and Relative Paths for Imports"},sidebar:"adrsSidebar",previous:{title:"0003 Go path and project layout",permalink:"/mymove-docs/docs/adrs/go-path-and-project-layout"},next:{title:"0005 Use Create React App",permalink:"/mymove-docs/docs/adrs/create-react-app"}},r={},p=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"Absolute Paths",id:"absolute-paths",level:3},{value:"Relative Paths",id:"relative-paths",level:3}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-both-absolute-and-relative-paths-for-imports"},"Use Both Absolute and Relative Paths for Imports"),(0,n.kt)("p",null,"Imports should be as easy to use and consistent as possible across the project."),(0,n.kt)("p",null,"Create-react-app allows for either relative or absolute imports.\nDevelopers should maintain consistent patterns, best set early on."),(0,n.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Relative Paths"),": depending on where in the app the import is, to get to the same file (",(0,n.kt)("inlineCode",{parentName:"li"},"feedback.jsx"),") could look like either of the following",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"./feedback.jsx")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"../../../src/scenes/feedback/feedback.jsx")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Absolute Paths"),": For both of the above examples, the absolute path is the same",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"scenes/feedback/feedback.jsx")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Implementation"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Add ",(0,n.kt)("inlineCode",{parentName:"li"},"NODE_PATH")," to ",(0,n.kt)("inlineCode",{parentName:"li"},".env")," file--this file contains environment variables that are sourced into the shell that runs the app. Typically, it's not checked into Git. However, in this case, it would be, because we would want all devs to be able to use this same variable. So we'd be somewhat altering the ",(0,n.kt)("inlineCode",{parentName:"li"},".env")," file's intended application."),(0,n.kt)("li",{parentName:"ul"},"Add ",(0,n.kt)("inlineCode",{parentName:"li"},"NODE_PATH")," to build scripts in ",(0,n.kt)("inlineCode",{parentName:"li"},"packages.json"),". Avoid using the ",(0,n.kt)("inlineCode",{parentName:"li"},".env")," file altogether, and set the necessary variable before each script is run."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Combination"),": Use whichever option is cleanest and easiest to understand.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"./feedback.jsx")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"scenes/feedback/feedback.jsx"))))),(0,n.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Chosen Alternative: ",(0,n.kt)("em",{parentName:"p"},"Combination"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Absolute Paths allow developers to immediately understand where imports are coming from. They also allow files to be moved without changing all the local import statements. The clarity of these imports will become more valuable should our project structure become more nested.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Meanwhile, using relative paths allows developers not to be dogmatic when importing a module from within the same dir, and acknowledges that all imports outside of the ",(0,n.kt)("inlineCode",{parentName:"p"},"src/")," dir require relative paths.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Our policy is that relative paths should only be used on imports ",(0,n.kt)("strong",{parentName:"p"},"outside of the ",(0,n.kt)("inlineCode",{parentName:"strong"},"src/")," dir and when importing from within the same directory"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Consequence: Our implementation sets the NODE_PATH environment variable before each build script in ",(0,n.kt)("inlineCode",{parentName:"p"},"package.json")))),(0,n.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,n.kt)("h3",{id:"absolute-paths"},"Absolute Paths"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Are consistent no matter the complexity of relationship between import and module"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Developers can immediately see the origin of the import"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Should structure of files change, all imports can remain the same"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Can copy/paste imports between files"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Cannot use without setting a NODE_PATH var"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Cannot use for all paths--such as those outside of ",(0,n.kt)("inlineCode",{parentName:"li"},"src/")," dir"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," In cases of import from a close module, unnecessarily lengthy")),(0,n.kt)("h3",{id:"relative-paths"},"Relative Paths"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Can use without setting a NODE_PATH var"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Can use for all paths--even those outside of ",(0,n.kt)("inlineCode",{parentName:"li"},"src/")," dir"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Become chaotic and sloppy if imports traverse many directories"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Developers cannot immediately see the origin of the import"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Should structure of files change, all imports have to be changed as well"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Cannot copy/paste imports between files")))}d.isMDXComponent=!0}}]);