"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2355],{86220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));n(95657);const i={sidebar_position:3},a="How To Unit Test React Components",s={unversionedId:"frontend/testing/unit-test-react-components",id:"frontend/testing/unit-test-react-components",title:"How To Unit Test React Components",description:"Unit testing React components has been done with Enzyme, but we now favor a library called React Testing Library (RTL) for unit tests. Please see this page comparing them and outlining a guide for when to use which library. As a general rule of thumb, new components should be tested using RTL.",source:"@site/docs/frontend/testing/unit-test-react-components.md",sourceDirName:"frontend/testing",slug:"/frontend/testing/unit-test-react-components",permalink:"/mymove-docs/docs/frontend/testing/unit-test-react-components",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/frontend/testing/unit-test-react-components.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"frontendSidebar",previous:{title:"[WIP] How to run Frontend test coverage reports",permalink:"/mymove-docs/docs/frontend/testing/how-to-run-frontend-test-coverage-reports"},next:{title:"How to view a move or payment request in the office app as a TOO or TIO",permalink:"/mymove-docs/docs/frontend/testing/how-to-view-a-move-or-payment-request-in-the-office-app-as-a-too-or-tio"}},p={},l=[{value:"Shallow Rendering",id:"shallow-rendering",level:2},{value:"Full Rendering",id:"full-rendering",level:2},{value:"Static Rendering",id:"static-rendering",level:2}],c={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-unit-test-react-components"},"How To Unit Test React Components"),(0,r.kt)("p",null,"Unit testing React components has been done with Enzyme, but we now favor a library called ",(0,r.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/react-testing-library/intro/"},"React Testing Library")," (RTL) for unit tests. Please see ",(0,r.kt)("a",{parentName:"p",href:"/mymove-docs/docs/frontend/testing/writing-frontend-tests-enzyme-and-react-testing-library"},"this page")," comparing them and outlining a guide for when to use which library. As a general rule of thumb, new components should be tested using RTL.\nYou can also look at our page on ",(0,r.kt)("a",{parentName:"p",href:"/mymove-docs/docs/frontend/testing/writing-tests-using-react-testing-library-and-jest"},"Writing Tests Using React Testing Library and Jest")," for more info."),(0,r.kt)("p",null,"Below is a guide to Enzyme written before we introduced RTL:"),(0,r.kt)("p",null,"Unit testing React components with Enzyme requires familiarity with two libraries:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/en/expect"},"Jest"),", our test framework and runner"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://airbnb.io/enzyme/docs/api/"},"Enzyme"),", a React component testing library")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note that the version of Jest we're using is dictated by ",(0,r.kt)("inlineCode",{parentName:"em"},"create-react-app")," and tends to lag behind the latest releases.")),(0,r.kt)("p",null,"The basic pattern for unit testing React components is:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'"Render" the component using either ',(0,r.kt)("inlineCode",{parentName:"li"},"shallow")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"mount"),". Pass in whatever ",(0,r.kt)("inlineCode",{parentName:"li"},"props")," are needed to by the component."),(0,r.kt)("li",{parentName:"ol"},"Make assertions against the component state using Jest and Enzyme.")),(0,r.kt)("p",null,"It's best to avoid testing network requests or Redux when unit testing a component. If your component does either of these things, it is probably worth restructuring your code using the container pattern so that the inner component can be easily tested."),(0,r.kt)("p",null,"Remember that the value returned by either ",(0,r.kt)("inlineCode",{parentName:"p"},"shallow"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mount"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," will be a different object in each case and have different behavior as a result."),(0,r.kt)("h2",{id:"shallow-rendering"},"Shallow Rendering"),(0,r.kt)("p",null,"Shallow rendering renders a component but not any of its children. You'll want to keep this in mind when writing your assertions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\nimport { shallow } from 'enzyme';\nimport HHGWeightWarning from './HHGWeightWarning';\n\ndescribe('HHG with too high a weight estimate', function() {\n  const shipment = { weight_estimate: 12000 };\n  const entitlements = { weight: 10000 };\n  const wrapper = shallow(<HHGWeightWarning shipment={shipment} entitlements={entitlements} />);\n\n  it('shows a warning if the estimated weight is too high', function() {\n    expect(wrapper.text()).toContain(\n      'Your weight estimate of 12,000 is 2,000 lbs over your maximum entitlement of 10,000 lbs.',\n    );\n  });\n});\n")),(0,r.kt)("p",null,"If you need to see if a React component exists in the render tree, use the Enzyme API to check for it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"describe('with valid weights', function() {\n  const shipment = { weight_estimate: 1000, progear_weight_estimate: 200, spouse_progear_weight_estimate: 200 };\n  const entitlements = { weight: 2000, pro_gear: 300, pro_gear_spouse: 300 };\n  const wrapper = shallow(<HHGWeightWarning shipment={shipment} entitlements={entitlements} />);\n\n  it('shows no alerts', function() {\n    expect(wrapper.containsMatchingElement(Alert)).toEqual(false);\n  });\n});\n")),(0,r.kt)("p",null,"Alternatively, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"html()")," to render a node to HTML and make assertions against the markup."),(0,r.kt)("h2",{id:"full-rendering"},"Full Rendering"),(0,r.kt)("p",null,"While providing a more realistic perspective on the application's behavior, using ",(0,r.kt)("inlineCode",{parentName:"p"},"mount")," can be problematic. One cause of this is that certain components (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router"),") can't be rendered unless they appear beneath another component or provider. In such a case, you'll need to setup any providers or parent components and render the component under test inside them."),(0,r.kt)("p",null,"For example, if a component needs to be rendered within a ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," that provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"store")," prop, you'll need to render it like so in a test:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\nimport { Provider } from 'react-redux';\nimport ReactDOM from 'react-dom';\nimport configureStore from 'redux-mock-store';\nimport { mount } from 'enzyme';\n\ndescribe('HomePage tests', () => {\n  const mockStore = configureStore();\n  let store;\n  describe('When the user has never logged in before', function() {\n    store = mockStore({});\n    const wrapper = mount(\n      <Provider store={store}>\n        <ComponentThatNeedsAccessToTheStore />\n      </Provider>,\n    );\n\n    // assertions go here\n  });\n});\n")),(0,r.kt)("p",null,"Generally, however, it is recommended to use the container pattern to separate the data access and rendering concerns of a component and to focus unit tests on the inner component."),(0,r.kt)("h2",{id:"static-rendering"},"Static Rendering"),(0,r.kt)("p",null,"Static rendering renders a React component to HTML and provides a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cheeriojs/cheerio/tree/aa90399c9c02f12432bfff97b8f1c7d8ece7c307#api"},"nice API")," for traversing the resulting markup."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\nimport { render } from 'enzyme';\nimport HHGWeightWarning from './HHGWeightWarning';\n\ndescribe('with valid weights', function() {\n  const shipment = { weight_estimate: 1000, progear_weight_estimate: 200, spouse_progear_weight_estimate: 200 };\n  const entitlements = { weight: 2000, pro_gear: 300, pro_gear_spouse: 300 };\n  const wrapper = render(<HHGWeightWarning shipment={shipment} entitlements={entitlements} />);\n\n  it('shows no alerts', function() {\n    expect(wrapper.find('.usa-alert').length).toEqual(0);\n  });\n});\n")))}d.isMDXComponent=!0}}]);