"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[6146],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2920:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),r=["components"],s={},l=void 0,c={unversionedId:"old-wiki/Push-Notifications-to-Prime",id:"old-wiki/Push-Notifications-to-Prime",isDocsHomePage:!1,title:"Push-Notifications-to-Prime",description:"The push mechanism is a way to notify the Prime of changes as they happen.",source:"@site/docs/old-wiki/Push-Notifications-to-Prime.md",sourceDirName:"old-wiki",slug:"/old-wiki/Push-Notifications-to-Prime",permalink:"/mymove-docs/docs/old-wiki/Push-Notifications-to-Prime",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/old-wiki/Push-Notifications-to-Prime.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Performance Testing `fetchMTOUpdates` Query",permalink:"/mymove-docs/docs/old-wiki/Performance-Testing-fetchMTOUpdates"},next:{title:"React forms using Formik",permalink:"/mymove-docs/docs/old-wiki/React-forms-using-Formik"}},p=[{value:"Design",id:"design",children:[]},{value:"Subscribe to Notifications",id:"subscribe-to-notifications",children:[]},{value:"Generate Notifications",id:"generate-notifications",children:[]},{value:"Event Types",id:"event-types",children:[{value:"Logical Objects",id:"logical-objects",children:[]}]},{value:"Notifications",id:"notifications",children:[]},{value:"Send Notifications",id:"send-notifications",children:[]}],d={toc:p};function u(e){var t=e.components,s=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The push mechanism is a way to notify the Prime of changes as they happen."),(0,a.kt)("p",null,"We will be using Web Hooks to implement the push mechanism."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Webhooks are a useful and a resource-light way to implement event reactions. Web hooks provide a mechanism where by a server-side application can notify a client-side application when a new event (that the client-side application might be interested in) has occurred on the server."),(0,a.kt)("p",{parentName:"blockquote"},"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://codeburst.io/what-are-webhooks-b04ec2bf9ca2"},"https://codeburst.io/what-are-webhooks-b04ec2bf9ca2"))),(0,a.kt)("p",null,"For a quick primer on REST hooks and overview of webhooks - this is a great start \u2192 ",(0,a.kt)("a",{parentName:"p",href:"https://resthooks.org/docs/"},"https://resthooks.org/docs/")),(0,a.kt)("p",null,"For this to work, all updates to objects that are of interest to the Prime should trigger an event. The notifications code will check the event to see if there is an active subscription to this event and store a notification record and payload to be sent to the Prime."),(0,a.kt)("p",null,"It's important to note that since Milmove is a Dod property, the connection to the subscriber will be an mTLS connection."),(0,a.kt)("h2",{id:"design"},"Design"),(0,a.kt)("p",null,"There are three components of the solution"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Subscribe to Notifications")," - The prime will subscribe to notifications using a URL that Milmove can send a POST request to."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Generate Notifications")," - Updates to the MTO in Milmove will trigger events which will store notifications."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Send Notifications")," - A client will read the notifications and send them to Prime.")),(0,a.kt)("h2",{id:"subscribe-to-notifications"},"Subscribe to Notifications"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5087).Z})),(0,a.kt)("p",null,"We create a table to hold the subscriptions so we can add, delete and modify their subscriptions."),(0,a.kt)("p",null,"We need a certificate to send them the notifications, so subscription records should have an id that can be used to find the certificate."),(0,a.kt)("p",null,"A subscription consists of Object+verb event code, subscriberID, url to contact and subscription status."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Subscription endpoints are not MVP. This means that we will not create endpoints for subscribe/delete etc.. With only one suscriber, endpoints for self-service have limited value compared to a typical rest hooks implementation.")),(0,a.kt)("h2",{id:"generate-notifications"},"Generate Notifications"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4449).Z})),(0,a.kt)("p",null,"Next, we generate events when they occur in our system, by calling an event package. The event function will collect information that will allow the audit pkg and notifications pkg to assemble the record that they need to store."),(0,a.kt)("p",null,"Relevant code is in ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/transcom/mymove/blob/master/pkg/services/event/event.go"},"pkg/services/event/event.go"))),(0,a.kt)("p",null,"Event struct will contain the following parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"type Event struct {\n   EventKey        KeyType                 // Pick from a select list of predefined events (PaymentRequest.Create)\n   Request         *http.Request           // We expect to get this from the handler\n   MtoID           uuid.UUID               // This is the ID of the MTO that the object is associated with\n   UpdatedObjectID uuid.UUID               // This is the ID of the object itself (PaymentRequest.ID)\n   EndpointKey     EndpointKeyType         // Pick from a select list of endpoints\n   DBConnection    *pop.Connection         // The pop connection DB\n   HandlerContext  handlers.HandlerContext // The handler context\n   logger          handlers.Logger         // The logger\n}\n")),(0,a.kt)("p",null,"Dev would call event trigger code such as"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"_, err := TriggerEvent(Event{\n   EndpointKey:     SupportUpdatePaymentRequestStatusEndpointKey,\n   EventKey:        PaymentRequestCreateEventKey,\n   UpdatedObjectID: paymentRequestID,\n   MtoID:           mtoID,\n   Request:         &dummyRequest,\n   HandlerContext:  handler,\n   DBConnection:    h.DB(),\n})\n")),(0,a.kt)("p",null,"For more information on triggering events, read ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/wiki/How-to-Add-an-Event-Trigger"},"How to Add an Event Trigger")),(0,a.kt)("p",null,"Note: The event package is generic and services all events for all internal and external needs. It will not sanitize or assemble the data for the Prime notifications. It should initially support the expected needs of the notifications and audit records."),(0,a.kt)("h2",{id:"event-types"},"Event Types"),(0,a.kt)("p",null,"For notifications, we need to break down our MTO into smaller logical objects to be able to send over smaller updates than the full MTO."),(0,a.kt)("p",null,"For an effective solution, we had to pick a level of granularity for the events and notification bodies."),(0,a.kt)("p",null,"We do not want to send the whole MTO on each event, not do we want to send a single address record. Instead we have picked a set of logical objects that match updates that the Prime would like to see."),(0,a.kt)("h3",{id:"logical-objects"},"Logical Objects"),(0,a.kt)("p",null,"Logical Objects that the Prime is interested in are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Move - Consists of ",(0,a.kt)("inlineCode",{parentName:"li"},"Move")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Contractors")),(0,a.kt)("li",{parentName:"ul"},"Orders - Consists of ",(0,a.kt)("inlineCode",{parentName:"li"},"Orders"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Customer"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Entitlement"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"DutyStation"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"Address"),"."),(0,a.kt)("li",{parentName:"ul"},"MTOShipment - Consists of ",(0,a.kt)("inlineCode",{parentName:"li"},"MTOShipment"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Agent")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Address"),"."),(0,a.kt)("li",{parentName:"ul"},"MTOServiceItem - Consists of ",(0,a.kt)("inlineCode",{parentName:"li"},"MTOServiceItem"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"MTOServiceItemDimensions"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"MTOServiceItemCustomerContacts")),(0,a.kt)("li",{parentName:"ul"},"PaymentRequest - Consists of ",(0,a.kt)("inlineCode",{parentName:"li"},"PaymentRequest"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"PaymentServiceItems"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"PaymentServiceItemParams")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Uploads"))),(0,a.kt)("p",null,'What this means is an update to an address on an MTOShipment should result in an "MTOShipment.Update" event.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3239).Z})),(0,a.kt)("h2",{id:"notifications"},"Notifications"),(0,a.kt)("p",null,"The notifications code will register a handler with the event package. When an event happens, the event pkg will call each registered handler."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"   for i := 0; i < len(registeredEventHandlers); i++ {\n       err := registeredEventHandlers[i](&event)\n       if err != nil {\n           errorList = append(errorList, err)\n       }\n   }\n")),(0,a.kt)("p",null,"The handler will then assemble the data it needs to store in its record. It can also contain its own logic about whether a notification needs to be sent."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"NotificationEventHandler")," function will get the ",(0,a.kt)("inlineCode",{parentName:"p"},"EventKey"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"MtoID"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Request")," params, and ",(0,a.kt)("inlineCode",{parentName:"p"},"ObjectID"),"."),(0,a.kt)("p",null,"It will check that the originator of the action was not the same as the prime, that the MTO is available to prime and if so, create a payload from the logical object."),(0,a.kt)("p",null,"It will store a record with all relevant information including the payload in the notifications table."),(0,a.kt)("p",null,"Relevant code is in ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/transcom/mymove/blob/master/pkg/services/event/notification.go"},"pkg/services/event/notification.go"))),(0,a.kt)("h2",{id:"send-notifications"},"Send Notifications"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2966).Z})),(0,a.kt)("p",null,"To send the payload, we use an app called the webhook-client that that will periodically check the webhook_notifications table and send to the Prime."),(0,a.kt)("p",null,"The app will be asynchronous to the rest of the handling of the event. This is intentional to avoid increasing the time to execute the handler."))}u.isMDXComponent=!0},4449:function(e,t,n){t.Z=n.p+"assets/images/generate-notifications-217da5dba46615abe111b071d3f17d0c.png"},3239:function(e,t,n){t.Z=n.p+"assets/images/push-objects-fed3803c5ca838daa527f160ae2719b6.png"},2966:function(e,t,n){t.Z=n.p+"assets/images/send-notifications-775bdb40f2725554cc5ed8534e0c0593.png"},5087:function(e,t,n){t.Z=n.p+"assets/images/subscribe-notifications-e37e1b278871a04e55bc00fb1aa152d7.png"}}]);