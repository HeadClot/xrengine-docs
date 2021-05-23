(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[44581],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||s;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<s;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71994:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l},default:function(){return c}});var a=n(22122),r=n(19756),s=(n(67294),n(3905)),o={id:"assets_functions_loadgltf",title:"Module: assets/functions/LoadGLTF",sidebar_label:"assets/functions/LoadGLTF",custom_edit_url:null},i={unversionedId:"docs-engine/modules/assets_functions_loadgltf",id:"docs-engine/modules/assets_functions_loadgltf",isDocsHomePage:!1,title:"Module: assets/functions/LoadGLTF",description:"Table of contents",source:"@site/docs/docs-engine/modules/assets_functions_loadgltf.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/assets_functions_loadgltf",permalink:"/xrengine-docs/docs/docs-engine/modules/assets_functions_loadgltf",editUrl:null,version:"current",sidebar_label:"assets/functions/LoadGLTF",frontMatter:{id:"assets_functions_loadgltf",title:"Module: assets/functions/LoadGLTF",sidebar_label:"assets/functions/LoadGLTF",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: assets/enum/AssetType",permalink:"/xrengine-docs/docs/docs-engine/modules/assets_enum_assettype"},next:{title:"Module: assets/loaders/fbx/FBXLoader",permalink:"/xrengine-docs/docs/docs-engine/modules/assets_loaders_fbx_fbxloader"}},l=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Interfaces",id:"interfaces",children:[]}]},{value:"Functions",id:"functions",children:[{value:"LoadGLTF",id:"loadgltf",children:[]},{value:"disposeDracoLoaderWorkers",id:"disposedracoloaderworkers",children:[]},{value:"getLoader",id:"getloader",children:[]},{value:"loadExtentions",id:"loadextentions",children:[]}]}],d={toc:l};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,s.kt)("h3",{id:"interfaces"},"Interfaces"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/xrengine-docs/docs/docs-engine/interfaces/assets_functions_loadgltf.loadgltfresultinterface"},"LoadGLTFResultInterface"))),(0,s.kt)("h2",{id:"functions"},"Functions"),(0,s.kt)("h3",{id:"loadgltf"},"LoadGLTF"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"LoadGLTF"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"url"),": ",(0,s.kt)("em",{parentName:"p"},"string"),"): ",(0,s.kt)("em",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/assets_functions_loadgltf.loadgltfresultinterface"},(0,s.kt)("em",{parentName:"a"},"LoadGLTFResultInterface")),">"),(0,s.kt)("p",null,"Loads an Asset which is in GLTF format."),(0,s.kt)("h4",{id:"parameters"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"url")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"URL of the asset.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/assets_functions_loadgltf.loadgltfresultinterface"},(0,s.kt)("em",{parentName:"a"},"LoadGLTFResultInterface")),">"),(0,s.kt)("p",null,"a promise of ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/assets_functions_loadgltf.loadgltfresultinterface"},"LoadGLTFResultInterface"),"."),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/assets/functions/LoadGLTF.ts#L42"},"packages/engine/src/assets/functions/LoadGLTF.ts:42")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"disposedracoloaderworkers"},"disposeDracoLoaderWorkers"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"disposeDracoLoaderWorkers"),"(): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/assets/functions/LoadGLTF.ts#L32"},"packages/engine/src/assets/functions/LoadGLTF.ts:32")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"getloader"},"getLoader"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"getLoader"),"(): ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/assets/functions/LoadGLTF.ts#L28"},"packages/engine/src/assets/functions/LoadGLTF.ts:28")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"loadextentions"},"loadExtentions"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const"),(0,s.kt)("strong",{parentName:"p"},"loadExtentions"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"gltf"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"gltf")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/assets/functions/LoadGLTF.ts#L51"},"packages/engine/src/assets/functions/LoadGLTF.ts:51")))}c.isMDXComponent=!0}}]);