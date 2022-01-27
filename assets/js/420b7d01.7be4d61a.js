"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[8682],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},12015:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={sidebar_position:9},l="Adding or Editing Load Tests",d={unversionedId:"tools/locust/adding-or-editing-load-tests",id:"tools/locust/adding-or-editing-load-tests",isDocsHomePage:!1,title:"Adding or Editing Load Tests",description:"If you want to add or edit a load test, here are the general steps (more detailed information can be found",source:"@site/docs/tools/locust/adding-or-editing-load-tests.md",sourceDirName:"tools/locust",slug:"/tools/locust/adding-or-editing-load-tests",permalink:"/mymove-docs/docs/tools/locust/adding-or-editing-load-tests",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/tools/locust/adding-or-editing-load-tests.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"toolsSidebar",previous:{title:"TaskSet",permalink:"/mymove-docs/docs/tools/locust/taskset"},next:{title:"Fake Data Generation",permalink:"/mymove-docs/docs/tools/locust/fake-data-generation"}},c=[],u={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adding-or-editing-load-tests"},"Adding or Editing Load Tests"),(0,a.kt)("p",null,"If you want to add or edit a load test, here are the general steps (more detailed information can be found\nin the rest of the documentation):"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Start by finding (or creating) the corresponding ",(0,a.kt)("inlineCode",{parentName:"li"},"User")," class (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"PrimeUser"),").",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"See ",(0,a.kt)("a",{parentName:"li",href:"./locustfile"},"Locustfile")," for more info on working with ",(0,a.kt)("inlineCode",{parentName:"li"},"locustfiles")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Users"),"."))),(0,a.kt)("li",{parentName:"ol"},"Find (or create) the ",(0,a.kt)("inlineCode",{parentName:"li"},"TaskSet")," that defines the tasks (load tests) the user will perform.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"We have ",(0,a.kt)("inlineCode",{parentName:"li"},"TaskSets")," for all of our users, so you may be able to add your new load test to an\nexisting class, but one thing to keep in mind is that some ",(0,a.kt)("inlineCode",{parentName:"li"},"TaskSets")," are shared across users."),(0,a.kt)("li",{parentName:"ol"},"If the ",(0,a.kt)("inlineCode",{parentName:"li"},"TaskSet")," is used by multiple ",(0,a.kt)("inlineCode",{parentName:"li"},"User")," classes, see if it makes sense for your load test\nto be run by all the users that use the existing ",(0,a.kt)("inlineCode",{parentName:"li"},"TaskSet")," or if you should create a new\n",(0,a.kt)("inlineCode",{parentName:"li"},"TaskSet")," and add it to the user's ",(0,a.kt)("inlineCode",{parentName:"li"},"tasks")," attribute."),(0,a.kt)("li",{parentName:"ol"},"See ",(0,a.kt)("a",{parentName:"li",href:"./taskset"},"TaskSet")," for more info on working with ",(0,a.kt)("inlineCode",{parentName:"li"},"TaskSets"),"."))),(0,a.kt)("li",{parentName:"ol"},"Add a task (a function/method decorated with the ",(0,a.kt)("inlineCode",{parentName:"li"},"@task")," decorator) to the ",(0,a.kt)("inlineCode",{parentName:"li"},"TaskSet"),".",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"You should also decorate it with any tags you think are relevant to this task."))),(0,a.kt)("li",{parentName:"ol"},"Run the load test and check that your task is working properly.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"If it is, you're good to go!"),(0,a.kt)("li",{parentName:"ol"},"See ",(0,a.kt)("a",{parentName:"li",href:"./running-load-tests"},"Running Load Tests")," for more info on how to run load tests.")))))}p.isMDXComponent=!0}}]);