(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[29079],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),o=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(n),y=a,m=d["".concat(l,".").concat(y)]||d[y]||u[y]||i;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var o=2;o<i;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89e3:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return o},default:function(){return u}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),s=["components"],c={id:"ecs_classes_query.queryserializetype",title:"Interface: QuerySerializeType",sidebar_label:"QuerySerializeType",custom_edit_url:null},l={unversionedId:"docs-engine/interfaces/ecs_classes_query.queryserializetype",id:"docs-engine/interfaces/ecs_classes_query.queryserializetype",isDocsHomePage:!1,title:"Interface: QuerySerializeType",description:"ecs/classes/Query.QuerySerializeType",source:"@site/docs/docs-engine/interfaces/ecs_classes_query.queryserializetype.md",sourceDirName:"docs-engine/interfaces",slug:"/docs-engine/interfaces/ecs_classes_query.queryserializetype",permalink:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_query.queryserializetype",editUrl:null,version:"current",sidebar_label:"QuerySerializeType",frontMatter:{id:"ecs_classes_query.queryserializetype",title:"Interface: QuerySerializeType",sidebar_label:"QuerySerializeType",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: Prefab",permalink:"/xrengine-docs/docs/docs-engine/interfaces/common_interfaces_prefab.prefab"},next:{title:"Interface: QueryStatType",permalink:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_query.querystattype"}},o=[{value:"Properties",id:"properties",children:[{value:"components",id:"components",children:[]},{value:"key",id:"key",children:[]},{value:"numEntities",id:"numentities",children:[]},{value:"reactive",id:"reactive",children:[]}]}],p={toc:o};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/ecs_classes_query"},"ecs/classes/Query"),".QuerySerializeType"),(0,i.kt)("p",null,"Interface of Serialized ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_query.query"},"Query"),"."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"components"},"components"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"components"),": ",(0,i.kt)("em",{parentName:"p"},"object")),(0,i.kt)("p",null,"List of Components included or not included in this query."),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"included")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"List of components.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"not")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"List of non components.")))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/Query.ts#L27"},"packages/engine/src/ecs/classes/Query.ts:27")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"key"},"key"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"key"),": ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Key of the query."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/Query.ts#L21"},"packages/engine/src/ecs/classes/Query.ts:21")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"numentities"},"numEntities"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"numEntities"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Number of Entities matched in this query."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/Query.ts#L25"},"packages/engine/src/ecs/classes/Query.ts:25")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reactive"},"reactive"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"reactive"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Is Query reactive."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/Query.ts#L23"},"packages/engine/src/ecs/classes/Query.ts:23")))}u.isMDXComponent=!0}}]);