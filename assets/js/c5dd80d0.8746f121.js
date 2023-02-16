"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[7086],{72784:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>r,frontMatter:()=>n,metadata:()=>m,toc:()=>s});var o=a(87462),i=(a(67294),a(3905));a(8209);const n={},l="How to Automatically add JIRA ID to Commit Message",m={unversionedId:"vault/confluence/automatically-add-jira-id-to-commit-message",id:"vault/confluence/automatically-add-jira-id-to-commit-message",title:"How to Automatically add JIRA ID to Commit Message",description:"Context",source:"@site/docs/vault/confluence/automatically-add-jira-id-to-commit-message.md",sourceDirName:"vault/confluence",slug:"/vault/confluence/automatically-add-jira-id-to-commit-message",permalink:"/mymove-docs/docs/vault/confluence/automatically-add-jira-id-to-commit-message",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/vault/confluence/automatically-add-jira-id-to-commit-message.md",tags:[],version:"current",frontMatter:{},sidebar:"vaultSidebar",previous:{title:"Documentation Vault",permalink:"/mymove-docs/docs/vault/"},next:{title:"Pairing Sessions",permalink:"/mymove-docs/docs/vault/confluence/pairing"}},c={},s=[{value:"Context",id:"context",level:2},{value:"Branch Format",id:"branch-format",level:2},{value:"Enable",id:"enable",level:2},{value:"Disable",id:"disable",level:2}],d={toc:s};function r(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,o.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-automatically-add-jira-id-to-commit-message"},"How to Automatically add JIRA ID to Commit Message"),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"Jira is integrated with GitHub. As we create commits we put the ticket id in them and Jira will automatically detect that and associate the commits and branch with that ticket. This how to will show you how to enable a commit message hook to automatically strip the Jira id from your branch name and insert it at the  beginning of the commit message. If your branch doesn't match the pattern then nothing will be changed."),(0,i.kt)("h2",{id:"branch-format"},"Branch Format"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"initials_MB-123_branch_name_description")),(0,i.kt)("h2",{id:"enable"},"Enable"),(0,i.kt)("p",null,"To enable the automatic addition simply run the following command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"ln -s ~/projects/dod/mymove/scripts/commit-msg .git/hooks/commit-msg\n")),(0,i.kt)("h2",{id:"disable"},"Disable"),(0,i.kt)("p",null,"To disable the automatic addition temporarily use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--no-verify")," flag. To disable it permanently run the following command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"rm .git/hooks/commit-msg\n")))}r.isMDXComponent=!0}}]);