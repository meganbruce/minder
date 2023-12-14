"use strict";(self.webpackChunkstacklok=self.webpackChunkstacklok||[]).push([[5666],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||i;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},64035:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"Setting up a profile for alerts",sidebar_position:70},l="Setting up a Profile for Alerts",o={unversionedId:"how-to/setup-alerts",id:"how-to/setup-alerts",title:"Setting up a profile for alerts",description:"Prerequisites",source:"@site/docs/how-to/setup-alerts.md",sourceDirName:"how-to",slug:"/how-to/setup-alerts",permalink:"/how-to/setup-alerts",draft:!1,tags:[],version:"current",sidebarPosition:70,frontMatter:{title:"Setting up a profile for alerts",sidebar_position:70},sidebar:"minder",previous:{title:"Auto-remediation via pull request",permalink:"/how-to/remediate-pullrequest"},next:{title:"Run the Server",permalink:"/run_minder_server/run_the_server"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a rule type that you want to be alerted on",id:"create-a-rule-type-that-you-want-to-be-alerted-on",level:2},{value:"Create a profile",id:"create-a-profile",level:2},{value:"Limitations",id:"limitations",level:2}],u={toc:s},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-a-profile-for-alerts"},"Setting up a Profile for Alerts"),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"minder")," CLI application"),(0,a.kt)("li",{parentName:"ul"},"A Minder account"),(0,a.kt)("li",{parentName:"ul"},"An enrolled Provider (e.g., GitHub) and registered repositories")),(0,a.kt)("h2",{id:"create-a-rule-type-that-you-want-to-be-alerted-on"},"Create a rule type that you want to be alerted on"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"alert")," feature is available for all rule types that have the ",(0,a.kt)("inlineCode",{parentName:"p"},"alert")," section defined in their ",(0,a.kt)("inlineCode",{parentName:"p"},"<alert-type>.yaml"),"\nfile. Alerts are a core feature of Minder providing you with notifications about the status of your registered\nrepositories. These alerts automatically open and close based on the evaluation of the rules defined in your profiles."),(0,a.kt)("p",null,"When a rule fails, Minder opens an alert to bring your attention to the non-compliance issue. Conversely, when the\nrule evaluation passes, Minder will automatically close any previously opened alerts related to that rule."),(0,a.kt)("p",null,"At the time of writing, Minder supports alerts of type GitHub Security Advisory."),(0,a.kt)("p",null,"In this example, we will use a rule type that checks if a repository has a LICENSE file present. If there's no file\npresent, Minder will create an alert notifying the owner of the repository. The rule type is called ",(0,a.kt)("inlineCode",{parentName:"p"},"license.yaml")," and\nis one of the reference rule types provided by the Minder team. Details, such as the severity of the alert are defined\nin the ",(0,a.kt)("inlineCode",{parentName:"p"},"alert")," section of the rule type definition."),(0,a.kt)("p",null,"Fetch all the reference rules by cloning the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stacklok/minder-rules-and-profiles"},"minder-rules-and-profiles repository"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/stacklok/minder-rules-and-profiles.git\n")),(0,a.kt)("p",null,"In that directory, you can find all the reference rules and profiles."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd minder-rules-and-profiles\n")),(0,a.kt)("p",null,"Create the ",(0,a.kt)("inlineCode",{parentName:"p"},"license")," rule type in Minder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"minder rule_type create -f rule-types/github/license.yaml\n")),(0,a.kt)("h2",{id:"create-a-profile"},"Create a profile"),(0,a.kt)("p",null,"Next, create a profile that applies the rule to all registered repositories."),(0,a.kt)("p",null,"Create a new file called ",(0,a.kt)("inlineCode",{parentName:"p"},"profile.yaml")," using the following profile definition and enable alerting by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"alert"),"\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"on")," (default). The other available values are ",(0,a.kt)("inlineCode",{parentName:"p"},"off")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"dry_run"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nversion: v1\ntype: profile\nname: license-profile\ncontext:\n  provider: github\nalert: "on"\nrepository:\n  - type: license\n    def:\n      license_filename: LICENSE\n      license_type: ""\n')),(0,a.kt)("p",null,"Create the profile in Minder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"minder profile create -f profile.yaml\n")),(0,a.kt)("p",null,"Once the profile is created, Minder will monitor all of your registered repositories for the presence of the ",(0,a.kt)("inlineCode",{parentName:"p"},"LICENSE"),"\nfile."),(0,a.kt)("p",null,"If a repository does not have a ",(0,a.kt)("inlineCode",{parentName:"p"},"LICENSE")," file available, Minder will create an alert of type Security Advisory providing\nadditional details such as the profile and rule that triggered the alert and guidelines on how to resolve the issue."),(0,a.kt)("p",null,"Once a ",(0,a.kt)("inlineCode",{parentName:"p"},"LICENSE")," file is added to the repository, Minder will automatically close the alert."),(0,a.kt)("p",null,"Alerts are complementary to the remediation feature. If you have both ",(0,a.kt)("inlineCode",{parentName:"p"},"alert")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"remediation")," enabled for a profile,\nMinder will attempt to remediate it first. If the remediation fails, Minder will create an alert. If the remediation\nsucceeds, Minder will close any previously opened alerts related to that rule."),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Currently, the only supported alert type is GitHub Security Advisory. More alert types will be added in the future."),(0,a.kt)("li",{parentName:"ul"},"Alerts are only available for rules that have the ",(0,a.kt)("inlineCode",{parentName:"li"},"alert")," section defined in their ",(0,a.kt)("inlineCode",{parentName:"li"},"<alert-type>.yaml")," file.")))}c.isMDXComponent=!0}}]);