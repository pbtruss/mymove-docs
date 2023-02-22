"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[6399],{63937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));n(95657);const r={sidebar_position:19},o="What Is Optimistic Locking?",s={unversionedId:"backend/guides/use-optimistic-locking",id:"backend/guides/use-optimistic-locking",title:"What Is Optimistic Locking?",description:"Optimistic locking is a strategy to avoid conflicts when multiple people may be editing a single record. Before committing a change, the system checks to make sure the record hasn't been updated before committing the update. For more information, check out the Wikipedia page and this MDN section on avoiding mid-air collisions.",source:"@site/docs/backend/guides/use-optimistic-locking.md",sourceDirName:"backend/guides",slug:"/backend/guides/use-optimistic-locking",permalink:"/mymove-docs/docs/backend/guides/use-optimistic-locking",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/guides/use-optimistic-locking.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"backendSidebar",previous:{title:"Turning TDL scores and TSP discounts into transportation service provider performances",permalink:"/mymove-docs/docs/backend/guides/tspp-data-creation"},next:{title:"Zip code to Rate area mappings",permalink:"/mymove-docs/docs/backend/guides/zip-code-to-rate-area-mappings"}},d={},l=[{value:"Leaning on the query builder",id:"leaning-on-the-query-builder",level:2},{value:"How to use optimistic locking on the front-end",id:"how-to-use-optimistic-locking-on-the-front-end",level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-optimistic-locking"},"What Is Optimistic Locking?"),(0,i.kt)("p",null,"Optimistic locking is a strategy to avoid conflicts when multiple people may be editing a single record. Before committing a change, the system checks to make sure the record hasn't been updated before committing the update. For more information, check out the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Optimistic_concurrency_control"},"Wikipedia page")," and ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag#avoiding_mid-air_collisions"},"this MDN section on avoiding mid-air collisions"),"."),(0,i.kt)("h1",{id:"how-to-use-optimistic-locking-with-e-tags"},"How To Use Optimistic Locking (With E-Tags)"),(0,i.kt)("p",null,"ETags (or entity tags) are an HTTP response header. An ETag is an identifier for a specific version of a resource. It lets caches be more efficient and save bandwidth, as a web server does not need to resend a full response if the content was not changed. Additionally, etags help to prevent simultaneous updates of a resource from overwriting each other. See references below for further information and related ADRs on why ETags are used on this project."),(0,i.kt)("p",null,"ETags are used in conjunction with the If-Match conditional HTTP request header. For GET and HEAD methods, the server will return the requested resource only if it matches one of the listed ETags. For PUT and other non-safe methods, it will only upload the resource in this case. "),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: you'll probably want to use this on ",(0,i.kt)("inlineCode",{parentName:"em"},"PUT")," or ",(0,i.kt)("inlineCode",{parentName:"em"},"PATCH")," endpoints only.")),(0,i.kt)("h2",{id:"leaning-on-the-query-builder"},"Leaning on the query builder"),(0,i.kt)("p",null,"Let's say you're building out a new endpoint that needs optimistic locking to avoid people updating stale data. You have a handler and a service object, let's call them ",(0,i.kt)("inlineCode",{parentName:"p"},"WidgetHandler")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"WidgetUpdater")," respectively. The ",(0,i.kt)("inlineCode",{parentName:"p"},"WidgetUpdater")," is going to take care of the business logic. Let's take a look at the handler first:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type PatchWidgetHandler struct {\n  //...\n  services.WidgetUpdater\n}\n\n\nfunc (h PatchWidgetHandler) Handle(params widgetops.PatchWidgetParams) middleware.Responder {\n  //...\n\n  eTag := params.IfMatch\n\n  widget := h.UpdateWidget(someArg, eTag)\n\n  //...\n}\n")),(0,i.kt)("p",null,"We're grabbing the E-tag from the ",(0,i.kt)("inlineCode",{parentName:"p"},"If-Match")," header, and passing it along to the\nservice object. Meanwhile, in the service object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type widgetUpdater struct {\n  //...\n  builder QueryBuilder\n}\n\nfunc (w *widgetUpdater) UpdateWidget(someArg interface{}, eTag string) {\n  var widget models.Widget\n  //...\n\n  verrs, err := w.builder.UpdateOne(&widget, &eTag)\n}\n\ntype PreconditionFailedError struct {\n  id  uuid.UUID\n  Err error\n}\n\nfunc (e PreconditionFailedError) Error() string {\n  return fmt.Sprintf(\"widget with id: '%s' could not be updated due to the record being stale\", e.id.String())\n}\n")),(0,i.kt)("p",null,"You'll notice that ",(0,i.kt)("inlineCode",{parentName:"p"},"UpdateOne"),", a function that takes a model struct as an\n",(0,i.kt)("inlineCode",{parentName:"p"},"interface{}")," in order to find the record and update it, now takes an optional\n",(0,i.kt)("inlineCode",{parentName:"p"},"string")," argument for an E-tag. If the supplied E-tag is stale, ",(0,i.kt)("inlineCode",{parentName:"p"},"UpdateOne")," will\nreturn a ",(0,i.kt)("inlineCode",{parentName:"p"},"query.StaleIdentifierError")," that you can then use to return a ",(0,i.kt)("inlineCode",{parentName:"p"},"412\nPrecondition Failed")," in the handler:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'//...\nwidget, err := h.UpdateWidget(someArg, eTag)\nif err != nil {\n  logger.Error("error: ", zap.Error(err))\n\n  switch e := err.(type) {\n  case widget.NotFoundError:\n    return widgetops.NewPatchWidgetNotFound()\n  case widget.PreconditionFailedError:\n    return widgetops.NewPatchWidgetPreconditionFailed()\n  default:\n    return widgetops.NewPatchWidgetInternalServerError()\n  }\n}\n\nreturn widgetops.NewPatchWidgetOk().WithPayload(widget) // make sure payload includes updated E-tag.\n//...\n')),(0,i.kt)("h2",{id:"how-to-use-optimistic-locking-on-the-front-end"},"How to use optimistic locking on the front-end"),(0,i.kt)("p",null,"Luckily, once we've added the ",(0,i.kt)("inlineCode",{parentName:"p"},"eTag")," key to our Swagger configuration, it's\nautomatically stored in the Redux state. All we have to do is pull it out of the\nRedux state when we need it."),(0,i.kt)("p",null,"Let's say we need to make an update to an MTO's status. First, we'll need to\nvisit the entity file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// src/shared/Entities/modules/moveTaskOrders.js\n\n//...\n\n\nconst updateMoveTaskOrders = 'moveTaskOrder.updateMoveTaskOrderStatus';\nexport function updateMoveTaskOrderStatus(\n  moveTaskOrderID,\n  isAvailableToPrime,\n  label = updateMoveTaskOrders,\n) {\n  const swaggerTag = 'moveTaskOrder.updateMoveTaskOrderStatus';\n  return swaggerRequest(\n    getGHCClient,\n    swaggerTag,\n    { moveTaskOrderID },\n    { updateMoveTaskOrders },\n  );\n}\n\n//...\n")),(0,i.kt)("p",null,"We need to make sure this function takes an ETag as an argument and passes it\nalong in the ",(0,i.kt)("inlineCode",{parentName:"p"},"If-Match")," header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// src/shared/Entities/modules/moveTaskOrders.js\n\n//...\n\n\nconst updateMoveTaskOrders = 'moveTaskOrder.updateMoveTaskOrderStatus';\nexport function updateMoveTaskOrderStatus(\n  moveTaskOrderID,\n  ifMatchETag,\n  isAvailableToPrime,\n  label = updateMoveTaskOrders,\n) {\n  const swaggerTag = 'moveTaskOrder.updateMoveTaskOrderStatus';\n  return swaggerRequest(\n    getGHCClient,\n    swaggerTag,\n    { moveTaskOrderID, 'If-Match': ifMatchETag },\n    { updateMoveTaskOrders },\n  );\n}\n\n//...\n")),(0,i.kt)("p",null,"Now we need to find where this function is actually being called. It looks like\nit's being used as the callback for a button click:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"// src/scenes/Office/TOO/customerDetails.jsx\n\n//...\n\n\n<button\n  data-hi={moveTaskOrder.eTag}\n  onClick={() => this.props.updateMoveTaskOrderStatus(moveTaskOrder.id)}\n>\n  Send to Prime\n</button>\n\n//...\n")),(0,i.kt)("p",null,"We'll need to supply the ETag as an argument:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"// src/scenes/Office/TOO/customerDetails.jsx\n\n//...\n\n\n<button\n  onClick={() => this.props.updateMoveTaskOrderStatus(moveTaskOrder.id, moveTaskOrder.eTag)}\n>\n  Send to Prime\n</button>\n\n//...\n")),(0,i.kt)("p",null,"You should now be able to update the move task order without getting that pesky\n",(0,i.kt)("inlineCode",{parentName:"p"},"412 Precondition Failed")," error."),(0,i.kt)("h1",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag"},"Entity Tags on MDN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match"},"If-Match header on MDN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Optimistic_concurrency_control"},"Optimistic concurrency control on Wikipedia")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://sookocheff.com/post/api/optimistic-locking-in-a-rest-api/"},"Optimistic Locking in a REST API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/blob/a0eb0fb0d58f06493f26bff553d78fff5fa1aa86/docs/adr/0042-optimistic-locking.md"},"ADR 0042: Use If-Match / E-tags for optimistic locking ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/mymove-docs/docs/adrs/etag-for-child-updates"},"ADR 0049: Do not update child records using parent's E-tag"))))}p.isMDXComponent=!0}}]);