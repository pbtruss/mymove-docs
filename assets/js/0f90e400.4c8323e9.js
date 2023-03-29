"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[7215],{43582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));n(95657);const o={title:"0039 Use React Lazy for code splitting",description:"Decision outcome: Use React Lazy\n"},r="Use React Lazy for code splitting",s={unversionedId:"adrs/react-lazy-and-code-splitting",id:"adrs/react-lazy-and-code-splitting",title:"0039 Use React Lazy for code splitting",description:"Decision outcome: Use React Lazy\n",source:"@site/docs/adrs/0039-react-lazy-and-code-splitting.md",sourceDirName:"adrs",slug:"/adrs/react-lazy-and-code-splitting",permalink:"/mymove-docs/docs/adrs/react-lazy-and-code-splitting",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0039-react-lazy-and-code-splitting.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{title:"0039 Use React Lazy for code splitting",description:"Decision outcome: Use React Lazy\n"},sidebar:"adrsSidebar",previous:{title:"0038 Use Soft Delete Instead of Hard Delete",permalink:"/mymove-docs/docs/adrs/soft-delete"},next:{title:"0040 Add Role-Based Authorization",permalink:"/mymove-docs/docs/adrs/role-base-authorization"}},l={},d=[{value:"Example using current method",id:"example-using-current-method",level:2},{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Example using React Lazy",id:"example-using-react-lazy",level:3},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"Leave things as they are",id:"leave-things-as-they-are",level:3},{value:"Use React Loadable",id:"use-react-loadable",level:3},{value:"Use Loadable Components",id:"use-loadable-components",level:3},{value:"Use React Lazy",id:"use-react-lazy",level:3}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"use-react-lazy-for-code-splitting"},"Use React Lazy for code splitting"),(0,i.kt)("p",null,"As things stand we use a standard React import pattern when we need to utilize\nexported components in other source files. One such example of this scenario occurs when\nwe use routes to dynamically determine what content to present our users with, such as in\n",(0,i.kt)("inlineCode",{parentName:"p"},"scenes/office/index.jsx")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"scenes/MyMove/index.jsx"),"."),(0,i.kt)("h2",{id:"example-using-current-method"},"Example using current method"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import EditContactInfo from 'scenes/Review/EditContactInfo';\n...\n<Switch>\n...\n  <ValidatedPrivateRoute exact path=\"/moves/review/edit-contact-info\" component={EditContactInfo} />\n...\n</Switch>\n")),(0,i.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Leave things as they are"),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/jamiebuilds/react-loadable"},"React Loadable")),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/smooth-code/loadable-components"},"Loadable Components")),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/code-splitting.html#reactlazy"},"React Lazy"))),(0,i.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chosen Alternative: ",(0,i.kt)("strong",{parentName:"li"},"Use React Lazy"))),(0,i.kt)("p",null,"This option allows us to ensure we are only loading what's required into the users browser for components as they are\nfirst rendered. The technique can be effectively implemented in places where routes as used to dynamically decide\nwhat component to offer the customer. Introducing this into those places allows us to gain performance benefit without\nthe introduction of significant complexity."),(0,i.kt)("p",null,"While React Loadable has been implemented in the project before, such as in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/App/index.js"),", it is no longer actively\nsupported, which is why utilizing an alternative like React Lazy is preferable."),(0,i.kt)("p",null,"Using this specific tool allows us to make use of the pattern in a way that should be compatible for upcoming\nperformance focused React features that we may find desirous to use in the future."),(0,i.kt)("h3",{id:"example-using-react-lazy"},"Example using React Lazy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"...\nconst DocumentViewer = lazy(() => import('./DocumentViewer'));\n...\n<Switch>\n...\n    <Suspense fallback={<LoadingPlaceholder />}>\n      <RenderWithOrWithoutHeader\n        component={DocumentViewer}\n        withHeader={false}\n        tag={DivOrMainTag}\n        {...props}\n      />\n    </Suspense>\n...\n</Switch>\n")),(0,i.kt)("p",null,"In this example we use ",(0,i.kt)("inlineCode",{parentName:"p"},"Lazy()")," combined with ",(0,i.kt)("inlineCode",{parentName:"p"},"import()")," to bring in our needed component. This combination is what\nallows us to ensure that it isn't presented to the browser until first render, which in this case should be when the\ncustomer navigates to this route. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Suspense")," tag provides an alternative thing to render while our content loads."),(0,i.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,i.kt)("h3",{id:"leave-things-as-they-are"},"Leave things as they are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," No changes needed to be done."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," No improvement in front end performance")),(0,i.kt)("h3",{id:"use-react-loadable"},"Use React Loadable"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Performance improvement for frontend app"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Risk introduced due to library no longer being maintained"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Increase in verbosity for frontend routes")),(0,i.kt)("h3",{id:"use-loadable-components"},"Use Loadable Components"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Performance improvement for frontend app"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," React team recommends this library for some use cases (server side rendering)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Increase in verbosity for frontend routes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Abstraction layer on top of a relatively new React features. Unknown how this might interact with\ndevelopment by React team on ",(0,i.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/concurrent-mode-intro.html"},"Concurrent Mode"),", which we\nmay want to use in the future.")),(0,i.kt)("h3",{id:"use-react-lazy"},"Use React Lazy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Performance improvement for frontend app"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Developed by React Team"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Designed to eventually interact with ",(0,i.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/concurrent-mode-intro.html"},"Concurrent Mode"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Increase in verbosity for frontend routes")))}p.isMDXComponent=!0}}]);