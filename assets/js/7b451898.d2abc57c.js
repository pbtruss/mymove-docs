"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[8669],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=p(r),c=n,v=m["".concat(l,".").concat(c)]||m[c]||u[c]||i;return r?o.createElement(v,s(s({ref:t},d),{},{components:r})):o.createElement(v,s({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9659:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const i={title:"0016 Browser Support for Prototype"},s="Browser Support for Prototype",a={unversionedId:"adrs/Browser-Support",id:"adrs/Browser-Support",title:"0016 Browser Support for Prototype",description:"User Story: 155599293",source:"@site/docs/adrs/0016-Browser-Support.md",sourceDirName:"adrs",slug:"/adrs/Browser-Support",permalink:"/mymove-docs/docs/adrs/Browser-Support",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0016-Browser-Support.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"0016 Browser Support for Prototype"},sidebar:"adrsSidebar",previous:{title:"0015 Session storage/handling",permalink:"/mymove-docs/docs/adrs/session-storage"},next:{title:"0017 Client side route restriction based on authentication",permalink:"/mymove-docs/docs/adrs/react-router-redux-authentication"}},l={},p=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"Support only latest browser versions supported by operating systems",id:"support-only-latest-browser-versions-supported-by-operating-systems",level:3},{value:"Extend support to older versions of Internet Explorer (IE 9 &amp; 10)",id:"extend-support-to-older-versions-of-internet-explorer-ie-9--10",level:3},{value:"Specific Minimum Version Requirements",id:"specific-minimum-version-requirements",level:2},{value:"Minimum Browser Requirements",id:"minimum-browser-requirements",level:3},{value:"Windows 10",id:"windows-10",level:4},{value:"Windows 10, macOS 10.12+",id:"windows-10-macos-1012",level:4},{value:"macOS 10.12+",id:"macos-1012",level:4},{value:"iOS 10+",id:"ios-10",level:4},{value:"Android 7+",id:"android-7",level:4},{value:"Browsers for Development and Testing",id:"browsers-for-development-and-testing",level:2}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"browser-support-for-prototype"},"Browser Support for Prototype"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"User Story:")," 155599293"),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"This ADR has been superseded by the internal documentation around ",(0,n.kt)("a",{parentName:"p",href:"https://dp3.atlassian.net/wiki/spaces/MT/pages/1714552858/Supported+Browsers+for+MilMove+DRAF"},"Supported\nBrowsers for MilMove"),"\ud83d\udd12."))),(0,n.kt)("p",null,"There are dozen of browsers supported on multiple operating systems.  We need to manage the level of dev and testing effort required to support additional browsers and the overall impact to the user"),(0,n.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Support only latest browser versions supported by operating systems (Internet Explorer 11, Edge, Chrome, Safari, and Firefox for desktop operating systems, Safari for iOS, and Chrome for Android)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Extend support to older versions of Internet Explorer (IE 9 & 10)"))),(0,n.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Chosen Alternative: ",(0,n.kt)("strong",{parentName:"li"},"Support only latest browser versions supported by operating systems")),(0,n.kt)("li",{parentName:"ul"},"These browsers support a vast majority of the potential users of the product"),(0,n.kt)("li",{parentName:"ul"},"Consequences. There is a small risk that a service member could access the system with an unsupported browser.  The user may not experience any issues, but possibly could incur display issues or prevent them from finishing the a process.  The user would have to start over using a supported browser.")),(0,n.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,n.kt)("h3",{id:"support-only-latest-browser-versions-supported-by-operating-systems"},"Support only latest browser versions supported by operating systems"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Covers a majority of browsers current used for internet access"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Limits testing scope and combinations by limiting browser versions"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," The mobile browsers selected represent a dominant market share on their respective mobile OS"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Slight risk of a service member unable to complete their process by using an unsupported browser")),(0,n.kt)("h3",{id:"extend-support-to-older-versions-of-internet-explorer-ie-9--10"},"Extend support to older versions of Internet Explorer (IE 9 & 10)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Reduces the likelihood of a service member not completing the process buy using an unsupported browser"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," The mobile browsers selected represent a dominant market share on their respective mobile OS"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Extra coding effort to support older IE versions"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Extra testing effort to support older browsers")),(0,n.kt)("h2",{id:"specific-minimum-version-requirements"},"Specific Minimum Version Requirements"),(0,n.kt)("p",null,"The following browsers will be considered ",(0,n.kt)("em",{parentName:"p"},"minimum requirements"),", meaning that issues that arise in browsers that don't meet these requirements will not be prioritized above other work. Problems that crop up in browsers that do meet these requirements will be prioritized based on their severity: cosmetic issues are generally less important, while functionality breakage is considered a critical bug."),(0,n.kt)("h3",{id:"minimum-browser-requirements"},"Minimum Browser Requirements"),(0,n.kt)("h4",{id:"windows-10"},"Windows 10"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"IE 11, Edge 12+")),(0,n.kt)("h4",{id:"windows-10-macos-1012"},"Windows 10, macOS 10.12+"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Chrome 64+"),(0,n.kt)("li",{parentName:"ul"},"Firefox 58+")),(0,n.kt)("h4",{id:"macos-1012"},"macOS 10.12+"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Safari 10+")),(0,n.kt)("h4",{id:"ios-10"},"iOS 10+"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Mobile Safari (Locked to OS version)")),(0,n.kt)("h4",{id:"android-7"},"Android 7+"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Chrome for Android 56+")),(0,n.kt)("h2",{id:"browsers-for-development-and-testing"},"Browsers for Development and Testing"),(0,n.kt)("p",null,"The development team will be developing using the latest version of Google Chrome or Firefox and will be regularly testing the application in:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Latest Google Chrome (macOS 10.13)"),(0,n.kt)("li",{parentName:"ul"},"Latest Firefox (macOS 10.13)"),(0,n.kt)("li",{parentName:"ul"},"Latest iOS Safari (iOS 11)"),(0,n.kt)("li",{parentName:"ul"},"Latest Chrome (Android 8)"),(0,n.kt)("li",{parentName:"ul"},"Internet Explorer 11 (Windows 10)")))}u.isMDXComponent=!0}}]);