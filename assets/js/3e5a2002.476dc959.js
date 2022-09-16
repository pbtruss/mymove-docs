"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[8434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"0072 Using React-App-Rewired",description:"Decision outcome: Dynamically patch the configurations\n"},o="Using React-App-Rewired",s={unversionedId:"adrs/using-react-app-rewired",id:"adrs/using-react-app-rewired",title:"0072 Using React-App-Rewired",description:"Decision outcome: Dynamically patch the configurations\n",source:"@site/docs/adrs/0072-using-react-app-rewired.md",sourceDirName:"adrs",slug:"/adrs/using-react-app-rewired",permalink:"/mymove-docs/docs/adrs/using-react-app-rewired",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0072-using-react-app-rewired.md",tags:[],version:"current",sidebarPosition:72,frontMatter:{title:"0072 Using React-App-Rewired",description:"Decision outcome: Dynamically patch the configurations\n"},sidebar:"adrsSidebar",previous:{title:"0071 Introduce Move History Events",permalink:"/mymove-docs/docs/adrs/move-history-events"},next:{title:"0073 Use Templates for SQL Queries",permalink:"/mymove-docs/docs/adrs/using-templates-for-sql-queries"}},p={},l=[{value:"Background",id:"background",level:2},{value:"Decision drivers",id:"decision-drivers",level:2},{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"<em>Do nothing</em>",id:"do-nothing",level:3},{value:"<em>Eject the <strong>Create-React-App</strong> configuration</em>",id:"eject-the-create-react-app-configuration",level:3},{value:"<em>Dynamically patch the configurations</em>",id:"dynamically-patch-the-configurations",level:3}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-react-app-rewired"},"Using React-App-Rewired"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"User Story:")," ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://dp3.atlassian.net/browse/MB-9033"},"MB-9033"))," \ud83d\udd12"),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"The MilMove client application uses ",(0,r.kt)("strong",{parentName:"p"},"Create-React-App")," and ",(0,r.kt)("strong",{parentName:"p"},"React-Scripts"),"\nfor its build toolchain. This build toolchain has many benefits to developing\nthe client application, but also has limitations when it comes to updating\nthe configuration of various build tools that are used in the development of\nthe client application. These tools such as ",(0,r.kt)("strong",{parentName:"p"},"webpack"),", ",(0,r.kt)("strong",{parentName:"p"},"ESLint"),", and\n",(0,r.kt)("strong",{parentName:"p"},"Babel")," are configured with pre-determined configurations that are\nin-accessible without ",(0,r.kt)("em",{parentName:"p"},"ejecting")," from the ",(0,r.kt)("strong",{parentName:"p"},"Create-React-App")," toolchain."),(0,r.kt)("p",null,"Facebook's own documentation mentions that ",(0,r.kt)("em",{parentName:"p"},"If you aren't satisfied with the\nbuild tool and configuration choices, you can ",(0,r.kt)("inlineCode",{parentName:"em"},"eject")," at any time. This command\nwill remove the single build dependency from your project.")," This is not an\noption currently on MilMove as ejecting would add some maintainability overhead\nthat the development team may address at a later time or a later ADR."),(0,r.kt)("h2",{id:"decision-drivers"},"Decision drivers"),(0,r.kt)("p",null,"Some of the issues we've seen is that in order to best control our build\ntoolchain there are certain configurations that need to be updated. For\ninstance, ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/migrate/5/#run-a-single-build-and-follow-advice"},(0,r.kt)("strong",{parentName:"a"},"webpack")," 5 removed the Node polyfills")," that are used\nby the MilMove client application. This causes our client application to break\nin unique ways around ",(0,r.kt)("inlineCode",{parentName:"p"},"process")," not being defined. Refactoring our client\napplication is a possible solution, but there are ways to have ",(0,r.kt)("strong",{parentName:"p"},"webpack")," 5 use\nthe Node polyfills that we need by defining it in a ",(0,r.kt)("strong",{parentName:"p"},"webpack")," configuration\nfile. Our issue here is that ",(0,r.kt)("strong",{parentName:"p"},"Create-React-App")," and ",(0,r.kt)("strong",{parentName:"p"},"React-Scripts")," prevent\nus from modifying these scripts as they are not exposed to users of those\nlibraries."),(0,r.kt)("p",null,"This is true for other tools such as ",(0,r.kt)("strong",{parentName:"p"},"ESLint")," as well and has been an issue\npreviously on the client application for the project. Sometimes the\n",(0,r.kt)("strong",{parentName:"p"},"React-Scripts")," and ",(0,r.kt)("strong",{parentName:"p"},"Create-React-App")," tools update and support some level\nof customization but it leaves the MilMove engineering team in a holding pattern\nwithout a clear path forward besides following contributions upstream or\ncontributing upstream to the ",(0,r.kt)("strong",{parentName:"p"},"Create-React-App")," project."),(0,r.kt)("p",null,"It's also true that Facebook's ",(0,r.kt)("strong",{parentName:"p"},"Create-React-App")," development team is\nnotorious for denying any changes for specific configuration updates. As stated\nabove, their own documentation states that ",(0,r.kt)("inlineCode",{parentName:"p"},"ejecting")," or maintaining a fork of\n",(0,r.kt)("strong",{parentName:"p"},"Create-React-App")," are the only viable solutions for customization using their\nbuild toolchain."),(0,r.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"bold denotes chosen"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Do nothing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Eject the ",(0,r.kt)("strong",{parentName:"em"},"Create-React-App")," configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dynamically patch the configurations"))),(0,r.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chosen Alternative: ",(0,r.kt)("em",{parentName:"li"},"Dynamically patch the configurations"))),(0,r.kt)("p",null,"We can leverage ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/timarney/react-app-rewired"},(0,r.kt)("strong",{parentName:"a"},"React-App-Rewired")," in order to perform dynamic patching of\nthe ",(0,r.kt)("strong",{parentName:"a"},"webpack")," configuration"),", and other configurations as needed, in\norder to bring back these Node polyfills for supporting the ",(0,r.kt)("inlineCode",{parentName:"p"},"process")," object\nthat the client application currently relies on. This is also useful in case\nthere are other configuration options that would like to be modified or extended\nin the future. The ",(0,r.kt)("strong",{parentName:"p"},"React-App-Rewired")," library supports modifying ",(0,r.kt)("strong",{parentName:"p"},"webpack"),"\n& ",(0,r.kt)("strong",{parentName:"p"},"Jest")," configurations."),(0,r.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,r.kt)("h3",{id:"do-nothing"},(0,r.kt)("em",{parentName:"h3"},"Do nothing")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," ",(0,r.kt)("em",{parentName:"li"},"There's no work to be done so teams can focus on other work.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," ",(0,r.kt)("em",{parentName:"li"},"Leaves dependencies out of date due to not being able to update to the\nlatest versions of NPM packages."))),(0,r.kt)("h3",{id:"eject-the-create-react-app-configuration"},(0,r.kt)("em",{parentName:"h3"},"Eject the ",(0,r.kt)("strong",{parentName:"em"},"Create-React-App")," configuration")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," ",(0,r.kt)("em",{parentName:"li"},"Reduces the dependency on ",(0,r.kt)("strong",{parentName:"em"},"Create-React-App"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," ",(0,r.kt)("em",{parentName:"li"},"Allows engineering team to take ownership of the configuration for the\nclient application.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," ",(0,r.kt)("em",{parentName:"li"},"No wide-support from engineering team to maintain the build toolchain."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," Without wide-support from engineering, the lack of configuration is a safer\nspace to exist in for the project regardless of the benefits or\nresponsibilities to leverage the build toolchain manually."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," ",(0,r.kt)("em",{parentName:"li"},"Removes the reliance on ",(0,r.kt)("strong",{parentName:"em"},"Create-React-App")," and ",(0,r.kt)("strong",{parentName:"em"},"React-Scripts")," to\nincorporate security fixes which have much larger teams dedicated to this.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," ",(0,r.kt)("em",{parentName:"li"},"Breaks out of the update cycle for ",(0,r.kt)("strong",{parentName:"em"},"Create-React-App")," and\n",(0,r.kt)("strong",{parentName:"em"},"React-Scripts"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," The update cycle of ",(0,r.kt)("strong",{parentName:"li"},"Create-React-App")," and ",(0,r.kt)("strong",{parentName:"li"},"React-Scripts")," is one that\nis owned by their upstream development team. This cycle is a benefit to the\nMilMove engineering team as there are less dependencies that need to be\nmanaged by us.")))),(0,r.kt)("h3",{id:"dynamically-patch-the-configurations"},(0,r.kt)("em",{parentName:"h3"},"Dynamically patch the configurations")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," ",(0,r.kt)("em",{parentName:"li"},"Allows for control of extending or modifying build toolchain\nconfigurations.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," ",(0,r.kt)("em",{parentName:"li"},"Removes the need to ",(0,r.kt)("inlineCode",{parentName:"em"},"eject")," from the ",(0,r.kt)("strong",{parentName:"em"},"Create-React-App")," ecosystem.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," ",(0,r.kt)("em",{parentName:"li"},"Changes the build toolchain commands due to dynamic patching."))))}m.isMDXComponent=!0}}]);