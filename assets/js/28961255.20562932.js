"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[3013],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),l=p(n),m=o,u=l["".concat(d,".").concat(m)]||l[m]||g[m]||i;return n?r.createElement(u,c(c({ref:t},s),{},{components:n})):r.createElement(u,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=l;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},19824:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],a={},d="GHC Rate Engine",p={unversionedId:"dev/contributing/backend/ghc-invoicing/ghc-rate-engine",id:"dev/contributing/backend/ghc-invoicing/ghc-rate-engine",isDocsHomePage:!1,title:"GHC Rate Engine",description:"The Rate Engine is the tool that determines what the Prime will get paid for various components of their move.",source:"@site/docs/dev/contributing/backend/ghc-invoicing/ghc-rate-engine.md",sourceDirName:"dev/contributing/backend/ghc-invoicing",slug:"/dev/contributing/backend/ghc-invoicing/ghc-rate-engine",permalink:"/mymove-docs/docs/dev/contributing/backend/ghc-invoicing/ghc-rate-engine",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/contributing/backend/ghc-invoicing/ghc-rate-engine.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"GHC Pricing Parser",permalink:"/mymove-docs/docs/dev/contributing/backend/ghc-invoicing/ghc-pricing-parser"},next:{title:"How to handle back-end errors",permalink:"/mymove-docs/docs/dev/contributing/backend/handle-backend-errors"}},s=[],g={toc:s};function l(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ghc-rate-engine"},"GHC Rate Engine"),(0,i.kt)("p",null,"The Rate Engine is the tool that determines what the Prime will get paid for ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1U6a8-zc67eo1g888wM9LzFebQ8SBjGY7hTYYzbMyPPg/edit#heading=h.kl6kxd8pauo6"},"various components")," of their move."),(0,i.kt)("p",null,"We rely on the Rate Engine to price moves according to the most ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1j2kMIykyUQf8Dy8NF_L4PpU9iscQCbenmqF3T5-Dy6k/edit#gid=1448507886"},"current pricing template"),"."),(0,i.kt)("p",null,"The information from the pricing template has been broken down to show what ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1NRbxHmvaWV6aXQrxQ2LJhkc5tClAl3Eb1-MRxZ123Tw/edit#gid=0"},"inputs are needed for pricing service items"),"."),(0,i.kt)("p",null,"There is a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1KBQWC1bSUC6S69w-1fcdDpPId4tEiTZDQZfTTBNieVU/edit#heading=h.f6ntcg9hwkij"},"design doc")," on how to price a service item."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1c8v94Axdd_0C9Vhg6FbQr5B0a01-rwmcBlyoPZARIm8/edit#gid=0"},"Service Item Codes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1M1IdJfttPlasa_8NDJMsNIYNXksKMaR0bJsSkn7HpaA/edit#gid=1667287539"},"Pricing template with fake data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1m0dvq65BLR4066fN-wgVeS4M-1ay5Gqzixnvq1QqOVg/edit"},"2019-09-13 pricing instructions")," copied from pricing template"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/131RhttR_SqIxP9RkoMdWWX5Jn3_aEY0FXuozoURmr40/edit"},"Research versioning of rate engine tables")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1QVwY5uobUpz87WEeAXSnIXG0NE1o4YnFW0Lf7PnMqO0/edit#heading=h.8wmuqkn9o6rd"},"Design how data will be imported into production"))))}l.isMDXComponent=!0}}]);