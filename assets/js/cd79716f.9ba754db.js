"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9186],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=s(n),d=o,f=h["".concat(p,".").concat(d)]||h[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},42905:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return h}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={},p="Happo",s={unversionedId:"tools/cicd/happo",id:"tools/cicd/happo",isDocsHomePage:!1,title:"Happo",description:"Happo is a UI diff checker tool that helps compare the UI pages from branches to master. When styling changes have been made, Happo notifies that a diff has occured and asks a reviewer to review the Happo changes before allowing the PR to be merged in.",source:"@site/docs/tools/cicd/happo.md",sourceDirName:"tools/cicd",slug:"/tools/cicd/happo",permalink:"/mymove-docs/docs/tools/cicd/happo",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/tools/cicd/happo.md",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"GitHub Actions",permalink:"/mymove-docs/docs/tools/cicd/github_actions"},next:{title:"Integration Test Failures",permalink:"/mymove-docs/docs/tools/cicd/integration_test_failures"}},l=[{value:"What to do with Happo Errors",id:"what-to-do-with-happo-errors",children:[]},{value:"False Errors",id:"false-errors",children:[]}],u={toc:l};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"happo"},"Happo"),(0,a.kt)("p",null,"Happo is a UI diff checker tool that helps compare the UI pages from branches to master. When styling changes have been made, Happo notifies that a diff has occured and asks a reviewer to review the Happo changes before allowing the PR to be merged in."),(0,a.kt)("h2",{id:"what-to-do-with-happo-errors"},"What to do with Happo Errors"),(0,a.kt)("p",null,"When your CI/CD build has begun, you can view the status of the Happo under the CI/CD pipeline"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/84801109/141024060-32ff4825-b2b5-47e4-a281-682f6371a2d2.png",alt:"image"})),(0,a.kt)("p",null,"If the Happo check has failed, you must review the changes. You will see a list of diffs that will need to be reviewed/resolved before the Happo check can be approved. "),(0,a.kt)("p",null,"For example, you may have changed title content like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/84801109/141023978-2dd94167-93fe-4add-9e4e-c739fece0006.png",alt:"image"})),(0,a.kt)("p",null,"After reviewing this, you may ",(0,a.kt)("inlineCode",{parentName:"p"},"accept")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"reject")," the changes. When it is accepted, the CI/CD Happo step will be approved."),(0,a.kt)("h2",{id:"false-errors"},"False Errors"),(0,a.kt)("p",null,"Occasionally, Happo misinterprets a diff when one has not actually occured."),(0,a.kt)("p",null,"When pushing to Happo, you may notice that some diff checking are barely off by pixels.  You can ignore these types of diff errors. An example of this can be shown in the below image"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/84801109/141023587-28176a4a-0fc2-4510-ba09-29b9fb4f0634.png",alt:"image"})),(0,a.kt)("p",null,"In this picture, the change is negligible, and nothing significant about the page. You can click ",(0,a.kt)("inlineCode",{parentName:"p"},"review"),", then ",(0,a.kt)("inlineCode",{parentName:"p"},"accept")," to pass the Happo check."))}h.isMDXComponent=!0}}]);