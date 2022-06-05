"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9410],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=o.createContext({}),p=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||i;return t?o.createElement(f,l(l({ref:n},s),{},{components:t})):o.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<i;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},20234:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),l=["components"],c={date:new Date("2022-06-05T00:00:00.000Z"),title:"dkron completion zsh",slug:"dkron_completion_zsh",url:"/cli/dkron_completion_zsh/"},a=void 0,p={unversionedId:"cli/dkron_completion_zsh",id:"cli/dkron_completion_zsh",title:"dkron completion zsh",description:"dkron completion zsh",source:"@site/docs/cli/dkron_completion_zsh.md",sourceDirName:"cli",slug:"/cli/dkron_completion_zsh",permalink:"/docs/cli/dkron_completion_zsh",editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/cli/dkron_completion_zsh.md",tags:[],version:"current",frontMatter:{date:"2022-06-05T00:00:00.000Z",title:"dkron completion zsh",slug:"dkron_completion_zsh",url:"/cli/dkron_completion_zsh/"},sidebar:"tutorialSidebar",previous:{title:"dkron completion powershell",permalink:"/docs/cli/dkron_completion_powershell"},next:{title:"dkron doc",permalink:"/docs/cli/dkron_doc"}},s={},u=[{value:"dkron completion zsh",id:"dkron-completion-zsh",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Linux:",id:"linux",level:4},{value:"macOS:",id:"macos",level:4},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 5-Jun-2022",id:"auto-generated-by-spf13cobra-on-5-jun-2022",level:6}],d={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"dkron-completion-zsh"},"dkron completion zsh"),(0,i.kt)("p",null,"Generate the autocompletion script for zsh"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Generate the autocompletion script for the zsh shell."),(0,i.kt)("p",null,"If shell completion is not already enabled in your environment you will need\nto enable it.  You can execute the following once:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'echo "autoload -U compinit; compinit" >> ~/.zshrc\n')),(0,i.kt)("p",null,"To load completions for every new session, execute once:"),(0,i.kt)("h4",{id:"linux"},"Linux:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'dkron completion zsh > "${fpath[1]}/_dkron"\n')),(0,i.kt)("h4",{id:"macos"},"macOS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dkron completion zsh > /usr/local/share/zsh/site-functions/_dkron\n")),(0,i.kt)("p",null,"You will need to start a new shell for this setup to take effect."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dkron completion zsh [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -h, --help              help for zsh\n      --no-descriptions   disable completion descriptions\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --config string   config file path\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/cli/dkron_completion/"},"dkron completion"),"\t - Generate the autocompletion script for the specified shell")),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-5-jun-2022"},"Auto generated by spf13/cobra on 5-Jun-2022"))}m.isMDXComponent=!0}}]);