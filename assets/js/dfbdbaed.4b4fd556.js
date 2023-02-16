"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9210],{95414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var s=a(87462),o=(a(67294),a(3905));a(8209);const n={sidebar_position:5},i="Feature flags in the app",r={unversionedId:"backend/guides/feature-flags-in-the-app",id:"backend/guides/feature-flags-in-the-app",title:"Feature flags in the app",description:"To add a new feature flag, see How to Set Up a Feature Flag.",source:"@site/docs/backend/guides/feature-flags-in-the-app.md",sourceDirName:"backend/guides",slug:"/backend/guides/feature-flags-in-the-app",permalink:"/mymove-docs/docs/backend/guides/feature-flags-in-the-app",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/guides/feature-flags-in-the-app.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"backendSidebar",previous:{title:"Database Guides",permalink:"/mymove-docs/docs/backend/guides/database"},next:{title:"GHC Rate Engine & Invoicing",permalink:"/mymove-docs/docs/backend/guides/ghc/ghc-invoicing"}},d={},l=[{value:"<code>FEATURE_FLAG_SERVICE_COUNSELING</code>",id:"feature_flag_service_counseling",level:2},{value:"<code>FEATURE_FLAG_ACCESS_CODE</code>",id:"feature_flag_access_code",level:2}],c={toc:l};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,s.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"feature-flags-in-the-app"},"Feature flags in the app"),(0,o.kt)("p",null,"To add a new feature flag, see ",(0,o.kt)("a",{parentName:"p",href:"/mymove-docs/docs/backend/guides/how-to/set-up-a-feature-flag"},"How to Set Up a Feature Flag"),"."),(0,o.kt)("p",null,"Here are the feature flags being used in the app:"),(0,o.kt)("h1",{id:"backend-feature-flags"},"Backend Feature Flags:"),(0,o.kt)("p",null,"Feature flags for the backend are defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/pkg/cli/featureflag.go"},"https://github.com/transcom/mymove/blob/master/pkg/cli/featureflag.go")),(0,o.kt)("h2",{id:"feature_flag_service_counseling"},(0,o.kt)("inlineCode",{parentName:"h2"},"FEATURE_FLAG_SERVICE_COUNSELING")),(0,o.kt)("p",null,"A temporary feature flag as service counseling work goes on to gate the service counseling flow. This was added in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/6354"},"https://github.com/transcom/mymove/pull/6354")),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", all moves are routed to service counseling. This means their status gets set to ",(0,o.kt)("inlineCode",{parentName:"p"},"MoveStatusNeedsServiceCounseling"),"."),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", no moves are routed to service counseling. Their status gets set to ",(0,o.kt)("inlineCode",{parentName:"p"},"MoveStatusSUBMITTED"),". (See: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/main/pkg/models/move.go#L26"},"https://github.com/transcom/mymove/blob/main/pkg/models/move.go#L26")," for the move status types.)"),(0,o.kt)("h2",{id:"feature_flag_access_code"},(0,o.kt)("inlineCode",{parentName:"h2"},"FEATURE_FLAG_ACCESS_CODE")),(0,o.kt)("p",null,"This flag determines whether or not service members are prompted for an access code before they start onboarding."))}u.isMDXComponent=!0}}]);