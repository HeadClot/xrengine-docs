(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[55442],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return s},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,m=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(a),k=r,c=u["".concat(i,".").concat(k)]||u[k]||d[k]||m;return a?n.createElement(c,l(l({ref:t},s),{},{components:a})):n.createElement(c,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=a.length,l=new Array(m);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<m;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},48497:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p},default:function(){return d}});var n=a(22122),r=a(19756),m=(a(67294),a(3905)),l=["components"],o={id:"common_classes_buffergeometryutils",title:"Module: common/classes/BufferGeometryUtils",sidebar_label:"common/classes/BufferGeometryUtils",custom_edit_url:null},i={unversionedId:"docs-engine/modules/common_classes_buffergeometryutils",id:"docs-engine/modules/common_classes_buffergeometryutils",isDocsHomePage:!1,title:"Module: common/classes/BufferGeometryUtils",description:"Functions",source:"@site/docs/docs-engine/modules/common_classes_buffergeometryutils.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/common_classes_buffergeometryutils",permalink:"/xrengine-docs/docs/docs-engine/modules/common_classes_buffergeometryutils",editUrl:null,version:"current",sidebar_label:"common/classes/BufferGeometryUtils",frontMatter:{id:"common_classes_buffergeometryutils",title:"Module: common/classes/BufferGeometryUtils",sidebar_label:"common/classes/BufferGeometryUtils",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: common/behaviors/addComponentFromSchema",permalink:"/xrengine-docs/docs/docs-engine/modules/common_behaviors_addcomponentfromschema"},next:{title:"Module: common/classes/ClientStorage",permalink:"/xrengine-docs/docs/docs-engine/modules/common_classes_clientstorage"}},p=[{value:"Functions",id:"functions",children:[{value:"computeMorphedAttributes",id:"computemorphedattributes",children:[]},{value:"computeTangents",id:"computetangents",children:[]},{value:"estimateBytesUsed",id:"estimatebytesused",children:[]},{value:"interleaveAttributes",id:"interleaveattributes",children:[]},{value:"mergeBufferAttributes",id:"mergebufferattributes",children:[]},{value:"mergeBufferGeometries",id:"mergebuffergeometries",children:[]},{value:"mergeVertices",id:"mergevertices",children:[]},{value:"toTrianglesDrawMode",id:"totrianglesdrawmode",children:[]}]}],s={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,m.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("h2",{id:"functions"},"Functions"),(0,m.kt)("h3",{id:"computemorphedattributes"},"computeMorphedAttributes"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"computeMorphedAttributes"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"object"),": ",(0,m.kt)("em",{parentName:"p"},"any"),"): ",(0,m.kt)("em",{parentName:"p"},"object")),(0,m.kt)("p",null,"Calculates the morphed attributes of a morphed/skinned BufferGeometry.\nHelpful for Raytracing or Decals."),(0,m.kt)("h4",{id:"parameters"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"object")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"any")),(0,m.kt)("td",{parentName:"tr",align:"left"},"An instance of Mesh, Line or Points.")))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"object")),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"morphedNormalAttribute")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"Float32BufferAttribute"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"morphedPositionAttribute")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"Float32BufferAttribute"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"normalAttribute")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"any"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"positionAttribute")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"any"))))),(0,m.kt)("p",null,"An Object with original position/normal attributes and morphed ones."),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/common/classes/BufferGeometryUtils.ts#L638"},"packages/engine/src/common/classes/BufferGeometryUtils.ts:638")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"computetangents"},"computeTangents"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"computeTangents"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"geometry"),": ",(0,m.kt)("em",{parentName:"p"},"any"),"): ",(0,m.kt)("em",{parentName:"p"},"void")),(0,m.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"geometry")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"any"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"void")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/common/classes/BufferGeometryUtils.ts#L14"},"packages/engine/src/common/classes/BufferGeometryUtils.ts:14")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"estimatebytesused"},"estimateBytesUsed"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"estimateBytesUsed"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"geometry"),": ",(0,m.kt)("em",{parentName:"p"},"any"),"): ",(0,m.kt)("em",{parentName:"p"},"number")),(0,m.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"geometry")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"any"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"number")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/common/classes/BufferGeometryUtils.ts#L354"},"packages/engine/src/common/classes/BufferGeometryUtils.ts:354")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"interleaveattributes"},"interleaveAttributes"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"interleaveAttributes"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"attributes"),": ",(0,m.kt)("em",{parentName:"p"},"any"),"): ",(0,m.kt)("em",{parentName:"p"},"any"),"[]"),(0,m.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"attributes")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"any"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"any"),"[]"),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/common/classes/BufferGeometryUtils.ts#L289"},"packages/engine/src/common/classes/BufferGeometryUtils.ts:289")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"mergebufferattributes"},"mergeBufferAttributes"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"mergeBufferAttributes"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"attributes"),": ",(0,m.kt)("em",{parentName:"p"},"any"),"): ",(0,m.kt)("em",{parentName:"p"},"BufferAttribute")),(0,m.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"attributes")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"any"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"BufferAttribute")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/common/classes/BufferGeometryUtils.ts#L224"},"packages/engine/src/common/classes/BufferGeometryUtils.ts:224")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"mergebuffergeometries"},"mergeBufferGeometries"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"mergeBufferGeometries"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"geometries"),": ",(0,m.kt)("em",{parentName:"p"},"any"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"useGroups?"),": ",(0,m.kt)("em",{parentName:"p"},"any"),"): ",(0,m.kt)("em",{parentName:"p"},"BufferGeometry")),(0,m.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"geometries")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"any"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"useGroups?")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"any"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"BufferGeometry")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/common/classes/BufferGeometryUtils.ts#L24"},"packages/engine/src/common/classes/BufferGeometryUtils.ts:24")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"mergevertices"},"mergeVertices"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"mergeVertices"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"geometry"),": ",(0,m.kt)("em",{parentName:"p"},"any"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"tolerance?"),": ",(0,m.kt)("em",{parentName:"p"},"number"),"): ",(0,m.kt)("em",{parentName:"p"},"any")),(0,m.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"geometry")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"any")),(0,m.kt)("td",{parentName:"tr",align:"left"},"-")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"tolerance")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"number")),(0,m.kt)("td",{parentName:"tr",align:"left"},"1e-4")))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"any")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/common/classes/BufferGeometryUtils.ts#L378"},"packages/engine/src/common/classes/BufferGeometryUtils.ts:378")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"totrianglesdrawmode"},"toTrianglesDrawMode"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"toTrianglesDrawMode"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"geometry"),": ",(0,m.kt)("em",{parentName:"p"},"any"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"drawMode"),": ",(0,m.kt)("em",{parentName:"p"},"any"),"): ",(0,m.kt)("em",{parentName:"p"},"any")),(0,m.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"geometry")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"any"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"drawMode")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"any"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"any")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/common/classes/BufferGeometryUtils.ts#L527"},"packages/engine/src/common/classes/BufferGeometryUtils.ts:527")))}d.isMDXComponent=!0}}]);