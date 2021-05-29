(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[42920],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=o,p=u["".concat(c,".").concat(g)]||u[g]||d[g]||a;return n?r.createElement(p,i(i({ref:t},m),{},{components:n})):r.createElement(p,i({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39844:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],l={id:"common_functions_getsignedanglebetweenvectors",title:"Module: common/functions/getSignedAngleBetweenVectors",sidebar_label:"common/functions/getSignedAngleBetweenVectors",custom_edit_url:null},c={unversionedId:"docs-engine/modules/common_functions_getsignedanglebetweenvectors",id:"docs-engine/modules/common_functions_getsignedanglebetweenvectors",isDocsHomePage:!1,title:"Module: common/functions/getSignedAngleBetweenVectors",description:"Functions",source:"@site/docs/docs-engine/modules/common_functions_getsignedanglebetweenvectors.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/common_functions_getsignedanglebetweenvectors",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_getsignedanglebetweenvectors",editUrl:null,version:"current",sidebar_label:"common/functions/getSignedAngleBetweenVectors",frontMatter:{id:"common_functions_getsignedanglebetweenvectors",title:"Module: common/functions/getSignedAngleBetweenVectors",sidebar_label:"common/functions/getSignedAngleBetweenVectors",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: common/functions/getEnvironment",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_getenvironment"},next:{title:"Module: common/functions/getURLParams",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_geturlparams"}},s=[{value:"Functions",id:"functions",children:[{value:"getSignedAngleBetweenVectors",id:"getsignedanglebetweenvectors",children:[]}]}],m={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"getsignedanglebetweenvectors"},"getSignedAngleBetweenVectors"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getSignedAngleBetweenVectors"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"v1"),": THREE.Vector3, ",(0,a.kt)("inlineCode",{parentName:"p"},"v2"),": THREE.Vector3, ",(0,a.kt)("inlineCode",{parentName:"p"},"normal?"),": THREE.Vector3, ",(0,a.kt)("inlineCode",{parentName:"p"},"dotTreshold?"),": ",(0,a.kt)("em",{parentName:"p"},"number"),"): ",(0,a.kt)("em",{parentName:"p"},"number")),(0,a.kt)("p",null,"Finds an angle between two vectors with a sign relative to normal vector."),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"v1")),(0,a.kt)("td",{parentName:"tr",align:"left"},"THREE.Vector3"),(0,a.kt)("td",{parentName:"tr",align:"left"},"-"),(0,a.kt)("td",{parentName:"tr",align:"left"},"First Vector.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"v2")),(0,a.kt)("td",{parentName:"tr",align:"left"},"THREE.Vector3"),(0,a.kt)("td",{parentName:"tr",align:"left"},"-"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Second Vector.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"normal")),(0,a.kt)("td",{parentName:"tr",align:"left"},"THREE.Vector3"),(0,a.kt)("td",{parentName:"tr",align:"left"},"-"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Normal Vector.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"dotTreshold")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},"0.0005"),(0,a.kt)("td",{parentName:"tr",align:"left"})))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ",(0,a.kt)("em",{parentName:"p"},"number")),(0,a.kt)("p",null,"Angle between two vectors."),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/common/functions/getSignedAngleBetweenVectors.ts#L12"},"packages/engine/src/common/functions/getSignedAngleBetweenVectors.ts:12")))}d.isMDXComponent=!0}}]);