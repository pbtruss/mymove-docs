"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[5372],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82452:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={},l=void 0,s={unversionedId:"dev/versioning/How-to-upgrade-Node",id:"dev/versioning/How-to-upgrade-Node",isDocsHomePage:!1,title:"How-to-upgrade-Node",description:"1. Submit a PR that updates node to the new version in https://github.com/transcom/circleci-docker/. Here's an example.",source:"@site/docs/dev/versioning/How-to-upgrade-Node.md",sourceDirName:"dev/versioning",slug:"/dev/versioning/How-to-upgrade-Node",permalink:"/mymove-docs/docs/dev/versioning/How-to-upgrade-Node",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/versioning/How-to-upgrade-Node.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"Configure Postico or TablePlus to connect to mymove DB",permalink:"/mymove-docs/docs/dev/tools/Configure-Postico-or-TablePlus-to-connect-to-mymove-DB"},next:{title:"Manage-golang-with-asdf",permalink:"/mymove-docs/docs/dev/versioning/Manage-golang-with-asdf"}},m=[],p={toc:m};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Submit a PR that updates node to the new version in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/transcom/circleci-docker/"},"https://github.com/transcom/circleci-docker/"),". ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/transcom/circleci-docker/pull/130"},"Here's an example"),"."),(0,a.kt)("li",{parentName:"ol"},"Look for the hash here: ",(0,a.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/milmove/circleci-docker/tags"},"https://hub.docker.com/r/milmove/circleci-docker/tags")),(0,a.kt)("li",{parentName:"ol"},"In the transcom/mymove repo, create a PR to update node. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/pull/6878"},"Here's an example")," && ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/pull/6904"},"this PR"))),(0,a.kt)("p",null,"Things to modify:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bump the ",(0,a.kt)("inlineCode",{parentName:"li"},".node_version")),(0,a.kt)("li",{parentName:"ul"},"Modify the instances of ",(0,a.kt)("inlineCode",{parentName:"li"},"milmove/circleci-docker:milmove-app-")," and replace the hash w/ the one found in step 2. (I used the PR branch name rather than hash so it would pull any changes I made over on the ",(0,a.kt)("inlineCode",{parentName:"li"},"circleci-docker")," PR without having to update the hash each time I made a change)"),(0,a.kt)("li",{parentName:"ul"},"update ",(0,a.kt)("inlineCode",{parentName:"li"},"check-node-version")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"prereqs")),(0,a.kt)("li",{parentName:"ul"},"Do a find and replace to update references of the prior node version with the new node version")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"make clean build")," and verify that the desired version of Node is being used"),(0,a.kt)("li",{parentName:"ol"},"Get reviews for the 2 PRs to check your work. "),(0,a.kt)("li",{parentName:"ol"},"Merge the PR from step 1"),(0,a.kt)("li",{parentName:"ol"},"Find the new image hash from the Docker hub "),(0,a.kt)("li",{parentName:"ol"},"Update the transcom/mymove PR to use the hash from step 7"),(0,a.kt)("li",{parentName:"ol"},"Test again to make sure everything works as expected."),(0,a.kt)("li",{parentName:"ol"},"Announce in #prac-engineering that you will be updating node and any instructions ",(0,a.kt)("a",{parentName:"li",href:"https://ustcdp3.slack.com/archives/CP6PTUPQF/p1624996730029000"},"An example slack msg")),(0,a.kt)("li",{parentName:"ol"},"Merge the PR in transcom/mymove")))}u.isMDXComponent=!0}}]);