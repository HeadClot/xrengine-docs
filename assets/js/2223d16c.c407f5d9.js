(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[96055],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,c=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),y=u(n),f=s,m=y["".concat(i,".").concat(f)]||y[f]||l[f]||c;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var c=n.length,a=new Array(c);a[0]=y;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var u=2;u<c;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},87820:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return o},toc:function(){return i},default:function(){return p}});var r=n(22122),s=n(19756),c=(n(67294),n(3905)),a={id:"ecs_classes_query.querystattype",title:"Interface: QueryStatType",sidebar_label:"QueryStatType",custom_edit_url:null},o={unversionedId:"docs-engine/interfaces/ecs_classes_query.querystattype",id:"docs-engine/interfaces/ecs_classes_query.querystattype",isDocsHomePage:!1,title:"Interface: QueryStatType",description:"ecs/classes/Query.QueryStatType",source:"@site/docs/docs-engine/interfaces/ecs_classes_query.querystattype.md",sourceDirName:"docs-engine/interfaces",slug:"/docs-engine/interfaces/ecs_classes_query.querystattype",permalink:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_query.querystattype",editUrl:null,version:"current",sidebar_label:"QueryStatType",frontMatter:{id:"ecs_classes_query.querystattype",title:"Interface: QueryStatType",sidebar_label:"QueryStatType",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: QuerySerializeType",permalink:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_query.queryserializetype"},next:{title:"Interface: NotComponent<C\\>",permalink:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_system.notcomponent"}},i=[{value:"Properties",id:"properties",children:[{value:"numComponents",id:"numcomponents",children:[]},{value:"numEntities",id:"numentities",children:[]}]}],u={toc:i};function p(e){var t=e.components,n=(0,s.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/ecs_classes_query"},"ecs/classes/Query"),".QueryStatType"),(0,c.kt)("p",null,"Interface for stats of a ",(0,c.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_query.query"},"Query"),"."),(0,c.kt)("h2",{id:"properties"},"Properties"),(0,c.kt)("h3",{id:"numcomponents"},"numComponents"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("strong",{parentName:"p"},"numComponents"),": ",(0,c.kt)("em",{parentName:"p"},"number")),(0,c.kt)("p",null,"Number of Components in this query."),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Query.ts#L13"},"packages/engine/src/ecs/classes/Query.ts:13")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"numentities"},"numEntities"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("strong",{parentName:"p"},"numEntities"),": ",(0,c.kt)("em",{parentName:"p"},"number")),(0,c.kt)("p",null,"Number of Entities matched in this query."),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Query.ts#L15"},"packages/engine/src/ecs/classes/Query.ts:15")))}p.isMDXComponent=!0}}]);