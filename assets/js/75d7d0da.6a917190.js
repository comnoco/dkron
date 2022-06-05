"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9810],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),l=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=l(r),d=n,m=f["".concat(u,".").concat(d)]||f[d]||c[d]||i;return r?o.createElement(m,s(s({ref:t},p),{},{components:r})):o.createElement(m,s({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},53363:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var o=r(87462),n=r(63366),i=(r(67294),r(3905)),s=["components"],a={},u="Processors",l={unversionedId:"usage/processors/index",id:"usage/processors/index",title:"Processors",description:"Execution Processors",source:"@site/docs/usage/processors/index.md",sourceDirName:"usage/processors",slug:"/usage/processors/",permalink:"/docs/usage/processors/",editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/usage/processors/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Developing plugins",permalink:"/docs/usage/plugins/develop"},next:{title:"File Processor",permalink:"/docs/usage/processors/file"}},p={},c=[{value:"Execution Processors",id:"execution-processors",level:2},{value:"Built-in processors",id:"built-in-processors",level:3}],f={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"processors"},"Processors"),(0,i.kt)("h2",{id:"execution-processors"},"Execution Processors"),(0,i.kt)("p",null,"Processor plugins are called when an execution response has been received. They are passed the resulting execution data and configuration parameters, this plugins can perform a variety of operations with the execution and it's very flexible and per Job, examples of operations this plugins can do:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Execution output storage, forwarding or redirection."),(0,i.kt)("li",{parentName:"ul"},"Notification"),(0,i.kt)("li",{parentName:"ul"},"Monitoring")),(0,i.kt)("p",null,"For example, Processor plugins can be used to redirect the output of a job execution to different targets."),(0,i.kt)("p",null,"Currently Dkron provides you with some built-in plugins but the list keeps growing. Some of the features previously implemented in the application will be progessively moved to plugins."),(0,i.kt)("h3",{id:"built-in-processors"},"Built-in processors"),(0,i.kt)("p",null,"Dkron provides the following built-in processors:"),(0,i.kt)("ol",{start:0},(0,i.kt)("li",{parentName:"ol"},"not specified - Store the output in the key value store (Slow performance, good for testing, default method)"),(0,i.kt)("li",{parentName:"ol"},"log - Output the execution log to Dkron stdout (Good performance, needs parsing)"),(0,i.kt)("li",{parentName:"ol"},"syslog - Output to the syslog (Good performance, needs parsing)"),(0,i.kt)("li",{parentName:"ol"},"files - Output to multiple files (Good performance, needs parsing)")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pro/"},"Dkro Pro")," provides you with several more processors."),(0,i.kt)("p",null,"All plugins accepts one configuration option: ",(0,i.kt)("inlineCode",{parentName:"p"},"forward")," Indicated if the plugin must forward the original execution output. This allows for chaining plugins and sending output to different targets at the same time."))}d.isMDXComponent=!0}}]);