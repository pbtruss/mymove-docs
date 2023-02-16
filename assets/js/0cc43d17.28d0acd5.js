"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[1785],{77620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));n(8209);const r={title:"\u270d\ufe0f  Welcome to writing ADRs"},o=void 0,s={unversionedId:"guides/adrs/README",id:"guides/adrs/README",title:"\u270d\ufe0f  Welcome to writing ADRs",description:"Architecture Decision Records or ADRs are the way Trussel engineers",source:"@site/docs/guides/adrs/README.md",sourceDirName:"guides/adrs",slug:"/guides/adrs/",permalink:"/mymove-docs/docs/guides/adrs/",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/guides/adrs/README.md",tags:[],version:"current",frontMatter:{title:"\u270d\ufe0f  Welcome to writing ADRs"},sidebar:"adrsSidebar",next:{title:"\ud83d\udcc4 ADR Template",permalink:"/mymove-docs/docs/guides/adrs/template"}},d={},l=[{value:"Creating ADRs using this repository",id:"creating-adrs-using-this-repository",level:2},{value:"Required file names",id:"required-file-names",level:2},{value:"Required Front Matter",id:"required-front-matter",level:2}],p={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Architecture Decision Records or ",(0,a.kt)("strong",{parentName:"p"},"ADRs")," are the way Trussel engineers\ncommunicate changes throughout the MilMove project. The term architecture can be\nread loosely as the more important words are decision records. To get started,\ntake a look at ",(0,a.kt)("a",{parentName:"p",href:"/mymove-docs/docs/guides/adrs/template"},"the ADR template")," and then copy it into\n",(0,a.kt)("inlineCode",{parentName:"p"},"docs/adrs/")," to make your own."),(0,a.kt)("h2",{id:"creating-adrs-using-this-repository"},"Creating ADRs using this repository"),(0,a.kt)("p",null,"For convenience, ADRs can be created using ",(0,a.kt)("a",{parentName:"p",href:"/mymove-docs/docs/guides/adrs/template"},"the Template found in this\nguide"),". You can also create a new ADR file automatically with\n",(0,a.kt)("inlineCode",{parentName:"p"},"npm-run")," scripts. Run the following command and set name to the dashed name of\nyour ADR and the script will create an ADR file for you."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'npm run new-adr --slug="my-short-and-brief-adr"\n')),(0,a.kt)("p",null,"This command will create a new file for your ADR with placeholder title and\ndescription. Make sure you keep these values and the name of the file up to date\nas other ADRs may be added to the repository in the time it takes for your ADR\nto get peer-reviewed and approved."),(0,a.kt)("h2",{id:"required-file-names"},"Required file names"),(0,a.kt)("p",null,"ADRs live in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/adrs/")," folder. They are automatically generated into\ncards on ",(0,a.kt)("a",{parentName:"p",href:"/docs/adrs/"},"the ADR landing page"),". This is done by having the files\nin that directory follow a specific naming convention which includes a\nfour-digit number prefix before the name of your file. You may prefix your file\nwith any available four-digit number. You have to collaborate with others if\nmultiple ADRs are being written at the same time."),(0,a.kt)("p",null,"While your ADR is being drafted and reviewed, you may not have a number\nassociated with your ADR yet. It's okay to use the following prefix of ",(0,a.kt)("inlineCode",{parentName:"p"},"00XX-"),"\nto show that your ADR is in a Draft or Review state."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"When working in this new way, make sure you number the ADR before your work is\nmerged into the default branch. Don't leave the ",(0,a.kt)("inlineCode",{parentName:"p"},"00XX-")," prefix or a repeated\nnumber if other ADRs share the same number prefix.")),(0,a.kt)("h2",{id:"required-front-matter"},"Required Front Matter"),(0,a.kt)("p",null,"ADRs have a couple of specific features that are required to have them render\nproperly in our Documentation Portal. These affect the layout, order, and\nmetadata for the ADR."),(0,a.kt)("p",null,"The first thing an ADR must have is a Front Matter section. This section\ncontains a ",(0,a.kt)("inlineCode",{parentName:"p"},"title:")," and an optional ",(0,a.kt)("inlineCode",{parentName:"p"},"description:")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="A simple Front Matter with just a title."',title:'"A',simple:!0,Front:!0,Matter:!0,with:!0,just:!0,a:!0,'title."':!0},"---\ntitle: 0101 My decision to write an ADR\n---\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{3} title="A more complicated Front Matter with a multi-line description."',"{3}":!0,title:'"A',more:!0,complicated:!0,Front:!0,Matter:!0,with:!0,a:!0,"multi-line":!0,'description."':!0},"---\ntitle: 0102 My slightly complex and ambitious ADR\ndescription: |\n    This is a very long description for my 0102 ADR. It's about two or three\n    sentences. Depending on how you write it.\n---\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Notice the ",(0,a.kt)("inlineCode",{parentName:"p"},"description:")," property highlighted above uses a ",(0,a.kt)("inlineCode",{parentName:"p"},"|")," pipe character.\nThis allows for multi-line description text blocks.")),(0,a.kt)("p",null,"The added bonus of adding a description to your ADR's Front Matter is that this\ndescription shows up on the generated index page for all the ADRs and can be\nused to describe helpful information before clicking into an ADR. If a\n",(0,a.kt)("inlineCode",{parentName:"p"},"description:")," property doesn't exist, the generated card will include a summary\nof the first 8 words or so."))}m.isMDXComponent=!0}}]);