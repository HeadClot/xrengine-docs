(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[51519],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),o=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=o(n),k=r,u=m["".concat(l,".").concat(k)]||m[k]||d[k]||s;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<s;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36274:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return o},default:function(){return d}});var a=n(22122),r=n(19756),s=(n(67294),n(3905)),i=["components"],p={id:"ecs_classes_entityeventdispatcher.entityeventdispatcher",title:"Class: EntityEventDispatcher",sidebar_label:"EntityEventDispatcher",custom_edit_url:null},l={unversionedId:"docs-engine/classes/ecs_classes_entityeventdispatcher.entityeventdispatcher",id:"docs-engine/classes/ecs_classes_entityeventdispatcher.entityeventdispatcher",isDocsHomePage:!1,title:"Class: EntityEventDispatcher",description:"ecs/classes/EntityEventDispatcher.EntityEventDispatcher",source:"@site/docs/docs-engine/classes/ecs_classes_entityeventdispatcher.entityeventdispatcher.md",sourceDirName:"docs-engine/classes",slug:"/docs-engine/classes/ecs_classes_entityeventdispatcher.entityeventdispatcher",permalink:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entityeventdispatcher.entityeventdispatcher",editUrl:null,version:"current",sidebar_label:"EntityEventDispatcher",frontMatter:{id:"ecs_classes_entityeventdispatcher.entityeventdispatcher",title:"Class: EntityEventDispatcher",sidebar_label:"EntityEventDispatcher",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Class: Entity",permalink:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},next:{title:"Class: EntityPool",permalink:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entitypool.entitypool"}},o=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"_listeners",id:"_listeners",children:[]},{value:"stats",id:"stats",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addEventListener",id:"addeventlistener",children:[]},{value:"dispatchEvent",id:"dispatchevent",children:[]},{value:"hasEventListener",id:"haseventlistener",children:[]},{value:"removeEventListener",id:"removeeventlistener",children:[]},{value:"reset",id:"reset",children:[]},{value:"resetCounters",id:"resetcounters",children:[]}]}],c={toc:o};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/ecs_classes_entityeventdispatcher"},"ecs/classes/EntityEventDispatcher"),".EntityEventDispatcher"),(0,s.kt)("p",null,"This class provides methods to manage events dispatches."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,"+"," ",(0,s.kt)("strong",{parentName:"p"},"new EntityEventDispatcher"),"(): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entityeventdispatcher.entityeventdispatcher"},(0,s.kt)("em",{parentName:"a"},"EntityEventDispatcher"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entityeventdispatcher.entityeventdispatcher"},(0,s.kt)("em",{parentName:"a"},"EntityEventDispatcher"))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/EntityEventDispatcher.ts#L14"},"packages/engine/src/ecs/classes/EntityEventDispatcher.ts:14")),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"_listeners"},"_","listeners"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"_","listeners"),": ",(0,s.kt)("em",{parentName:"p"},"object")),(0,s.kt)("p",null,"Map to store listeners by event names."),(0,s.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/EntityEventDispatcher.ts#L11"},"packages/engine/src/ecs/classes/EntityEventDispatcher.ts:11")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"stats"},"stats"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"stats"),": ",(0,s.kt)("em",{parentName:"p"},"object")),(0,s.kt)("p",null,"Keeps count of fired and handled events."),(0,s.kt)("h4",{id:"type-declaration-1"},"Type declaration:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"fired")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"number"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"handled")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"number"))))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/EntityEventDispatcher.ts#L14"},"packages/engine/src/ecs/classes/EntityEventDispatcher.ts:14")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"addeventlistener"},"addEventListener"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"addEventListener"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"eventName"),": ",(0,s.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,s.kt)("em",{parentName:"p"},"number"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"listener"),": Function): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Adds an event listener."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,s.kt)("h4",{id:"parameters"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"eventName")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,s.kt)("em",{parentName:"td"},"number")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Name of the event to listen.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"listener")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Function"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Callback to trigger when the event is fired.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/EntityEventDispatcher.ts#L39"},"packages/engine/src/ecs/classes/EntityEventDispatcher.ts:39")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"dispatchevent"},"dispatchEvent"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"dispatchEvent"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"eventName"),": ",(0,s.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,s.kt)("em",{parentName:"p"},"number"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,s.kt)("em",{parentName:"a"},"Entity")),", ",(0,s.kt)("inlineCode",{parentName:"p"},"component?"),": ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},(0,s.kt)("em",{parentName:"a"},"Component")),"<any",">","): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Dispatches an event with given Entity and Component and increases fired event's count."),(0,s.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"eventName")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,s.kt)("em",{parentName:"td"},"number")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Name of the event to dispatch.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"entity")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,s.kt)("em",{parentName:"a"},"Entity"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Entity to emit.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"component?")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},(0,s.kt)("em",{parentName:"a"},"Component")),"<any",">"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Component to emit.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/EntityEventDispatcher.ts#L84"},"packages/engine/src/ecs/classes/EntityEventDispatcher.ts:84")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"haseventlistener"},"hasEventListener"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"hasEventListener"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"eventName"),": ",(0,s.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,s.kt)("em",{parentName:"p"},"number"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"listener"),": Function): ",(0,s.kt)("em",{parentName:"p"},"boolean")),(0,s.kt)("p",null,"Checks if an event listener is already added to the list of listeners."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,s.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"eventName")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,s.kt)("em",{parentName:"td"},"number")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Name of the event to check.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"listener")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Function"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Callback for the specified event.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"boolean")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/EntityEventDispatcher.ts#L57"},"packages/engine/src/ecs/classes/EntityEventDispatcher.ts:57")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"removeeventlistener"},"removeEventListener"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"removeEventListener"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"eventName"),": ",(0,s.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,s.kt)("em",{parentName:"p"},"number"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"listener"),": Function): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Removes an event listener."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,s.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"eventName")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,s.kt)("em",{parentName:"td"},"number")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Name of the event to remove.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"listener")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Function"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Callback for the specified event.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/EntityEventDispatcher.ts#L68"},"packages/engine/src/ecs/classes/EntityEventDispatcher.ts:68")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"reset"},"reset"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"reset"),"(): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Resets the Dispatcher"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/EntityEventDispatcher.ts#L25"},"packages/engine/src/ecs/classes/EntityEventDispatcher.ts:25")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"resetcounters"},"resetCounters"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"resetCounters"),"(): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Reset stats counters."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/EntityEventDispatcher.ts#L102"},"packages/engine/src/ecs/classes/EntityEventDispatcher.ts:102")))}d.isMDXComponent=!0}}]);