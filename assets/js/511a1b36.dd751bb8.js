(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[14755],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=m(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var m=2;m<a;m++)c[m]=n[m];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},48290:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),c=["components"],i={id:"common_functions_vectortoscreenxyz",title:"Module: common/functions/vectorToScreenXYZ",sidebar_label:"common/functions/vectorToScreenXYZ",custom_edit_url:null},l={unversionedId:"docs-engine/modules/common_functions_vectortoscreenxyz",id:"docs-engine/modules/common_functions_vectortoscreenxyz",isDocsHomePage:!1,title:"Module: common/functions/vectorToScreenXYZ",description:"Functions",source:"@site/docs/docs-engine/modules/common_functions_vectortoscreenxyz.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/common_functions_vectortoscreenxyz",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_vectortoscreenxyz",editUrl:null,version:"current",sidebar_label:"common/functions/vectorToScreenXYZ",frontMatter:{id:"common_functions_vectortoscreenxyz",title:"Module: common/functions/vectorToScreenXYZ",sidebar_label:"common/functions/vectorToScreenXYZ",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: common/functions/setDefaults",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_setdefaults"},next:{title:"Module: common/interfaces/Behavior",permalink:"/xrengine-docs/docs/docs-engine/modules/common_interfaces_behavior"}},m=[{value:"Functions",id:"functions",children:[{value:"vectorToScreenXYZ",id:"vectortoscreenxyz",children:[]}]}],s={toc:m};function u(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"vectortoscreenxyz"},"vectorToScreenXYZ"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"vectorToScreenXYZ"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"vector"),": Vector3, ",(0,a.kt)("inlineCode",{parentName:"p"},"camera"),": Camera, ",(0,a.kt)("inlineCode",{parentName:"p"},"width"),": ",(0,a.kt)("em",{parentName:"p"},"number"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"height"),": ",(0,a.kt)("em",{parentName:"p"},"number"),"): Vector3"),(0,a.kt)("p",null,"convert 3D coordinates into 2D."),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"vector")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Vector3"),(0,a.kt)("td",{parentName:"tr",align:"left"},"3D Coordinates.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"camera")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Camera"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Camera Object.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"width")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Width of view.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"height")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Height of view.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," Vector3"),(0,a.kt)("p",null,"2D Coordinates of Given 3D Coordinates."),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/common/functions/vectorToScreenXYZ.ts#L11"},"packages/engine/src/common/functions/vectorToScreenXYZ.ts:11")))}u.isMDXComponent=!0}}]);