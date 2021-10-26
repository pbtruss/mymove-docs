"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[7059],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,h=d["".concat(l,".").concat(c)]||d[c]||u[c]||i;return a?n.createElement(h,s(s({ref:t},m),{},{components:a})):n.createElement(h,s({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},70414:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),s=["components"],o={sidebar_position:3},l="API Style Guide",p={unversionedId:"api/guides/api-style-guide",id:"api/guides/api-style-guide",isDocsHomePage:!1,title:"API Style Guide",description:"We really need a comprehensive style guide, but in the meanwhile this page will collect useful bits of style related info.",source:"@site/docs/api/guides/api-style-guide.md",sourceDirName:"api/guides",slug:"/api/guides/api-style-guide",permalink:"/mymove-docs/docs/api/guides/api-style-guide",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/api/guides/api-style-guide.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apiSidebar",previous:{title:"API Errors",permalink:"/mymove-docs/docs/api/guides/api-errors"},next:{title:"Creating an Endpoint",permalink:"/mymove-docs/docs/api/guides/guide-to-creating-an-endpoint"}},m=[{value:"Paths",id:"paths",children:[]},{value:"Parameters",id:"parameters",children:[{value:"<strong>Case</strong>",id:"case",children:[]},{value:"<strong>Special Parameters</strong>",id:"special-parameters",children:[]}]},{value:"Values",id:"values",children:[]},{value:"Tags",id:"tags",children:[{value:"<strong>Dates</strong>",id:"dates",children:[]},{value:"Convert dates to timestamps when comparing with timestamps",id:"convert-dates-to-timestamps-when-comparing-with-timestamps",children:[]},{value:"Serialization",id:"serialization",children:[]}]}],u={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api-style-guide"},"API Style Guide"),(0,i.kt)("p",null,"We really need a comprehensive style guide, but in the meanwhile this page will collect useful bits of style related info."),(0,i.kt)("h2",{id:"paths"},"Paths"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use kebab-case for all paths. This is a common convention.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In addition, since we use camelCase for parameter names, if you have parameters in your path, they will be camelCase. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Think of the path as pointing to a resource. A common pattern is ",(0,i.kt)("inlineCode",{parentName:"p"},"/resources/{resourceID}"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use the plural version of a resource name unless the resource in question is a singleton within the system (for example, the overall status of the system might be ",(0,i.kt)("inlineCode",{parentName:"p"},"/status"),"). This keeps it consistent in the way you refer to particular resources."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"'/mto-shipments/{mtoShipmentID}/addresses/{addressID}':\n")))),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("h3",{id:"case"},(0,i.kt)("strong",{parentName:"h3"},"Case")),(0,i.kt)("p",null,"Consistency is important and using mixed cases is confusing. We selected camelCase because it's predominant in the code base and required the least amount of effort to implement. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/docs/adr/0044-params-styling.md"},"[Decision Record]")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use camelCase for all API parameters in the body and path.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use all-caps for ID unless the whole parameter is an id. So we use ",(0,i.kt)("inlineCode",{parentName:"p"},"moveTaskOrderID")," but we also use ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  id:\n    format: uuid\n    type: string\n  moveTaskOrderID:\n    format: uuid\n    type: string\n")))),(0,i.kt)("h3",{id:"special-parameters"},(0,i.kt)("strong",{parentName:"h3"},"Special Parameters")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All PUT and PATCH updates should have an eTag in the request. This is required to enforce optimistic locking. In the yaml, we mark these as ",(0,i.kt)("inlineCode",{parentName:"p"},"readOnly: true"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All endpoints should properly populate the ",(0,i.kt)("inlineCode",{parentName:"p"},"produces")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"consumes")," properties in the yaml. This is most usually set to ",(0,i.kt)("inlineCode",{parentName:"p"},"application/json"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  consumes:\n    - application/json\n  produces:\n    - application/json\n")))),(0,i.kt)("h2",{id:"values"},"Values"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enum values should be ALL_CAPS with underscores. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"    enum:\n      - RELEASING_AGENT\n      - RECEIVING_AGENT\n")),(0,i.kt)("h2",{id:"tags"},"Tags"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use camelCase for the tags. Typically use object names for tags to group all endpoints associated with the object like ",(0,i.kt)("inlineCode",{parentName:"li"},"paymentRequest"),".")),(0,i.kt)("h3",{id:"dates"},(0,i.kt)("strong",{parentName:"h3"},"Dates")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use Swagger supported date formats, ",(0,i.kt)("inlineCode",{parentName:"p"},"date-time")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"date"),", depending on whether we need to store an exact timestamp of the event. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/docs/adr/0051-swagger-date-formats.md"},"[ADR]")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"    requestedPickupDate:\n      format: date\n      type: string\n    updatedAt:\n      format: date-time\n      type: string\n      readOnly: true\n")))),(0,i.kt)("p",null,"Note that ",(0,i.kt)("strong",{parentName:"p"},"in the database"),", we use the following recommendations. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/docs/adr/0043-prime-time.md"},"[Decision Record]")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use timestamps when recording when an action has occurred. Examples include ",(0,i.kt)("inlineCode",{parentName:"p"},"created_at"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"updated_at"),", etc. values")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use dates when accepting a scheduled date from the Prime. Examples include ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduled_pickup_date"),", etc. Dates are typically formatted as ",(0,i.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," strings in payloads")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"updatedAt")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"createdAt")," should always be marked ",(0,i.kt)("inlineCode",{parentName:"p"},"readOnly: true"),". This is because we do not use any values the caller passes in, but instead calculate them ourselves."))),(0,i.kt)("h3",{id:"convert-dates-to-timestamps-when-comparing-with-timestamps"},"Convert dates to timestamps when comparing with timestamps"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Interpret a date in Pacific time to convert it to a naive timestamp")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use beginning-of-day (12:00:00 am) or end-of-day (11:59:59 pm) depending on operation being performed. In general, use the most forgiving interpretation:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If you\u2019re calculating if a date is more than 10 days in the future, use end-of-day."),(0,i.kt)("li",{parentName:"ul"},"If you\u2019re calculating if a date is more than 2 days ago, use beginning-of-day.")))),(0,i.kt)("h3",{id:"serialization"},"Serialization"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc3339"},"RFC3339")," unless you have a reason not to. It handles both dates and timestamps. ",(0,i.kt)("inlineCode",{parentName:"p"},"ISO8601")," is roughly equivalent for the purposes of this document; however, it contains many optional features and it is recommended that projects move to ",(0,i.kt)("inlineCode",{parentName:"p"},"RFC3339")," to avoid potential issues resulting from this complexity."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Date example: ",(0,i.kt)("inlineCode",{parentName:"li"},"2007-11-13T00:00:00Z")," (Note that this includes zeroed out hours, minutes, etc.)"),(0,i.kt)("li",{parentName:"ul"},"Timestamp example: ",(0,i.kt)("inlineCode",{parentName:"li"},"2007-11-13T09:13:00Z"))))}d.isMDXComponent=!0}}]);