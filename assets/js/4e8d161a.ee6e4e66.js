"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[690],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80242:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={},s="Golang Programming Guide",p={unversionedId:"dev/contributing/backend/golang-guide",id:"dev/contributing/backend/golang-guide",isDocsHomePage:!1,title:"Golang Programming Guide",description:"Style and Conventions",source:"@site/docs/dev/contributing/backend/golang-guide.md",sourceDirName:"dev/contributing/backend",slug:"/dev/contributing/backend/golang-guide",permalink:"/mymove-docs/docs/dev/contributing/backend/golang-guide",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/contributing/backend/golang-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"GHC Rate Engine",permalink:"/mymove-docs/docs/dev/contributing/backend/ghc-invoicing/ghc-rate-engine"},next:{title:"Loop Iteration in Golang",permalink:"/mymove-docs/docs/dev/contributing/backend/golang-loops"}},d=[{value:"Style and Conventions",id:"style-and-conventions",children:[{value:"Acronyms",id:"acronyms",children:[]}]},{value:"Importing Dependencies",id:"importing-dependencies",children:[]},{value:"Querying the Database Safely",id:"querying-the-database-safely",children:[{value:"<code>models.Fetch*</code> functions",id:"modelsfetch-functions",children:[]}]},{value:"Logging",id:"logging",children:[{value:"Logging Levels",id:"logging-levels",children:[]}]},{value:"Errors",id:"errors",children:[]},{value:"Libraries",id:"libraries",children:[{value:"Pop",id:"pop",children:[]}]},{value:"Learning",id:"learning",children:[]},{value:"Service Objects",id:"service-objects",children:[]},{value:"Testing",id:"testing",children:[{value:"General",id:"general",children:[]},{value:"Coverage",id:"coverage",children:[]},{value:"Models",id:"models",children:[]}]},{value:"Time",id:"time",children:[]},{value:"Miscellaneous Tips",id:"miscellaneous-tips",children:[]},{value:"Environment settings",id:"environment-settings",children:[{value:"Adding <code>ulimit</code>",id:"adding-ulimit",children:[]}]}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"golang-programming-guide"},"Golang Programming Guide"),(0,o.kt)("h2",{id:"style-and-conventions"},"Style and Conventions"),(0,o.kt)("p",null,"Generally speaking, we will follow the recommendations laid out in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/golang/go/wiki/CodeReviewComments"},"Go Code Review Comments"),". By its own admission, this page:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"...collects common comments made during reviews of Go code, so that a single detailed explanation can be referred to by shorthands. This is a laundry list of common mistakes, not a style guide."))),(0,o.kt)("p",null,"Despite not being an official style guide, it covers a good amount of scope in a concise format, and should be able to keep our project code fairly consistent."),(0,o.kt)("p",null,"Beyond what is described above, the following contain additional insights into how to write better Go code."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://talks.golang.org/2014/names.slide#1"},"What's in a name?")," (how to name things in Go)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://peter.bourgon.org/go-best-practices-2016/"},"Go best practices, six years in")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://peter.bourgon.org/blog/2017/06/09/theory-of-modern-go.html"},"A theory of modern Go"))),(0,o.kt)("h3",{id:"acronyms"},"Acronyms"),(0,o.kt)("p",null,"Domain concepts should be used without abbreviation when used alone."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Do"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Avoid"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"TransportationServiceProvider")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"TSP"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"TrafficDistributionList")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"TDL"))))),(0,o.kt)("p",null,"However, when used as a specifier or part of another name, names that have existing acronyms should use the acronym for brevity."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Do"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Avoid"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"TSPPerformance")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"TransportationServiceProviderPerformance"))))),(0,o.kt)("p",null,"Acronyms should always be either all caps or all lower-cased."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Do"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Avoid"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"TSPPerformance")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"tSPPerformance"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"tspPerformance")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"tspperformance"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"TspPerformance"))))),(0,o.kt)("h2",{id:"importing-dependencies"},"Importing Dependencies"),(0,o.kt)("p",null,"Dependencies are managed by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/golang/dep"},"dep"),". New dependencies are automatically detected in import statements. To add a new dependency to the project:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add the package to the import statement of a Go file."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"make clean")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"make server_generate")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"dep check")," (to verify what's missing.) If it looks reasonable then..."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"dep ensure"))),(0,o.kt)("h2",{id:"querying-the-database-safely"},"Querying the Database Safely"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SQL statements ",(0,o.kt)("em",{parentName:"li"},"must")," use PostgreSQL-native parameter replacement format (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"$1"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"$2"),", etc.) and ",(0,o.kt)("em",{parentName:"li"},"never")," interpolate values into SQL fragments in any other way."),(0,o.kt)("li",{parentName:"ul"},"SQL statements must only be defined in the ",(0,o.kt)("inlineCode",{parentName:"li"},"models")," package.")),(0,o.kt)("p",null,"Here is an example of a safe query for a single ",(0,o.kt)("inlineCode",{parentName:"p"},"Shipment"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// db is a *pop.Connection\n\nid := "0186ad95-14ed-4c9b-9f62-d5bd124f62a1"\n\nquery := db.Where("id = $1", id)\n\nshipment := &models.Shipment{}\nif err = query.First(shipment); err == nil {\n  pp.Println(shipment)\n}\n')),(0,o.kt)("h3",{id:"modelsfetch-functions"},(0,o.kt)("inlineCode",{parentName:"h3"},"models.Fetch*")," functions"),(0,o.kt)("p",null,"Functions that return model structs should return pointers."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func FetchShipment(db *pop.Connection, id uuid.UUID) (*Shipment, error) {}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Avoid")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func FetchShipment(db *pop.Connection, id uuid.UUID) (Shipment, error) {}\n")),(0,o.kt)("p",null,"This is for a few reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Many Pop methods that accept models need to use pointers in order to modify the struct being passed in. Using them everywhere\nmodels are used makes the code more consistent and avoids needing to convert to and from pointers."),(0,o.kt)("li",{parentName:"ul"},"Any methods on struct model instances need to have pointer receivers in order to mutate the struct. This is a common point of confusion\nand an easy way to introduce bugs into a codebase.")),(0,o.kt)("h2",{id:"logging"},"Logging"),(0,o.kt)("p",null,"We use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/uber-go/zap"},"Zap")," logging framework from Uber to produce structured log records.\nTo this end, code should avoid using the ",(0,o.kt)("a",{parentName:"p",href:"https://godoc.org/go.uber.org/zap#Logger.Sugar"},"SugaredLogger"),"s without\na very explicit reason which should be record in an inline comment where the SugaredLogger is constructed."),(0,o.kt)("h3",{id:"logging-levels"},"Logging Levels"),(0,o.kt)("p",null,"Another reason to use the Zap logging package is that it provides more nuanced logging levels than the basic Go logging package.\nThat said, leveled logging is only meaningful if there is a common pattern in the usage of each logging level. To that end,\nthe following indicates when each level of Logging should be used."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Fatal")," This should never be used outside of the server startup code in main.go. Fatal log messages call ",(0,o.kt)("inlineCode",{parentName:"p"},"sys.exit(1)")," which unceremoniously kills the server without running any clean up code. This is almost certainly never what you want in production.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Error")," Reserved for system failures, e.g. cannot reach a database, a DB insert which was expected to work failed,\nor an ",(0,o.kt)("inlineCode",{parentName:"p"},'"enum"')," has an unexpected value. In production an Error logging message should alert the team that\nall is not well with the server, so avoid being the 'Boy Who Cried Wolf'. In particular, if there is an API which takes an object ID as part of the URL,\nthen passing a bad value in should NOT log an Error message. It should log Info and then return 404.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Warn")," Don't use Warn - it rarely, if ever, adds any meaningful signal to the logs.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Info")," Use for recording 'Normal' events at a granularity that may be helpful to tracing and debugging requests,\ne.g. 404's from requests with bad IDs, authentication events (user logs in/out), authorization failures etc.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Debug"),' Debug events are of questionable value and should be used during development, but probably best removed\nbefore landing changes. The issue with them is, if they are left in the code, they quickly become so dense in the logs\nas to obscure other debug log entries. This leads to people an arms race of folks adding \'XXXXXXX\' to comments\nin order to identify their log items. If you must use them, I suggest adding an, e.g. zap.String("owner", "nick")'))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Use JSON friendly names for Zap.Objects")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Use JSON friendly names for ",(0,o.kt)("inlineCode",{parentName:"p"},"zap.Object")," so that you will be able to extract the values easily in CloudWatch Insights queries."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'s.logger.Info("EDIs processed", zap.Object("edisProcessed", &ediProcessing))\n')),(0,o.kt)("p",{parentName:"div"},"vs"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'s.logger.Info("EDIs processed", zap.Object("EDIs Processed", &ediProcessing))\n')),(0,o.kt)("p",{parentName:"div"},"The latter was nearly impossible to filter on. But the following insights query works"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"fields @timestamp, edisProcessed, @message\n| sort @timestamp desc\n")))),(0,o.kt)("h2",{id:"errors"},"Errors"),(0,o.kt)("p",null,"Some general guidelines for errors:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Don't bury your errors in underscores.")),(0,o.kt)("p",null,"If a function or other action generates an error, assign it to a variable and either return it as part of your function's output or handle it in place (",(0,o.kt)("inlineCode",{parentName:"p"},"if err != nil"),", etc.). There will be the very occasional exception to this - one is within tests, depending on the test's goal. If you find yourself typing that underscore, take a moment to ask yourself why you're choosing that option. On those very rare occasions when it is the correct behavior, please add a comment explaining why."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Don't:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"myVal, _ := functionThatShouldReturnAnInt()\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Do:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'myVal, err := functionThatShouldReturnAnInt()\nif err != nil {\n     return myVal, fmt.Errorf("function didn\'t return an int: %w", err)\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Log at the top level; create and pass along errors below.")),(0,o.kt)("p",null,"If you're creating a query (1) that is called by a function (2) that is in turned called by another function (3), create and return errors at levels 1 and 2 (and possibly handle them immediately after creation, if needed), and log them at level 3. Logs should be created at the top level and contain context about what created them. This is more difficult if logs are being created in every function and file that supports the operation you're working on. Here's an example of when to create errors and when to handle them:"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"pkg/models/blackout_dates.go"),", an error is created and returned:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func FetchTSPBlackoutDates(tx *pop.Connection, tspID uuid.UUID, shipment Shipment) ([]BlackoutDate, error) {\n  ...\n  err = query.All(&blackoutDates)\n  if err != nil {\n    return blackoutDates, fmt.Errorf("Blackout dates query failed: %w", err)\n  }\n\n  return blackoutDates, err\n}\n')),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"pkg/awardqueue/awardqueue.go"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"FetchTSPBlackoutDates")," is called, and any possible error is handled. This function also returns an error."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func ShipmentWithinBlackoutDates(tspID uuid.UUID, shipment models.Shipment) (bool, error) {\n  blackoutDates, err := models.FetchTSPBlackoutDates(aq.db, tspID, shipment)\n\n  if err != nil {\n    return false, fmt.Errorf("Error retrieving blackout dates from database: %w", err)\n  }\n\n  return len(blackoutDates) != 0, nil\n}\n')),(0,o.kt)("p",null,"Finally, at the top level in ",(0,o.kt)("inlineCode",{parentName:"p"},"attemptShipmentOffer")," in the same file, any errors bubbled up from ",(0,o.kt)("inlineCode",{parentName:"p"},"ShipmentWithinBlackoutDates")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"FetchTSPBlackoutDates")," are handled definitively, halting the progress of the longer function if the underlying processes and queries didn't complete as expected in the functions being called:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (aq *AwardQueue) attemptShipmentOffer(shipment models.Shipment) (*models.ShipmentOffer, error) {\n  aq.logger.Info("Attempting to offer shipment", zap.Any("shipment_id", shipment.ID))\n  ...\n  isAdministrativeShipment, err := aq.ShipmentWithinBlackoutDates(tsp.ID, shipment)\n  if err != nil {\n    aq.logger.Error("Failed to determine if shipment is within TSP blackout dates", zap.Error(err))\n    return err\n  }\n  ...\n}\n')),(0,o.kt)("p",null,"The error is created and passed along at the lowest level, logged and passed along at the middle level (along with other errors that can happen within that function), and logged again at the highest level before finally halting the progress of the process if an error is present."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. Use ",(0,o.kt)("inlineCode",{parentName:"strong"},"fmt.Errorf")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"%w")," verb when using external libraries.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://blog.golang.org/go1.13-errors"},(0,o.kt)("inlineCode",{parentName:"a"},"fmt.Errorf() with %w"))," provides greater error context and a stack trace, making it especially useful when dealing with the opacity that sometimes comes with external libraries. As of go 1.13 ",(0,o.kt)("inlineCode",{parentName:"p"},"fmt.Errorf()")," provides a new ",(0,o.kt)("inlineCode",{parentName:"p"},"%w")," verb that replaces the need for ",(0,o.kt)("inlineCode",{parentName:"p"},"errors.Wrap()"),". It takes a string with the ",(0,o.kt)("inlineCode",{parentName:"p"},"%w")," in it and the error as parameters: the string and error to provide context and explanation. Keep the string brief and clear, assuming that the fuller cause will be provided by the context ",(0,o.kt)("inlineCode",{parentName:"p"},"%w")," verb brings. It can also add useful context for errors related to internal code if there might otherwise be unhelpful opacity. ",(0,o.kt)("inlineCode",{parentName:"p"},"fmt.Errorf()")," in combination with ",(0,o.kt)("inlineCode",{parentName:"p"},"%w")," also capture stack traces with the additional function of string substitution/formatting for output."),(0,o.kt)("p",null,"Instead of just returning the error, offer greater context with something like this:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Current Recommendation:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'if err != nil {\n    return fmt.Errorf("Pop validate failed: %w", err)\n}\n')),(0,o.kt)("p",null,"As this is a recent change in golang standards you will see many uses of the ",(0,o.kt)("inlineCode",{parentName:"p"},"errors.Wrap")," still in the code, which had been the old recommendation. It is safe to change code that wraps errors as below to the new standard in the example above."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Old Recommendation:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'if err != nil {\n    return errors.Wrap(err, "Pop validate failed")\n}\n')),(0,o.kt)("p",null,"Using the new ",(0,o.kt)("inlineCode",{parentName:"p"},"%w")," provides access to some new features such as the new ",(0,o.kt)("inlineCode",{parentName:"p"},"errors.Is")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"errors.As")," functions. For more on the changes in go 1.13 see ",(0,o.kt)("a",{parentName:"p",href:"https://blog.golang.org/go1.13-errors"},"this official blog post")," and ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@felipedutratine/golang-how-to-handle-errors-in-v1-13-fda7f035d027"},"this article")," that go into more depth."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4. Don't ",(0,o.kt)("inlineCode",{parentName:"strong"},"fmt")," errors; log instead.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"fmt")," can provide useful error handling during initial debugging, but we strongly suggest logging instead, from when you write the initial lines of a new function. Using logging creates structured logs instead of the unstructured, human-friendly-only output that ",(0,o.kt)("inlineCode",{parentName:"p"},"fmt")," does. If an ",(0,o.kt)("inlineCode",{parentName:"p"},"fmt")," statement offers usefulness beyond your initial troubleshooting while working, switch it to ",(0,o.kt)("inlineCode",{parentName:"p"},'fmt.Errorf("text: %w", err)')," or ",(0,o.kt)("inlineCode",{parentName:"p"},"logger.Error()"),", perhaps with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/uber-go/zap"},"Zap"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Don't:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'fmt.Println("Blackout dates fetch failed: ", err)\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Do:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'logger.Error("Blackout dates fetch failed: ", err)\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5. If some of your errors are predictable, pattern match on them to provide more error detail.")),(0,o.kt)("p",null,"Some errors are predictable, such as those from the database that Pop returns to us. This gives you the option to use those predictable errors to give yourself and fellow maintainers of code more detail than you might get otherwise, like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// FetchServiceMemberForUser returns a service member only if it is allowed for the given user to access that service member.\n func FetchServiceMemberForUser(ctx context.Context, db *pop.Connection, user User, id uuid.UUID) (ServiceMember, error) {\n  var serviceMember ServiceMember\n  err := db.Eager().Find(&serviceMember, id)\n  if err != nil {\n    if errors.Cause(err).Error() == recordNotFoundErrorString {\n      return ServiceMember{}, ErrFetchNotFound\n    }\n    // Otherwise, it's an unexpected err so we return that.\n    return ServiceMember{}, err\n  }\n\n  if serviceMember.UserID != user.ID {\n    return ServiceMember{}, ErrFetchForbidden\n  }\n\n  return serviceMember, nil\n }\n")),(0,o.kt)("p",null,"You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},'fmt.Errorf("text: %w", err)')," in this situation to provide access to even more information, beyond the breadcrumbs left here."),(0,o.kt)("h2",{id:"libraries"},"Libraries"),(0,o.kt)("h3",{id:"pop"},"Pop"),(0,o.kt)("p",null,"We use Pop as the ORM(-ish) to mediate access to the database. ",(0,o.kt)("a",{parentName:"p",href:"https://andrew-sledge.gitbooks.io/the-unofficial-pop-book/content/"},"The Unofficial Pop Book")," is a valuable companion to Pop\u2019s ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gobuffalo/pop"},"GitHub documentation"),"."),(0,o.kt)("h2",{id:"learning"},"Learning"),(0,o.kt)("p",null,"If you are new to Go, you should work your way through all of these resources (in this order, ideally):"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://tour.golang.org"},"A Tour of Go")," (in-browser interactive language tutorial)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://golang.org/doc/code.html"},"How to Write Go Code")," (info about the Go environment, testing, etc.)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://golang.org/doc/effective_go.html"},"Effective Go")," (how to do things \u201cthe Go way\u201d)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://golang.github.io/dep/docs/daily-dep.html"},"Daily Dep documentation")," (common tasks you\u2019ll encounter with our dependency manager)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"http://exercism.io/languages/go/about"},"Exercism")," offers a series of exercises with gradually increasing complexity")),(0,o.kt)("p",null,"Additional resources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://godoc.org/"},"GoDoc")," (where you can read the docs for nearly any Go package)"),(0,o.kt)("li",{parentName:"ul"},"Check out the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/golang/go/wiki/Learn"},"Go wiki")),(0,o.kt)("li",{parentName:"ul"},"Advanced Testing with Go ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=yszygk1cpEc"},"Video")," and ",(0,o.kt)("a",{parentName:"li",href:"https://about.sourcegraph.com/go/advanced-testing-in-go"},"Article")," (great overview of useful techniques, useful for all Go programmers)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Book"),": ",(0,o.kt)("a",{parentName:"li",href:"http://www.gopl.io/"},"The Go Programming Language")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Article"),": ",(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@venks.sa/copying-data-from-s3-to-ebs-30x-faster-using-go-e2cdb1093284"},"Copying data from S3 to EBS 30x faster using Golang")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://devs.cloudimmunity.com/gotchas-and-common-mistakes-in-go-golang/index.html"},"50 Shades of Go: Traps, Gotchas, and Common Mistakes for New Golang Devs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1QQq8Yf90ar59OUQM6qRDS6Bwk5hfOCpcqw_WUX43YOg/edit"},"Ultimate Go Notebook")," by Bill Kennedy"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.practical-go-lessons.com"},"Practical Go Lessons"))),(0,o.kt)("h2",{id:"service-objects"},"Service Objects"),(0,o.kt)("p",null,"Service Objects are an architectural design pattern we use to encapsulate business logic. Service objects allow for better unit testing, re-usability, and organization of code in the MilMove project. For more information on service objects, including how we use them and how to write them, please see the ",(0,o.kt)("a",{parentName:"p",href:"service-objects"},"documentation")),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"Knowing what deserves a test and what doesn\u2019t can be tricky, especially early on when a project\u2019s testing conventions haven\u2019t been established. Use the following guidelines to determine if and how some code should be tested."),(0,o.kt)("h3",{id:"general"},"General"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use table-driven tests where appropriate."),(0,o.kt)("li",{parentName:"ul"},"Make judicious use of helper functions so that the intent of a test is not lost in a sea of error checking and boilerplate. Use ",(0,o.kt)("a",{parentName:"li",href:"https://golang.org/pkg/testing/#T.Helper"},(0,o.kt)("inlineCode",{parentName:"a"},"t.Helper()"))," in your test helper functions to keep stack traces clean.")),(0,o.kt)("h3",{id:"coverage"},"Coverage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Always test exported functions.\nExported functions should be treated as an API layer for other packages.\nCover the expected behavior and error scenarios as a user of that API."),(0,o.kt)("li",{parentName:"ul"},"Try not to test unexported functions.\nUnexported functions are implementation details of exported ones\nand should not change the intended usage.\nIf you find that an unexported function is complex and needs testing,\nit might mean it needs to be refactored as it's exported function elsewhere.")),(0,o.kt)("h3",{id:"models"},"Models"),(0,o.kt)("p",null,"In general, focus on testing non-trivial behavior."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Structs do not need to be tested as they have no behavior of their own."),(0,o.kt)("li",{parentName:"ul"},"Struct methods warrant a unit test if they contain important behavior, e.g. validations."),(0,o.kt)("li",{parentName:"ul"},"Avoid testing functionality of libraries, e.g. model saving and loading (which is provided by Pop)"),(0,o.kt)("li",{parentName:"ul"},"Try to leverage the type system to ensure that components are \u201chooked up correctly\u201d instead of writing integration tests.")),(0,o.kt)("h2",{id:"time"},"Time"),(0,o.kt)("p",null,"Some helpful tips on dealing with time in the MilMove Go codebase can be found in ",(0,o.kt)("a",{parentName:"p",href:"golang-time"},"this doc")),(0,o.kt)("h2",{id:"miscellaneous-tips"},"Miscellaneous Tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"golang")," instead of ",(0,o.kt)("inlineCode",{parentName:"li"},"go")," in Google searches."),(0,o.kt)("li",{parentName:"ul"},"Try to use the standard lib as much as possible, especially when learning.")),(0,o.kt)("h2",{id:"environment-settings"},"Environment settings"),(0,o.kt)("h3",{id:"adding-ulimit"},"Adding ",(0,o.kt)("inlineCode",{parentName:"h3"},"ulimit")),(0,o.kt)("p",null,"Dep appears to open many files simultaneously, particularly as the project matures and depends on more and more third-party repositories. You may encounter a message like this as a ",(0,o.kt)("inlineCode",{parentName:"p"},"dep-status")," hook error when trying to commit locally: ",(0,o.kt)("inlineCode",{parentName:"p"},"remote repository does not exist, or is inaccessible: : pipe: too many open files"),"."),(0,o.kt)("p",null,"To fix this, run ",(0,o.kt)("inlineCode",{parentName:"p"},"ulimit -n 5000")," in your terminal. This increases the number of file handles (the details on files that a process holds open) on your system. You can run ",(0,o.kt)("inlineCode",{parentName:"p"},"ulimit -n")," to see how many are currently allowed; you may see a number like 128 or 256. (Run ",(0,o.kt)("inlineCode",{parentName:"p"},"ulimit -a")," to see all current limits on your system, including pipe size, stack size, and user processes.) If running this in your terminal window allows you to complete your commit, you may wish to add it to ",(0,o.kt)("inlineCode",{parentName:"p"},"/.bash_profile")," or whichever system file you use for your terminal settings."))}u.isMDXComponent=!0}}]);