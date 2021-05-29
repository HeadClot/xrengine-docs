(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[95918],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(k,o(o({ref:t},l),{},{components:n})):a.createElement(k,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50485:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(22122),r=n(19756),s=(n(67294),n(3905)),o=["components"],i={id:"ecs_classes_query.query",title:"Class: Query",sidebar_label:"Query",custom_edit_url:null},c={unversionedId:"docs-engine/classes/ecs_classes_query.query",id:"docs-engine/classes/ecs_classes_query.query",isDocsHomePage:!1,title:"Class: Query",description:"ecs/classes/Query.Query",source:"@site/docs/docs-engine/classes/ecs_classes_query.query.md",sourceDirName:"docs-engine/classes",slug:"/docs-engine/classes/ecs_classes_query.query",permalink:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_query.query",editUrl:null,version:"current",sidebar_label:"Query",frontMatter:{id:"ecs_classes_query.query",title:"Class: Query",sidebar_label:"Query",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Class: ObjectPool<T\\>",permalink:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_objectpool.objectpool"},next:{title:"Class: System",permalink:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"}},p=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"components",id:"components",children:[]},{value:"entities",id:"entities",children:[]},{value:"eventDispatcher",id:"eventdispatcher",children:[]},{value:"key",id:"key",children:[]},{value:"notComponents",id:"notcomponents",children:[]},{value:"reactive",id:"reactive",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addEntity",id:"addentity",children:[]},{value:"match",id:"match",children:[]},{value:"removeEntity",id:"removeentity",children:[]},{value:"stats",id:"stats",children:[]},{value:"toJSON",id:"tojson",children:[]}]}],l={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/ecs_classes_query"},"ecs/classes/Query"),".Query"),(0,s.kt)("p",null,"Class to handle a system query.\\\nQueries are how systems identify entities with specified components."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,"+"," ",(0,s.kt)("strong",{parentName:"p"},"new Query"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"Components"),": (",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentconstructor"},(0,s.kt)("em",{parentName:"a"},"ComponentConstructor")),"<any",">"," ","|"," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_system.notcomponent"},(0,s.kt)("em",{parentName:"a"},"NotComponent")),"<any",">",")[]): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_query.query"},(0,s.kt)("em",{parentName:"a"},"Query"))),(0,s.kt)("p",null,"Constructor called when system creates query."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,s.kt)("h4",{id:"parameters"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"Components")),(0,s.kt)("td",{parentName:"tr",align:"left"},"(",(0,s.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentconstructor"},(0,s.kt)("em",{parentName:"a"},"ComponentConstructor")),"<any",">"," ","|"," ",(0,s.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_system.notcomponent"},(0,s.kt)("em",{parentName:"a"},"NotComponent")),"<any",">",")[]"),(0,s.kt)("td",{parentName:"tr",align:"left"},"List of Components. At least one component object is required to create query.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_query.query"},(0,s.kt)("em",{parentName:"a"},"Query"))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/ecs/classes/Query.ts#L83"},"packages/engine/src/ecs/classes/Query.ts:83")),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"components"},"components"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"components"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"[]"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long\nList of components to look for in this query."),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/ecs/classes/Query.ts#L48"},"packages/engine/src/ecs/classes/Query.ts:48")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"entities"},"entities"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"entities"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"[]"),(0,s.kt)("p",null,"List of entities currently attached to this query."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"todo:"))," This could be optimized with a ringbuffer or sparse array"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/ecs/classes/Query.ts#L61"},"packages/engine/src/ecs/classes/Query.ts:61")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"eventdispatcher"},"eventDispatcher"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"eventDispatcher"),": ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entityeventdispatcher.entityeventdispatcher"},(0,s.kt)("em",{parentName:"a"},"EntityEventDispatcher"))),(0,s.kt)("p",null,"Event dispatcher associated with this query."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/ecs/classes/Query.ts#L68"},"packages/engine/src/ecs/classes/Query.ts:68")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"key"},"key"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"key"),": ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("p",null,"Key for looking up the query."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/ecs/classes/Query.ts#L83"},"packages/engine/src/ecs/classes/Query.ts:83")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"notcomponents"},"notComponents"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"notComponents"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"[]"),(0,s.kt)("p",null,"List of components to use to filter out entities."),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/ecs/classes/Query.ts#L53"},"packages/engine/src/ecs/classes/Query.ts:53")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"reactive"},"reactive"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"reactive"),": ",(0,s.kt)("em",{parentName:"p"},"boolean")),(0,s.kt)("p",null,"Is the query reactive?\\\nReactive queries respond to listener events - onChanged, onAdded and onRemoved."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/ecs/classes/Query.ts#L76"},"packages/engine/src/ecs/classes/Query.ts:76")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"addentity"},"addEntity"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"addEntity"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,s.kt)("em",{parentName:"a"},"Entity")),"): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Add entity to this query."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,s.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"entity")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,s.kt)("em",{parentName:"a"},"Entity"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Entity to be added.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/ecs/classes/Query.ts#L132"},"packages/engine/src/ecs/classes/Query.ts:132")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"match"},"match"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"match"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,s.kt)("em",{parentName:"a"},"Entity")),"): ",(0,s.kt)("em",{parentName:"p"},"boolean")),(0,s.kt)("p",null,"Check if an entity matches this query."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,s.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"entity")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,s.kt)("em",{parentName:"a"},"Entity"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Entity to be matched for this query.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"boolean")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/ecs/classes/Query.ts#L163"},"packages/engine/src/ecs/classes/Query.ts:163")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"removeentity"},"removeEntity"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"removeEntity"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,s.kt)("em",{parentName:"a"},"Entity")),"): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Remove entity from this query."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,s.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"entity")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,s.kt)("em",{parentName:"a"},"Entity"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Entity to be removed.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/ecs/classes/Query.ts#L145"},"packages/engine/src/ecs/classes/Query.ts:145")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"stats"},"stats"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"stats"),"(): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_query.querystattype"},(0,s.kt)("em",{parentName:"a"},"QueryStatType"))),(0,s.kt)("p",null,"Return stats for this query."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_query.querystattype"},(0,s.kt)("em",{parentName:"a"},"QueryStatType"))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/ecs/classes/Query.ts#L189"},"packages/engine/src/ecs/classes/Query.ts:189")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"tojson"},"toJSON"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"toJSON"),"(): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_query.queryserializetype"},(0,s.kt)("em",{parentName:"a"},"QuerySerializeType"))),(0,s.kt)("p",null,"Serialize query to JSON."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_query.queryserializetype"},(0,s.kt)("em",{parentName:"a"},"QuerySerializeType"))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/ecs/classes/Query.ts#L172"},"packages/engine/src/ecs/classes/Query.ts:172")))}u.isMDXComponent=!0}}]);