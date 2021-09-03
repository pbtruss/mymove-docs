"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[392],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return n?i.createElement(f,r(r({ref:t},p),{},{components:n})):i.createElement(f,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=c;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,r[1]=a;for(var u=2;u<s;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4050:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var i=n(7462),o=n(3366),s=(n(7294),n(3905)),r=["components"],a={},l=void 0,u={unversionedId:"old-wiki/Session-Management",id:"old-wiki/Session-Management",isDocsHomePage:!1,title:"Session-Management",description:"Background",source:"@site/docs/old-wiki/Session-Management.md",sourceDirName:"old-wiki",slug:"/old-wiki/Session-Management",permalink:"/mymove-docs/docs/old-wiki/Session-Management",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/old-wiki/Session-Management.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SchemaSpy",permalink:"/mymove-docs/docs/old-wiki/SchemaSpy"},next:{title:"Setting-Up-Postman",permalink:"/mymove-docs/docs/old-wiki/Setting-Up-Postman"}},p=[{value:"Background",id:"background",children:[]},{value:"Local setup",id:"local-setup",children:[]},{value:"Customization",id:"customization",children:[{value:"Idle timeout",id:"idle-timeout",children:[]},{value:"Session Lifetime",id:"session-lifetime",children:[]},{value:"Session Cookie attributes",id:"session-cookie-attributes",children:[]}]},{value:"Redis",id:"redis",children:[]}],d={toc:p};function c(e){var t=e.components,n=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"background"},"Background"),(0,s.kt)("p",null,"MilMove uses server-side session management because our ATO (Authority to Operate) requires that we be able to revoke individual sessions. This is not possible with JWTs (our previous session implementation) or cookies. We chose Redis because it can automatically delete expired sessions. With Postgres, we would need to run a routine\nperiodically to clean up stale sessions."),(0,s.kt)("p",null,"After researching various session management solutions, we chose\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/alexedwards/scs"},"scs")," because it was the easiest to integrate, and it supports various\nstores out of the box. It is the second most popular repo after\n",(0,s.kt)("inlineCode",{parentName:"p"},"gorilla/sessions"),". We didn't pick ",(0,s.kt)("inlineCode",{parentName:"p"},"gorilla/sessions")," because it suffers\nfrom memory leak issues, and uses its own ",(0,s.kt)("inlineCode",{parentName:"p"},"context")," instead of the\n",(0,s.kt)("inlineCode",{parentName:"p"},"request.Context()")," provided by Golang. The maintainers are aware of\nthe issues and have opened a GitHub issue to propose ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/gorilla/sessions/issues/105"},"improvements for\nv2"),". However, it doesn't look like any progress has been made over the\npast 2 years, while ",(0,s.kt)("inlineCode",{parentName:"p"},"scs")," has implemented most of those improvements."),(0,s.kt)("h2",{id:"local-setup"},"Local setup"),(0,s.kt)("p",null,"Run ",(0,s.kt)("inlineCode",{parentName:"p"},"make deps")," to make sure your local setup is up to date and to pull the Redis image. That should be all you need to be able to sign in and out of the various apps."),(0,s.kt)("h2",{id:"customization"},"Customization"),(0,s.kt)("p",null,"There are various ENV vars you can set in your ",(0,s.kt)("inlineCode",{parentName:"p"},".envrc.local")," to customize your sessions."),(0,s.kt)("h3",{id:"idle-timeout"},"Idle timeout"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"SESSION_IDLE_TIMEOUT_IN_MINUTES")," defines how long you can be idle while signed in before your session expires. The default is 15 minutes and is defined in ",(0,s.kt)("inlineCode",{parentName:"p"},"pkg/cli/session.go"),". To test a value less than 15 minutes or greater than 30 minutes, comment out the following lines in ",(0,s.kt)("inlineCode",{parentName:"p"},"pkg/cli/session.go"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"if err := ValidateSessionTimeout(v, SessionIdleTimeoutInMinutesFlag); err != nil {\n    return err\n}\n")),(0,s.kt)("p",null,"To disable idle timeout, set it to ",(0,s.kt)("inlineCode",{parentName:"p"},"0"),".\nExample usage:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"export SESSION_IDLE_TIMEOUT_IN_MINUTES=2\n")),(0,s.kt)("h3",{id:"session-lifetime"},"Session Lifetime"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"SESSION_LIFETIME_IN_HOURS")," defines the absolute duration of the session. For example, once you sign in, even if you make requests continually, your session will expire after the lifetime has been reached. The default is 24 hours and is defined in ",(0,s.kt)("inlineCode",{parentName:"p"},"pkg/cli/session.go"),".\nExample usage:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"export SESSION_LIFETIME_IN_HOURS=12\n")),(0,s.kt)("h3",{id:"session-cookie-attributes"},"Session Cookie attributes"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"scs")," allows us to customize various attributes of the session cookie. We should rarely need to modify those, but if we need to, they are configured in ",(0,s.kt)("inlineCode",{parentName:"p"},"SetupSessionManagers")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"pkg/auth/session.go"),"."),(0,s.kt)("h2",{id:"redis"},"Redis"),(0,s.kt)("p",null,"You shouldn't need to change any of the Redis config, but if you're curious, it's defined in ",(0,s.kt)("inlineCode",{parentName:"p"},"pkg/cli/redis.go"),"\nTo access the Redis console, run ",(0,s.kt)("inlineCode",{parentName:"p"},"redis-dev"),". You can then view all keys with ",(0,s.kt)("inlineCode",{parentName:"p"},"KEYS *"),". The session keys will have the prefix ",(0,s.kt)("inlineCode",{parentName:"p"},"scs:session"),"."))}c.isMDXComponent=!0}}]);