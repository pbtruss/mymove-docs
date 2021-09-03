"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9883],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),m=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=m(n),p=a,f=u["".concat(l,".").concat(p)]||u[p]||d[p]||r;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var m=2;m<r;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4286:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return s},default:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],c={},l="How to Automatically add JIRA ID to Commit Message",m={unversionedId:"old-wiki/automatically-add-jira-id-to-commit-message",id:"old-wiki/automatically-add-jira-id-to-commit-message",isDocsHomePage:!1,title:"How to Automatically add JIRA ID to Commit Message",description:"Context",source:"@site/docs/old-wiki/automatically-add-jira-id-to-commit-message.md",sourceDirName:"old-wiki",slug:"/old-wiki/automatically-add-jira-id-to-commit-message",permalink:"/mymove-docs/docs/old-wiki/automatically-add-jira-id-to-commit-message",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/old-wiki/automatically-add-jira-id-to-commit-message.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Anti-Virus",permalink:"/mymove-docs/docs/old-wiki/anti_virus"},next:{title:"How To Create An ECS Scheduled Task",permalink:"/mymove-docs/docs/old-wiki/create-an-ecs-scheduled-task"}},s=[{value:"Context",id:"context",children:[]},{value:"Branch Format",id:"branch-format",children:[]},{value:"Enable",id:"enable",children:[]},{value:"Disable",id:"disable",children:[]}],d={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-automatically-add-jira-id-to-commit-message"},"How to Automatically add JIRA ID to Commit Message"),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"Jira is integrated with GitHub. As we create commits we put the ticket id in them and Jira will automatically detect that and associate the commits and branch with that ticket. This how to will show you how to enable a commit message hook to automatically strip the Jira id from your branch name and insert it at the  beginning of the commit message. If your branch doesn't match the pattern then nothing will be changed."),(0,r.kt)("h2",{id:"branch-format"},"Branch Format"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"initials_MB-123_branch_name_description")),(0,r.kt)("h2",{id:"enable"},"Enable"),(0,r.kt)("p",null,"To enable the automatic addition simply run the following command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ln -s ~/projects/dod/mymove/scripts/commit-msg .git/hooks/commit-msg\n")),(0,r.kt)("h2",{id:"disable"},"Disable"),(0,r.kt)("p",null,"To disable the automatic addition temporarily use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-verify")," flag. To disable it permanently run the following command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rm .git/hooks/commit-msg\n")))}u.isMDXComponent=!0}}]);