"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[5953],{65451:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(87462),o=(a(67294),a(3905));a(95657);const r={sidebar_position:6},l="How to Set Up a Feature Flag",i={unversionedId:"backend/guides/how-to/set-up-a-feature-flag",id:"backend/guides/how-to/set-up-a-feature-flag",title:"How to Set Up a Feature Flag",description:"There is a feature flag feature for both frontend and backend.  Here's how to set up a new feature flag.",source:"@site/docs/backend/guides/how-to/set-up-a-feature-flag.md",sourceDirName:"backend/guides/how-to",slug:"/backend/guides/how-to/set-up-a-feature-flag",permalink:"/mymove-docs/docs/backend/guides/how-to/set-up-a-feature-flag",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/guides/how-to/set-up-a-feature-flag.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"backendSidebar",previous:{title:"How to manage Golang with asdf",permalink:"/mymove-docs/docs/backend/guides/how-to/manage-golang-with-asdf"},next:{title:"How to upgrade Node",permalink:"/mymove-docs/docs/backend/guides/how-to/upgrade-node"}},s={},u=[{value:"Frontend",id:"frontend",level:2},{value:"Overview",id:"overview",level:3},{value:"How to create a new flag",id:"how-to-create-a-new-flag",level:3},{value:"How to apply the flag in a component",id:"how-to-apply-the-flag-in-a-component",level:3}],d={toc:u},p="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-set-up-a-feature-flag"},"How to Set Up a Feature Flag"),(0,o.kt)("p",null,"There is a feature flag feature for both frontend and backend.  Here's how to set up a new feature flag."),(0,o.kt)("h2",{id:"frontend"},"Frontend"),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The frontend feature flag can be turned on or off through the URL. By appending\na query string ",(0,o.kt)("inlineCode",{parentName:"p"},"?flag:flagName=false"),", the feature will be turned off and\nappending ",(0,o.kt)("inlineCode",{parentName:"p"},"?flag:flagName=true")," will turn on the feature. Generally, while\nworking on a feature that is not ready for production, by default we set it to\noff in production and turn it on in dev, staging, and experimental environments."),(0,o.kt)("h3",{id:"how-to-create-a-new-flag"},"How to create a new flag"),(0,o.kt)("p",null,"Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"shared/featureFlag.js")),(0,o.kt)("p",null,"Add a key/value to ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultFlags")," and set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". The key will be the\nname you use in the URL."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"myFeatureFlag")," --\x3e ",(0,o.kt)("inlineCode",{parentName:"p"},"?flag:myFeatureFlag=false")),(0,o.kt)("p",null,"Add the key/value to the environment flags where you want it different than the default"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const environmentFlags = {development: Object.assign({}, defaultFlags, { myFeatureFlag: true })}\n")),(0,o.kt)("h3",{id:"how-to-apply-the-flag-in-a-component"},"How to apply the flag in a component"),(0,o.kt)("p",null,"Access the flag value through context\n1) To access context, import ",(0,o.kt)("inlineCode",{parentName:"p"},"withContext")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import { withContext } from 'shared/AppContext';\n2) wrap the exported component with `withContext`\n\n")),(0,o.kt)("p",null,"   export default withContext(connect(mapStateToProps, mapDispatchToProps)(MyComponent));\n3) Pull the boolean value of the flag and apply it to the feature you want to show/hide"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const showMyFeatureFlag = this.props.context.flags.myFeatureFlag;\n## Backend\n\n### Overview\n\nThe backend feature flag works by assigning a flag value as environment variables for each environment, and then setting the flag on the handler `Context` in `featureFlags`.  The value is set using `SetFeatureFlag`.\n\n### How to create a new flag\n\n1) Create the flag in `InitFeatureFlags` in `pkg/cli/featureflag.go`\n\n2) Set environment variables for each environment:\n\n`MY_FEATURE_FLAG=true`\n\nin\n\n`config/env/staging/app.env`\n\n`config/env/experiment.app.env`\n\n`config/env/prod.app.env`\n\n`.envrc`\n\nUsually we are just hiding a feature from prod, so the flag would be set to `false` there and `true` everywhere else, but use case may vary.\n\n3) Set the flag in the handlerConfig\n\n")),(0,o.kt)("p",null,"handlerConfig.SetFeatureFlag(\nhandlers.FeatureFlag{Name: cli.MyFeatureFlag, Active: v.GetBool(cli.MyFeatureFlag)},\n)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nThis grabs the value that is set as the environment variable and appends it to the feature flag map as a key value pair.\nAll handlers have access to the handlerConfig, so have access to the flag value.  This boolean value can then be used to turn on or off features.\n\n")),(0,o.kt)("p",null,"if h.HandlerConfig.GetFeatureFlag(cli.MyFeatureFlag) {\ndo something. . .\n}"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"")))}f.isMDXComponent=!0}}]);