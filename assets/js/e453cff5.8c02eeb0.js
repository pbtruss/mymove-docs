"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[5742],{73266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));n(61839);const a={title:"0035 Use Query Builder for Admin Interface",description:"Decision outcome: Write a generic query builder\n"},o="Use Query Builder for Admin Interface",l={unversionedId:"adrs/use-query-builder",id:"adrs/use-query-builder",title:"0035 Use Query Builder for Admin Interface",description:"Decision outcome: Write a generic query builder\n",source:"@site/docs/adrs/0035-use-query-builder.md",sourceDirName:"adrs",slug:"/adrs/use-query-builder",permalink:"/mymove-docs/docs/adrs/use-query-builder",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0035-use-query-builder.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{title:"0035 Use Query Builder for Admin Interface",description:"Decision outcome: Write a generic query builder\n"},sidebar:"adrsSidebar",previous:{title:"0034 Working With Mocks: Generation and Assertion\n",permalink:"/mymove-docs/docs/adrs/working-with-mocks-generation-and-assertion"},next:{title:"0036 Use Separate Integration Package for Go Integration Tests",permalink:"/mymove-docs/docs/adrs/go-integration"}},s={},u=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"<em>Standardize model querying and use code generation for query methods</em>",id:"standardize-model-querying-and-use-code-generation-for-query-methods",level:3},{value:"<em>Use a third party query builder library</em>",id:"use-a-third-party-query-builder-library",level:3},{value:"<em>Write a generic query interface that accepts any model</em>",id:"write-a-generic-query-interface-that-accepts-any-model",level:3}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"use-query-builder-for-admin-interface"},"Use Query Builder for Admin Interface"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"User Story:")),(0,i.kt)("p",null,"System Admins (MilMove Engineers)\nrequire flexible querying of MilMove data\nto debug and fix production data issues.\nFor example, if an Engineer is debugging a recent bug with shipments,\nthey may want to view all shipments created or updated recently.\nMaybe the bug seems to be related to a certain set of moves\nand an Engineer wants to filter by foreign key.\nThis type of exploratory querying isn't built into the current APIs\nbecause it's not relevant or authorized to users of the production applications."),(0,i.kt)("p",null,"Since the current apps don't require this capability,\nthey also weren't built in a way that can be easily extended.\nThe most common API pattern is to list possible filters as query params in swagger\nthen write custom model methods to retrieve the data.\nFor example, the shipment model calls ",(0,i.kt)("inlineCode",{parentName:"p"},"FetchShipmentsByTSP")," to filter by a TSP.\nFollowing this pattern would require writing individual methods for every column\n(",(0,i.kt)("inlineCode",{parentName:"p"},"Shipment")," has around 50!).\nAdd on the requirement of combining filters\nand the possibilities become exponential."),(0,i.kt)("p",null,"Along with being inflexible,\nthe current model fetching models are inconsistent across the codebase.\nFilters, sorting, or joins are ad-hoc based on handler or feature needs.\nThis causes issues with maintenance, performance consistency, and security scoping."),(0,i.kt)("p",null,"This ADR will mostly focus on filtering data,\nbecause it is the primary required feature.\nHowever, similar patterns can be applied to other querying features,\nsuch as sorting and association embedding."),(0,i.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Standardize model querying and use code generation for query methods"))),(0,i.kt)("p",null,"Let's continue with our shipment example.\nNote that we'll use Pop here,\nbut we could also generate sqlx similarly."),(0,i.kt)("p",null,"Generated model methods may look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// The main interface for defining a filter clause\ntype ShipmentQueryFilter interface {\n    ApplyQuery(q pop.Query)  pop.Query // would apply a Where clause for the column\n}\n\ntype CreatedAtFilter struct {\n     createdAt time.Time\n     comparator Comparator // string of possible comparators (=, >, <...)\n}\n\nfunc (f CreatedAtFilter) ApplyQuery(q pop.Query) pop.Query {\n  // comparator is from a set of constants/enum,\n  // not user defined\n  // could also generate case statement here instead\n  column := fmt.Sprintf("created_at %s", f.comparator)\n  return query.Where(column, f.createAt)\n}\n\ntype MoveFilter struct {\n    moveID uuid.UUID\n    comparator Comparator // string of possible comparators (=, >, <...)\n}\n\nfunc (f MoveFilter) ApplyQuery(q pop.Query) pop.Query {\n  column := fmt.Sprintf("move_id %s", f.comparator)\n  return query.Where(column, f.moveID)\n}\n\n// ... so on for every column\n\n// FetchShipments is the only method exposed for fetching a list of shipments\nfunc FetchShipments(db *pop.Connection, filters []ShipmentQueryFilter) []Shipments {\n  var shipments Shipments\n  query := db.Query()\n  for _, filter := range filters {\n    query := filter.ApplyQuery(query)\n  }\n  query.All(&shipments)\n  return shipments\n}\n')),(0,i.kt)("p",null,"The handler or service (similar code in either)\nwould then parse all query params into filters.\nThis could also be generated:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func (h ListShipmentsHandler) Handle(params shipmentop.ListShipmentParams) middleware.Responder {\n  filters := make([]QueryFilter)\n  // could also be a list\n  if params.CreatedAtEq {\n    filters = append(\n      filters,\n      CreatedAtFilter{\n        time.Time(params.CreateAt).String(),\n        Equals,\n      })\n  }\n  if params.CreatedAtGreaterThan {\n    filters = append(\n      filters,\n      CreatedAtFilter{\n        time.Time(params.CreateAt).String(),\n        GreaterThan,\n      })\n  }\n  if params.MoveIDEqual {\n    filters = append(\n      filters,\n      MoveIDFilter{\n        uuid.FromString(params.MoveID.String()),\n        Equals,\n      })\n  }\n  // once again every possible column...\n\n  shipment, err := FetchShipments(h.db, filters)\n  // ... return a response\n}\n")),(0,i.kt)("p",null,"The swagger definition would then list all the possible column filters.\nThese would be arrays (ex. ",(0,i.kt)("inlineCode",{parentName:"p"},"move_ids_equal"),"),\nrather than the singular parameters in our current API specs.\nLike in the query builder below,\nthis filters could also use a more complex string,\nsuch as ",(0,i.kt)("inlineCode",{parentName:"p"},"move_ids=eq,1")," to avoid denoting every filter type.\nHowever, we lose typing/go-swagger generation\nbecause Open API does not support object nesting like this."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Use a third party query builder library"))),(0,i.kt)("p",null,"Some Go sql libraries offer more flexibility than Pop or sqlx.\nFor example, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/doug-martin/goqu"},"goqu"),"\nor ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Masterminds/squirrel"},"squirrel"),"."),(0,i.kt)("p",null,"For example, goqu offers expression based querying like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-golang"},'sql, _, _ := db.From("items").Where(goqu.Ex{\n  "col1": "a",\n  "col2": 1,\n  "col3": true,\n  "col4": false,\n  "col5": nil,\n  "col6": []string{"a", "b", "c"},\n}).ToSql()\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Write a generic query interface that accepts any model"),"\nAnother option is to write a query builder as a dependency to handlers/services.\nThe proof of concept is as follows:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'type QueryFilter interface {\n  Column() string\n  Comparator() string\n  Value() interface{}\n}\n\n// Lookup to check if a specific string is inside the db field tags of the type\nfunc getDBColumn(t reflect.Type, field string) (string, bool) {\n  for i := 0; i < t.NumField(); i++ {\n    dbTag, ok := t.Field(i).Tag.Lookup("db")\n    if ok && dbTag == field {\n      return dbTag, true\n    }\n  }\n  return "", false\n}\n\nfunc filteredQuery(query *pop.Query, filters []services.QueryFilter, t reflect.Type) (*pop.Query, error) {\n  invalidFields := make([]string, 0)\n  for _, f := range filters {\n    column, ok := getDBColumn(t, f.Column())\n    if !ok {\n      invalidFields = append(\n        invalidFields,\n        fmt.Sprintf("%s %s", f.Column(), f.Comparator()),\n      )\n      continue\n    }\n    columnQuery := fmt.Sprintf("%s %s ?", column, comparator)\n    query = query.Where(columnQuery, f.Value())\n  }\n  if len(invalidFields) != 0 {\n    return query, fmt.Errorf("%v is not valid input", invalidFields)\n  }\n  return query, nil\n}\n\n// FetchMany fetches multiple model records using pop\'s All method\n// Will return error if model is not pointer to slice of structs\nfunc (p *Builder) FetchMany(model interface{}, filters []services.QueryFilter) error {\n  t := reflect.TypeOf(model).Elem().Elem()\n  query := p.db.Q()\n  query, err := filteredQuery(query, filters, t)\n  if err != nil {\n    return err\n  }\n  return query.All(model)\n}\n')),(0,i.kt)("p",null,"And a service would utilize it as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type shipmentListQueryBuilder interface {\n  FetchMany(model interface{}, filters []services.QueryFilter) error\n}\n\n// FetchShipmentList is uses the passed query builder to fetch a list of shipments\nfunc (o *shipmentListFetcher) FetchShipmentList(filters []services.QueryFilter) (models.Shipments, error) {\n  var shipments models.Shipments\n  error := o.builder.FetchMany(&shipments, filters)\n  return shipments, error\n}\n")),(0,i.kt)("p",null,"In this case, the API uses a generic filter parameter, such as:\n",(0,i.kt)("inlineCode",{parentName:"p"},"shipments?filter=created_at.gt:2019,moveID.eq:100"),".\nNote that we're going to run into object nesting issues discussed in this\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/issues/1706"},"Open API Spec Issue")),(0,i.kt)("p",null,"The handler (or middleware) marshals those filters into a ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryFilter"),"\nand passes them to the service"),(0,i.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chosen Alternative: ",(0,i.kt)("strong",{parentName:"li"},"write a generic query builder")),(0,i.kt)("li",{parentName:"ul"},"The main motivators of this decision are:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It accomplishes our desired feature set"),(0,i.kt)("li",{parentName:"ul"},"It is relatively simple to implement"),(0,i.kt)("li",{parentName:"ul"},"It makes our codebase more maintainable")))),(0,i.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,i.kt)("h3",{id:"standardize-model-querying-and-use-code-generation-for-query-methods"},(0,i.kt)("em",{parentName:"h3"},"Standardize model querying and use code generation for query methods")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Provides typed filters and code patterns are explicit"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Generation would require in depth go-swagger and Pop/sqlx knowledge"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Large API surface (individual params for each possible column)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," It would be difficult to build"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Due to development time, it could lock us into a specific db connector/ORM")),(0,i.kt)("h3",{id:"use-a-third-party-query-builder-library"},(0,i.kt)("em",{parentName:"h3"},"Use a third party query builder library")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Wouldn't have to build/maintain it ourselves"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Could lock us into a third party library"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Most options don't provide much more than an ORM"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Most options aren't well maintained or abandoned"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Doesn't integrate into current toolset")),(0,i.kt)("h3",{id:"write-a-generic-query-interface-that-accepts-any-model"},(0,i.kt)("em",{parentName:"h3"},"Write a generic query interface that accepts any model")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Relatively lightweight/easy to build"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Allows us to abstract the db connector/ORM through our own interface"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Utilizes metadata already on models with little/no code generation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Reduces the API surface and boilerplate parameter definitions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Loses a lot of type safety with columns being strings.\nOpenAPI 2 does not support objects in query params.\nOpenAPI does, however it does not support them nested within an array."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Uses reflection (note this is already being used by Pop to create queries)")))}p.isMDXComponent=!0}}]);