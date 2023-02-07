"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9257],{27484:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));a(29420);const i={sidebar_position:3},l="DMDC Identity Web Services",o={unversionedId:"about/security/dmdc-identity-web-services",id:"about/security/dmdc-identity-web-services",title:"DMDC Identity Web Services",description:'DMDC offers a suite of services under the "Identity Web Services" (IWS) program. These services provide clients limited access to DEERS (Defense Enrollment Eligibility Reporting System) for looking up personnel information on anyone affiliated with the DoD, including service members, civilian employees, contractors, and dependents.',source:"@site/docs/about/security/dmdc-identity-web-services.md",sourceDirName:"about/security",slug:"/about/security/dmdc-identity-web-services",permalink:"/mymove-docs/docs/about/security/dmdc-identity-web-services",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/about/security/dmdc-identity-web-services.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"aboutSidebar",previous:{title:"DoD Certificates",permalink:"/mymove-docs/docs/about/security/dod-certs"},next:{title:"Application Setup",permalink:"/mymove-docs/docs/about/application-setup/"}},s={},d=[{value:"Protocol",id:"protocol",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Enclaves",id:"enclaves",level:2},{value:"Network",id:"network",level:2},{value:"Request Types",id:"request-types",level:2},{value:"PIDS : SSN + name",id:"pids--ssn--name",level:3},{value:"EDI : DoD ID Number / EDIPI",id:"edi--dod-id-number--edipi",level:3},{value:"wkEma: Work E-mail",id:"wkema-work-e-mail",level:3},{value:"TIDS: CAC Token",id:"tids-cac-token",level:3},{value:"Populations",id:"populations",level:2},{value:"Pitfalls",id:"pitfalls",level:2}],m={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dmdc-identity-web-services"},"DMDC Identity Web Services"),(0,r.kt)("p",null,'DMDC offers a suite of services under the "Identity Web Services" (IWS) program. These services provide clients limited access to DEERS (Defense Enrollment Eligibility Reporting System) for looking up personnel information on anyone affiliated with the DoD, including service members, civilian employees, contractors, and dependents.'),(0,r.kt)("p",null,"MilMove needs to look up personnel information for several reasons:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When given the SSN of a member, get the member's EDIPI, to properly associate electronic Orders and avoid saving the SSN in clear-text."),(0,r.kt)("li",{parentName:"ol"},"Save time during account creation by pre-populating fields like name, branch of service, and rank."),(0,r.kt)("li",{parentName:"ol"},"Using a member's EDIPI, get the member's SSN, to facilitate PPM payments or support other legacy paperwork that has yet to move to EDIPI for unique identifiers."),(0,r.kt)("li",{parentName:"ol"},"Look up a member's work e-mail address, to notify a member who has yet to create an account that they have electronic PCS Orders in MilMove and that they can start the move process.")),(0,r.kt)("p",null,'MilMove uses IWS\'s "Real-time Broker Service" (RBS). This is an allegedly RESTful web service. It utilizes XML payloads.'),(0,r.kt)("h2",{id:"protocol"},"Protocol"),(0,r.kt)("p",null,"DMDC calls RBS RESTful, but it's really not. The client sends a GET request with the parameters encoded in the path of the URL (which is RESTful) but still using the ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," sign (which is not RESTful)."),(0,r.kt)("p",null,"The HTTP status code it returns is meaningless, even in error cases."),(0,r.kt)("p",null,"Instead, the response body contains one of two completely unrelated types of XML documents - one for normal operation, and another for protocol errors (like malformed data). After determining which of the two document types the body contains, the client must look for the reason and return codes in the document."),(0,r.kt)("p",null,'The "normal" document type is specified in ',(0,r.kt)("inlineCode",{parentName:"p"},"2675_DDS_get_cac_data.xsd"),". Find it in the Google drive."),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"We have provided DMDC with our DoD-signed certificates. Our staging and experimental certs are allowed to connect to their CT environment, while our production cert is allowed to connect to their production environment."),(0,r.kt)("p",null,"As of this writing, IWS presents an ordinary commercial signed cert, although they once presented a DoD-signed cert. Perhaps that means they would trust clients with commercial certs now instead of requiring DoD-signed certs. ",(0,r.kt)("strong",{parentName:"p"},"As a practical matter, when connecting to RBS, we trust certs signed by both the DoD and the usual commercial CAs.")," Who knows, DMDC might switch back."),(0,r.kt)("h2",{id:"enclaves"},"Enclaves"),(0,r.kt)("p",null,'IWS has two enclaves - production, where the real data lives, and "Contractor Test", where fake data lives.'),(0,r.kt)("p",null,"It should go without saying that any data retrieved from IWS's Production Environment is PII and needs to be appropriately protected."),(0,r.kt)("p",null,"As for Contractor Test, it is ",(0,r.kt)("em",{parentName:"p"},"shared with other customers,")," some of whom ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"have write access")),". These other customers (IIRC this includes Tricare and the VA) won't delete any records, but they frequently change the populations associated with a given test record. (They want to simulate a person separating from the military, for example.)"),(0,r.kt)("p",null,"Therefore, do not write any tests against CT that expect a test record to never change in any details. You can rely on the SSN-to-EDIPI to stay constant."),(0,r.kt)("p",null,"On the other hand, this resembles production, as records of real people obviously change over time."),(0,r.kt)("p",null,'Unfortunately, CT is infrequently "refreshed," where the previous data set is obliterated and a new data set is created with all-new fake people. When this happens, reach out to our DMDC Project Officer and request the updated data. In the past, they supplied the data as an Excel spreadsheet in an attachment to an encrypted email.'),(0,r.kt)("h2",{id:"network"},"Network"),(0,r.kt)("p",null,"We have also provided DMDC with MilMove's outbound static IPs. At the time of this writing, they are not limiting us to our staging and experimental IPs ",(0,r.kt)("em",{parentName:"p"},"in CT"),", so connecting from developer machines is allowed assuming you have the staging / experimental private DoD keys handy."),(0,r.kt)("h2",{id:"request-types"},"Request Types"),(0,r.kt)("p",null,"We can look up personnel information using one of the following - SSN + name, EDIPI, work e-mail, or CAC token."),(0,r.kt)("h3",{id:"pids--ssn--name"},"PIDS : SSN + name"),(0,r.kt)("p",null,"Provide SSN, name, and the DOB (if available, which it usually isn't), and get 0, 1, or more person records back, along with a MatchReasonCode that explains why IWS returned what it did. In the interest of brevity, only the reason codes returned for SSN queries (as opposed to sponsor queries) are listed below. They are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Enum"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PAB"),(0,r.kt)("td",{parentName:"tr",align:null},"MatchReasonCodeMultiple"),(0,r.kt)("td",{parentName:"tr",align:null},'More than one record matched the provided SSN and last name ("more than one PN_ID matched the provided criteria")')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PMB"),(0,r.kt)("td",{parentName:"tr",align:null},"MatchReasonCodeLimited"),(0,r.kt)("td",{parentName:"tr",align:null},'SSN matched a record, but the other criteria (like last name) didn\'t match ("the person matched on PN_ID and PN_ID_TYP_CD only")')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PMC"),(0,r.kt)("td",{parentName:"tr",align:null},"MatchReasonCodeFull"),(0,r.kt)("td",{parentName:"tr",align:null},'SSN + last name (and first name, if provided) matched just one record ("the person matched on PN_ID, PN_ID_TYP_CD and at least one additional criterion")')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PNB"),(0,r.kt)("td",{parentName:"tr",align:null},"MatchReasonCodeNone"),(0,r.kt)("td",{parentName:"tr",align:null},'Not found ("no person matched the provided PN_ID and PN_ID_TYP_CD combination")')))),(0,r.kt)("h3",{id:"edi--dod-id-number--edipi"},"EDI : DoD ID Number / EDIPI"),(0,r.kt)("p",null,"Provide EDIPI, and get a person record back, or an error."),(0,r.kt)("h3",{id:"wkema-work-e-mail"},"wkEma: Work E-mail"),(0,r.kt)("p",null,"Provide work e-mail, and get a person record back, or an error. This query is implemented on our end but not currently used."),(0,r.kt)("h3",{id:"tids-cac-token"},"TIDS: CAC Token"),(0,r.kt)("p",null,"Provide certificate information from a CAC and get a person record back, or an error."),(0,r.kt)("p",null,"This query is unimplemented on our end and untested. This query could potentially be very useful if we start taking CAC logins directly from service members and want to accelerate profile creation and fetch electronic Orders. The URL to use will look like ",(0,r.kt)("inlineCode",{parentName:"p"},"https://pkict.dmdc.osd.mil/appj/rbs/rest/op=tids03/customer=2675/schemaName=get_cac_data/schemaVersion=1.0/PKIC_AUTH_NM=CN=DOD%20CA-30,%20OU=PKI,%20OU=DoD,%20O=U.S.%20Government,%20C=US/PKIC_SER_ID=000000")),(0,r.kt)("h2",{id:"populations"},"Populations"),(0,r.kt)("p",null,'MilMove has access to many, but not all, of the "populations" of people in DEERS. It is possible for individuals to be part of multiple populations at the same time. It is also possible to leave or join a population due to events like Separation.'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Population"),(0,r.kt)("th",{parentName:"tr",align:null},"Accessible"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"A"),(0,r.kt)("td",{parentName:"tr",align:null},"Active Duty Member"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"B"),(0,r.kt)("td",{parentName:"tr",align:null},"Presidential Appointee"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"DoD / Uniformed Service Civil Service Employee"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"D"),(0,r.kt)("td",{parentName:"tr",align:null},"Disabled American Veteran"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"F"),(0,r.kt)("td",{parentName:"tr",align:null},"Former member"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"J"),(0,r.kt)("td",{parentName:"tr",align:null},"Service Academy Student"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"K"),(0,r.kt)("td",{parentName:"tr",align:null},"NAF DoD / Uniformed Service employee"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"National Guard Member"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Q"),(0,r.kt)("td",{parentName:"tr",align:null},"Gray Area Retiree"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"R"),(0,r.kt)("td",{parentName:"tr",align:null},"Retiree"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"V"),(0,r.kt)("td",{parentName:"tr",align:null},"Reserve Member"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Civilian Retiree"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"E"),(0,r.kt)("td",{parentName:"tr",align:null},"DoD and Uniformed Service contract employee"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"No"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"H"),(0,r.kt)("td",{parentName:"tr",align:null},"Medal of Honor recipient"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"No"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"I"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-DoD civil service employee, except Presidential appointee"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"No"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L"),(0,r.kt)("td",{parentName:"tr",align:null},"Lighthouse Service (obsolete)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"No"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"M"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-federal Agency civilian associates"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"No"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"O"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-DoD contract employee"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"No"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"T"),(0,r.kt)("td",{parentName:"tr",align:null},"Foreign Affiliate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"No"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"U"),(0,r.kt)("td",{parentName:"tr",align:null},"DoD OCONUS Hire"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"No"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"W"),(0,r.kt)("td",{parentName:"tr",align:null},"DoD Beneficiary"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"No"))))),(0,r.kt)("h2",{id:"pitfalls"},"Pitfalls"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RBS is usually fast (","<","1 seconds), but sometimes takes a long time (",">","25 seconds) to respond to requests. Keep this in mind when setting timeouts."),(0,r.kt)("li",{parentName:"ul"},"If you try to look up an individual but do not have access to any of that individual's populations, RBS will simply return no match, as if that individual does not exist."),(0,r.kt)("li",{parentName:"ul"},"SSNs do not have a 1-to-1 relationship to individuals. Individuals may be issued more than one SSN in their lifetimes for completely legitimate reasons. One SSN can also be associated with multiple people, due to typos or fraud. To account for this, ",(0,r.kt)("strong",{parentName:"li"},"RBS returns a MatchReasonCode along with possibly multiple matches.")," Clients are supposed to send as much information (names and/or DOB) with the PIDS request to increase the odds of returning a single match."),(0,r.kt)("li",{parentName:"ul"},'RBS will still return a match if it has a person with the provided SSN even if the provided name does not match; it gives the MatchReasonCode "PMB" in this case.')))}p.isMDXComponent=!0}}]);