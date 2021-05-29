(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[55074],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return p}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=m(t),p=o,d=f["".concat(l,".").concat(p)]||f[p]||u[p]||i;return t?r.createElement(d,c(c({ref:n},s),{},{components:t})):r.createElement(d,c({ref:n},s))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var m=2;m<i;m++)c[m]=t[m];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},50918:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var r=t(22122),o=t(19756),i=(t(67294),t(3905)),c=["components"],a={id:"common_functions_createinlineworkerfromstring",title:"Module: common/functions/createInlineWorkerFromString",sidebar_label:"common/functions/createInlineWorkerFromString",custom_edit_url:null},l={unversionedId:"docs-engine/modules/common_functions_createinlineworkerfromstring",id:"docs-engine/modules/common_functions_createinlineworkerfromstring",isDocsHomePage:!1,title:"Module: common/functions/createInlineWorkerFromString",description:"Functions",source:"@site/docs/docs-engine/modules/common_functions_createinlineworkerfromstring.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/common_functions_createinlineworkerfromstring",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_createinlineworkerfromstring",editUrl:null,version:"current",sidebar_label:"common/functions/createInlineWorkerFromString",frontMatter:{id:"common_functions_createinlineworkerfromstring",title:"Module: common/functions/createInlineWorkerFromString",sidebar_label:"common/functions/createInlineWorkerFromString",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: common/functions/bitFunctions",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_bitfunctions"},next:{title:"Module: common/functions/getEnvironment",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_getenvironment"}},m=[{value:"Functions",id:"functions",children:[{value:"createInlineWorkerFromString",id:"createinlineworkerfromstring",children:[]}]}],s={toc:m};function u(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"createinlineworkerfromstring"},"createInlineWorkerFromString"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const"),(0,i.kt)("strong",{parentName:"p"},"createInlineWorkerFromString"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"str"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): Worker"),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"str")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," Worker"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/common/functions/createInlineWorkerFromString.ts#L1"},"packages/engine/src/common/functions/createInlineWorkerFromString.ts:1")))}u.isMDXComponent=!0}}]);