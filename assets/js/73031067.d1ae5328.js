"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2221],{12465:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var i=a(87462),n=(a(67294),a(3905));a(61839);const o={sidebar_position:3},l="How to Test the Prime API",r={unversionedId:"api/testing/how-to-test-the-prime-api",id:"api/testing/how-to-test-the-prime-api",title:"How to Test the Prime API",description:"\u2757 For the most up-to-date information about the Prime API, please visit https://github.com/transcom/primeapideliverable/wiki. The Prime API Deliverable wiki is the client-facing documentation and will be your best resource for understanding how to use this API. This article is a stub that has been kept to preserve some of the old information that might be useful for current MilMove developers.",source:"@site/docs/api/testing/how-to-test-the-prime-api.md",sourceDirName:"api/testing",slug:"/api/testing/how-to-test-the-prime-api",permalink:"/mymove-docs/docs/api/testing/how-to-test-the-prime-api",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/api/testing/how-to-test-the-prime-api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apiSidebar",previous:{title:"End to End Testing Playing the Prime",permalink:"/mymove-docs/docs/api/testing/end-to-end-testing-playing-the-prime"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Running the Prime Docker",id:"running-the-prime-docker",level:3},{value:"Accessing Web Applications",id:"accessing-web-applications",level:3},{value:"Testing Locally",id:"testing-locally",level:2},{value:"Testing on Staging or Experimental",id:"testing-on-staging-or-experimental",level:2},{value:"DoD Certificates",id:"dod-certificates",level:3},{value:"Running a Command",id:"running-a-command",level:3},{value:"Tips and Tricks",id:"tips-and-tricks",level:2},{value:"Using <code>curl</code>",id:"using-curl",level:3},{value:"References",id:"references",level:2}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-test-the-prime-api"},"How to Test the Prime API"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u2757 For the most up-to-date information about the Prime API, please visit ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/prime_api_deliverable/wiki"},"https://github.com/transcom/prime_api_deliverable/wiki"),". The Prime API Deliverable wiki is the client-facing documentation and will be your best resource for understanding how to use this API. This article is a stub that has been kept to preserve some of the old information that might be useful for current MilMove developers.")),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#getting-started"},"Getting Started")," - Set up and install instructions for the Prime API using Prime Docker",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#running-the-prime-docker"},"Running the Prime Docker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#accessing-web-applications"},"Accessing Web Applications")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#testing-locally"},"Testing Locally")," - How to test the Prime API Client using your local server"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#testing-on-staging-or-experimental"},"Testing on Staging or Experimental")," - How to test the Prime API Client using the deployed instances of Staging or Experimental env",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#dod-certificates"},"DoD Certificates")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#running-a-command"},"Running a Command")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#tips-and-tricks"},"Tips and Tricks"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#using-curl"},"Using Curl"))))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"The docker instructions are useful to external users. Internal users, with the dev environment set up, can skip straight to ",(0,n.kt)("a",{parentName:"p",href:"#testing-locally"},"Testing Locally")," or ",(0,n.kt)("a",{parentName:"p",href:"#testing-on-staging-or-experimental"},"Testing on Staging or Experimental"),"."),(0,n.kt)("p",null,"Those do not have a local dev environment can use the docker instead. Follow ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/prime_api_deliverable/wiki/Getting-Started"},"these instructions")," to set up the Prime API for testing. "),(0,n.kt)("h3",{id:"running-the-prime-docker"},"Running the Prime Docker"),(0,n.kt)("p",null,"Once you have completed the set up instructions, you can run the Prime Docker:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"make run_prime_docker\n")),(0,n.kt)("p",null,"Once you have completed your testing, remember to shut down the server:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"make docker_compose_down\n")),(0,n.kt)("h3",{id:"accessing-web-applications"},"Accessing Web Applications"),(0,n.kt)("p",null,"To access the the MilMove, Office, and Prime local domains during testing, you may also want to modify your ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," file to contain the following: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'  echo "127.0.0.1 primelocal" | sudo tee -a /etc/hosts\n  echo "127.0.0.1 officelocal" | sudo tee -a /etc/hosts\n  echo "127.0.0.1 milmovelocal" | sudo tee -a /etc/hosts\n')),(0,n.kt)("p",null,"Once you have modified the hosts file, and while the Prime docker container is running, you should be able to access the different web applications:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://milmovelocal:4000/"},"MilMove")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://officelocal:4000/"},"Office"))),(0,n.kt)("p",null,'After the page loads in for either url, on the top right, you should be able to see a link for "Local Sign-In". This will show a list of users you can log in as. On the MilMove side, this will allow you to test as a service member at different stages within a move. Within the Office app, these different users represent different office user roles.'),(0,n.kt)("h2",{id:"testing-locally"},"Testing Locally"),(0,n.kt)("p",null,"You must have data generated within your database and have the server running."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you are using the Prime Docker via ",(0,n.kt)("inlineCode",{parentName:"li"},"make run_prime_docker"),", this has already been done for you."),(0,n.kt)("li",{parentName:"ul"},"If you are not, please generate the data through ",(0,n.kt)("inlineCode",{parentName:"li"},"make db_dev_e2e_populate && server_run"),".")),(0,n.kt)("p",null,"To interact with the Prime API, we will use a CLI utility called ",(0,n.kt)("inlineCode",{parentName:"p"},"prime-api-client"),". To get command line help:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"go run ./cmd/prime-api-client --help")," to see a list of all subcommands and common arguments/flags"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"go run ./cmd/prime-api-client <subcommand> --help")," to see a list of specific arguments/flags for a subcommand")),(0,n.kt)("p",null,"To run a command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"go run ./cmd/prime-api-client --insecure <subcommand> <additional_flags> | jq\n")),(0,n.kt)("h2",{id:"testing-on-staging-or-experimental"},"Testing on Staging or Experimental"),(0,n.kt)("p",null,"You will first have to complete ",(0,n.kt)("a",{parentName:"p",href:"https://dp3.atlassian.net/l/c/use2NV2M"},"these steps")," to create CAC access."),(0,n.kt)("p",null,"Additionally, those changes must be deployed to each environment. Merging to master will deploy to staging. But you need to explicitly deploy to experimental to get access there, otherwise you won't have access."),(0,n.kt)("h3",{id:"dod-certificates"},"DoD Certificates"),(0,n.kt)("p",null,"You will need to download the DoD certificates to be able to access the Prime API in the deployed environments. Steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to this ",(0,n.kt)("a",{parentName:"li",href:"https://militarycac.com/macnotes.htm#which_exact_CAC"},"military CAC website"),"."),(0,n.kt)("li",{parentName:"ol"},"If you are a Safari or Chrome user, skip to step 5."),(0,n.kt)("li",{parentName:"ol"},"If you are a Firefox user, skip to step 5a."),(0,n.kt)("li",{parentName:"ol"},"Download the required files."),(0,n.kt)("li",{parentName:"ol"},"Confirm in Keychain on your Mac that you have all the certificates."),(0,n.kt)("li",{parentName:"ol"},"There will likely be a few certs that your Mac won't trust. You will need to manually enable ",(0,n.kt)("inlineCode",{parentName:"li"},"Always Trust")," for these certificates.")),(0,n.kt)("h3",{id:"running-a-command"},"Running a Command"),(0,n.kt)("p",null,"If testing on staging, run a command with the ",(0,n.kt)("inlineCode",{parentName:"p"},"api.stg.move.mil")," hostname:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"go run ./cmd/prime-api-client --cac --hostname api.stg.move.mil --port 443 <subcommand> | jq\n")),(0,n.kt)("p",null,"If testing on experimental, run a command with the ",(0,n.kt)("inlineCode",{parentName:"p"},"api.exp.move.mil")," hostname instead:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"go run ./cmd/prime-api-client --cac --hostname api.exp.move.mil --port 443 <subcommand> | jq\n")),(0,n.kt)("p",null,"You will be prompted to enter your CAC pin. This will be the same pin you created when picking up your CAC."),(0,n.kt)("p",null,"If you have trouble, you can ",(0,n.kt)("a",{parentName:"p",href:"https://dp3.atlassian.net/l/c/hPM2fRq5"},"troubleshoot CAC issues here")),(0,n.kt)("h2",{id:"tips-and-tricks"},"Tips and Tricks"),(0,n.kt)("p",null,"You've seen this at the beginning of each command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"go run ./cmd/prime-api-client\n")),(0,n.kt)("p",null,"You can shorten it by doing the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"rm -f bin/prime-api-client\nmake bin/prime-api-client\n")),(0,n.kt)("p",null,"Then every time you see ",(0,n.kt)("inlineCode",{parentName:"p"},"go run ./cmd/prime-api-client"),", you can replace it with simply ",(0,n.kt)("inlineCode",{parentName:"p"},"prime-api-client"),". For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"prime-api-client --insecure <subcommand>\n")),(0,n.kt)("h3",{id:"using-curl"},"Using ",(0,n.kt)("inlineCode",{parentName:"h3"},"curl")),(0,n.kt)("p",null,"You can also use ",(0,n.kt)("inlineCode",{parentName:"p"},"scripts/prime-api")," to hit an endpoint in the Prime API. To do so, first save a JSON file with the body for the request, and then enter a command with the format:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"prime-api <endpoint_path> <method> <filename.json>\n")),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"prime-api payment-requests POST data.json\n")),(0,n.kt)("p",null,"Note that this method for accessing the API is not actively being supported and may be less reliable than others (Postman or the Prime API Client CLI)."),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/backend/testing/acceptance-testing-payment-requests"},"Acceptance testing payment requests"))))}c.isMDXComponent=!0}}]);