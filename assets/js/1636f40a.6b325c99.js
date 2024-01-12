"use strict";(self.webpackChunkstacklok=self.webpackChunkstacklok||[]).push([[6049],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,y=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return n?i.createElement(y,a(a({ref:t},p),{},{components:n})):i.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,a[1]=o;for(var u=2;u<l;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},24681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const l={title:"Known Vulnerabilities",sidebar_position:60},a="Known Vulnerabilities Rule",o={unversionedId:"ref/rules/vulnerabilities",id:"ref/rules/vulnerabilities",title:"Known Vulnerabilities",description:"The following rule type is available for known vulnerabilities.",source:"@site/docs/ref/rules/vulnerabilities.md",sourceDirName:"ref/rules",slug:"/ref/rules/vulnerabilities",permalink:"/ref/rules/vulnerabilities",draft:!1,tags:[],version:"current",sidebarPosition:60,frontMatter:{title:"Known Vulnerabilities",sidebar_position:60},sidebar:"minder",previous:{title:"Secret Scanning",permalink:"/ref/rules/secrets"},next:{title:"GitHub Actions",permalink:"/ref/rules/github_actions"}},s={},u=[{value:"<code>pr_vulnerability_check</code> - Verifies that pull requests do not add dependencies with known vulnerabilities",id:"pr_vulnerability_check---verifies-that-pull-requests-do-not-add-dependencies-with-known-vulnerabilities",level:2},{value:"Entity",id:"entity",level:3},{value:"Type",id:"type",level:3},{value:"Rule Parameters",id:"rule-parameters",level:3},{value:"Rule Definition Options",id:"rule-definition-options",level:3},{value:"Examples",id:"examples",level:3}],p={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"known-vulnerabilities-rule"},"Known Vulnerabilities Rule"),(0,r.kt)("p",null,"The following rule type is available for known vulnerabilities."),(0,r.kt)("h2",{id:"pr_vulnerability_check---verifies-that-pull-requests-do-not-add-dependencies-with-known-vulnerabilities"},(0,r.kt)("inlineCode",{parentName:"h2"},"pr_vulnerability_check")," - Verifies that pull requests do not add dependencies with known vulnerabilities"),(0,r.kt)("p",null,"For every pull request submitted to a repository, this rule will check if the pull request\nadds a new dependency with known vulnerabilities based on the ",(0,r.kt)("a",{parentName:"p",href:"https://osv.dev/"},"OSV database"),". If it does, the rule will fail and the\npull request will be rejected or commented on."),(0,r.kt)("h3",{id:"entity"},"Entity"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pull_request"))),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pr_vulnerability_check"))),(0,r.kt)("h3",{id:"rule-parameters"},"Rule Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None")),(0,r.kt)("h3",{id:"rule-definition-options"},"Rule Definition Options"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pr_vulnerability_check")," rule has the following options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"action")," (string): The action to take if a vulnerability is found. Valid values are:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"review"),": Minder will review the PR, suggest changes and mark the PR as changes requested if a vulnerability is found"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"commit_status"),": Minder will comment and suggest changes on the PR if a vulnerability is found. Additionally, Minder\nwill set the commit_status of the PR ",(0,r.kt)("inlineCode",{parentName:"li"},"HEAD")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"failed")," to prevent the commit from being merged"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"comment"),": Minder will comment and suggest changes on the PR if a vulnerability is found, but not request changes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"summary"),": The evaluator engine will add a single summary comment with a table listing the vulnerabilities found"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"profile_only"),": The evaluator engine will merely pass on an error, marking the profile as failed if a vulnerability is found"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ecosystem_config"),": An array of ecosystem configurations to check. Each ecosystem configuration has the following options:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," (string): The name of the ecosystem to check. Currently ",(0,r.kt)("inlineCode",{parentName:"li"},"npm"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"go")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"pypi")," are supported."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vulnerability_database_type")," (string): The kind of vulnerability database to use. Currently only ",(0,r.kt)("inlineCode",{parentName:"li"},"osv")," is supported."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vulnerability_database_endpoint")," (string): The endpoint of the vulnerability database to use."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"package_repository"),": The package repository to use. This is an object with the following options:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url")," (string): The URL of the package repository to use. Only the ",(0,r.kt)("inlineCode",{parentName:"li"},"go")," ecosystem uses this option."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sum_repository"),": The Go sum repository to use. This is an object with the following options:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url")," (string): The URL of the Go sum repository to use.")))))),(0,r.kt)("p",null,"Note that if the ",(0,r.kt)("inlineCode",{parentName:"p"},"review")," action is selected, ",(0,r.kt)("inlineCode",{parentName:"p"},"minder")," will only be able to mark the PR as changes requested if the submitter\nis not the same as the Minder identity. If the submitter is the same as the\nMinder identity, the PR will only be commented on."),(0,r.kt)("p",null,"Also note that if ",(0,r.kt)("inlineCode",{parentName:"p"},"commit_status")," action is selected, the PR can only be prevented from merging if the branch protection rules\nare set to require a passing commit status."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: pr_vulnerability_check\n  def:\n  action: review\n  ecosystem_config:\n  - name: npm\n    vulnerability_database_type: osv\n    vulnerability_database_endpoint: https://api.osv.dev/v1/query\n    package_repository:\n      url: https://registry.npmjs.org\n  - name: go\n    vulnerability_database_type: osv\n    vulnerability_database_endpoint: https://api.osv.dev/v1/query\n    package_repository:\n      url: https://proxy.golang.org\n    sum_repository:\n      url: https://sum.golang.org\n  - name: pypi\n    vulnerability_database_type: osv\n    vulnerability_database_endpoint: https://api.osv.dev/v1/query\n    package_repository:\n      url: https://pypi.org/pypi\n")))}m.isMDXComponent=!0}}]);