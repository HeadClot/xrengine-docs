(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[85919],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return i},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=c(n),k=r,u=m["".concat(p,".").concat(k)]||m[k]||d[k]||o;return n?a.createElement(u,s(s({ref:t},i),{},{components:n})):a.createElement(u,s({ref:t},i))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94602:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),s=["components"],l={id:"ecs_classes_objectpool.objectpool",title:"Class: ObjectPool<T>",sidebar_label:"ObjectPool",custom_edit_url:null},p={unversionedId:"docs-engine/classes/ecs_classes_objectpool.objectpool",id:"docs-engine/classes/ecs_classes_objectpool.objectpool",isDocsHomePage:!1,title:"Class: ObjectPool<T\\>",description:"ecs/classes/ObjectPool.ObjectPool",source:"@site/docs/docs-engine/classes/ecs_classes_objectpool.objectpool.md",sourceDirName:"docs-engine/classes",slug:"/docs-engine/classes/ecs_classes_objectpool.objectpool",permalink:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_objectpool.objectpool",editUrl:null,version:"current",sidebar_label:"ObjectPool",frontMatter:{id:"ecs_classes_objectpool.objectpool",title:"Class: ObjectPool<T>",sidebar_label:"ObjectPool",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Class: EntityPool",permalink:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entitypool.entitypool"},next:{title:"Class: Query",permalink:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_query.query"}},c=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"freeList",id:"freelist",children:[]},{value:"poolSize",id:"poolsize",children:[]},{value:"type",id:"type",children:[]}]},{value:"Methods",id:"methods",children:[{value:"acquire",id:"acquire",children:[]},{value:"expand",id:"expand",children:[]},{value:"release",id:"release",children:[]}]}],i={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/ecs_classes_objectpool"},"ecs/classes/ObjectPool"),".ObjectPool"),(0,o.kt)("p",null,"Base class for ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},"Entity")," and ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},"Component")," pools."),(0,o.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"T")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},"Entity"),",     ",(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},"Component")," or Subclass of any of these.")))),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"ObjectPool")),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entitypool.entitypool"},(0,o.kt)("em",{parentName:"a"},"EntityPool"))))),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"+"," ",(0,o.kt)("strong",{parentName:"p"},"new ObjectPool"),"<T",">","(",(0,o.kt)("inlineCode",{parentName:"p"},"baseObject"),": ",(0,o.kt)("em",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"initialSize?"),": ",(0,o.kt)("em",{parentName:"p"},"number"),"): ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_objectpool.objectpool"},(0,o.kt)("em",{parentName:"a"},"ObjectPool")),"<T",">"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"todo"))," Add initial size"),(0,o.kt)("h4",{id:"type-parameters-1"},"Type parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"T")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},"Entity"),",     ",(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},"Component")," or Subclass of any of these.")))),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"baseObject")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Type of the pool will be the type of this object.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"initialSize?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Initial size of the pool when created.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_objectpool.objectpool"},(0,o.kt)("em",{parentName:"a"},"ObjectPool")),"<T",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/ObjectPool.ts#L27"},"packages/engine/src/ecs/classes/ObjectPool.ts:27")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"freelist"},"freeList"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"freeList"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"[]= []"),(0,o.kt)("p",null,"Objects in pool that are available for allocation."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"todo:"))," make this a sparse array or ring buffer"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/ObjectPool.ts#L13"},"packages/engine/src/ecs/classes/ObjectPool.ts:13")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"poolsize"},"poolSize"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"poolSize"),": ",(0,o.kt)("em",{parentName:"p"},"number"),"= 0"),(0,o.kt)("p",null,"Current size of the pool.''"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/ObjectPool.ts#L20"},"packages/engine/src/ecs/classes/ObjectPool.ts:20")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"type"},"type"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"type"),": (...",(0,o.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"[]) => T"),(0,o.kt)("p",null,"Type is set on construction."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,o.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,o.kt)("p",null,"+"," ",(0,o.kt)("strong",{parentName:"p"},"new ObjectPool"),"(...",(0,o.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"[]): T"),(0,o.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"...args")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"),"[]")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," T"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/ObjectPool.ts#L27"},"packages/engine/src/ecs/classes/ObjectPool.ts:27")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/ObjectPool.ts#L27"},"packages/engine/src/ecs/classes/ObjectPool.ts:27")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"acquire"},"acquire"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"acquire"),"(): T"),(0,o.kt)("p",null,"Get an object from ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_objectpool.objectpool#freelist"},"freeList")," of the pool.\\\nIf ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_objectpool.objectpool#freelist"},"freeList")," is empty then expands the pool first and them retrieves the object."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"typeparam"))," ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},"Entity"),",\n",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},"Component")," or Subclass of any of these."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," T"),(0,o.kt)("p",null,"an available item."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/ObjectPool.ts#L56"},"packages/engine/src/ecs/classes/ObjectPool.ts:56")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"expand"},"expand"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"expand"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"count"),": ",(0,o.kt)("em",{parentName:"p"},"number"),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Make the pool bigger."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,o.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"count")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Number of entities to increase.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/ObjectPool.ts#L86"},"packages/engine/src/ecs/classes/ObjectPool.ts:86")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"release"},"release"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"release"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"item"),": T): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Put on object back in the pool."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"typeparam"))," ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},"Entity"),",\n",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},"Component")," or Subclass of any of these."),(0,o.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"item")),(0,o.kt)("td",{parentName:"tr",align:"left"},"T"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Object to be released.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/ObjectPool.ts#L75"},"packages/engine/src/ecs/classes/ObjectPool.ts:75")))}d.isMDXComponent=!0}}]);