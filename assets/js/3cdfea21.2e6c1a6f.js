"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9030],{5174:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>m});var n=a(87462),o=(a(67294),a(3905));a(29420);const i={sidebar_position:10},l="How to Upgrade Go Version",r={unversionedId:"backend/guides/how-to/upgrade-go-version",id:"backend/guides/how-to/upgrade-go-version",title:"How to Upgrade Go Version",description:"Upgrading the Go version that we use happens in roughly these steps:",source:"@site/docs/backend/guides/how-to/upgrade-go-version.md",sourceDirName:"backend/guides/how-to",slug:"/backend/guides/how-to/upgrade-go-version",permalink:"/mymove-docs/docs/backend/guides/how-to/upgrade-go-version",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/guides/how-to/upgrade-go-version.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"backendSidebar",previous:{title:"How to Soft Delete",permalink:"/mymove-docs/docs/backend/guides/how-to/soft-delete"},next:{title:"How to Create a Custom Go Linter",permalink:"/mymove-docs/docs/backend/guides/how-to/create-a-custom-linter"}},s={},m=[{value:"1. Updating Our Docker Image",id:"1-updating-our-docker-image",level:2},{value:"2. Upgrade Local Go Version",id:"2-upgrade-local-go-version",level:2},{value:"asdf",id:"asdf",level:3},{value:"nix",id:"nix",level:3},{value:"3. Update <code>transcom/mymove</code> Repo",id:"3-update-transcommymove-repo",level:2},{value:"4. Notify Folks",id:"4-notify-folks",level:2},{value:"Message template",id:"message-template",level:3}],d={toc:m};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-upgrade-go-version"},"How to Upgrade Go Version"),(0,o.kt)("p",null,"Upgrading the Go version that we use happens in roughly these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#1-updating-our-docker-image"},"Updating our Docker Image:")," Update ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/transcom/circleci-docker"},"transcom/circleci-docker")," to point at an updated Go binary"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#2-upgrade-local-go-version"},"Upgrade Local Go Version:")," Upgrade local Go version with asdf config ",(0,o.kt)("inlineCode",{parentName:"li"},".tool-version")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#3-update-transcommymove-repo"},"Update ",(0,o.kt)("inlineCode",{parentName:"a"},"transcom/mymove")," Repo:")," Create a PR for the ",(0,o.kt)("inlineCode",{parentName:"li"},"transcom/mymove")," repo with the updated docker image hash created in step 1"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#notify-folks"},"Notify Folks:")," Notify everyone that we're updating Go around the time your PR lands")),(0,o.kt)("h2",{id:"1-updating-our-docker-image"},"1. Updating Our Docker Image"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Grab the download URL and SHA256 checksum for the latest 64-bit Linux Go release from ",(0,o.kt)("inlineCode",{parentName:"li"},"https://golang.org/dl/"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The file name should be something like ",(0,o.kt)("inlineCode",{parentName:"li"},"gox.xx.x.linux-amd64.tar.gz")))),(0,o.kt)("li",{parentName:"ul"},"Update any Dockerfile that installs go with the new go version and checksum.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"See ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/transcom/circleci-docker/pull/82"},"this PR")," as an example."))),(0,o.kt)("li",{parentName:"ul"},"Open a PR and ask someone from the Milmove Platform Team to approve it."),(0,o.kt)("li",{parentName:"ul"},"You may want to hold off merging this ",(0,o.kt)("inlineCode",{parentName:"li"},"circleci-docker")," PR until just before you're about to land the corresponding PR for the ",(0,o.kt)("inlineCode",{parentName:"li"},"transcom/mymove")," repo.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You can use the PR's hash to test, then merge and switch to the ",(0,o.kt)("inlineCode",{parentName:"li"},"main")," hash after all testing/checks/approvals are done."),(0,o.kt)("li",{parentName:"ul"},"This keeps others who may be doing ",(0,o.kt)("inlineCode",{parentName:"li"},"circleci-docker")," work from prematurely using the updated Go container before the necessary Go-related changes have landed in ",(0,o.kt)("inlineCode",{parentName:"li"},"transcom/mymove"),".")))),(0,o.kt)("h2",{id:"2-upgrade-local-go-version"},"2. Upgrade Local Go Version"),(0,o.kt)("h3",{id:"asdf"},"asdf"),(0,o.kt)("p",null,"For more details see ",(0,o.kt)("a",{parentName:"p",href:"/mymove-docs/docs/backend/guides/how-to/manage-golang-with-asdf"},"Manage golang with asdf")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Update ",(0,o.kt)("inlineCode",{parentName:"li"},".tool-versions")," to point to new version of golang"),(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"asdf install")," to install the new version (if you do not yet have it installed, see ",(0,o.kt)("a",{parentName:"li",href:"/mymove-docs/docs/backend/guides/how-to/manage-golang-with-asdf"},"How to get up and running")),(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"asdf global golang <version>")," to update global version as well"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"go version")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"asdf which go")," to check it worked"),(0,o.kt)("li",{parentName:"ul"},"Add this change to the PR created in the next step")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"\u276f go version\ngo version go1.16.4 darwin/amd64\n\n\u276f asdf which go\n/Users/john/.asdf/installs/golang/1.16.4/go/bin/go\n")),(0,o.kt)("h3",{id:"nix"},"nix"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Update ",(0,o.kt)("inlineCode",{parentName:"li"},"nix/default.nix")," (you will also need to ",(0,o.kt)("a",{parentName:"li",href:"https://ahobson.github.io/nix-package-search"},"update the hash"),")"),(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"./nix/update.sh"))),(0,o.kt)("h2",{id:"3-update-transcommymove-repo"},"3. Update ",(0,o.kt)("inlineCode",{parentName:"h2"},"transcom/mymove")," Repo"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"After your Docker image PR lands, grab the git hash from ",(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/milmove/circleci-docker"},"Docker")," that corresponds with your merged code."),(0,o.kt)("li",{parentName:"ul"},"Update files with the updated Docker image tag hash and/or Go version:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/pull/9423"},"Example PR")),(0,o.kt)("li",{parentName:"ul"},"Update the Go version number in:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"README.md")," (there's a path in the nix section that references a go version number)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".go-version")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".tool-versions")))),(0,o.kt)("li",{parentName:"ul"},"Update the Docker image tag hash in:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".circleci/config.yml")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Dockerfile.local")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Dockerfile.migrations_local")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Dockerfile.reviewapp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Dockerfile.tasks_local")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Dockerfile.tools_local")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Dockerfile.webhook_client")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Dockerfile.webhook_client_dp3")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Dockerfile.webhook_client_local")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"scripts/run-e2e-mtls-test-docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"scripts/run-e2e-test-docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Makefile")," (in the ",(0,o.kt)("inlineCode",{parentName:"li"},"docker_circleci")," target)"))))),(0,o.kt)("li",{parentName:"ul"},"If you use ",(0,o.kt)("inlineCode",{parentName:"li"},"asdf")," to manage your local Go version, you still need to update the nix package in ",(0,o.kt)("inlineCode",{parentName:"li"},"nix/default.nix")," - use the ",(0,o.kt)("a",{parentName:"li",href:"https://ahobson.github.io/nix-package-search"},"package search")," to find the hash"),(0,o.kt)("li",{parentName:"ul"},"If the major/minor version changed (the first or second number, e.g. 1.x.y to 2.x.y or 1.15.x to 1.16.x):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/pull/4990"},"Example PR")),(0,o.kt)("li",{parentName:"ul"},"Update the following files with the new go version:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"go-version")," in ",(0,o.kt)("inlineCode",{parentName:"li"},".github/workflows/go-auto-approve.yml")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"go.mod")))))),(0,o.kt)("li",{parentName:"ul"},"Rerun the Go formatter on the codebase with ",(0,o.kt)("inlineCode",{parentName:"li"},"pre-commit run --all-files golangci-lint")),(0,o.kt)("li",{parentName:"ul"},"Regenerate mocks (in case the signatures have changed that we're mocking): ",(0,o.kt)("inlineCode",{parentName:"li"},"make mocks_generate")),(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"make e2e_test_docker")," to test that the ",(0,o.kt)("inlineCode",{parentName:"li"},"Dockerfile.*local")," files work  with the new image."),(0,o.kt)("li",{parentName:"ul"},"Commit the above changes and any reformatted code and make sure everything builds correctly on CircleCI"),(0,o.kt)("li",{parentName:"ul"},"You may also want to check for an upgrade to the ",(0,o.kt)("inlineCode",{parentName:"li"},"golangci-lint")," version (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/pull/8327/files#r835384615"},"example"),"), particularly if doing a major Go version upgrade")),(0,o.kt)("h2",{id:"4-notify-folks"},"4. Notify Folks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It can be jarring when everything suddenly breaks after pulling from master, so it's a nice courtesy to notify folks in #prac-engineering in slack that the official Go version will be updated shortly and their local Go version should be upgraded as well"),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"circleci-lint")," has changed as well, then in-flight PRs will need to be formatted before they are merged, lest they break master")),(0,o.kt)("h3",{id:"message-template"},"Message template"),(0,o.kt)("p",null,"Below is an example message one can use as a template for their notification to #prac-engineering (credit: Reggie R):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"@engineering I just merged a [PR](https://github.com/transcom/mymove/pull/8244) \nthat upgrades the project to [Go 1.17.7](https://go.dev/doc/devel/release#go1.17) (which includes security fixes). \nWhen you pull that, here\u2019s what to do if you\u2019re using asdf:\n\n\n`asdf install`\n`asdf global golang 1.17.7`\n\n\nYou may need to restart your terminal after this if you still see mention of 1.17.5 when building.  \nIf you happen to be using nix instead, you should be prompted to run `./nix/update.sh` after pulling.  \nIf you\u2019re using an IDE, you may need to adjust it to point to 1.17.7 too.  \n\n")))}p.isMDXComponent=!0}}]);