"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[919],{57380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));n(29420);const a={},l="Utilizing the GitHub Workflow for designing a Slice Demo Postman Collection:",r={unversionedId:"tools/postman/prime-demo-script-postman-setup",id:"tools/postman/prime-demo-script-postman-setup",title:"Utilizing the GitHub Workflow for designing a Slice Demo Postman Collection:",description:"* Slice Demo Prep Basics: Playing the Prime",source:"@site/docs/tools/postman/prime-demo-script-postman-setup.md",sourceDirName:"tools/postman",slug:"/tools/postman/prime-demo-script-postman-setup",permalink:"/mymove-docs/docs/tools/postman/prime-demo-script-postman-setup",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/tools/postman/prime-demo-script-postman-setup.md",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"How to Setup Postman to make Mutual TLS API Calls",permalink:"/mymove-docs/docs/tools/postman/setup-postman-to-make-mutual-tls-api-calls"},next:{title:"Introduction & Basics",permalink:"/mymove-docs/docs/tools/schemaspy/"}},s={},p=[{value:"Slice Demo Prep Basics: Playing the Prime:",id:"slice-demo-prep-basics-playing-the-prime",level:2},{value:"Handoff from TOO -&gt; Prime",id:"handoff-from-too---prime",level:4},{value:"Handoff from Prime --&gt; TOO",id:"handoff-from-prime----too",level:4},{value:"Handoff TOO --&gt; Prime",id:"handoff-too----prime",level:4},{value:"Handoff from Prime to TOO/TIO",id:"handoff-from-prime-to-tootio",level:4},{value:"Getting Started:",id:"getting-started",level:2},{value:"Creating a Collection from scratch:",id:"creating-a-collection-from-scratch",level:3},{value:"Setting up Index.js:",id:"setting-up-indexjs",level:4},{value:"Utilizing the <code>utils</code> folder:",id:"utilizing-the-utils-folder",level:4},{value:"Setting up the Payloads file:",id:"setting-up-the-payloads-file",level:4},{value:"Setting up the Requests folder:",id:"setting-up-the-requests-folder",level:4},{value:"Setting up the Events folder:",id:"setting-up-the-events-folder",level:4},{value:"Setting up the Templates folder:",id:"setting-up-the-templates-folder",level:4},{value:"Running your new collection:",id:"running-your-new-collection",level:3},{value:"Checking for errors:",id:"checking-for-errors",level:3}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"utilizing-the-github-workflow-for-designing-a-slice-demo-postman-collection"},"Utilizing the GitHub Workflow for designing a Slice Demo Postman Collection:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#slice-demo-prep-basics-playing-the-prime"},"Slice Demo Prep Basics: Playing the Prime")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#getting-started"},"Getting Started"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#creating-a-collection-from-scratch"},"Creating a Collection from scratch"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#setting-up-indexjs"},"Setting up Index.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#utilizing-the-utils-folder"},"Utilizing the utils folder")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#setting-up-the-payloads-file"},"Setting up the Payloads file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#setting-up-the-requests-folder"},"Setting up the Requests folder")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#setting-up-the-events-folder"},"Setting up the Events folder")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#setting-up-the-templates-folder"},"Setting up the Templates folder")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#running-your-new-collection"},"Running your new collection"))))),(0,o.kt)("p",null,'Regenerate with "pre-commit run -a markdown-toc"'),(0,o.kt)("h2",{id:"slice-demo-prep-basics-playing-the-prime"},"Slice Demo Prep Basics: Playing the Prime:"),(0,o.kt)("p",null,"During the slice demo there will be various points of handoff from the TOO/TIO to the Prime and vice versa. When playing the prime, we recommend developing visuals that are split up into 3 sections:"),(0,o.kt)("h4",{id:"handoff-from-too---prime"},"Handoff from TOO -> Prime"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Visual 1: Prime receives a notification of a move. Prime updates the move details. Prime performs another action (e.g. creates a service item)\n")),(0,o.kt)("h4",{id:"handoff-from-prime----too"},"Handoff from Prime --\x3e TOO"),(0,o.kt)("p",null,"After the Prime creates the Service Item(or Reweigh Request/SIT Extension/ or another action), there is a verbal handoff to the TOO. Nothing technical happens."),(0,o.kt)("h4",{id:"handoff-too----prime"},"Handoff TOO --\x3e Prime"),(0,o.kt)("p",null,"The TOO reviews the Service Item and approves them and there is a verbal handoff to the Prime to show how a payment request is created and proof od service is uploaded"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Visual 2: Prime creates a payment request\nVisual 3: uploads proof of service.\n")),(0,o.kt)("p",null,"NOTE: You may be able to combine visuals 2 and 3 by nesting the POST requests for creating a payment request and uploading proof of service, but this involves extensive research into ",(0,o.kt)("a",{parentName:"p",href:"https://learning.postman.com/docs/sending-requests/intro-to-collections/"},"grouping these requests"),"."),(0,o.kt)("h4",{id:"handoff-from-prime-to-tootio"},"Handoff from Prime to TOO/TIO"),(0,o.kt)("p",null,"After the prime uploads the proof of service, they submit the payment request ID to the TIO and do a verbal handoff to the TOO."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started:"),(0,o.kt)("p",null,"We have created a repo in GitHub with postman collections from previous slice demos. This means you can get a copy of all of them the way you would clone any other repo on GitHub: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clone the ",(0,o.kt)("inlineCode",{parentName:"li"},"prime_api_deliverable")," repo: ",(0,o.kt)("inlineCode",{parentName:"li"},"git clone git@github.com:transcom/prime_api_deliverable.git")),(0,o.kt)("li",{parentName:"ol"},"Navigate to the ",(0,o.kt)("inlineCode",{parentName:"li"},"postman")," folder, where you will find previous slice demo collections (e.g. 202108-slice-demo)"),(0,o.kt)("li",{parentName:"ol"},"Copy over contents from a previous collection or create a new collection from scratch.")),(0,o.kt)("p",null,"If you have never set up postman before checkout our instructions for ",(0,o.kt)("a",{parentName:"p",href:"https://transcom.github.io/mymove-docs/docs/dev/tools/Postman/Setting-Up-Postman"},"setting up postman"),"."),(0,o.kt)("h3",{id:"creating-a-collection-from-scratch"},"Creating a Collection from scratch:"),(0,o.kt)("p",null,"Once you have cloned the ",(0,o.kt)("inlineCode",{parentName:"p"},"prime_api_deliverable")," repo, create a new branch if someone is reviewing your script or just start working directly in main.\nOpen the file in your favorite text editor. Under the postman folder, create a new folder for our slice demo collection.\nOur naming convention for each slice demo folder is going to be: YYYYMM-slice-demo."),(0,o.kt)("p",null,"If your slice demo is happening in September 2021, for example, you will create a folder called ",(0,o.kt)("inlineCode",{parentName:"p"},"202109-slice-demo"),". In this folder create 3 more empty folders, and a file for payloads:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"payloads.js")," - is a file that feeds the ",(0,o.kt)("inlineCode",{parentName:"li"},"requests")," folder"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"requests")," - this folder contains node JS files that postman uses to build the collection."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"events")," - this folder contains node JS files that contain the objects that feed into the templates folder for the visualizations. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"templates")," - this folder contains HTML to add visualizations in the demo.")),(0,o.kt)("h4",{id:"setting-up-indexjs"},"Setting up Index.js:"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," file is where you will store all of the elements that tell postman to create a collection for you.\nOutside of these folders you will add a top level file called ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js"),", where you will add your path and fs requirements to use node."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const fs = require('fs'); // fs stands for file system\nconst path = require('path'); // internal library for node js that allows you to use path names\n")),(0,o.kt)("p",null,"Following these two requirements must create your collection constant and a path for your collection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const Collection = require('postman-collection').Collection; // make sure to npm install so that you can use this library\nconst fileName = path.basename(__dirname + '.postman_collection.json');\nconst savePath = path.join(process.cwd(), '/collections');\nconst filePath = `${savePath}/${fileName}`;\n")),(0,o.kt)("p",null,"In the code above, the constant ",(0,o.kt)("inlineCode",{parentName:"p"},"filePath")," knows to store your new collection in your current working directory's ",(0,o.kt)("inlineCode",{parentName:"p"},"collection")," folder.\n",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," does a lot for us. But the main purpose is to generate the JSON for postman to understand."),(0,o.kt)("p",null,"JS code is stringifies to JSON code, what postman uses, in this code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"fs.writeFileSync(\n  filePath,\n  JSON.stringify(sliceDemoCollection, null, 2)\n);\n")),(0,o.kt)("p",null,"Next build your collection. In this case we will build a collection with two requests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'var myCollection;\n// Create a collection having two requests\nmyCollection = new Collection({\n    info: {\n        name: "2021 Sept Prime Demo",\n        description: `\n            ### Get Move endpoint\n            We give this request a move code and it returns a move.\n        `,\n    },\n    variable: {\n        moveID: {\n            id: "moveID", \n            value: "", \n            type: "string",\n        },\n        baseUrl: {\n            id: "baseUrl", \n            value: "https://api.stg.move.mil/prime/v1", \n            type: "string",\n        },\n        getMoveTaskOrderTemplate: {\n            id: "getMoveTaskOrderTemplate", \n            value: "", \n            type: "string",\n        },\n    }, \n});\nmyCollection.items.add([]);\n\nfs.writeFileSync(\n    filePath,\n    JSON.stringify(myCollection, null, 2)\n  );\n  \n  if (fs.existsSync(filePath)) {\n    console.log(`\ud83d\udcbe The Postman Collection has been saved at ${filePath}`);\n  }\n')),(0,o.kt)("p",null,"To check to make sure that your empty collection is created, run teh first step in ",(0,o.kt)("a",{parentName:"p",href:"#running-your-new-collection"},"Running your new collection")),(0,o.kt)("h4",{id:"utilizing-the-utils-folder"},"Utilizing the ",(0,o.kt)("inlineCode",{parentName:"h4"},"utils")," folder:"),(0,o.kt)("p",null,"There is a utils folder that lives outside of your new collection in the ",(0,o.kt)("inlineCode",{parentName:"p"},"postman")," folder.\nThis folder is important to take note of because it contains helpers that you will utilize in your collection.\nThe helpers contain utils such as Postman SDK functions, an event item that runs in postman's Test tab, and a post item object that has JS objects such as ",(0,o.kt)("inlineCode",{parentName:"p"},"requestID"),", and node objects for working with file system and file paths.\nThese helpers include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fileUtils.js"),"  ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"contains helper functions that can be used in your collection."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"currentTime.js")," ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"contains a helper function that returns current time in the format ",(0,o.kt)("inlineCode",{parentName:"li"},"HH:MM:SS"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"createItem.js"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"contains helpers to build postman item objects and events, and return new items (e.g. an item that contains a request with a request body, headers, url, and description). Takes teh pre-request script and test script as optional values"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"addDays.js"),"  ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"this utility adds a function for adding days to a current date, and returns a future date formatted ",(0,o.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD"),". Be mindful that this function has no type checking.")))),(0,o.kt)("h4",{id:"setting-up-the-payloads-file"},"Setting up the Payloads file:"),(0,o.kt)("p",null,"Key request id: value is the request payload"),(0,o.kt)("p",null,"The Payloads file feeds objects to the request folder. This is where we will create reusable objects that we pass to the requests. Examples of this include:\nupdating a shipment with the actual pickup date, actual weight, and estimated weight, updating a reweigh weight, scheduling a pickup date, etc."),(0,o.kt)("p",null,"Each action will be added to  ",(0,o.kt)("inlineCode",{parentName:"p"},"const payload")," which takes in a key values pair of ",(0,o.kt)("inlineCode",{parentName:"p"},"{object: payload_for_object)"),". For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  "mto-shipments-sit-extensions": {\n    requestReason: "NONAVAILABILITY_OF_CIVILIAN_HOUSING",\n    contractorRemarks: "Customer is in the middle of closing on a house, expects it to be in 10 days.",\n    requestedDays: 30,\n  },\n')),(0,o.kt)("p",null,"Where the object in teh example is ",(0,o.kt)("inlineCode",{parentName:"p"},"MTOShipmentsSitExtensions")," and he valued is the payload that includes a ",(0,o.kt)("inlineCode",{parentName:"p"},"requestReason"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"contractorRemarks"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"requestedDays"),"."),(0,o.kt)("p",null,"After creating your payload objects, remember to export the module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"module.exports = payloads;\n   \n")),(0,o.kt)("p",null,"If you've used postman before, you'll notice that request and response bodies are JSON files in postman, however our payloads are JavaScript files. JavaScript provides us with a few advantages.\nFirstly, it allows the developer to leave comments within the payload file. Second, we can import utils to use in our code. Lastly, we can also use template tags when we are using JS files. "),(0,o.kt)("p",null,"In a different folder, our JS code gets assembles into a JSON collection string that is outputted to a file for postman to generate our collection. "),(0,o.kt)("h4",{id:"setting-up-the-requests-folder"},"Setting up the Requests folder:"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," folder you will create a JS file for each request to the Prime API.\nYour files will contain a lot of similar code, which can eventually be refactored to put that code in it's own file and create all the requests in another file, but this will be left to your discretion.\nWhat's unique about each file is the item that is being created. For instance, the item associated with the ",(0,o.kt)("inlineCode",{parentName:"p"},"createPaymentRequest")," endpoint looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"module.exports = createItem({\n  name: 'Create Payment Request',\n  requestID: requestID,\n  url: '{{baseUrl}}/payment-requests',\n  method: 'POST',\n  headers: {\n    'Postman-Request-ID': requestID,\n    'Content-Type': 'application/json',\n  },\n  description: requestDescription,\n  payload: JSON.stringify(payload, null, 2).replace(/\"{{/g, '{{').replace(/}}\"/g, '}}'),\n  prerequestScript: requestPreRequestScript,\n  testScript: requestTestScript,\n});\n")),(0,o.kt)("h4",{id:"setting-up-the-events-folder"},"Setting up the Events folder:"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"events")," folder we will create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"test.js"),". This file will set up variables for the visualizer in Postman and environment variables that will be used in your collection.\nThis file is also where we will create a test script that will toggle between different visualizations as we run through the demo."),(0,o.kt)("p",null,"If you've created demo scripts in postman in the past, you may have used the ",(0,o.kt)("inlineCode",{parentName:"p"},"Test")," tab to add your HTML and JS that generated the visuals during the demo.\nThis ",(0,o.kt)("inlineCode",{parentName:"p"},"test.js")," file is essentially our test script and it will populate that tab once your collection is imported."),(0,o.kt)("p",null,"There is also an option to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"prerequests.js")," file, which populates the ",(0,o.kt)("inlineCode",{parentName:"p"},"Pre-Request Script")," tab in postman, to run any code before a request is completed. However adding this file is not required.\nBoth JS files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," folder will run directly in postman, unlike hte other JS files in the collection."),(0,o.kt)("h4",{id:"setting-up-the-templates-folder"},"Setting up the Templates folder:"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"templates")," folder is important because it contains teh HTML that we use to visualize the role of the prime in a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"visualize.html"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of Postman Visualization",src:n(51457).Z,width:"2243",height:"1002"})),(0,o.kt)("h3",{id:"running-your-new-collection"},"Running your new collection:"),(0,o.kt)("p",null,"When you're finished with your collection, it is time to generate the postman collection. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"do an ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install")),(0,o.kt)("li",{parentName:"ol"},"run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run build_<collection-name>"))),(0,o.kt)("p",null,"If you ever need to update your collection run  ",(0,o.kt)("inlineCode",{parentName:"p"},"node <collection_name/index.js>"),". "),(0,o.kt)("p",null,"Your collection will be imported into a top level folder called ",(0,o.kt)("inlineCode",{parentName:"p"},"collections"),", from there import the collection into postman directly."),(0,o.kt)("h3",{id:"checking-for-errors"},"Checking for errors:"),(0,o.kt)("p",null,"Debugging after hitting an endpoint has not been optimized yet. Unfortunately, you will still need to check the console in postman to see what errors pop up.\nOptimizing debugging is something we need to continue to work on as postman debugging tools are few and far between. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of Postman Console",src:n(49293).Z,width:"2968",height:"1952"})))}u.isMDXComponent=!0},49293:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/postman_console-1e41522329b0ed59f5523a8e344b0cb7.png"},51457:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/postman_visualize-05d426ffcc8e526c86409c670ea8ae89.png"}}]);