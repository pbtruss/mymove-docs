"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[6229],{44001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));n(16758);const o={},i="Golang Programming Guide",l={unversionedId:"backend/guides/golang-guide",id:"backend/guides/golang-guide",title:"Golang Programming Guide",description:"Style and Conventions",source:"@site/docs/backend/guides/golang-guide.md",sourceDirName:"backend/guides",slug:"/backend/guides/golang-guide",permalink:"/mymove-docs/docs/backend/guides/golang-guide",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/guides/golang-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"Open Telemetry",permalink:"/mymove-docs/docs/backend/guides/open-telemetry"},next:{title:"AppContext: how and when to use it",permalink:"/mymove-docs/docs/backend/guides/use-stateless-services-with-app-context"}},s={},d=[{value:"Style and Conventions",id:"style-and-conventions",level:2},{value:"Acronyms",id:"acronyms",level:3},{value:"Importing Dependencies",id:"importing-dependencies",level:2},{value:"Querying the Database Safely",id:"querying-the-database-safely",level:2},{value:"<code>models.Fetch*</code> functions",id:"modelsfetch-functions",level:3},{value:"Logging",id:"logging",level:2},{value:"Logging Levels",id:"logging-levels",level:3},{value:"Errors",id:"errors",level:2},{value:"1. Don&#39;t bury your errors in underscores.",id:"1-dont-bury-your-errors-in-underscores",level:3},{value:"2. Log at the top level; create and pass along errors below.",id:"2-log-at-the-top-level-create-and-pass-along-errors-below",level:3},{value:"3. Use <code>fmt.Errorf</code> instead of <code>errors.New</code>",id:"3-use-fmterrorf-instead-of-errorsnew",level:3},{value:"4. Use <code>fmt.Errorf</code> and <code>%w</code> verb when wrapping errors.",id:"4-use-fmterrorf-and-w-verb-when-wrapping-errors",level:3},{value:"5. Don&#39;t <code>fmt</code> errors; log instead.",id:"5-dont-fmt-errors-log-instead",level:3},{value:"6. If some of your errors are predictable, pattern match on them to provide more error detail.",id:"6-if-some-of-your-errors-are-predictable-pattern-match-on-them-to-provide-more-error-detail",level:3},{value:"Libraries",id:"libraries",level:2},{value:"Pop",id:"pop",level:3},{value:"Learning",id:"learning",level:2},{value:"Service Objects",id:"service-objects",level:2},{value:"Testing",id:"testing",level:2},{value:"General",id:"general",level:3},{value:"Coverage",id:"coverage",level:3},{value:"Models",id:"models",level:3},{value:"Time",id:"time",level:2},{value:"Miscellaneous Tips",id:"miscellaneous-tips",level:2},{value:"Environment settings",id:"environment-settings",level:2},{value:"Adding <code>ulimit</code>",id:"adding-ulimit",level:3}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"golang-programming-guide"},"Golang Programming Guide"),(0,r.kt)("h2",{id:"style-and-conventions"},"Style and Conventions"),(0,r.kt)("p",null,"Generally speaking, we will follow the recommendations laid out in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/golang/go/wiki/CodeReviewComments"},"Go Code Review Comments"),". By its own admission, this page:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"...collects common comments made during reviews of Go code, so that a single detailed explanation can be referred to by shorthands. This is a laundry list of common mistakes, not a style guide."))),(0,r.kt)("p",null,"Despite not being an official style guide, it covers a good amount of scope in a concise format, and should be able to keep our project code fairly consistent."),(0,r.kt)("p",null,"Beyond what is described above, the following contain additional insights into how to write better Go code."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://talks.golang.org/2014/names.slide#1"},"What's in a name?")," (how to name things in Go)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://peter.bourgon.org/go-best-practices-2016/"},"Go best practices, six years in")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://peter.bourgon.org/blog/2017/06/09/theory-of-modern-go.html"},"A theory of modern Go"))),(0,r.kt)("h3",{id:"acronyms"},"Acronyms"),(0,r.kt)("p",null,"Domain concepts should be used without abbreviation when used alone."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Do"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Avoid"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TransportationServiceProvider")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TSP"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TrafficDistributionList")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TDL"))))),(0,r.kt)("p",null,"However, when used as a specifier or part of another name, names that have existing acronyms should use the acronym for brevity."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Do"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Avoid"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TSPPerformance")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TransportationServiceProviderPerformance"))))),(0,r.kt)("p",null,"Acronyms should always be either all caps or all lower-cased."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Do"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Avoid"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TSPPerformance")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tSPPerformance"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tspPerformance")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tspperformance"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TspPerformance"))))),(0,r.kt)("h2",{id:"importing-dependencies"},"Importing Dependencies"),(0,r.kt)("p",null,"Dependencies are managed by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/golang/dep"},"dep"),". New dependencies are automatically detected in import statements. To add a new dependency to the project:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add the package to the import statement of a Go file."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"make clean")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"make server_generate")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"dep check")," (to verify what's missing.) If it looks reasonable then..."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"dep ensure"))),(0,r.kt)("h2",{id:"querying-the-database-safely"},"Querying the Database Safely"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SQL statements ",(0,r.kt)("em",{parentName:"li"},"must")," use PostgreSQL-native parameter replacement format (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"$1"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"$2"),", etc.) and ",(0,r.kt)("em",{parentName:"li"},"never")," interpolate values into SQL fragments in any other way."),(0,r.kt)("li",{parentName:"ul"},"SQL statements must only be defined in the ",(0,r.kt)("inlineCode",{parentName:"li"},"models")," package.")),(0,r.kt)("p",null,"Here is an example of a safe query for a single ",(0,r.kt)("inlineCode",{parentName:"p"},"Shipment"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// db is a *pop.Connection\n\nid := "0186ad95-14ed-4c9b-9f62-d5bd124f62a1"\n\nquery := db.Where("id = $1", id)\n\nshipment := &models.Shipment{}\nif err = query.First(shipment); err == nil {\n  pp.Println(shipment)\n}\n')),(0,r.kt)("h3",{id:"modelsfetch-functions"},(0,r.kt)("inlineCode",{parentName:"h3"},"models.Fetch*")," functions"),(0,r.kt)("p",null,"Functions that return model structs should return pointers."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func FetchShipment(db *pop.Connection, id uuid.UUID) (*Shipment, error) {}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Avoid")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func FetchShipment(db *pop.Connection, id uuid.UUID) (Shipment, error) {}\n")),(0,r.kt)("p",null,"This is for a few reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Many Pop methods that accept models need to use pointers in order to modify the struct being passed in. Using them everywhere\nmodels are used makes the code more consistent and avoids needing to convert to and from pointers."),(0,r.kt)("li",{parentName:"ul"},"Any methods on struct model instances need to have pointer receivers in order to mutate the struct. This is a common point of confusion\nand an easy way to introduce bugs into a codebase.")),(0,r.kt)("h2",{id:"logging"},"Logging"),(0,r.kt)("p",null,"We use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/uber-go/zap"},"Zap")," logging framework from Uber to produce structured log records.\nTo this end, code should avoid using the ",(0,r.kt)("a",{parentName:"p",href:"https://godoc.org/go.uber.org/zap#Logger.Sugar"},"SugaredLogger"),"s without\na very explicit reason which should be record in an inline comment where the SugaredLogger is constructed."),(0,r.kt)("h3",{id:"logging-levels"},"Logging Levels"),(0,r.kt)("p",null,"Another reason to use the Zap logging package is that it provides more nuanced logging levels than the basic Go logging package.\nThat said, leveled logging is only meaningful if there is a common pattern in the usage of each logging level. To that end,\nthe following indicates when each level of Logging should be used."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Fatal")," This should never be used outside of the server startup code in main.go. Fatal log messages call ",(0,r.kt)("inlineCode",{parentName:"p"},"sys.exit(1)")," which unceremoniously kills the server without running any clean up code. This is almost certainly never what you want in production.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Error")," Reserved for system failures, e.g. cannot reach a database, a DB insert which was expected to work failed,\nor an ",(0,r.kt)("inlineCode",{parentName:"p"},'"enum"')," has an unexpected value. In production an Error logging message should alert the team that\nall is not well with the server, so avoid being the 'Boy Who Cried Wolf'. In particular, if there is an API which takes an object ID as part of the URL,\nthen passing a bad value in should NOT log an Error message. It should log Info and then return 404.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Warn")," Don't use Warn - it rarely, if ever, adds any meaningful signal to the logs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Info")," Use for recording 'Normal' events at a granularity that may be helpful to tracing and debugging requests,\ne.g. 404's from requests with bad IDs, authentication events (user logs in/out), authorization failures etc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Debug"),' Debug events are of questionable value and should be used during development, but probably best removed\nbefore landing changes. The issue with them is, if they are left in the code, they quickly become so dense in the logs\nas to obscure other debug log entries. This leads to people an arms race of folks adding \'XXXXXXX\' to comments\nin order to identify their log items. If you must use them, I suggest adding an, e.g. zap.String("owner", "nick")'))),(0,r.kt)("admonition",{title:"Use JSON friendly names for Zap.Objects",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use JSON friendly names for ",(0,r.kt)("inlineCode",{parentName:"p"},"zap.Object")," so that you will be able to extract the values easily in CloudWatch Insights queries."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'s.logger.Info("EDIs processed", zap.Object("edisProcessed", &ediProcessing))\n')),(0,r.kt)("p",{parentName:"admonition"},"vs"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'s.logger.Info("EDIs processed", zap.Object("EDIs Processed", &ediProcessing))\n')),(0,r.kt)("p",{parentName:"admonition"},"The latter was nearly impossible to filter on. But the following insights query works"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"fields @timestamp, edisProcessed, @message\n| sort @timestamp desc\n"))),(0,r.kt)("h2",{id:"errors"},"Errors"),(0,r.kt)("p",null,"Some general guidelines for errors:"),(0,r.kt)("h3",{id:"1-dont-bury-your-errors-in-underscores"},"1. Don't bury your errors in underscores."),(0,r.kt)("p",null,"If a function or other action generates an error, assign it to a variable and either return it as part of your function's output or handle it in place (",(0,r.kt)("inlineCode",{parentName:"p"},"if err != nil"),", etc.). There will be the very occasional exception to this - one is within tests, depending on the test's goal. If you find yourself typing that underscore, take a moment to ask yourself why you're choosing that option. On those very rare occasions when it is the correct behavior, please add a comment explaining why."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Don't:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"myVal, _ := functionThatShouldReturnAnInt()\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Do:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'myVal, err := functionThatShouldReturnAnInt()\nif err != nil {\n     return myVal, fmt.Errorf("function didn\'t return an int: %w", err)\n}\n')),(0,r.kt)("h3",{id:"2-log-at-the-top-level-create-and-pass-along-errors-below"},"2. Log at the top level; create and pass along errors below."),(0,r.kt)("p",null,"If you're creating a query (1) that is called by a function (2) that is in turned called by another function (3), create and return errors at levels 1 and 2 (and possibly handle them immediately after creation, if needed), and log them at level 3. Logs should be created at the top level and contain context about what created them. This is more difficult if logs are being created in every function and file that supports the operation you're working on. Here's an example of when to create errors and when to handle them:"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"pkg/models/blackout_dates.go"),", an error is created and returned:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func FetchTSPBlackoutDates(tx *pop.Connection, tspID uuid.UUID, shipment Shipment) ([]BlackoutDate, error) {\n  ...\n  err = query.All(&blackoutDates)\n  if err != nil {\n    return blackoutDates, fmt.Errorf("Blackout dates query failed: %w", err)\n  }\n\n  return blackoutDates, err\n}\n')),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"pkg/awardqueue/awardqueue.go"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"FetchTSPBlackoutDates")," is called, and any possible error is handled. This function also returns an error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func ShipmentWithinBlackoutDates(tspID uuid.UUID, shipment models.Shipment) (bool, error) {\n  blackoutDates, err := models.FetchTSPBlackoutDates(aq.db, tspID, shipment)\n\n  if err != nil {\n    return false, fmt.Errorf("Error retrieving blackout dates from database: %w", err)\n  }\n\n  return len(blackoutDates) != 0, nil\n}\n')),(0,r.kt)("p",null,"Finally, at the top level in ",(0,r.kt)("inlineCode",{parentName:"p"},"attemptShipmentOffer")," in the same file, any errors bubbled up from ",(0,r.kt)("inlineCode",{parentName:"p"},"ShipmentWithinBlackoutDates")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"FetchTSPBlackoutDates")," are handled definitively, halting the progress of the longer function if the underlying processes and queries didn't complete as expected in the functions being called:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func (aq *AwardQueue) attemptShipmentOffer(shipment models.Shipment) (*models.ShipmentOffer, error) {\n  aq.logger.Info("Attempting to offer shipment", zap.Any("shipment_id", shipment.ID))\n  ...\n  isAdministrativeShipment, err := aq.ShipmentWithinBlackoutDates(tsp.ID, shipment)\n  if err != nil {\n    aq.logger.Error("Failed to determine if shipment is within TSP blackout dates", zap.Error(err))\n    return err\n  }\n  ...\n}\n')),(0,r.kt)("p",null,"The error is created and passed along at the lowest level, logged and passed along at the middle level (along with other errors that can happen within that function), and logged again at the highest level before finally halting the progress of the process if an error is present."),(0,r.kt)("h3",{id:"3-use-fmterrorf-instead-of-errorsnew"},"3. Use ",(0,r.kt)("inlineCode",{parentName:"h3"},"fmt.Errorf")," instead of ",(0,r.kt)("inlineCode",{parentName:"h3"},"errors.New")),(0,r.kt)("p",null,"You should avoid using ",(0,r.kt)("inlineCode",{parentName:"p"},"errors.New")," when creating an error in go. Please use ",(0,r.kt)("inlineCode",{parentName:"p"},"fmt.Errorf")," instead."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Current Recommendation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'return fmt.Errorf("Some application error message")\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Old Recommendation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'return errors.New("Some application error message")\n')),(0,r.kt)("h3",{id:"4-use-fmterrorf-and-w-verb-when-wrapping-errors"},"4. Use ",(0,r.kt)("inlineCode",{parentName:"h3"},"fmt.Errorf")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"%w")," verb when wrapping errors."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://blog.golang.org/go1.13-errors"},(0,r.kt)("inlineCode",{parentName:"a"},"fmt.Errorf() with %w"))," provides greater error context and a stack trace, making it especially useful when dealing with the opacity that sometimes comes with external libraries. As of go 1.13 ",(0,r.kt)("inlineCode",{parentName:"p"},"fmt.Errorf()")," provides a new ",(0,r.kt)("inlineCode",{parentName:"p"},"%w")," verb that replaces the need for ",(0,r.kt)("inlineCode",{parentName:"p"},"errors.Wrap()"),". It takes a string with the ",(0,r.kt)("inlineCode",{parentName:"p"},"%w")," in it and the error as parameters: the string and error to provide context and explanation. Keep the string brief and clear, assuming that the fuller cause will be provided by the context ",(0,r.kt)("inlineCode",{parentName:"p"},"%w")," verb brings. It can also add useful context for errors related to internal code if there might otherwise be unhelpful opacity. ",(0,r.kt)("inlineCode",{parentName:"p"},"fmt.Errorf()")," in combination with ",(0,r.kt)("inlineCode",{parentName:"p"},"%w")," also capture stack traces with the additional function of string substitution/formatting for output."),(0,r.kt)("p",null,"Instead of just returning the error, offer greater context with something like this:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Current Recommendation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'if err != nil {\n    return fmt.Errorf("Pop validate failed: %w", err)\n}\n')),(0,r.kt)("p",null,"As this is a recent change in golang standards you will see many uses of the ",(0,r.kt)("inlineCode",{parentName:"p"},"errors.Wrap")," still in the code, which had been the old recommendation. It is safe to change code that wraps errors as below to the new standard in the example above."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Old Recommendation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'if err != nil {\n    return errors.Wrap(err, "Pop validate failed")\n}\n')),(0,r.kt)("p",null,"Using the new ",(0,r.kt)("inlineCode",{parentName:"p"},"%w")," provides access to some new features such as the new ",(0,r.kt)("inlineCode",{parentName:"p"},"errors.Is")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"errors.As")," functions. For more on the changes in go 1.13 see ",(0,r.kt)("a",{parentName:"p",href:"https://blog.golang.org/go1.13-errors"},"this official blog post")," and ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/@felipedutratine/golang-how-to-handle-errors-in-v1-13-fda7f035d027"},"this article")," that go into more depth."),(0,r.kt)("h3",{id:"5-dont-fmt-errors-log-instead"},"5. Don't ",(0,r.kt)("inlineCode",{parentName:"h3"},"fmt")," errors; log instead."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fmt")," can provide useful error handling during initial debugging, but we strongly suggest logging instead, from when you write the initial lines of a new function. Using logging creates structured logs instead of the unstructured, human-friendly-only output that ",(0,r.kt)("inlineCode",{parentName:"p"},"fmt")," does. If an ",(0,r.kt)("inlineCode",{parentName:"p"},"fmt")," statement offers usefulness beyond your initial troubleshooting while working, switch it to ",(0,r.kt)("inlineCode",{parentName:"p"},'fmt.Errorf("text: %w", err)')," or ",(0,r.kt)("inlineCode",{parentName:"p"},"logger.Error()"),", perhaps with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/uber-go/zap"},"Zap"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Don't:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'fmt.Println("Blackout dates fetch failed: ", err)\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Do:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'logger.Error("Blackout dates fetch failed: ", err)\n')),(0,r.kt)("h3",{id:"6-if-some-of-your-errors-are-predictable-pattern-match-on-them-to-provide-more-error-detail"},"6. If some of your errors are predictable, pattern match on them to provide more error detail."),(0,r.kt)("p",null,"Some errors are predictable, such as those from the database that Pop returns to us. This gives you the option to use those predictable errors to give yourself and fellow maintainers of code more detail than you might get otherwise, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// FetchServiceMemberForUser returns a service member only if it is allowed for the given user to access that service member.\n func FetchServiceMemberForUser(ctx context.Context, db *pop.Connection, user User, id uuid.UUID) (ServiceMember, error) {\n  var serviceMember ServiceMember\n  err := db.Eager().Find(&serviceMember, id)\n  if err != nil {\n    if errors.Cause(err).Error() == recordNotFoundErrorString {\n      return ServiceMember{}, ErrFetchNotFound\n    }\n    // Otherwise, it's an unexpected err so we return that.\n    return ServiceMember{}, err\n  }\n\n  if serviceMember.UserID != user.ID {\n    return ServiceMember{}, ErrFetchForbidden\n  }\n\n  return serviceMember, nil\n }\n")),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},'fmt.Errorf("text: %w", err)')," in this situation to provide access to even more information, beyond the breadcrumbs left here."),(0,r.kt)("h2",{id:"libraries"},"Libraries"),(0,r.kt)("h3",{id:"pop"},"Pop"),(0,r.kt)("p",null,"We use Pop as the ORM(-ish) to mediate access to the database. ",(0,r.kt)("a",{parentName:"p",href:"https://andrew-sledge.gitbooks.io/the-unofficial-pop-book/content/"},"The Unofficial Pop Book")," is a valuable companion to Pop\u2019s ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gobuffalo/pop"},"GitHub documentation"),"."),(0,r.kt)("h2",{id:"learning"},"Learning"),(0,r.kt)("p",null,"If you are new to Go, you should work your way through all of these resources (in this order, ideally):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://tour.golang.org"},"A Tour of Go")," (in-browser interactive language tutorial)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://golang.org/doc/code.html"},"How to Write Go Code")," (info about the Go environment, testing, etc.)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://golang.org/doc/effective_go.html"},"Effective Go")," (how to do things \u201cthe Go way\u201d)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://golang.github.io/dep/docs/daily-dep.html"},"Daily Dep documentation")," (common tasks you\u2019ll encounter with our dependency manager)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"http://exercism.io/languages/go/about"},"Exercism")," offers a series of exercises with gradually increasing complexity")),(0,r.kt)("p",null,"Additional resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://godoc.org/"},"GoDoc")," (where you can read the docs for nearly any Go package)"),(0,r.kt)("li",{parentName:"ul"},"Check out the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/wiki/Learn"},"Go wiki")),(0,r.kt)("li",{parentName:"ul"},"Advanced Testing with Go ",(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=yszygk1cpEc"},"Video")," and ",(0,r.kt)("a",{parentName:"li",href:"https://about.sourcegraph.com/go/advanced-testing-in-go"},"Article")," (great overview of useful techniques, useful for all Go programmers)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Book"),": ",(0,r.kt)("a",{parentName:"li",href:"http://www.gopl.io/"},"The Go Programming Language")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Article"),": ",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@venks.sa/copying-data-from-s3-to-ebs-30x-faster-using-go-e2cdb1093284"},"Copying data from S3 to EBS 30x faster using Golang")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://devs.cloudimmunity.com/gotchas-and-common-mistakes-in-go-golang/index.html"},"50 Shades of Go: Traps, Gotchas, and Common Mistakes for New Golang Devs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1QQq8Yf90ar59OUQM6qRDS6Bwk5hfOCpcqw_WUX43YOg/edit"},"Ultimate Go Notebook")," by Bill Kennedy"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.practical-go-lessons.com"},"Practical Go Lessons"))),(0,r.kt)("h2",{id:"service-objects"},"Service Objects"),(0,r.kt)("p",null,"Service Objects are an architectural design pattern we use to encapsulate business logic. Service objects allow for\nbetter unit testing, re-usability, and organization of code in the MilMove project. For more information on service\nobjects, including how we use them and how to write them, please see the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/backend/guides/service-objects/overview"},"documentation"),"."),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"Knowing what deserves a test and what doesn\u2019t can be tricky, especially early on when a project\u2019s testing conventions haven\u2019t been established. Use the following guidelines to determine if and how some code should be tested."),(0,r.kt)("h3",{id:"general"},"General"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use table-driven tests where appropriate."),(0,r.kt)("li",{parentName:"ul"},"Make judicious use of helper functions so that the intent of a test is not lost in a sea of error checking and boilerplate. Use ",(0,r.kt)("a",{parentName:"li",href:"https://golang.org/pkg/testing/#T.Helper"},(0,r.kt)("inlineCode",{parentName:"a"},"t.Helper()"))," in your test helper functions to keep stack traces clean.")),(0,r.kt)("h3",{id:"coverage"},"Coverage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Always test exported functions.\nExported functions should be treated as an API layer for other packages.\nCover the expected behavior and error scenarios as a user of that API."),(0,r.kt)("li",{parentName:"ul"},"Try not to test unexported functions.\nUnexported functions are implementation details of exported ones\nand should not change the intended usage.\nIf you find that an unexported function is complex and needs testing,\nit might mean it needs to be refactored as it's exported function elsewhere.")),(0,r.kt)("h3",{id:"models"},"Models"),(0,r.kt)("p",null,"In general, focus on testing non-trivial behavior."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Structs do not need to be tested as they have no behavior of their own."),(0,r.kt)("li",{parentName:"ul"},"Struct methods warrant a unit test if they contain important behavior, e.g. validations."),(0,r.kt)("li",{parentName:"ul"},"Avoid testing functionality of libraries, e.g. model saving and loading (which is provided by Pop)"),(0,r.kt)("li",{parentName:"ul"},"Try to leverage the type system to ensure that components are \u201chooked up correctly\u201d instead of writing integration tests.")),(0,r.kt)("h2",{id:"time"},"Time"),(0,r.kt)("p",null,"Some helpful tips on dealing with time in the MilMove Go codebase can be found in ",(0,r.kt)("a",{parentName:"p",href:"golang-time"},"this doc")),(0,r.kt)("h2",{id:"miscellaneous-tips"},"Miscellaneous Tips"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"golang")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"go")," in Google searches."),(0,r.kt)("li",{parentName:"ul"},"Try to use the standard lib as much as possible, especially when learning.")),(0,r.kt)("h2",{id:"environment-settings"},"Environment settings"),(0,r.kt)("h3",{id:"adding-ulimit"},"Adding ",(0,r.kt)("inlineCode",{parentName:"h3"},"ulimit")),(0,r.kt)("p",null,"Dep appears to open many files simultaneously, particularly as the project matures and depends on more and more third-party repositories. You may encounter a message like this as a ",(0,r.kt)("inlineCode",{parentName:"p"},"dep-status")," hook error when trying to commit locally: ",(0,r.kt)("inlineCode",{parentName:"p"},"remote repository does not exist, or is inaccessible: : pipe: too many open files"),"."),(0,r.kt)("p",null,"To fix this, run ",(0,r.kt)("inlineCode",{parentName:"p"},"ulimit -n 5000")," in your terminal. This increases the number of file handles (the details on files that a process holds open) on your system. You can run ",(0,r.kt)("inlineCode",{parentName:"p"},"ulimit -n")," to see how many are currently allowed; you may see a number like 128 or 256. (Run ",(0,r.kt)("inlineCode",{parentName:"p"},"ulimit -a")," to see all current limits on your system, including pipe size, stack size, and user processes.) If running this in your terminal window allows you to complete your commit, you may wish to add it to ",(0,r.kt)("inlineCode",{parentName:"p"},"/.bash_profile")," or whichever system file you use for your terminal settings."))}m.isMDXComponent=!0}}]);