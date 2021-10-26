"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[5096],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(n),s=r,g=f["".concat(u,".").concat(s)]||f[s]||d[s]||o;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},83325:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={},u="How to Set Up a Feature Flag",c={unversionedId:"dev/contributing/backend/How-to-Set-Up-a-Feature-Flag",id:"dev/contributing/backend/How-to-Set-Up-a-Feature-Flag",isDocsHomePage:!1,title:"How to Set Up a Feature Flag",description:"There is a feature flag feature for both frontend and backend.  Here's how to set up a new feature flag.",source:"@site/docs/dev/contributing/backend/How-to-Set-Up-a-Feature-Flag.md",sourceDirName:"dev/contributing/backend",slug:"/dev/contributing/backend/How-to-Set-Up-a-Feature-Flag",permalink:"/mymove-docs/docs/dev/contributing/backend/How-to-Set-Up-a-Feature-Flag",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/contributing/backend/How-to-Set-Up-a-Feature-Flag.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"How-to-Add-an-Event-Trigger",permalink:"/mymove-docs/docs/dev/contributing/backend/How-to-Add-an-Event-Trigger"},next:{title:"Session-Management",permalink:"/mymove-docs/docs/dev/contributing/backend/Session-Management"}},p=[{value:"Frontend",id:"frontend",children:[{value:"Overview",id:"overview",children:[]},{value:"How to create a new flag",id:"how-to-create-a-new-flag",children:[]},{value:"How to apply the flag in a component",id:"how-to-apply-the-flag-in-a-component",children:[]}]}],d={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-set-up-a-feature-flag"},"How to Set Up a Feature Flag"),(0,o.kt)("p",null,"There is a feature flag feature for both frontend and backend.  Here's how to set up a new feature flag."),(0,o.kt)("h2",{id:"frontend"},"Frontend"),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The frontend feature flag can be turned on or off through the url.  By appending a querystring ",(0,o.kt)("inlineCode",{parentName:"p"},"?flag:flagName=false"),", the feature will be turned off and appending ",(0,o.kt)("inlineCode",{parentName:"p"},"?flag:flagName=true")," will turn on the feature.  Generally, while working on a feature that is not ready for production, by default we set it to off in production and turn it on in dev, staging, and experimental environments."),(0,o.kt)("h3",{id:"how-to-create-a-new-flag"},"How to create a new flag"),(0,o.kt)("p",null,"Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"shared/featureFlag.js")),(0,o.kt)("p",null,"Add a key/value to ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultFlags")," and set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),".  The key will be the name you use in the url"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"myFeatureFlag")," --\x3e ",(0,o.kt)("inlineCode",{parentName:"p"},"?flag:myFeatureFlag=false")),(0,o.kt)("p",null,"Add the key/value to the environment flags where you want it different than the default"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const environmentFlags = {development: Object.assign({}, defaultFlags, { myFeatureFlag: true })}\n")),(0,o.kt)("h3",{id:"how-to-apply-the-flag-in-a-component"},"How to apply the flag in a component"),(0,o.kt)("p",null,"Access the flag value through context\n1) To access context, import ",(0,o.kt)("inlineCode",{parentName:"p"},"withContext")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import { withContext } from 'shared/AppContext';\n2) wrap the exported component with `withContext`\n\n")),(0,o.kt)("p",null,"   export default withContext(connect(mapStateToProps, mapDispatchToProps)(MyComponent));\n3) Pull the boolean value of the flag and apply it to the feature you want to show/hide"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const showMyFeatureFlag = this.props.context.flags.myFeatureFlag;\n## Backend\n\n### Overview\n\nThe backend feature flag works by assigning a flag value as environment variables for each environment, and then setting the flag on the handler `Context` in `featureFlags`.  The value is set using `SetFeatureFlag`.\n\n### How to create a new flag\n\n1) Create the flag in `InitFeatureFlags` in `pkg/cli/featureflag.go`\n\n2) Set environment variables for each environment: \n\n`MY_FEATURE_FLAG=true`\n\nin\n\n`config/env/staging/app.env`\n\n`config/env/experiment.app.env`\n\n`config/env/prod.app.env`\n\n`.envrc`\n\nUsually we are just hiding a feature from prod, so the flag would be set to `false` there and `true` everywhere else, but use case may vary.\n\n3) Set the flag in the handlerContext\n\n")),(0,o.kt)("p",null,"handlerContext.SetFeatureFlag(\nhandlers.FeatureFlag{Name: cli.MyFeatureFlag, Active: v.GetBool(cli.MyFeatureFlag)},\n)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nThis grabs the value that is set as the environment variable and appends it to the feature flag map as a key value pair.\nAll handlers have access to the handlerContext, so have access to the flag value.  This boolean value can then be used to turn on or off features.\n\n")),(0,o.kt)("p",null,"if h.HandlerContext.GetFeatureFlag(cli.MyFeatureFlag) {\ndo something. . .\n}"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"")))}f.isMDXComponent=!0}}]);