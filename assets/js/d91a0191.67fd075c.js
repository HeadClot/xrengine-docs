(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[53745],{3905:function(e,n,o){"use strict";o.d(n,{Zo:function(){return l},kt:function(){return p}});var t=o(67294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function c(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?c(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function u(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)o=c[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)o=c[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=t.createContext({}),a=function(e){var n=t.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},l=function(e){var n=a(e.components);return t.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=a(o),p=r,d=f["".concat(s,".").concat(p)]||f[p]||m[p]||c;return o?t.createElement(d,i(i({ref:n},l),{},{components:o})):t.createElement(d,i({ref:n},l))}));function p(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=o.length,i=new Array(c);i[0]=f;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var a=2;a<c;a++)i[a]=o[a];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}f.displayName="MDXCreateElement"},71247:function(e,n,o){"use strict";o.r(n),o.d(n,{frontMatter:function(){return u},metadata:function(){return s},toc:function(){return a},default:function(){return m}});var t=o(22122),r=o(19756),c=(o(67294),o(3905)),i=["components"],u={id:"common_functions_now",title:"Module: common/functions/now",sidebar_label:"common/functions/now",custom_edit_url:null},s={unversionedId:"docs-engine/modules/common_functions_now",id:"docs-engine/modules/common_functions_now",isDocsHomePage:!1,title:"Module: common/functions/now",description:"Variables",source:"@site/docs/docs-engine/modules/common_functions_now.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/common_functions_now",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_now",editUrl:null,version:"current",sidebar_label:"common/functions/now",frontMatter:{id:"common_functions_now",title:"Module: common/functions/now",sidebar_label:"common/functions/now",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: common/functions/isOtherPlayer",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_isotherplayer"},next:{title:"Module: common/functions/setDefaults",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_setdefaults"}},a=[{value:"Variables",id:"variables",children:[{value:"now",id:"now",children:[]}]}],l={toc:a};function m(e){var n=e.components,o=(0,r.Z)(e,i);return(0,c.kt)("wrapper",(0,t.Z)({},l,o,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"variables"},"Variables"),(0,c.kt)("h3",{id:"now"},"now"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,c.kt)("strong",{parentName:"p"},"now"),": ",(0,c.kt)("em",{parentName:"p"},"any")),(0,c.kt)("p",null,'return current time of the system.\nperformance.now() "polyfill"'),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/common/functions/now.ts#L5"},"packages/engine/src/common/functions/now.ts:5")))}m.isMDXComponent=!0}}]);