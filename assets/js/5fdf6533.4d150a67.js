"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[4642],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return r?n.createElement(g,s(s({ref:t},d),{},{components:r})):n.createElement(g,s({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},74876:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={},l=void 0,p={unversionedId:"dev/testing/writing-tests/Testing-Handlers",id:"dev/testing/writing-tests/Testing-Handlers",isDocsHomePage:!1,title:"Testing-Handlers",description:"Test Setup",source:"@site/docs/dev/testing/writing-tests/Testing-Handlers.md",sourceDirName:"dev/testing/writing-tests",slug:"/dev/testing/writing-tests/Testing-Handlers",permalink:"/mymove-docs/docs/dev/testing/writing-tests/Testing-Handlers",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/testing/writing-tests/Testing-Handlers.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"Testing-Best-Practices",permalink:"/mymove-docs/docs/dev/testing/writing-tests/Testing-Best-Practices"},next:{title:"Interacting-with-the-DB-in-Go-server-tests",permalink:"/mymove-docs/docs/dev/testing/test-data/Interacting-with-the-DB-in-Go-server-tests"}},d=[{value:"Test Setup",id:"test-setup",children:[]},{value:"Inspecting the response",id:"inspecting-the-response",children:[]}],u={toc:d};function c(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"test-setup"},"Test Setup"),(0,o.kt)("p",null,"Most handler tests require the same boilerplate code and setup steps."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create the necessary models in the DB. For example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-golang"},"move := testdatagen.MakeDefaultMove(suite.DB())\norder := move.Orders\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set up the Body of the HTTP request if creating or updating a model:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'body := &ghcmessages.UpdateOrderPayload{\n    Sac: handlers.FmtString("987654321"),\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Define the request:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'request := httptest.NewRequest("PATCH", "/orders/{orderID}", nil)\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set up the params:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-golang"},"params := orderop.UpdateOrderParams{\n    HTTPRequest: request,\n    OrderID:     strfmt.UUID(order.ID.String()),\n    IfMatch:     etag.GenerateEtag(order.UpdatedAt),\n    Body:        body,\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set up the context:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-golang"},"context := handlers.NewHandlerContext(suite.DB(), suite.TestLogger())\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set up the handler:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-golang"},"handler := UpdateOrderHandler{\n    context,\n    orderservice.NewOrderUpdater(suite.DB()),\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Validate the Body. This runs the Swagger validation against the generated params before passing to the handler, which is what happens when the real endpoint is hit."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-golang"},"suite.NoError(params.Body.Validate(strfmt.Default))\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Finally make the request:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-golang"},"response := handler.Handle(params)\n")))),(0,o.kt)("p",null,"To test the response, make sure to test all the fields that you expect to be present. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},"response := handler.Handle(params)\nsuite.IsNotErrResponse(response)\norderOK := response.(*orderop.GetOrderOK)\nordersPayload := orderOK.Payload\n\nsuite.Assertions.IsType(&orderop.GetOrderOK{}, response)\nsuite.Equal(order.ID.String(), ordersPayload.ID.String())\nsuite.Equal(move.Locator, ordersPayload.MoveCode)\nsuite.NotNil(order.NewDutyStation)\nsuite.NotZero(order.OriginDutyStation)\nsuite.NotZero(ordersPayload.DateIssued)\n")),(0,o.kt)("p",null,"Note that the expected order of arguments to ",(0,o.kt)("inlineCode",{parentName:"p"},"suite.Equal")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"(expected, actual)"),". The payload attributes should always be on the right. This makes it easier to troubleshoot.\nWhenever a value is known, we want to prefer checking explicitly for the value using ",(0,o.kt)("inlineCode",{parentName:"p"},"suite.Equal"),"\nor ",(0,o.kt)("inlineCode",{parentName:"p"},"suite.EqualValues"),".\nRead the [","[Testing Best Practices]","] for more guidance."),(0,o.kt)("h2",{id:"inspecting-the-response"},"Inspecting the response"),(0,o.kt)("p",null,"Because we use Swagger to generate API code, each handler has its own response ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),"\nfor each defined HTTP status. For example, when the status is 200, the ",(0,o.kt)("inlineCode",{parentName:"p"},"UpdateOrder"),"\nhandler has a response ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"orderop.UpdateOrderOK{}"),".\nTo get the payload of the response, you have to do something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},"payload := response.(*orderop.UpdateOrderOK).Payload\n")),(0,o.kt)("p",null,"Then you can fetch the various attributes, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"payload.MoveCode"),"."),(0,o.kt)("p",null,"If you're used to web frameworks like Rails, you might prefer to inspect the payload as\nJSON for debugging. Here's how to parse the response as JSON:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'payload := response.(*orderop.UpdateOrderOK).Payload\njsonPayload, errJSONMarshall := json.Marshal(payload)\nif errJSONMarshall != nil {\n  fmt.Println("failed to parse payload as JSON")\n}\nfmt.Println(string(jsonPayload))\n')))}c.isMDXComponent=!0}}]);