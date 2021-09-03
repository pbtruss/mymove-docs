"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2434],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=a,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||o;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2215:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={},s=void 0,u={unversionedId:"old-wiki/Switching-Over-to-Nix",id:"old-wiki/Switching-Over-to-Nix",isDocsHomePage:!1,title:"Switching-Over-to-Nix",description:"As a developer on the milmove project, I would like to not have to maintain to separate sets of local environment setups (our original setup instructions and nix). So to that end, this is to investigate what it would take to fully switch over to nix.",source:"@site/docs/old-wiki/Switching-Over-to-Nix.md",sourceDirName:"old-wiki",slug:"/old-wiki/Switching-Over-to-Nix",permalink:"/mymove-docs/docs/old-wiki/Switching-Over-to-Nix",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/old-wiki/Switching-Over-to-Nix.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setting-up-Internet-Explorer-11---Edge-Browser-in-Virtualbox",permalink:"/mymove-docs/docs/old-wiki/Setting-up-Internet-Explorer-11---Edge-Browser-in-Virtualbox"},next:{title:"Test-Data-Generation",permalink:"/mymove-docs/docs/old-wiki/Test-Data-Generation"}},p=[{value:"OS Considerations",id:"os-considerations",children:[]},{value:"Pros",id:"pros",children:[]},{value:"Cons",id:"cons",children:[]},{value:"What Would It Take To Switch Over",id:"what-would-it-take-to-switch-over",children:[]}],c={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As a developer on the milmove project, I would like to not have to maintain to separate sets of local environment setups (our original setup instructions and nix). So to that end, this is to investigate what it would take to fully switch over to nix."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dp3.atlassian.net/browse/MB-8725"},"Relevant JIRA ticket")),(0,o.kt)("h2",{id:"os-considerations"},"OS Considerations"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"nix")," is only available for MacOS and Linux."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"MacOS",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"We already only really have instructions and helpful info for setting this project up on MacOS."))),(0,o.kt)("li",{parentName:"ul"},"Linux",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Our instructions might work for linux, but they may or may not need a few tweaks for this."))),(0,o.kt)("li",{parentName:"ul"},"Windows",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"We do not have any instructions for getting this working in Windows as is. Just the fact that our main interface for working on the project is ",(0,o.kt)("inlineCode",{parentName:"li"},"make")," makes it so that we don't immediately support Windows. It ",(0,o.kt)("em",{parentName:"li"},"can")," be installed on Windows, but it can be a pain to do so, and we don't point to helpful docs for how to do this. ")))),(0,o.kt)("p",null,"With the above in mind, switching from our current flow to ",(0,o.kt)("inlineCode",{parentName:"p"},"nix")," would not really change our OS support."),(0,o.kt)("h2",{id:"pros"},"Pros"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Having a single way of setting up locally means fewer things we have to keep up to date.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"We have several scripts that check versions of software that we could stop maintaining since nix declares the versions we want and installs them."),(0,o.kt)("li",{parentName:"ul"},"We have some makefile commands that exist just to run these scripts that check versions so we can get rid of those."))),(0,o.kt)("li",{parentName:"ul"},"We also have several tools that we don't have version checks for in the repo so it's easy for people to have different versions of things. That will still be possible in the ",(0,o.kt)("inlineCode",{parentName:"li"},"nix")," setup because there's a few packages needed before you can even use the ",(0,o.kt)("inlineCode",{parentName:"li"},"nix")," setup we have like ",(0,o.kt)("inlineCode",{parentName:"li"},"direnv"),", but at least the number will be much smaller, and we could also have that in version control possibly and just handle it slightly differently (e.g. have people use that file to install the first dependencies like ",(0,o.kt)("inlineCode",{parentName:"li"},"direnv")," globally, then have them use the existing ",(0,o.kt)("inlineCode",{parentName:"li"},"nix")," setup."),(0,o.kt)("li",{parentName:"ul"},"We could use something like ",(0,o.kt)("inlineCode",{parentName:"li"},"niv")," to keep our packages up to date:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nixos.org/guides/towards-reproducibility-pinning-nixpkgs.html"},"NixPkgs - Towards Reproducibility")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nmattia/niv/"},"Niv - GitHub Repo")))),(0,o.kt)("li",{parentName:"ul"},"Set up is quicker with ",(0,o.kt)("inlineCode",{parentName:"li"},"nix")," than our current process.")),(0,o.kt)("h2",{id:"cons"},"Cons"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nix is something that is new to most people on the project vs ",(0,o.kt)("inlineCode",{parentName:"li"},"homebrew")," which is more ubiquitous, at least among Mac devs."),(0,o.kt)("li",{parentName:"ul"},"Installation is via a ",(0,o.kt)("inlineCode",{parentName:"li"},"curl"),"ing a shell script.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"It's something we've talked about being a limitation for full adoption and that we should consider contributing to ",(0,o.kt)("inlineCode",{parentName:"li"},"nix")," by making it possible to install via ",(0,o.kt)("inlineCode",{parentName:"li"},"homebrew")," or some other method."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://trussworks.slack.com/archives/C01KTH6HP7D/p1611793387004800"},"Slack thread with more info"),"."))),(0,o.kt)("li",{parentName:"ul"},"Packages in ",(0,o.kt)("inlineCode",{parentName:"li"},"nix")," can lag behind their counterparts in ",(0,o.kt)("inlineCode",{parentName:"li"},"homebrew"),". This means that if we do switch, we either have to be ok with being behind, or we need to be willing to make contributions to ",(0,o.kt)("inlineCode",{parentName:"li"},"nix")," to update the packages we care about."),(0,o.kt)("li",{parentName:"ul"},"Finding the hashes for any given package version can be a pain.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"We have a ",(0,o.kt)("a",{parentName:"li",href:"https://ahobson.github.io/nix-package-search/#/search"},"package search setup by Truss")," that can help with this, but ideally we could do it easier.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You can also use it on your command line like so:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sSfL https://ahobson.github.io/nix-package-search/nix/nixpkgs-unstable/all_packages.csv | grep 'awscli2'\n"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"niv")," is another way we could mitigate this issue.")))),(0,o.kt)("h2",{id:"what-would-it-take-to-switch-over"},"What Would It Take To Switch Over"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We have a lot of hard-coded paths for packages.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"E.g. the path to ",(0,o.kt)("inlineCode",{parentName:"li"},"pre-commit")," in our ",(0,o.kt)("inlineCode",{parentName:"li"},"Makefile"),", or the path to ",(0,o.kt)("inlineCode",{parentName:"li"},"opensc")," in the CAC scripts."),(0,o.kt)("li",{parentName:"ul"},"These are hard-coded for where ",(0,o.kt)("inlineCode",{parentName:"li"},"homebrew")," installs things, so we would need to update them to look in a few more places, or preferably, update them to use built in commands like ",(0,o.kt)("inlineCode",{parentName:"li"},"type")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"command")," to find their paths.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/a/85250"},"Stack Exchange: Finding the Path of an Executable")))))),(0,o.kt)("li",{parentName:"ul"},"We need to decide if we are ok with the way it's installed now, or if we want to go through the effort of contributing another installation method."),(0,o.kt)("li",{parentName:"ul"},"We would need an ADR stating our intention to switch and reasoning behind the switch (this document could easily feed that one)."),(0,o.kt)("li",{parentName:"ul"},"Need to decide if we would make it more of a gradual switch or have a switchover date (or more likely week). ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A gradual switch could work well in that as people come across issues with their current install, we could point them at the instructions for switching over to ",(0,o.kt)("inlineCode",{parentName:"li"},"nix"),", which should hopefully let them be on their way in under an hour.")))))}h.isMDXComponent=!0}}]);