"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[23],{14442:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>r});var o=a(87462),n=(a(67294),a(3905));a(95657);const i={title:"0057 Deprecate use of lodash over time"},s="Deprecate use of lodash over time",l={unversionedId:"adrs/lodash",id:"adrs/lodash",title:"0057 Deprecate use of lodash over time",description:"We are currently using the utility library lodash throughout the frontend codebase. However, many of the methods provided by lodash have been superseded by native ES6+ methods. Even the latest ECMAScript functionality that is not natively supported by our target browsers (such as IE11) will be transpiled and/or polyfilled with our existing Webpack & Babel configuration. Continuing to use lodash methods as-is has two negative effects:",source:"@site/docs/adrs/0057-lodash.md",sourceDirName:"adrs",slug:"/adrs/lodash",permalink:"/mymove-docs/docs/adrs/lodash",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0057-lodash.md",tags:[],version:"current",sidebarPosition:57,frontMatter:{title:"0057 Deprecate use of lodash over time"},sidebar:"adrsSidebar",previous:{title:"0056 Use ASDF To Manage Golang Versions In Development",permalink:"/mymove-docs/docs/adrs/use-asdf-to-manage-golang-versions-in-development"},next:{title:"0058 Use Happo for visual regression testing",permalink:"/mymove-docs/docs/adrs/replace-loki-with-happo"}},d={},r=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"Deprecate lodash entirely",id:"deprecate-lodash-entirely",level:3},{value:"Switch from native methods to only lodash methods",id:"switch-from-native-methods-to-only-lodash-methods",level:3},{value:"Don&#39;t change lodash usage, but add Babel &amp; Webpack plugins",id:"dont-change-lodash-usage-but-add-babel--webpack-plugins",level:3},{value:"Do nothing",id:"do-nothing",level:3}],h={toc:r};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deprecate-use-of-lodash-over-time"},"Deprecate use of lodash over time"),(0,n.kt)("p",null,"We are currently using the utility library ",(0,n.kt)("a",{parentName:"p",href:"https://lodash.com/"},"lodash")," throughout the frontend codebase. However, many of the methods provided by lodash have been superseded by native ES6+ methods. Even the latest ECMAScript functionality that is not natively supported by our target browsers (such as IE11) will be transpiled and/or polyfilled with our existing Webpack & Babel configuration. Continuing to use lodash methods as-is has two negative effects:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Inconsistent usage as some contributors will opt to use native JS functions instead of the lodash alternative"),(0,n.kt)("li",{parentName:"ul"},"An additional 3rd party dependency that we need to keep updated, and adds to our bundle size")),(0,n.kt)("p",null,"I am proposing that we fully deprecate usage of lodash methods that have native JavaScript equivalents. We can use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore"},"You\xa0Don\u2019t Need Lodash/Underscore")," ESLint plugin to begin enforcing consistent usage on a per-method basis. Additionally, we can use the ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/lodash-webpack-plugin"},"lodash-webpack-plugin")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/babel-plugin-lodash"},"babel-plugin-lodash")," to cherry-pick lodash methods with no native equivalent that we may want to continue using (such as ",(0,n.kt)("inlineCode",{parentName:"p"},"uniqueId"),"), and result in a smaller bundle."),(0,n.kt)("p",null,"Additionally, this strategy leaves us open to completely removing lodash as a dependency in the future if we so choose. I'm focusing on bundle size over individual method benchmarks, because it is ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/dev-channel/the-cost-of-javascript-84009f51e99e"},"well-documented")," that reducing parse & compile time is the most effective way to improve performance on mobile devices."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note that some of the native equivalents are not exactly the same as the lodash versions. The links below point to documentation for any differences.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Methods to deprecate (links to eslint plugin docs):")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_bind"},"bind")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_concat"},"concat")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_debounce"},"debounce")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_every"},"every")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_filter"},"filter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_each"},"forEach")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_get"},"get")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_head-and-_tail"},"head")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_includes"},"includes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_isempty"},"isEmpty")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_isfinite"},"isFinite")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_isInteger"},"isInteger")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_isnil"},"isNil")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_isnull"},"isNull")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_last"},"last")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_map"},"map")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_omit"},"omit")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_pick"},"pick")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_reject"},"reject")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_some"},"some")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_sortby-and-_orderby"},"sortBy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_startsWith"},"startsWith")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_toupper"},"toUpper")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_uniq"},"uniq")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_without"},"without"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Methods to retain (links to lodash docs):")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://lodash.com/docs/4.17.15#capitalize"},"capitalize")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://lodash.com/docs/4.17.15#clone"},"clone")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://lodash.com/docs/4.17.15#cloneDeep"},"cloneDeep")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://lodash.com/docs/4.17.15#findKey"},"findKey")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://lodash.com/docs/4.17.15#findLast"},"findLast")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://lodash.com/docs/4.17.15#mapValues"},"mapValues")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://lodash.com/docs/4.17.15#memoize"},"memoize")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://lodash.com/docs/4.17.15#snakeCase"},"snakeCase")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://lodash.com/docs/4.17.15#startCase"},"startCase")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://lodash.com/docs/4.17.15#sum"},"sum")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://lodash.com/docs/4.17.15#union"},"union")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://lodash.com/docs/4.17.15#uniqueId"},"uniqueId"))),(0,n.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Deprecate lodash methods that have close native equivalents"),(0,n.kt)("li",{parentName:"ul"},"Deprecate lodash entirely"),(0,n.kt)("li",{parentName:"ul"},"Switch from native methods to only lodash methods"),(0,n.kt)("li",{parentName:"ul"},"Don't change lodash usage, but add Babel & Webpack plugins"),(0,n.kt)("li",{parentName:"ul"},"Do nothing")),(0,n.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Chosen Alternative: Deprecate lodash methods that have close native equivalents."),(0,n.kt)("li",{parentName:"ul"},"Additionally, set up the ",(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/lodash-webpack-plugin"},"lodash-webpack-plugin")," and ",(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/babel-plugin-lodash"},"babel-plugin-lodash")," to optimize how lodash adds to our bundle size."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Enforce one consistent style throughout the codebase"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Can replace existing lodash methods on a per-method basis using the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore"},"ESLint plugin")," (and prevent more instances from being added)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Lodash imports will be optimized and should reduce bundle size"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Need to socialize and educate engineers on the native methods to use instead")),(0,n.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,n.kt)("h3",{id:"deprecate-lodash-entirely"},"Deprecate lodash entirely"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Removes a significant library dependency"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Enforce one consistent style throughout the codebase"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Would have to immediately replace existing lodash methods throughout the code"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Need to find alternate solutions for lodash methods that have no native equivalent (such as ",(0,n.kt)("inlineCode",{parentName:"li"},"uniqueId"),")")),(0,n.kt)("h3",{id:"switch-from-native-methods-to-only-lodash-methods"},"Switch from native methods to only lodash methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Enforce one consistent style throughout the codebase"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Increased reliance on a third-party library, and learning curve for engineers who are more familiar with native JS than with lodash"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Our code is further removed from native JS implementations and future proposals")),(0,n.kt)("h3",{id:"dont-change-lodash-usage-but-add-babel--webpack-plugins"},"Don't change lodash usage, but add Babel & Webpack plugins"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Requires no code or habit changes (other than Webpack/Babel config)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Lodash imports will be optimized and should reduce bundle size"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Perpetuates inconsistent code styles and confusion for new engineers")),(0,n.kt)("h3",{id:"do-nothing"},"Do nothing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Requires no immediate effort"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Perpetuates inconsistent code styles and confusion for new engineers"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Lodash continues to account for ~98KB of our bundled frontend assets")))}u.isMDXComponent=!0}}]);