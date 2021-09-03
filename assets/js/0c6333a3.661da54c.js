"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9025],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7387:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],s={},l=void 0,d={unversionedId:"old-wiki/Disabled-or-Hidden-Moves",id:"old-wiki/Disabled-or-Hidden-Moves",isDocsHomePage:!1,title:"Disabled-or-Hidden-Moves",description:"Overview",source:"@site/docs/old-wiki/Disabled-or-Hidden-Moves.md",sourceDirName:"old-wiki",slug:"/old-wiki/Disabled-or-Hidden-Moves",permalink:"/mymove-docs/docs/old-wiki/Disabled-or-Hidden-Moves",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/old-wiki/Disabled-or-Hidden-Moves.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Designers's guide to setting up app locally",permalink:"/mymove-docs/docs/old-wiki/Designer's-guide-to-setting-up-app-locally"},next:{title:"Dockerfile-use,-purpose,-and-documentation",permalink:"/mymove-docs/docs/old-wiki/Dockerfile-use,-purpose,-and-documentation"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Support API",id:"support-api",children:[]},{value:"Admin Interface",id:"admin-interface",children:[]},{value:"The Rest of MilMove",id:"the-rest-of-milmove",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,'Office users can mark moves as "cancelled" and stop their progress through MilMove, and these moves need to stay visible to the TXO, the customer, and potentially even the Prime (if they were cancelled after being approved and sent). Costs may have been accrued and decisions that must be documented were likely made before this move was cancelled. '),(0,i.kt)("p",null,"In contrast, there are also situations where the preferable course of action is to completely hide the move from all users and operate as if it never existed, such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"when there is suspected malicious activity and a move was erroneously created,"),(0,i.kt)("li",{parentName:"ul"},"when a move was created in a testing environment without using the USTC-approved fake names and addresses,"),(0,i.kt)("li",{parentName:"ul"},"when bad data is entered into a move that fatally breaks parts of the system, or"),(0,i.kt)("li",{parentName:"ul"},"when fake moves are added from external processes, such as load testing or hackathon events.")),(0,i.kt)("p",null,"To allow for this functionality, we add the boolean ",(0,i.kt)("inlineCode",{parentName:"p"},"show")," field to the ",(0,i.kt)("inlineCode",{parentName:"p"},"moves")," table. If this field's value is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", then the move is considered valid and active within MilMove. If this value is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", it is considered disabled or deactivated and is hidden from all views in the app. There are only two parts of the app that can ever be used to work with hidden/disabled moves: the ",(0,i.kt)("strong",{parentName:"p"},"Support API")," and the ",(0,i.kt)("strong",{parentName:"p"},"Admin Interface"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"No other part of the app should EVER be able to interact with or view disabled moves.")),(0,i.kt)("h2",{id:"support-api"},"Support API"),(0,i.kt)("p",null,"This API can only be used while testing the app - it will never be functional in the production environment. All of its endpoints can be used to view and modify hidden moves. Currently, the only way to actually mark moves as hidden or disabled is the ",(0,i.kt)("inlineCode",{parentName:"p"},"hideNonFakeMoveTaskOrders")," enpoint, which will automatically identify any moves using non-USTC-approved fake data and hide them from view. "),(0,i.kt)("h2",{id:"admin-interface"},"Admin Interface"),(0,i.kt)("p",null,"The Admin Interface is intended to be used by MilMove admins (currently only Truss engineers) to manage user creation/authorization, revoke sessions, and disable or reenable specific moves. This interface will be available in production. To hide/show a field:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Log into the the Admin Interface:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://admin.exp.move.mil"},"Experimental")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://admin.stg.move.mil"},"Staging")))),(0,i.kt)("li",{parentName:"ul"},'Navigate to the "',(0,i.kt)("a",{parentName:"li",href:"https://admin.exp.move.mil/system/moves"},"Moves"),'" tab on the left nav panel. '),(0,i.kt)("li",{parentName:"ul"},"If you are looking for a specific move, you may enter its locator code in the input box at the top of the list to find it. "),(0,i.kt)("li",{parentName:"ul"},"Once you find the move you want to hide or show, click on its row in the output table (note: NOT the checkbox). This will take you to the Move Details page. "),(0,i.kt)("li",{parentName:"ul"},'Use the details to verify that you have the correct move. Once you\'re confident this is the move you want to update, click the "Edit" button in the top right. '),(0,i.kt)("li",{parentName:"ul"},'Go to the dropdown for the "Show" field and select either "Yes" or "No."'),(0,i.kt)("li",{parentName:"ul"},'Click the "Save" button at the bottom of the page.'),(0,i.kt)("li",{parentName:"ul"},'Test that your changes went through by attempting to locate this move in another part of the app. If you set the "Show" field to "No," you should see a Not Found error whenever you attempt to view it. ')),(0,i.kt)("h2",{id:"the-rest-of-milmove"},"The Rest of MilMove"),(0,i.kt)("p",null,"As stated above, ",(0,i.kt)("strong",{parentName:"p"},"no other part of the MilMove app should be able to see hidden moves"),". While we are undergoing active development on the system, this means that every developer is responsible for ensuring that their endpoints and interfaces cannot be used to access hidden moves. Every endpoint needs to validate that the move's ",(0,i.kt)("inlineCode",{parentName:"p"},"show")," field is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", even if that endpoint looks at a shipment, service item, or another child object of the move."),(0,i.kt)("p",null,'The Prime API must validate that every move and child object has also been marked as "available to Prime" (indicated by the ',(0,i.kt)("inlineCode",{parentName:"p"},"available_to_prime_at")," column on the move). This part of the app has been able to conveniently bundle these audits together, making it a relatively painless process to verify that no hidden moves are accessible."),(0,i.kt)("p",null,"The Internal and GHC APIs do not have this convenience, and other strategies must be developed to ensure they securely hide all deactivated moves. ",(0,i.kt)("strong",{parentName:"p"},"This is an active concern that all teams should prioritize resolving.")),(0,i.kt)("p",null,"One possible solution is to take advantage of POP's (our backend ORM) ",(0,i.kt)("inlineCode",{parentName:"p"},"ScopeFunc")," feature: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gobuffalo/pop/blob/d30b82d843cd997d3ae847267fb68069329fdaec/scopes.go"},"https://github.com/gobuffalo/pop/blob/d30b82d843cd997d3ae847267fb68069329fdaec/scopes.go")))}u.isMDXComponent=!0}}]);