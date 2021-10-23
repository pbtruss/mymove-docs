"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[8091],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),p=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(d,".").concat(h)]||u[h]||l[h]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65674:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={},d="What is Dependabot",p={unversionedId:"dev/versioning/Dependency-Update-Process-With-Dependabot",id:"dev/versioning/Dependency-Update-Process-With-Dependabot",isDocsHomePage:!1,title:"What is Dependabot",description:"Dependabot is used to monitor the repository dependencies and update them with automatic",source:"@site/docs/dev/versioning/Dependency-Update-Process-With-Dependabot.md",sourceDirName:"dev/versioning",slug:"/dev/versioning/Dependency-Update-Process-With-Dependabot",permalink:"/mymove-docs/docs/dev/versioning/Dependency-Update-Process-With-Dependabot",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/versioning/Dependency-Update-Process-With-Dependabot.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"Redocusaurus",permalink:"/mymove-docs/docs/dev/tools/redocusaurus"},next:{title:"How to Deprecate an API Endpoint",permalink:"/mymove-docs/docs/dev/versioning/How-to-deprecate-endpoints"}},c=[],l={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-dependabot"},"What is Dependabot"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://dependabot.com"},"Dependabot")," is used to monitor the repository dependencies and update them with automatic\npull requests against the ",(0,a.kt)("inlineCode",{parentName:"p"},"master")," branch in the repo. Engineers then merge the Dependabot pull requests into master, or close with a note on why the update cannot be merged."),(0,a.kt)("h1",{id:"dependency-updates"},"Dependency Updates"),(0,a.kt)("p",null,"Dependabot will automatically create pull requests. Open Dependabot pull requests can be quickly found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pulls?q=is%3Apr+is%3Aopen+label%3Adependencies"},"here"),". ",(0,a.kt)("strong",{parentName:"p"},"Dependency updates must be handled (reviewed & merged or closed with explanation) within seven days of the opened pull request.")),(0,a.kt)("p",null,"The description of the PR includes the ",(0,a.kt)("inlineCode",{parentName:"p"},"Release Notes"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Changelog"),", and individual ",(0,a.kt)("inlineCode",{parentName:"p"},"Commits"),". Before taking any action, one should quickly scan the ",(0,a.kt)("inlineCode",{parentName:"p"},"Release Notes")," for any obvious conflicts with how we're using the library/dependency."),(0,a.kt)("p",null,"Builds that are passing, and show no potential conflicts can be merged. After merging, monitor the master build to make sure it passes and there are no issues. If there are issues with the build caused from the dependency update, the PR should be reverted with an explanation of why the dependency was not merged."),(0,a.kt)("p",null,"If a Dependabot pull request shows a build a failure, you will need to take some additional steps. Often times the failure is an intermittent failure unrelated to the dependency update. Rerunning the build will often resolve these failures. In instances where the dependency update appears to be the cause of the failure, further investigation is required. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Release Notes")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Changelog")," may show a change that is causing a conflict with how we are using the dependency or there may be a peer dependency that is out of date. Each case is different, but engineers should attempt to resolve the failure if possible. In cases where the update to the dependency results in that version being unusable with our application, the pull request can be closed with an explanation."),(0,a.kt)("h1",{id:"dependency-workflow"},"Dependency Workflow"),(0,a.kt)("p",null,"MilMove engineering teams rotate responsibility for managing dependency updates. Currently a team will manage dependencies for one Slice, before passing on to the next team. The team responsible for dependency updates should add a chore to their sprint board in Jira. If a new update requires making changes to the codebase, this should be captured with a Jira story. The team should work with their PO to decide if they can complete the work within the current sprint or schedule it for the next one."),(0,a.kt)("p",null,"In a case where a team is rolling off dependency updates, but has identified dependency changes that cannot be completed in the current Slice, the two teams involved in the transition will need to coordinate the work. The team rotating off should have already created the story for the work needed to be done to resolve the dependency failure. This story should be passed on to the team rotating on, so they can pull it in to their sprint. The team rotating off should provide the necessary context to enable the team rotating on to properly understand the technical work that needs to be done. This should happen before the subsequent sprint planning."),(0,a.kt)("h1",{id:"note-on-major-updates"},"Note on major updates"),(0,a.kt)("p",null,"For most minor updates (ex: ",(0,a.kt)("inlineCode",{parentName:"p"},"aws-sdk-go 1.35.25 -> 1.35.27")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"swagger-client 3.11.1 -> 3.12.0")," ) a review of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Release Notes")," should provide enough information on whether to move ahead with merging the dependency update. However, for major updates (ex: ",(0,a.kt)("inlineCode",{parentName:"p"},"@storybook/react 5.3.19 -> 6.0.28"),") it would be best practice to have an engineer actively working with that dependency to review the update and give approval before merging. This would provide a chance for people with the most context to identify potential breaking changes and what steps they might need to take before, or as part of the upgrade."),(0,a.kt)("p",null,"If necessary, a Jira story should be created and planned for by the team that is best positioned to complete any work needed to meet the requirements of a major update."),(0,a.kt)("h1",{id:"dependabot-limitations"},"Dependabot Limitations"),(0,a.kt)("p",null,"Dependabot cannot be relied upon to capture updates for every app dependency. Certain updates, such as updates to Go, will not come through Dependabot. Identifying these dependencies and the process for making such updates is still being discussed, and will be documented when known."))}u.isMDXComponent=!0}}]);