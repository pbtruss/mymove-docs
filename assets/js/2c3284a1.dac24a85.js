"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2351],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return t?o.createElement(f,i(i({ref:n},p),{},{components:t})):o.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},36191:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),i=["components"],l={sidebar_position:2},c="Creating a Local Environment for Postman",s={unversionedId:"tools/postman/creating-a-local-environment-for-postman",id:"tools/postman/creating-a-local-environment-for-postman",isDocsHomePage:!1,title:"Creating a Local Environment for Postman",description:"Please follow these initial setup instructions first!",source:"@site/docs/tools/postman/creating-a-local-environment-for-postman.md",sourceDirName:"tools/postman",slug:"/tools/postman/creating-a-local-environment-for-postman",permalink:"/mymove-docs/docs/tools/postman/creating-a-local-environment-for-postman",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/tools/postman/creating-a-local-environment-for-postman.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"toolsSidebar",previous:{title:"Setting up Postman",permalink:"/mymove-docs/docs/tools/postman/setting-up-postman"},next:{title:"Intercepting Cookies for Postman",permalink:"/mymove-docs/docs/tools/postman/intercepting-cookies-for-postman"}},p=[{value:"Creating an environment",id:"creating-an-environment",children:[]},{value:"Using the GHC environment and collection",id:"using-the-ghc-environment-and-collection",children:[]}],m={toc:p};function u(e){var n=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-a-local-environment-for-postman"},"Creating a Local Environment for Postman"),(0,a.kt)("p",null,"Please follow ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/wiki/Setting-Up-Postman"},"these initial setup instructions")," first!"),(0,a.kt)("h2",{id:"creating-an-environment"},"Creating an environment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},".json")," file with the following:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "name": "Local GHC Development",\n  "values": [\n    {\n      "key": "baseUrl",\n      "value": "http://officelocal:8080/ghc/v1",\n      "enabled": true\n    },\n    {\n      "key": "gorillaCSRF",\n      "value": "",\n      "enabled": true\n    },\n    {\n      "key": "maskedGorillaCSRF",\n      "value": "",\n      "enabled": true\n    }\n  ],\n  "_postman_variable_scope": "environment"\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fill in the two empty values and save the file. The ",(0,a.kt)("inlineCode",{parentName:"p"},"gorillaCSRF")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"maskedGorillaCSRF")," can be found in your ",(0,a.kt)("inlineCode",{parentName:"p"},"officelocal")," cookies in the browser.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'In Postman, click the "Environments" tab in the left sidebar.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Click the "Import" button next to "My Workspaces" and then click the "Upload Files" button.'))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of Postman Environments",src:t(48563).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Select your ",(0,a.kt)("inlineCode",{parentName:"p"},".json")," file and upload it.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Confirm your selection (default values are fine) and click "Import".'))),(0,a.kt)("p",null,"You should now see the ",(0,a.kt)("inlineCode",{parentName:"p"},"Local GHC Development")," environment listed."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of Postman Environments",src:t(67198).Z})),(0,a.kt)("h2",{id:"using-the-ghc-environment-and-collection"},"Using the GHC environment and collection"),(0,a.kt)("p",null,'To use the GHC environment, click on the environment dropdown on the upper right of the screen and choose the "Local GHC Development" option.'),(0,a.kt)("p",null,"You are now ready to work with the GHC API locally!"),(0,a.kt)("p",null,"Next steps will depend on which endpoint you are testing. You may need to add various headers or data."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of Postman Environment example",src:t(71026).Z})))}u.isMDXComponent=!0},48563:function(e,n,t){n.Z=t.p+"assets/images/ghc-postman-env-setup-bd91e04d3b41a93afcec5fbedbebc454.png"},71026:function(e,n,t){n.Z=t.p+"assets/images/ghc-postman-final-setup-06e09f290cbe02d73049329900a70b6b.png"},67198:function(e,n,t){n.Z=t.p+"assets/images/ghc-postman-local-env-b0c140de42961fb922088ac6bd037be6.png"}}]);