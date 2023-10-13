"use strict";(self.webpackChunkstacklok=self.webpackChunkstacklok||[]).push([[2411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,f=m["".concat(a,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[m]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={},l=void 0,c={unversionedId:"cli/medic_completion_zsh",id:"cli/medic_completion_zsh",title:"medic_completion_zsh",description:"medic completion zsh",source:"@site/docs/cli/medic_completion_zsh.md",sourceDirName:"cli",slug:"/cli/medic_completion_zsh",permalink:"/cli/medic_completion_zsh",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mediator",previous:{title:"medic_completion_powershell",permalink:"/cli/medic_completion_powershell"},next:{title:"medic_docs",permalink:"/cli/medic_docs"}},a={},s=[{value:"medic completion zsh",id:"medic-completion-zsh",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Linux:",id:"linux",level:4},{value:"macOS:",id:"macos",level:4},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"medic-completion-zsh"},"medic completion zsh"),(0,o.kt)("p",null,"Generate the autocompletion script for zsh"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Generate the autocompletion script for the zsh shell."),(0,o.kt)("p",null,"If shell completion is not already enabled in your environment you will need\nto enable it.  You can execute the following once:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'echo "autoload -U compinit; compinit" >> ~/.zshrc\n')),(0,o.kt)("p",null,"To load completions in your current shell session:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"source <(medic completion zsh)\n")),(0,o.kt)("p",null,"To load completions for every new session, execute once:"),(0,o.kt)("h4",{id:"linux"},"Linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'medic completion zsh > "${fpath[1]}/_medic"\n')),(0,o.kt)("h4",{id:"macos"},"macOS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"medic completion zsh > $(brew --prefix)/share/zsh/site-functions/_medic\n")),(0,o.kt)("p",null,"You will need to start a new shell for this setup to take effect."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"medic completion zsh [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help              help for zsh\n      --no-descriptions   disable completion descriptions\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --config string            Config file (default is $PWD/config.yaml)\n      --grpc-host string         Server host (default "staging.stacklok.dev")\n      --grpc-insecure            Allow establishing insecure connections\n      --grpc-port int            Server port (default 443)\n      --identity-client string   Identity server client ID (default "mediator-cli")\n      --identity-realm string    Identity server realm (default "stacklok")\n      --identity-url string      Identity server issuer URL (default "https://auth.staging.stacklok.dev")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cli/medic_completion"},"medic completion"),"\t - Generate the autocompletion script for the specified shell")))}d.isMDXComponent=!0}}]);