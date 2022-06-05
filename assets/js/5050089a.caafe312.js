"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1964],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},55089:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return f}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={title:"Job retries"},u=void 0,s={unversionedId:"usage/retries",id:"usage/retries",title:"Job retries",description:"Jobs can be configured to retry in case of failure.",source:"@site/docs/usage/retries.md",sourceDirName:"usage",slug:"/usage/retries",permalink:"/docs/usage/retries",editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/usage/retries.md",tags:[],version:"current",frontMatter:{title:"Job retries"},sidebar:"tutorialSidebar",previous:{title:"Outage recovery",permalink:"/docs/usage/recovery"},next:{title:"Embedded storage",permalink:"/docs/usage/storage"}},l={},f=[{value:"Configuration",id:"configuration",level:2}],p={toc:f};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Jobs can be configured to retry in case of failure."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "job1",\n  "schedule": "@every 10s",\n  "executor": "shell",\n  "executor_config": {\n    "command": "echo \\"Hello from parent\\""\n  },\n  "retries": 5\n}\n')),(0,i.kt)("p",null,"In case of failure to run the job in one node, it will try to run the job again in that node until the retries count reaches the limit."))}d.isMDXComponent=!0}}]);