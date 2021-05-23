(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[62992],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=o.createContext({}),m=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=m(e.components);return o.createElement(a.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=m(t),d=r,g=p["".concat(a,".").concat(d)]||p[d]||l[d]||i;return t?o.createElement(g,s(s({ref:n},u),{},{components:t})):o.createElement(g,s({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=p;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var m=2;m<i;m++)s[m]=t[m];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},75862:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return a},default:function(){return u}});var o=t(22122),r=t(19756),i=(t(67294),t(3905)),s={id:"common_functions_getenvironment",title:"Module: common/functions/getEnvironment",sidebar_label:"common/functions/getEnvironment",custom_edit_url:null},c={unversionedId:"docs-engine/modules/common_functions_getenvironment",id:"docs-engine/modules/common_functions_getenvironment",isDocsHomePage:!1,title:"Module: common/functions/getEnvironment",description:"Variables",source:"@site/docs/docs-engine/modules/common_functions_getenvironment.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/common_functions_getenvironment",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_getenvironment",editUrl:null,version:"current",sidebar_label:"common/functions/getEnvironment",frontMatter:{id:"common_functions_getenvironment",title:"Module: common/functions/getEnvironment",sidebar_label:"common/functions/getEnvironment",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: common/functions/createInlineWorkerFromString",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_createinlineworkerfromstring"},next:{title:"Module: common/functions/getSignedAngleBetweenVectors",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_getsignedanglebetweenvectors"}},a=[{value:"Variables",id:"variables",children:[{value:"isBrowser",id:"isbrowser",children:[]},{value:"isNode",id:"isnode",children:[]},{value:"isWebWorker",id:"iswebworker",children:[]}]},{value:"Functions",id:"functions",children:[{value:"isJsDom",id:"isjsdom",children:[]}]}],m={toc:a};function u(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"isbrowser"},"isBrowser"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"isBrowser"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/common/functions/getEnvironment.ts#L3"},"packages/engine/src/common/functions/getEnvironment.ts:3")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isnode"},"isNode"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"isNode"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/common/functions/getEnvironment.ts#L11"},"packages/engine/src/common/functions/getEnvironment.ts:11")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"iswebworker"},"isWebWorker"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"isWebWorker"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/common/functions/getEnvironment.ts#L6"},"packages/engine/src/common/functions/getEnvironment.ts:6")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"isjsdom"},"isJsDom"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const"),(0,i.kt)("strong",{parentName:"p"},"isJsDom"),"(): ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jsdom/jsdom/releases/tag/12.0.0"},"https://github.com/jsdom/jsdom/releases/tag/12.0.0")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jsdom/jsdom/issues/1537"},"https://github.com/jsdom/jsdom/issues/1537")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/common/functions/getEnvironment.ts#L20"},"packages/engine/src/common/functions/getEnvironment.ts:20")))}u.isMDXComponent=!0}}]);