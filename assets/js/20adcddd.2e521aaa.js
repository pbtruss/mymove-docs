"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[1579],{25837:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=o(87462),a=(o(67294),o(3905));o(8209);const i={title:"0017 Client side route restriction based on authentication"},n="Client side route restriction based on authentication",s={unversionedId:"adrs/react-router-redux-authentication",id:"adrs/react-router-redux-authentication",title:"0017 Client side route restriction based on authentication",description:"User Story: #155131945",source:"@site/docs/adrs/0017-react-router-redux-authentication.md",sourceDirName:"adrs",slug:"/adrs/react-router-redux-authentication",permalink:"/mymove-docs/docs/adrs/react-router-redux-authentication",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0017-react-router-redux-authentication.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"0017 Client side route restriction based on authentication"},sidebar:"adrsSidebar",previous:{title:"0016 Browser Support for Prototype",permalink:"/mymove-docs/docs/adrs/Browser-Support"},next:{title:"0018 Optional Field Interop",permalink:"/mymove-docs/docs/adrs/optional-field-interop"}},d={},l=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives  optional ",id:"pros-and-cons-of-the-alternatives--optional-",level:2},{value:"PrivateRoute component that is used for routes with restricted access",id:"privateroute-component-that-is-used-for-routes-with-restricted-access",level:3},{value:"HOC to wrap components that should be restricted to logged in users",id:"hoc-to-wrap-components-that-should-be-restricted-to-logged-in-users",level:3},{value:"EnsureLoggedInContainer to create a section of routes that",id:"ensureloggedincontainer-to-create-a-section-of-routes-that",level:3}],u={toc:l};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"client-side-route-restriction-based-on-authentication"},"Client side route restriction based on authentication"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"User Story:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.pivotaltracker.com/story/show/155131945"},"#155131945")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"We want the loggedIn state of the user and basic user information (e.g. email address) available in redux state. We also want to be able to restrict access to client routes to logged in users.\n")),(0,a.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PrivateRoute component that is used for routes with restricted access"),(0,a.kt)("li",{parentName:"ul"},"HOC to wrap components that should be restricted to logged in users"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/the-many/adding-login-and-authentication-sections-to-your-react-or-react-native-app-7767fd251bd1"},"EnsureLoggedInContainer")," to create a section of routes that")),(0,a.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Chosen Alternative: ",(0,a.kt)("strong",{parentName:"p"},"PrivateRoute component that is used for routes with restricted access"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This is how most of the samples examined worked. In particular, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ReactTraining/react-router/blob/master/packages/react-router-redux/examples/AuthExample.js"},"react-router-redux example code")," worked this way. However, it is important to note that this only works if the routes are contained by a react router Switch."))),(0,a.kt)("p",null,"There was also work done to build ducks for user state. Here we are using ",(0,a.kt)("inlineCode",{parentName:"p"},"js-cookie")," to retrieve the jwt token and ",(0,a.kt)("inlineCode",{parentName:"p"},"jwt-decode"),' to extract the user email. Since login and logout are both performed by a server redirect, there is only one action at present to load the user and token. This action is called when the main route "/" is hit. A fair amount of exploration was done to find a way to fire this action whenever a new route is hit, but every example involved react router api that was removed in 4.0. We will need to do future work to handle expiration.'),(0,a.kt)("h2",{id:"pros-and-cons-of-the-alternatives--optional-"},"Pros and Cons of the Alternatives "),(0,a.kt)("h3",{id:"privateroute-component-that-is-used-for-routes-with-restricted-access"},"PrivateRoute component that is used for routes with restricted access"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Straightforward implementation"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Dependency on Switch is not obvious from code (and behavior without it is strange and alarming)")),(0,a.kt)("h3",{id:"hoc-to-wrap-components-that-should-be-restricted-to-logged-in-users"},"HOC to wrap components that should be restricted to logged in users"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," HOCs are the react way"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Felt more complicated than needed for this use case. (Though a similar mechanism would work well for ",(0,a.kt)("a",{parentName:"li",href:"https://hackernoon.com/role-based-authorization-in-react-c70bb7641db4"},"authorization"),". There is a stub of code for that for the future in ",(0,a.kt)("inlineCode",{parentName:"li"},"src/shared/User/Authorization.jsx"),")")),(0,a.kt)("h3",{id:"ensureloggedincontainer-to-create-a-section-of-routes-that"},"EnsureLoggedInContainer to create a section of routes that"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," seemed like a nice way to group restricted routes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Doesn't work in react router 4.0")))}c.isMDXComponent=!0}}]);