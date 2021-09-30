"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[8920],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35400:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],l={},s=void 0,p={unversionedId:"dev/getting-started/How-to-view-a-move-or-payment-request-in-the-office-app-as-a-TOO-or-TIO",id:"dev/getting-started/How-to-view-a-move-or-payment-request-in-the-office-app-as-a-TOO-or-TIO",isDocsHomePage:!1,title:"How-to-view-a-move-or-payment-request-in-the-office-app-as-a-TOO-or-TIO",description:"Background",source:"@site/docs/dev/getting-started/How-to-view-a-move-or-payment-request-in-the-office-app-as-a-TOO-or-TIO.md",sourceDirName:"dev/getting-started",slug:"/dev/getting-started/How-to-view-a-move-or-payment-request-in-the-office-app-as-a-TOO-or-TIO",permalink:"/mymove-docs/docs/dev/getting-started/How-to-view-a-move-or-payment-request-in-the-office-app-as-a-TOO-or-TIO",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/getting-started/How-to-view-a-move-or-payment-request-in-the-office-app-as-a-TOO-or-TIO.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"How-to-Test-the-Prime-API",permalink:"/mymove-docs/docs/dev/getting-started/How-to-Test-the-Prime-API"},next:{title:"Frontend",permalink:"/mymove-docs/docs/dev/contributing/frontend/"}},c=[{value:"Background",id:"background",children:[]},{value:"When creating a move manually",id:"when-creating-a-move-manually",children:[{value:"Exception!",id:"exception",children:[]}]},{value:"When using the pre-populated development data",id:"when-using-the-pre-populated-development-data",children:[]},{value:"How to create a new office user locally",id:"how-to-create-a-new-office-user-locally",children:[]}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"When a TOO or TIO signs in to the Office app, they see a list of moves with non-PPM shipments or payment requests, respectively. This list is filtered by default to only show moves/payment requests that have the same GBLOC as the transportation office that the TOO/TIO is assigned to. GBLOC stands for ",(0,r.kt)("inlineCode",{parentName:"p"},"Government Bill of Lading Office Code"),", and represents a geographical area. GBLOCs are identified by 4 characters, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"LKNQ"),"."),(0,r.kt)("p",null,"In database terms, this means the ",(0,r.kt)("inlineCode",{parentName:"p"},"gbloc")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"office_user"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"transportation_office")," must match the ",(0,r.kt)("inlineCode",{parentName:"p"},"gbloc")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"order"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"origin_duty_station"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"transportation_office"),"."),(0,r.kt)("p",null,"If you don't have the app working locally, there is a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1jMdHFmDbZP1CvIPQ_NYq0Fpht_svKGFRiykOgnpUZ5c/edit#gid=856605341"},"mapping on the Google Drive")," that shows which duty stations correspond to each transportation office GBLOC. "),(0,r.kt)("p",null,"If you do have the app working locally, you can use the following scripts to match transportation offices to duty stations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'scripts/ds-for-gbloc "Scott AFB"\n')),(0,r.kt)("p",null,"This will return all duty stations with the same GBLOC as Scott AFB"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'scripts/to-for-gbloc "Scott AFB"\n')),(0,r.kt)("p",null,"This will return all transportation offices with the same GBLOC as Scott AFB"),(0,r.kt)("h2",{id:"when-creating-a-move-manually"},"When creating a move manually"),(0,r.kt)("p",null,"If you are participating in a slice demo for Transcom, or if you are testing the end-to-end flow of the app, the origin duty station you select for the service member must match the TOO/TIO's transportation office. Here's how you find out which duty station to pick:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If you haven't already, create an office user with your Truss email (the same email you used to create a login.gov account) via the ",(0,r.kt)("a",{parentName:"li",href:"https://admin.stg.move.mil"},"admin")," site, and give yourself both the TOO and TIO roles."),(0,r.kt)("li",{parentName:"ol"},"Sign in to the ",(0,r.kt)("a",{parentName:"li",href:"https://admin.stg.move.mil"},"admin")," site"),(0,r.kt)("li",{parentName:"ol"},"Look yourself up in the office users list"),(0,r.kt)("li",{parentName:"ol"},"Make a note of the name of the Transportation Office"),(0,r.kt)("li",{parentName:"ol"},"From the command line, within the ",(0,r.kt)("inlineCode",{parentName:"li"},"mymove")," repo, run this script (or use this ",(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1jMdHFmDbZP1CvIPQ_NYq0Fpht_svKGFRiykOgnpUZ5c/edit#gid=856605341"},"spreadsheet"),"):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'scripts/ds-for-gbloc "name of your transportation office"\n')),(0,r.kt)("p",null,"For example, if your Transportation Office is ",(0,r.kt)("inlineCode",{parentName:"p"},"Scott AFB"),", you would run this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'scripts/ds-for-gbloc "Scott AFB"\n')),(0,r.kt)("p",null,"This will list all the duty stations with the same GBLOC as ",(0,r.kt)("inlineCode",{parentName:"p"},"Scott AFB"),". As a service member, you can select any of the duty stations listed by the script as your origin duty station.  A move must have at least one non-PPM shipment (HHG Longhaul, HHG Shorthaul, NTS, or NTS Release) for the move to appear in the queue when you sign in as a TOO."),(0,r.kt)("h3",{id:"exception"},"Exception!"),(0,r.kt)("p",null,"There is a special case where the above won't work. If a service member chooses ",(0,r.kt)("inlineCode",{parentName:"p"},"Marine Corps"),' as their "Branch of service", then the TOO/TIO won\'t see the moves/payment requests unless their GBLOC is "USMC". Currently, the only transportation office with that GBLOC is ',(0,r.kt)("inlineCode",{parentName:"p"},"Camp LeJeune (USMC)"),". So, to test Marines moves, you will need to create a new office user with that specific transportation office. If you need to change an office user's transportation office after creating them, you can do so from the admin interface."),(0,r.kt)("h2",{id:"when-using-the-pre-populated-development-data"},"When using the pre-populated development data"),(0,r.kt)("p",null,"To skip the manual process of creating a new move and creating an office user, you can populate the development database with data using this command locally from the ",(0,r.kt)("inlineCode",{parentName:"p"},"mymove")," repo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"make db_dev_e2e_populate\n")),(0,r.kt)("p",null,"Once it's done, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"make server_run")),(0,r.kt)("li",{parentName:"ol"},"In a separate terminal tab or window, run ",(0,r.kt)("inlineCode",{parentName:"li"},"make office_client_run")),(0,r.kt)("li",{parentName:"ol"},"When the browser launches and the site appears (it can take a minute or so), click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Local Sign In")," in the top right"),(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Login")," button next to ",(0,r.kt)("inlineCode",{parentName:"li"},"too_tio_role@office.mil (PPM office)")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"too_tio_role_usmc@office.mil (PPM office)")," (for Marines moves)"),(0,r.kt)("li",{parentName:"ol"},"You should now see some moves"),(0,r.kt)("li",{parentName:"ol"},"To switch to the TIO role, click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Change user role")," in the top left, and click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Select transportation_invoicing_officer"),". You should now see some payment requests")),(0,r.kt)("h2",{id:"how-to-create-a-new-office-user-locally"},"How to create a new office user locally"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"make server_run")),(0,r.kt)("li",{parentName:"ol"},"In a separate terminal tab or window, run ",(0,r.kt)("inlineCode",{parentName:"li"},"make admin_client_run")),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Local Sign In")," in the top right"),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Login")," next to any admin user listed"),(0,r.kt)("li",{parentName:"ol"},"Click on Office users in the left sidebar if it's not already selected"),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"+ CREATE")," in the top right"),(0,r.kt)("li",{parentName:"ol"},"Fill out your details, making sure to use the same email as the one you used to create a login.gov account in the ",(0,r.kt)("a",{parentName:"li",href:"https://idp.int.identitysandbox.gov/sign_up/enter_email"},"sandbox server")),(0,r.kt)("li",{parentName:"ol"},"Select both the ",(0,r.kt)("inlineCode",{parentName:"li"},"Transportation Ordering Officer")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Transportation Invoicing Officer")," roles"),(0,r.kt)("li",{parentName:"ol"},"Select any Transportation office, or ",(0,r.kt)("inlineCode",{parentName:"li"},"Camp LeJeune (USMC)")," if you want to test moves where the service member's branch of service is ",(0,r.kt)("inlineCode",{parentName:"li"},"Marine Corps"),".")))}u.isMDXComponent=!0}}]);