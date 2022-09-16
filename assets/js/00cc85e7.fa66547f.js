"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[5809],{30845:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=o(87462),n=(o(67294),o(3905));o(61839);const i={sidebar_position:1},r="How To Generate Mocks with Mockery",s={unversionedId:"tools/mockery/generate-mocks-with-mockery",id:"tools/mockery/generate-mocks-with-mockery",title:"How To Generate Mocks with Mockery",description:"Mockery provides the ability to easily generate mocks for golang interfaces. It removes the boilerplate coding required to use mocks.",source:"@site/docs/tools/mockery/generate-mocks-with-mockery.md",sourceDirName:"tools/mockery",slug:"/tools/mockery/generate-mocks-with-mockery",permalink:"/mymove-docs/docs/tools/mockery/generate-mocks-with-mockery",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/tools/mockery/generate-mocks-with-mockery.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"toolsSidebar",previous:{title:"API Parsers",permalink:"/mymove-docs/docs/tools/locust/api-parsers"},next:{title:"Setting up Postman",permalink:"/mymove-docs/docs/tools/postman/setting-up-postman"}},c={},m=[{value:"Auto-generating mocks with <code>go generate</code>",id:"auto-generating-mocks-with-go-generate",level:2},{value:"Using Mocks",id:"using-mocks",level:2}],p={toc:m};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-generate-mocks-with-mockery"},"How To Generate Mocks with Mockery"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/vektra/mockery"},"Mockery")," provides the ability to easily generate mocks for golang interfaces. It removes the boilerplate coding required to use mocks."),(0,n.kt)("p",null," ",(0,n.kt)("em",{parentName:"p"},"In Golang, mocks can only be created on interfaces - not structs. So, it is important that for whichever mock you are trying to generate, it should correspond to the appropriate interface.")),(0,n.kt)("h2",{id:"auto-generating-mocks-with-go-generate"},"Auto-generating mocks with ",(0,n.kt)("inlineCode",{parentName:"h2"},"go generate")),(0,n.kt)("p",null," The ",(0,n.kt)("inlineCode",{parentName:"p"},"make mocks_generate")," command will regenerate mocks for all interfaces tagged with the appropriate ",(0,n.kt)("inlineCode",{parentName:"p"},"go generate")," command. To add an interface to the list of auto-generated mocks, just add a\n",(0,n.kt)("inlineCode",{parentName:"p"},"go:generate")," comment like below and update the name with your interface name."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-.go"},"// AccessCodeClaimer is the service object interface for ValidateAccessCode\n//go:generate mockery -name AccessCodeClaimer\ntype AccessCodeClaimer interface {\n    ClaimAccessCode(code string, serviceMemberID uuid.UUID) (*models.AccessCode, *validate.Errors, error)\n}\n")),(0,n.kt)("h2",{id:"using-mocks"},"Using Mocks"),(0,n.kt)("p",null,"When you use the mock type, you need to know two things:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"What you expect to receive as input."),(0,n.kt)("li",{parentName:"ol"},"What you expect to receive as output.")),(0,n.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Pointers in Mocks")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"These should be defined as exactly as possible to preserve the integrity of your test. If you have to include pointer\ninput, you must ",(0,n.kt)("em",{parentName:"p"},"always")," use copies of the pointer and ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"never, ever use that specific pointer again")),". Otherwise,\nyou could unknowingly change the input you expect and your test would be compromised."),(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"If you are unsure about the inputs/returns for a mock, you should not use a mock.")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example test mock"',title:'"Example',test:!0,'mock"':!0},'reweigh := testdatagen.MakeDefaultReweigh(suite.DB())\nreweighCopy := *reweigh // make sure the copy is a value, not a pointer\n\nupdater := mocks.NewReweighUpdater(suite.T())\n\nupdater.On("UpdateReweigh",\n    mock.AnythingOfType("appcontext.AppContext"), // you can include as many input parameters\n    mock.AnythingOfType("*models.Reweigh")        // as you need\n).Return(reweighCopy, nil)\n')),(0,n.kt)("p",null,"Note that this calls the generated mock function, ",(0,n.kt)("em",{parentName:"p"},"not")," the original."),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"More mocking")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"MockedInterface.On()")," to mock a method. "),(0,n.kt)("p",{parentName:"div"},"Mocks also have a ",(0,n.kt)("inlineCode",{parentName:"p"},"AssertExpectations")," method to validate expectations, such as parameter type and number of times the\nmethod was called. When you use ",(0,n.kt)("inlineCode",{parentName:"p"},"mocks.New<MockedThing>"),", it automatically sets it up to call ",(0,n.kt)("inlineCode",{parentName:"p"},"AssertExpectations"),"\nat the end."),(0,n.kt)("p",{parentName:"div"},"See ",(0,n.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/stretchr/testify/mock#Call.On"},"testify's docs")," for more information."))))}d.isMDXComponent=!0}}]);