"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[6349],{4561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));n(95657);const s={sidebar_position:5},i="Writing Frontend Tests for MilMove",a={unversionedId:"frontend/testing/writing-frontend-tests-for-milmove",id:"frontend/testing/writing-frontend-tests-for-milmove",title:"Writing Frontend Tests for MilMove",description:"This guide covers how MilMove writes tests using RTL.",source:"@site/docs/frontend/testing/writing-frontend-tests-for-milmove.md",sourceDirName:"frontend/testing",slug:"/frontend/testing/writing-frontend-tests-for-milmove",permalink:"/mymove-docs/docs/frontend/testing/writing-frontend-tests-for-milmove",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/frontend/testing/writing-frontend-tests-for-milmove.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"frontendSidebar",previous:{title:"How to view a move or payment request in the office app as a TOO or TIO",permalink:"/mymove-docs/docs/frontend/testing/how-to-view-a-move-or-payment-request-in-the-office-app-as-a-too-or-tio"},next:{title:"Writing Frontend Tests: Enzyme and React Testing Library",permalink:"/mymove-docs/docs/frontend/testing/writing-frontend-tests-enzyme-and-react-testing-library"}},d={},l=[{value:"Common Mocks",id:"common-mocks",level:2},{value:"React Router Dom",id:"react-router-dom",level:3},{value:"Internal API",id:"internal-api",level:3},{value:"Factories",id:"factories",level:2},{value:"Common Props",id:"common-props",level:2},{value:"Service Member",id:"service-member",level:3},{value:"Current Orders",id:"current-orders",level:3},{value:"MTO Shipments",id:"mto-shipments",level:3},{value:"MTO Shipment",id:"mto-shipment",level:3},{value:"Current Move",id:"current-move",level:3},{value:"Backup Contact",id:"backup-contact",level:3},{value:"Releasing / Receiving Agent",id:"releasing--receiving-agent",level:3},{value:"Entitlement",id:"entitlement",level:3}],m={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"writing-frontend-tests-for-milmove"},"Writing Frontend Tests for MilMove"),(0,o.kt)("p",null,"This guide covers how MilMove writes tests using RTL.\nPerhaps you have stumbled across this guide, but are looking for generic strategies. That is covered in ",(0,o.kt)("a",{parentName:"p",href:"/mymove-docs/docs/frontend/testing/writing-tests-using-react-testing-library-and-jest"},"this wiki"),"."),(0,o.kt)("h2",{id:"common-mocks"},"Common Mocks"),(0,o.kt)("h3",{id:"react-router-dom"},"React Router Dom"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const mockPush = jest.fn();\nconst mockGoBack = jest.fn();\n\njest.mock('react-router-dom', () => ({\n  ...jest.requireActual('react-router-dom'),\n  useLocation: () => ({\n    pathname: 'localhost:3000/',\n  }),\n  useHistory: () => ({\n    push: mockPush,\n    goBack: mockGoBack,\n  }),\n}));\n")),(0,o.kt)("p",null,"What is this used for?\nA lot of pages have buttons that take the user to different places. We want to verify that users get redirected properly"),(0,o.kt)("h3",{id:"internal-api"},"Internal API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"jest.mock('services/internalApi', () => ({\n  ...jest.requireActual('services/internalApi'),\n  someApiCall: someFunction\n}));\n")),(0,o.kt)("p",null,"What is this used for?\nA lot of components make service calls to the API. Being component tests, we don't actually want those to make calls to the service because that will make our tests brittle. Instead, we mock out the service calls that we need."),(0,o.kt)("h2",{id:"factories"},"Factories"),(0,o.kt)("p",null,"There are factories available to make it easy to generate data in your front-end tests. Prefer factories to passing manual props. To use them, just call the factory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const address = addressFactory();\n")),(0,o.kt)("p",null,"For details about overriding test data and writing new factories, refer to ",(0,o.kt)("a",{parentName:"p",href:"/mymove-docs/docs/frontend/testing/using-factories-to-generate-data-for-frontend-tests"},"this wiki"),". "),(0,o.kt)("h2",{id:"common-props"},"Common Props"),(0,o.kt)("p",null,"Please feel free to change the data itself. These are mainly meant to cover common props that components tend to use. "),(0,o.kt)("h3",{id:"service-member"},"Service Member"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"serviceMember: {\n  id: '666',\n  current_station: {\n    name: 'Test Duty Station',\n  },\n  residential_address: {\n    city: 'New York',\n    postal_code: '10001',\n    state: 'NY',\n    street_address_1: '123 Main St',\n  },\n  affiliation: 'Navy',\n  edipi: '123567890',\n  personal_email: 'test@email.com',\n  first_name: 'Tester',\n  last_name: 'Testing',\n  rank: 'RANK',\n  telephone: '123-555-7890',\n}\n")),(0,o.kt)("h3",{id:"current-orders"},"Current Orders"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"currentOrders: {\n  orders_type: 'PERMANENT_CHANGE_OF_STATION',\n  has_dependents: false,\n  issue_date: '2020-08-11',\n  grade: 'RANK',\n  moves: ['123'],\n  origin_duty_station: {\n    name: 'Test Duty Station',\n    address: {\n      postal_code: '123456',\n    },\n  },\n  new_duty_station: {\n    name: 'New Test Duty Station',\n    address: {\n      postal_code: '123456',\n    },\n  },\n  report_by_date: '2020-08-31',\n  service_member_id: '666',\n  spouse_has_pro_gear: false,\n  status: MOVE_STATUSES.DRAFT,\n  uploaded_orders: {\n    uploads: [],\n  },\n},\n")),(0,o.kt)("h3",{id:"mto-shipments"},"MTO Shipments"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mtoShipments: [\n  {\n    id: 'testMtoShipment789',\n    agents: [],\n    customerRemarks: 'please be carefule',\n    moveTaskOrderID: '123',\n    pickupAddress: {\n      city: 'Beverly Hills',\n    },\n    requestedDeliveryDate: '2020-08-31',\n    requestedPickupDate: '2020-08-31',\n    shipmentType: 'HHG',\n    status: MOVE_STATUSES.SUBMITTED,\n    updatedAt: '2020-09-02T21:08:38.392Z',\n  },\n],\n")),(0,o.kt)("h3",{id:"mto-shipment"},"MTO Shipment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mtoShipment: {\n  id: 'testMtoShipment789',\n  agents: [],\n  customerRemarks: 'please be careful',\n  moveTaskOrderID: '123',\n  pickupAddress: {\n    city: 'Beverly Hills',\n  },\n  requestedDeliveryDate: '2020-08-31',\n  requestedPickupDate: '2020-08-31',\n  shipmentType: 'HHG',\n  status: MOVE_STATUSES.SUBMITTED,\n  updatedAt: '2020-09-02T21:08:38.392Z',\n},\n")),(0,o.kt)("h3",{id:"current-move"},"Current Move"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"currentMove: {\n  id: '123',\n  locator: 'CXVV3F',\n  selected_move_type: 'HHG',\n  service_member_id: '666',\n  status: MOVE_STATUSES.DRAFT,\n},\n")),(0,o.kt)("h3",{id:"backup-contact"},"Backup Contact"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"backup_contact: {\n  name: 'Peyton Wing',\n  email: 'pw@example.com',\n  telephone: '915-555-8761',\n}\n")),(0,o.kt)("h3",{id:"releasing--receiving-agent"},"Releasing / Receiving Agent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"agent: {\n  firstName: 'Jo',\n  lastName: 'Xi',\n  phone: '(555) 555-5555',\n  email: 'jo.xi@email.com',\n},\n")),(0,o.kt)("h3",{id:"entitlement"},"Entitlement"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"entitlement: {\n  authorizedWeight: 5000,\n  dependentsAuthorized: true,\n  eTag: 'MjAyMC0wOS0xNFQxNzo0MTozOC42ODAwOVo=',\n  id: '0dbc9029-dfc5-4368-bc6b-dfc95f5fe317',\n  nonTemporaryStorage: true,\n  privatelyOwnedVehicle: true,\n  proGearWeight: 2000,\n  proGearWeightSpouse: 500,\n  storageInTransit: 2,\n  totalDependents: 1,\n  totalWeight: 5000,\n},\n")))}c.isMDXComponent=!0}}]);