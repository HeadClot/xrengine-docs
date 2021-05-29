(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[6837],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67541:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],c={id:"common_functions_applyvectormatrixxz",title:"Module: common/functions/applyVectorMatrixXZ",sidebar_label:"common/functions/applyVectorMatrixXZ",custom_edit_url:null},l={unversionedId:"docs-engine/modules/common_functions_applyvectormatrixxz",id:"docs-engine/modules/common_functions_applyvectormatrixxz",isDocsHomePage:!1,title:"Module: common/functions/applyVectorMatrixXZ",description:"Functions",source:"@site/docs/docs-engine/modules/common_functions_applyvectormatrixxz.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/common_functions_applyvectormatrixxz",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_applyvectormatrixxz",editUrl:null,version:"current",sidebar_label:"common/functions/applyVectorMatrixXZ",frontMatter:{id:"common_functions_applyvectormatrixxz",title:"Module: common/functions/applyVectorMatrixXZ",sidebar_label:"common/functions/applyVectorMatrixXZ",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: common/functions/applyThreshold",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_applythreshold"},next:{title:"Module: common/functions/bitFunctions",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_bitfunctions"}},p=[{value:"Functions",id:"functions",children:[{value:"applyVectorMatrixXZ",id:"applyvectormatrixxz",children:[]}]}],s={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"applyvectormatrixxz"},"applyVectorMatrixXZ"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"applyVectorMatrixXZ"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"a"),": Vector3, ",(0,a.kt)("inlineCode",{parentName:"p"},"b"),": Vector3): Vector3"),(0,a.kt)("p",null,"Constructs a 2D matrix from first vector, replacing the Y axes with the global Y axis,\nand applies this matrix to the second vector. Saves performance when compared to full 3D matrix application.\nUseful for actor rotation, as it only happens on the Y axis."),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"a")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Vector3"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Vector to construct 2D matrix from")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"b")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Vector3"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Vector to apply basis to")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," Vector3"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/engine/src/common/functions/applyVectorMatrixXZ.ts#L10"},"packages/engine/src/common/functions/applyVectorMatrixXZ.ts:10")))}u.isMDXComponent=!0}}]);