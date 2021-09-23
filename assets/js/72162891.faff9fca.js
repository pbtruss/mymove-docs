"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[5234],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return l}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),l=o,g=m["".concat(c,".").concat(l)]||m[l]||u[l]||a;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function l(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93162:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={},c="How to Manage Dependabot",p={unversionedId:"dev/versioning/manage-dependabot",id:"dev/versioning/manage-dependabot",isDocsHomePage:!1,title:"How to Manage Dependabot",description:"Dependabot is used to monitor the repository dependencies and update them with automatic",source:"@site/docs/dev/versioning/manage-dependabot.md",sourceDirName:"dev/versioning",slug:"/dev/versioning/manage-dependabot",permalink:"/mymove-docs/docs/dev/versioning/manage-dependabot",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/versioning/manage-dependabot.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"Switching-Over-to-Nix",permalink:"/mymove-docs/docs/dev/versioning/Switching-Over-to-Nix"},next:{title:"How to Upgrade Go Version",permalink:"/mymove-docs/docs/dev/versioning/upgrade-go-version"}},d=[{value:"Security",id:"security",children:[]},{value:"Organization Level Settings",id:"organization-level-settings",children:[]},{value:"Repo Management",id:"repo-management",children:[]}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-manage-dependabot"},"How to Manage Dependabot"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://dependabot.com"},"Dependabot")," is used to monitor the repository dependencies and update them with automatic\npull requests against the ",(0,a.kt)("inlineCode",{parentName:"p"},"master")," branch in the repo. The configuration is done via a file named\n",(0,a.kt)("inlineCode",{parentName:"p"},".dependabot/config.yml"),". Read more about ",(0,a.kt)("a",{parentName:"p",href:"https://dependabot.com/docs/config-file/"},"dependabot configuration")," in the\ndocs."),(0,a.kt)("h2",{id:"security"},"Security"),(0,a.kt)("p",null,"We use dependabot as part of our security measures. It ensures that the repository dependencies are up to date and\nthat any security vulnerabilities are caught as soon as new versions are published. Dependabot will even\nadd security release information in the text of the PR."),(0,a.kt)("h2",{id:"organization-level-settings"},"Organization Level Settings"),(0,a.kt)("p",null,"The settings for the Transcom organization can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://app.dependabot.com/accounts/transcom/settings"},"Account Settings"),"\npage. These manage settings for all repos under Transcom."),(0,a.kt)("h2",{id:"repo-management"},"Repo Management"),(0,a.kt)("p",null,"Repo management should be done in the ",(0,a.kt)("inlineCode",{parentName:"p"},".dependabot/config.yml")," file. However, you can view and interact with\nsettings temporarily via the ",(0,a.kt)("a",{parentName:"p",href:"https://app.dependabot.com/accounts/transcom/repos/114694829"},"repo management page"),".\nThis is a good place to try out new features without having to push a PR to the repository."))}m.isMDXComponent=!0}}]);