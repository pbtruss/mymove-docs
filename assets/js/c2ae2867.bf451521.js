"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[6657],{9628:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=t(87462),i=(t(67294),t(3905));t(95657);const o={title:"0028 Config Management",description:"Decision outcome: Viper & pflag\n"},l="Config Management",r={unversionedId:"adrs/config-management",id:"adrs/config-management",title:"0028 Config Management",description:"Decision outcome: Viper & pflag\n",source:"@site/docs/adrs/0028-config-management.md",sourceDirName:"adrs",slug:"/adrs/config-management",permalink:"/mymove-docs/docs/adrs/config-management",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0028-config-management.md",tags:[],version:"current",sidebarPosition:28,frontMatter:{title:"0028 Config Management",description:"Decision outcome: Viper & pflag\n"},sidebar:"adrsSidebar",previous:{title:"0027 PDF Generation",permalink:"/mymove-docs/docs/adrs/pdf-generation"},next:{title:"0029 Honeycomb Integration",permalink:"/mymove-docs/docs/adrs/honeycomb-integration"}},s={},p=[{value:"Context and Problem Statement",id:"context-and-problem-statement",level:2},{value:"Decision Drivers",id:"decision-drivers",level:2},{value:"Considered Options",id:"considered-options",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Options",id:"pros-and-cons-of-the-options",level:2},{value:"Built-in flag package",id:"built-in-flag-package",level:3},{value:"Viper &amp; pflag",id:"viper--pflag",level:3},{value:"Examples",id:"examples",level:4},{value:"https://github.com/namsral/flag",id:"httpsgithubcomnamsralflag",level:3},{value:"https://github.com/jessevdk/go-flags",id:"httpsgithubcomjessevdkgo-flags",level:3}],m={toc:p};function u(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"config-management"},"Config Management"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Status: accepted"),(0,i.kt)("li",{parentName:"ul"},"Deciders: @dynamike, @pjdufour-truss"),(0,i.kt)("li",{parentName:"ul"},"Date: 2018-09-21")),(0,i.kt)("h2",{id:"context-and-problem-statement"},"Context and Problem Statement"),(0,i.kt)("p",null,"Our webserver (",(0,i.kt)("inlineCode",{parentName:"p"},"https://github.com/transcom/mymove/cmd/webserver"),") currently supports config variables defined as flags or environment variables (via ",(0,i.kt)("inlineCode",{parentName:"p"},"https://github.com/namsral/flag"),"), but our use of config throughout the application is not managed in a cohesive way.  While the use of ",(0,i.kt)("a",{parentName:"p",href:"https://direnv.net/"},"direnv")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".envrc")," provides some basic external validation of the environment variables, we have a need to bring config parsing and validation logic into the application itself.  Beyond whether a config variable is set or not, we need to validate the values of these variables.  For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"is a port in the range from ",(0,i.kt)("inlineCode",{parentName:"li"},"8000 - 8999"),","),(0,i.kt)("li",{parentName:"ul"},"is the hostname valid,"),(0,i.kt)("li",{parentName:"ul"},"is the certificate valid,"),(0,i.kt)("li",{parentName:"ul"},"is the storage backend ",(0,i.kt)("inlineCode",{parentName:"li"},"filesystem")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"s3"),","),(0,i.kt)("li",{parentName:"ul"},"does s3 bucket name point to an existing bucket, and"),(0,i.kt)("li",{parentName:"ul"},"more.")),(0,i.kt)("p",null,"The use of a more robust config framework with standard patterns will enable the seamless integration of new options and application contexts as we add new features to ",(0,i.kt)("inlineCode",{parentName:"p"},"mymove"),".  Better management of config will enable the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"turn features on and off,"),(0,i.kt)("li",{parentName:"ul"},"debug startup errors,"),(0,i.kt)("li",{parentName:"ul"},"local docker server,"),(0,i.kt)("li",{parentName:"ul"},"per-branch test environments, and"),(0,i.kt)("li",{parentName:"ul"},"more.")),(0,i.kt)("h2",{id:"decision-drivers"},"Decision Drivers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Maintained (new commits less than 6 months ago)"),(0,i.kt)("li",{parentName:"ul"},"Support environment variables, and command line flags."),(0,i.kt)("li",{parentName:"ul"},"Supports integer, duration, and time variables."),(0,i.kt)("li",{parentName:"ul"},"Supports complex config or JSON, e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"map[string]string"),"."),(0,i.kt)("li",{parentName:"ul"},"Mark variables as required and implement sanity checks")),(0,i.kt)("h2",{id:"considered-options"},"Considered Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Built-in flag package"),(0,i.kt)("li",{parentName:"ul"},"Viper & pflag"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/namsral/flag"},"https://github.com/namsral/flag")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jessevdk/go-flags"},"https://github.com/jessevdk/go-flags"))),(0,i.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,i.kt)("p",null,'Chosen option: "Viper & pflag".  This option has the most community support and will give us continued flexibility as the code base grows over time.'),(0,i.kt)("h2",{id:"pros-and-cons-of-the-options"},"Pros and Cons of the Options"),(0,i.kt)("h3",{id:"built-in-flag-package"},"Built-in flag package"),(0,i.kt)("p",null,"Go ships with a built-in ",(0,i.kt)("a",{parentName:"p",href:"https://godoc.org/flag"},"flag")," package that provides support for command line flags."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Good, no additional dependencies."),(0,i.kt)("li",{parentName:"ul"},"Good, maintained but shouldn't receive any improvements either."),(0,i.kt)("li",{parentName:"ul"},"Good, supports bool, (u)int, (u)int64, (u)float64, time.Duration, and string."),(0,i.kt)("li",{parentName:"ul"},"Bad, no support for JSON variables or complex config, e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"map[string]string"),"."),(0,i.kt)("li",{parentName:"ul"},"Bad, cannot mark variables as required (only provide defaults)"),(0,i.kt)("li",{parentName:"ul"},"Bad, invalid flag values cause panic (making custom sanity checks impossible)")),(0,i.kt)("h3",{id:"viper--pflag"},"Viper & pflag"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/spf13/viper"},"Viper")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spf13/pflag"},"pflag")," are 2 packages that are used together to enable 12-factor applications in Go.  VIPER is used by some of the most widely used Go programs, including ",(0,i.kt)("inlineCode",{parentName:"p"},"Hugo"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"go-swagger"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"jfrog-cli-go"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Good, viper and pflag each have over 50 contributors and are actively maintained."),(0,i.kt)("li",{parentName:"ul"},'Good, viper and pflag are "owned" by a ',(0,i.kt)("a",{parentName:"li",href:"https://github.com/spf13/"},"Steve Francia"),", a Google employee and the creator of Hugo."),(0,i.kt)("li",{parentName:"ul"},"Good, supports aliases to enable non-breaking improvements."),(0,i.kt)("li",{parentName:"ul"},"Good, supports bool, int, int64, float64, duration, string, map","[string]","string, []string, map","[string][]","string, and time.Time."),(0,i.kt)("li",{parentName:"ul"},"Bad, no support for JSON variables."),(0,i.kt)("li",{parentName:"ul"},"Good, can unmarshal flag values into structs."),(0,i.kt)("li",{parentName:"ul"},"Bad, cannot mark flag as required  (but can do defaults)."),(0,i.kt)("li",{parentName:"ul"},"Good, doesn't panic on bad values and can retrieve errors from pflag if needed."),(0,i.kt)("li",{parentName:"ul"},"Good, supports json, toml, yaml, properties, and hcl config file formats.")),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Bind to config defined through command line flags (via ",(0,i.kt)("inlineCode",{parentName:"p"},"pflag"),") and environment variables."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'\nflag := pflag.CommandLine\n\nv := viper.New()\n\nv.BindPFlags(flag) // bind to command line flags\n\n// viper by default binds to upper case and\n// supports a custom environment key replacer,\n// but let\'s just use a typical one that replaces - with _\nv.SetEnvKeyReplacer(strings.NewReplacer("-", "_"))\n// AutomaticEnv turns on binding for all environment variables\nv.AutomaticEnv()\n')),(0,i.kt)("p",null,"Custom validation of config variable and error handling during program startup."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'type InvalidConfigPort struct {\n  Name  string\n  Value interface{}\n  Start int\n  End   int\n}\n\nfunc (c *InvalidConfigPort) Error() string {\n  return "config variable " + c.Name + " has invalid value " + fmt.Sprintf("%#v", c.Value) + ", must be in range " + strconv.Itoa(c.Start) + " - " + strconv.Itoa(c.End)\n}\n\n...\nfunc main() {\n  ...\n  if v.IsSet("http-port-tls-none") {\n    if value := v.GetInt("http-port-tls-none"); value < 8000 || value > 8999 {\n      return &InvalidConfigPort{Name: "http-port-tls-none", Value: value, Start: 8000, End: 8999}\n    }\n  }\n  ...\n}\n')),(0,i.kt)("h3",{id:"httpsgithubcomnamsralflag"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/namsral/flag"},"https://github.com/namsral/flag")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/namsral/flag"},"flag")," is a drop-in replacement for Go's flag package that adds support for environment variables.  Currently used by our webserver (",(0,i.kt)("inlineCode",{parentName:"p"},"https://github.com/transcom/mymove/cmd/webserver"),")."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bad, not maintained (the last code update was December 28, 2016)."),(0,i.kt)("li",{parentName:"ul"},"Good, supports bool, (u)int, (u)int64, (u)float64, time.Duration, and string (drop in replacement for built-in flag package)"),(0,i.kt)("li",{parentName:"ul"},"Bad, no support for JSON variables."),(0,i.kt)("li",{parentName:"ul"},"Good, supports environment variables."),(0,i.kt)("li",{parentName:"ul"},"Bad, only supports ",(0,i.kt)("inlineCode",{parentName:"li"},"name=value")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"name value")," config file formats"),(0,i.kt)("li",{parentName:"ul"},"Bad, cannot mark variables as required."),(0,i.kt)("li",{parentName:"ul"},"Bad, invalid values cause panic (making custom sanity checks impossible)")),(0,i.kt)("h3",{id:"httpsgithubcomjessevdkgo-flags"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/jessevdk/go-flags"},"https://github.com/jessevdk/go-flags")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/jessevdk/go-flags"},"go-flags")," enhances the functionality of the builtin ",(0,i.kt)("inlineCode",{parentName:"p"},"flag")," package with support for many useful features.  You define your config as a single struct using fields and ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/golangspec/tags-in-golang-3e5db0b8ef3e"},"struct tags"),".  Currently used by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/trussworks/truss-aws-tools"},"truss-aws-tools"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Borderline, last updated on March 31, 2018."),(0,i.kt)("li",{parentName:"ul"},"Good, supports a variety of integer, float, string, and maps, including ",(0,i.kt)("inlineCode",{parentName:"li"},"[]*string{}")),(0,i.kt)("li",{parentName:"ul"},"Bad, no support for JSON variables."),(0,i.kt)("li",{parentName:"ul"},"Good, supports environment variables"),(0,i.kt)("li",{parentName:"ul"},"Bad, must unmarshal values into a single config struct.  Creates some baseline structure and increases readability, but reduces flexibility for responsively handling multiple contexts."),(0,i.kt)("li",{parentName:"ul"},"Good, can mark variables as required"),(0,i.kt)("li",{parentName:"ul"},"Bad, hard to make custom sanity checks, since the config is parsed into a struct all at once.")))}u.isMDXComponent=!0}}]);