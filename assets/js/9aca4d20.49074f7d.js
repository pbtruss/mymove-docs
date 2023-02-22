"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[8274],{22213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));n(95657);const i={sidebar_position:4},r="How we use TanStack Query",s={unversionedId:"frontend/guides/how-we-use-react-query",id:"frontend/guides/how-we-use-react-query",title:"How we use TanStack Query",description:"The MilMove project uses TanStack Query v4 for the Frontend applications. Within TanStack Query, we are using the React framework, a combination colloquially known as React Query.",source:"@site/docs/frontend/guides/how-we-use-react-query.md",sourceDirName:"frontend/guides",slug:"/frontend/guides/how-we-use-react-query",permalink:"/mymove-docs/docs/frontend/guides/how-we-use-react-query",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/frontend/guides/how-we-use-react-query.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"frontendSidebar",previous:{title:"How to display dates and times",permalink:"/mymove-docs/docs/frontend/guides/display-dates-and-times"},next:{title:"How To Store Data in Redux",permalink:"/mymove-docs/docs/frontend/guides/how-to-store-api-data-on-the-front-end"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"<code>useQuery</code> Basics",id:"usequery-basics",level:2},{value:"Mutations (Updates)",id:"mutations-updates",level:2},{value:"Writing Mutations",id:"writing-mutations",level:3},{value:"Mutate functions",id:"mutate-functions",level:4},{value:"Mutation callbacks",id:"mutation-callbacks",level:4},{value:"Query invalidation",id:"query-invalidation",level:2},{value:"Query cache",id:"query-cache",level:3},{value:"Testing",id:"testing",level:2}],l={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-we-use-tanstack-query"},"How we use TanStack Query"),(0,o.kt)("admonition",{title:"Version information",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The MilMove project uses ",(0,o.kt)("strong",{parentName:"p"},"TanStack Query v4")," for the Frontend applications. Within TanStack Query, we are using the React framework, a combination colloquially known as ",(0,o.kt)("strong",{parentName:"p"},"React Query"),".")),(0,o.kt)("admonition",{title:"Ask in Slack",type:"success"},(0,o.kt)("p",{parentName:"admonition"},"If you have any questions, ask in ",(0,o.kt)("a",{parentName:"p",href:"https://ustcdp3.slack.com/archives/CTQQJD3G8"},"#prac-frontend")," /\n",(0,o.kt)("a",{parentName:"p",href:"https://ustcdp3.slack.com/archives/CP6PTUPQF"},"#prac-engineering")," for help.")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/overview"},"Read more about React Query in the official Overview\ndocumentation"),". This guide is a brief primer and discusses\nbest practices for the MilMove project. Instead of being comprehensive, this\ndocumentation strives to be a starting point for the official documentation with\nreferences to how to find the particular React Query functions within the\nMilMove codebase using the official GitHub search functionality. This search\nfunctionality can also be achieved locally using command-line tools such as\n",(0,o.kt)("inlineCode",{parentName:"p"},"grep")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ripgrep"),"."),(0,o.kt)("h2",{id:"usequery-basics"},(0,o.kt)("inlineCode",{parentName:"h2"},"useQuery")," Basics"),(0,o.kt)("admonition",{title:"Official documentation",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/guides/queries"},"Read the official documentation on this here"),".")),(0,o.kt)("p",null,"On the MilMove project we setup all of our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/search?l=JavaScript&q=%22useQuery%28%22"},"custom React Query hooks in the same\nfile"),", with the exceptions of Mutations. For Mutations\nwe create these on a per-page or per-Component basis. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},'https://github.com/transcom/mymove/blob/main/src/hooks/queries.js#L61-L71"\n')),(0,o.kt)("p",null,"When writing a custom query, you can choose to spread the queryKeys to the query function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/hooks/queries.js"',title:'"src/hooks/queries.js"'},"export const useNewCustomQueries = (moveCode) => {\n    const { data: move, ...moveQuery } = useQuery({ \n    queryKey: [KEY, moveCode],\n    // highlight-next-line\n    queryFn: ({ queryKey }) => getMove(...queryKey)});\n\n    const { isLoading, isError, isSuccess } = getQueriesStatus([movesQuery]);\n    return {move,orders,isLoading, isError,isSuccess,};\n};\n\n")),(0,o.kt)("p",null,"Or you can pass only the queryKey need for the api call."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/hooks/queries.js"',title:'"src/hooks/queries.js"'},"export const useNewCustomQueries = (moveCode) => {\n    const { data: move, ...moveQuery } = useQuery({ \n    queryKey: [KEY, moveCode],\n    // highlight-next-line\n    queryFn: ({ queryKey }) => getMove(queryKey[1]),\n    });\n    \n    const { isLoading, isError, isSuccess } = getQueriesStatus([movesQuery, ordersQuery]);\n    return {move,orders,isLoading, isError,isSuccess,};\n};\n\n")),(0,o.kt)("p",null,"Multiple queries can be in the same custom Query. If the one query has a dependency based on another query's data, setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," key with the needed value will paused the query while that value is undefined."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/transcom/mymove/blob/main/src/hooks/queries.js#L166-L201\n")),(0,o.kt)("h2",{id:"mutations-updates"},"Mutations (Updates)"),(0,o.kt)("admonition",{title:"Official documentation",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/guides/mutations"},"Read the official documentation on this here"),".")),(0,o.kt)("p",null,"On the MilMove project, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/search?l=JavaScript&q=%22useMutation%28%22"},"we create Mutations for specific Components or\nPages"),". The reason for that is because these Mutations\nhave callback functions that are specific to user actions. This allows us to do\nspecific Component or Page actions on Success or Error related to the data being\nshown on that Component or Page."),(0,o.kt)("h3",{id:"writing-mutations"},"Writing Mutations"),(0,o.kt)("p",null,"There are some common ",(0,o.kt)("a",{parentName:"p",href:"https://tkdodo.eu/blog/mastering-mutations-in-react-query#common-gotchase"},'"gotchas"')," that can cause mutations to not behave as expected. To avoid those issues, the examples below give examples of best practices to follow in order for mutations to work consistently. These preferences were influenced by methods recommended by the maintainers of React Query."),(0,o.kt)("h4",{id:"mutate-functions"},"Mutate functions"),(0,o.kt)("admonition",{title:"TDLR;",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Preference is given to using the ",(0,o.kt)("inlineCode",{parentName:"p"},"mutate")," function because errors are handled by React Query.")),(0,o.kt)("p",null,"There are two mutation functions, ",(0,o.kt)("inlineCode",{parentName:"p"},"mutate")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"mutateAsync"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"mutate")," function does not return anything and utilizes React Query's built in error handling. However there still access to the mutated data via React Query's callbacks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { useMutation } from '@tanstack/react-query'\n\nconst {mutate: myMutation } = useMutation({mutateFn: functionToBeCalled});\n\nconst onSubmit = () => {\n    myMutation(variables, {\n        onSuccess: (result) => {\n            console.log(result)\n            history.push(path)\n        }\n    })\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"mutateAsync")," function returns a promise but requires manual error handling."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { useMutation } from '@tanstack/react-query'\n\nconst {mutateAsync: myAsyncMutation } = useMutation({mutateFn: functionToBeCalled});\n\nconst onSubmit = async () => {\n    try{\n        const result = await myAsyncMutation();\n        console.log(result);\n        history.push(path);\n    }   \n    catch(error) {\n        console.log(`Handle this ${error}`)\n    }\n}\n")),(0,o.kt)("h4",{id:"mutation-callbacks"},"Mutation callbacks"),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"}," In this codebase, the mutation is often created in a different component that where mutate function is called.")),(0,o.kt)("p",null," Callbacks maybe not fire as expected. To avoid that issue, logic should be handled in the ",(0,o.kt)("inlineCode",{parentName:"p"},"useMutation")," callback which is called first. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/transcom/mymove/blob/main/src/pages/Office/EditShipmentDetails/EditShipmentDetails.jsx#L22-L30\n")),(0,o.kt)("p",null,"UI changes should happen in the ",(0,o.kt)("inlineCode",{parentName:"p"},"mutate")," callback which is called second after the ",(0,o.kt)("inlineCode",{parentName:"p"},"useMutation")," callback. This is handled second so the mutation can complete. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/transcom/mymove/blob/main/src/components/Office/ShipmentForm/ShipmentForm.jsx#L330-L339\n")),(0,o.kt)("p",null," If UI changes, such navigating to a new page, happen on the ",(0,o.kt)("inlineCode",{parentName:"p"},"useMutation")," callback, the mutation will prematurely end. In this codebase, the mutation is often created in a different component that where mutate function is called."),(0,o.kt)("h2",{id:"query-invalidation"},"Query invalidation"),(0,o.kt)("admonition",{title:"Official documentation",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/guides/query-invalidation"},"Read the official documentation on this here"),".")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/search?l=JavaScript&q=%22invalidateQueries%28%22&type="},"We use query invalidation to fetch new data")," from\nthe APIs that ",(0,o.kt)("inlineCode",{parentName:"p"},"useQuery")," fetches from.  Only use this when you want to fetch new\ndata related to the Entity that you're updating. Make sure you also fetch new\ndata for related Entities as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\nimport {useQueryClient} from '@tanstack/react-query'\n\nconst queryClient = useQueryClient()\n\nconst {mutate: myMutation } = useMutation({\n    mutateFn: functionToBeCalled,\n    onSuccess: () => {\n        // highlight-next-line \n        queryClient.invalidateQueries({queryKey: [KEY_1, KEY_2]})\n\n    }\n});\n\n")),(0,o.kt)("h3",{id:"query-cache"},"Query cache"),(0,o.kt)("admonition",{title:"Official documentation",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/guides/caching"},"Read the official documentation on this here"),".")),(0,o.kt)("admonition",{title:"About Query Cache",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Currently, we access the Query cache via the QueryClient using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useQueryClient")," hook. This is mostly used to invalidate and refetch queries.  In the future, we have the ability to do Query Cache for the React Query when\nwe get real-user data.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\nimport {useQueryClient} from '@tanstack/react-query'\n\n        // highlight-next-line \nconst queryClient = useQueryClient()\n\nconst {mutate: myMutation } = useMutation({\n    mutateFn: functionToBeCalled,\n    onSuccess: () => {\n        queryClient.invalidateQueries({queryKey: [KEY_1, KEY_2]})\n\n    }\n});\n\n")),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("admonition",{title:"Official documentation",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/guides/testing"},"Read the official documentation on this here"),".")),(0,o.kt)("p",null,"In order to test component using React Query, it needs to have a wrapper with an instance of the query client running. ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactQueryWrapper")," is available in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/main/src/testUtils.jsx"},"testing utils")," to accomplish that. The wrapper has been added to ",(0,o.kt)("inlineCode",{parentName:"p"},"MockProviders")," also in the testing utils."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    it('has a React Query wrapper directly', async () => {\n      render(<ShipmentForm />, {wrapper: ReactQueryWrapper});\n    });\n\n    it('has a React Query wrapper via Mock Providers', async () => {\n      render(\n        <MockProviders>\n          <ShipmentForm />\n        </MockProviders>,\n      );\n    });\n\n")))}m.isMDXComponent=!0}}]);