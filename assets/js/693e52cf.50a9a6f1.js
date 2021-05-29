(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[93547],{3905:function(e,t,s){"use strict";s.d(t,{Zo:function(){return o},kt:function(){return k}});var n=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function c(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},o=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=l(s),k=a,u=d["".concat(p,".").concat(k)]||d[k]||m[k]||r;return s?n.createElement(u,i(i({ref:t},o),{},{components:s})):n.createElement(u,i({ref:t},o))}));function k(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=s.length,i=new Array(r);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=s[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,s)}d.displayName="MDXCreateElement"},78115:function(e,t,s){"use strict";s.r(t),s.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var n=s(22122),a=s(19756),r=(s(67294),s(3905)),i=["components"],c={id:"interaction_systems_interactivesystem.interactivesystem",title:"Class: InteractiveSystem",sidebar_label:"InteractiveSystem",custom_edit_url:null},p={unversionedId:"docs-engine/classes/interaction_systems_interactivesystem.interactivesystem",id:"docs-engine/classes/interaction_systems_interactivesystem.interactivesystem",isDocsHomePage:!1,title:"Class: InteractiveSystem",description:"interaction/systems/InteractiveSystem.InteractiveSystem",source:"@site/docs/docs-engine/classes/interaction_systems_interactivesystem.interactivesystem.md",sourceDirName:"docs-engine/classes",slug:"/docs-engine/classes/interaction_systems_interactivesystem.interactivesystem",permalink:"/xrengine-docs/docs/docs-engine/classes/interaction_systems_interactivesystem.interactivesystem",editUrl:null,version:"current",sidebar_label:"InteractiveSystem",frontMatter:{id:"interaction_systems_interactivesystem.interactivesystem",title:"Class: InteractiveSystem",sidebar_label:"InteractiveSystem",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Class: SubFocused",permalink:"/xrengine-docs/docs/docs-engine/classes/interaction_components_subfocused.subfocused"},next:{title:"Class: Network",permalink:"/xrengine-docs/docs/docs-engine/classes/networking_classes_network.network"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"_mandatoryQueries",id:"_mandatoryqueries",children:[]},{value:"_queries",id:"_queries",children:[]},{value:"enabled",id:"enabled",children:[]},{value:"executeTime",id:"executetime",children:[]},{value:"focused",id:"focused",children:[]},{value:"initialized",id:"initialized",children:[]},{value:"name",id:"name",children:[]},{value:"newFocused",id:"newfocused",children:[]},{value:"previousEntity",id:"previousentity",children:[]},{value:"previousEntity2DPosition",id:"previousentity2dposition",children:[]},{value:"priority",id:"priority",children:[]},{value:"queryResults",id:"queryresults",children:[]},{value:"updateType",id:"updatetype",children:[]},{value:"EVENTS",id:"events",children:[]},{value:"instance",id:"instance",children:[]},{value:"isSystem",id:"issystem",children:[]},{value:"queries",id:"queries",children:[]}]},{value:"Methods",id:"methods",children:[{value:"clearEventQueues",id:"cleareventqueues",children:[]},{value:"dispose",id:"dispose",children:[]},{value:"execute",id:"execute",children:[]},{value:"getQuery",id:"getquery",children:[]},{value:"initialize",id:"initialize",children:[]},{value:"play",id:"play",children:[]},{value:"stop",id:"stop",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"getName",id:"getname",children:[]}]}],o={toc:l};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},o,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/interaction_systems_interactivesystem"},"interaction/systems/InteractiveSystem"),".InteractiveSystem"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},(0,r.kt)("em",{parentName:"a"},"System"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},"InteractiveSystem")))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"+"," ",(0,r.kt)("strong",{parentName:"p"},"new InteractiveSystem"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"attributes?"),": ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_system.systemattributes"},(0,r.kt)("em",{parentName:"a"},"SystemAttributes")),"): ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/interaction_systems_interactivesystem.interactivesystem"},(0,r.kt)("em",{parentName:"a"},"InteractiveSystem"))),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"attributes")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_system.systemattributes"},(0,r.kt)("em",{parentName:"a"},"SystemAttributes"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"{}")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/interaction_systems_interactivesystem.interactivesystem"},(0,r.kt)("em",{parentName:"a"},"InteractiveSystem"))),(0,r.kt)("p",null,"Overrides: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/interaction/systems/InteractiveSystem.ts#L252"},"packages/engine/src/interaction/systems/InteractiveSystem.ts:252")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"_mandatoryqueries"},"_","mandatoryQueries"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"_","mandatoryQueries"),": ",(0,r.kt)("em",{parentName:"p"},"any")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#_mandatoryqueries"},"_mandatoryQueries")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/System.ts#L74"},"packages/engine/src/ecs/classes/System.ts:74")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_queries"},"_","queries"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"_","queries"),": ",(0,r.kt)("em",{parentName:"p"},"object"),"= {}"),(0,r.kt)("p",null,"Queries of system instances."),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#_queries"},"_queries")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/System.ts#L107"},"packages/engine/src/ecs/classes/System.ts:107")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"enabled"},"enabled"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"enabled"),": ",(0,r.kt)("em",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Whether the system will execute during the world tick."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#enabled"},"enabled")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/System.ts#L101"},"packages/engine/src/ecs/classes/System.ts:101")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"executetime"},"executeTime"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"executeTime"),": ",(0,r.kt)("em",{parentName:"p"},"number")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#executetime"},"executeTime")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/System.ts#L76"},"packages/engine/src/ecs/classes/System.ts:76")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"focused"},"focused"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"focused"),": ",(0,r.kt)("em",{parentName:"p"},"Set"),"<",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,r.kt)("em",{parentName:"a"},"Entity")),">"),(0,r.kt)("p",null,"Elements that was in focused state on last execution"),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/interaction/systems/InteractiveSystem.ts#L246"},"packages/engine/src/interaction/systems/InteractiveSystem.ts:246")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"initialized"},"initialized"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"initialized"),": ",(0,r.kt)("em",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#initialized"},"initialized")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/System.ts#L77"},"packages/engine/src/ecs/classes/System.ts:77")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"name"),": ",(0,r.kt)("em",{parentName:"p"},"string")),(0,r.kt)("p",null,"Name of the System."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#name"},"name")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/System.ts#L104"},"packages/engine/src/ecs/classes/System.ts:104")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"newfocused"},"newFocused"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"newFocused"),": ",(0,r.kt)("em",{parentName:"p"},"Set"),"<",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,r.kt)("em",{parentName:"a"},"Entity")),">"),(0,r.kt)("p",null,"Elements that are focused on current execution"),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/interaction/systems/InteractiveSystem.ts#L250"},"packages/engine/src/interaction/systems/InteractiveSystem.ts:250")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"previousentity"},"previousEntity"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"previousEntity"),": ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,r.kt)("em",{parentName:"a"},"Entity"))),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/interaction/systems/InteractiveSystem.ts#L251"},"packages/engine/src/interaction/systems/InteractiveSystem.ts:251")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"previousentity2dposition"},"previousEntity2DPosition"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"previousEntity2DPosition"),": ",(0,r.kt)("em",{parentName:"p"},"Vector3")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/interaction/systems/InteractiveSystem.ts#L252"},"packages/engine/src/interaction/systems/InteractiveSystem.ts:252")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"priority"},"priority"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"priority"),": ",(0,r.kt)("em",{parentName:"p"},"number")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#priority"},"priority")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/System.ts#L75"},"packages/engine/src/ecs/classes/System.ts:75")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"queryresults"},"queryResults"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"queryResults"),": ",(0,r.kt)("em",{parentName:"p"},"object"),"= {}"),(0,r.kt)("p",null,"The results of the queries.\nShould be used inside of execute."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,r.kt)("h4",{id:"type-declaration-1"},"Type declaration:"),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#queryresults"},"queryResults")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/System.ts#L87"},"packages/engine/src/ecs/classes/System.ts:87")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"updatetype"},"updateType"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"updateType"),": ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/enums/ecs_functions_systemupdatetype.systemupdatetype"},(0,r.kt)("em",{parentName:"a"},"SystemUpdateType"))),(0,r.kt)("p",null,"Overrides: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#updatetype"},"updateType")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/interaction/systems/InteractiveSystem.ts#L241"},"packages/engine/src/interaction/systems/InteractiveSystem.ts:241")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"events"},"EVENTS"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"EVENTS"),": ",(0,r.kt)("em",{parentName:"p"},"object")),(0,r.kt)("h4",{id:"type-declaration-2"},"Type declaration:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"OBJECT_ACTIVATION")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"OBJECT_HOVER")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"USER_HOVER")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"string"))))),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/interaction/systems/InteractiveSystem.ts#L236"},"packages/engine/src/interaction/systems/InteractiveSystem.ts:236")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"instance"},"instance"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"instance"),": ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},(0,r.kt)("em",{parentName:"a"},"System"))),(0,r.kt)("p",null,"Defines what Components the System will query for.\nThis needs to be user defined."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#instance"},"instance")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/System.ts#L67"},"packages/engine/src/ecs/classes/System.ts:67")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"issystem"},"isSystem"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"isSystem"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#issystem"},"isSystem")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/System.ts#L73"},"packages/engine/src/ecs/classes/System.ts:73")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"queries"},"queries"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"queries"),": ",(0,r.kt)("em",{parentName:"p"},"any")),(0,r.kt)("p",null,"Overrides: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#queries"},"queries")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/interaction/systems/InteractiveSystem.ts#L477"},"packages/engine/src/interaction/systems/InteractiveSystem.ts:477")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"cleareventqueues"},"clearEventQueues"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"clearEventQueues"),"(): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Clears event queues."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/System.ts#L262"},"packages/engine/src/ecs/classes/System.ts:262")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"dispose"},"dispose"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"dispose"),"(): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Overrides: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/interaction/systems/InteractiveSystem.ts#L263"},"packages/engine/src/interaction/systems/InteractiveSystem.ts:263")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"execute"},"execute"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"execute"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"delta"),": ",(0,r.kt)("em",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"time"),": ",(0,r.kt)("em",{parentName:"p"},"number"),"): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"delta")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"time")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"number"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Overrides: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/interaction/systems/InteractiveSystem.ts#L275"},"packages/engine/src/interaction/systems/InteractiveSystem.ts:275")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getquery"},"getQuery"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getQuery"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"components"),": (",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentconstructor"},(0,r.kt)("em",{parentName:"a"},"ComponentConstructor")),"<any",">"," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_system.notcomponent"},(0,r.kt)("em",{parentName:"a"},"NotComponent")),"<any",">",")[]): ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_query.query"},(0,r.kt)("em",{parentName:"a"},"Query"))),(0,r.kt)("p",null,"Get query from the component."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"components")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentconstructor"},(0,r.kt)("em",{parentName:"a"},"ComponentConstructor")),"<any",">"," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_system.notcomponent"},(0,r.kt)("em",{parentName:"a"},"NotComponent")),"<any",">",")[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of components either component or not component.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_query.query"},(0,r.kt)("em",{parentName:"a"},"Query"))),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/System.ts#L241"},"packages/engine/src/ecs/classes/System.ts:241")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"initialize"},"initialize"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"initialize"),"(): ",(0,r.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/System.ts#L112"},"packages/engine/src/ecs/classes/System.ts:112")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"play"},"play"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"play"),"(): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Plays the system."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/System.ts#L257"},"packages/engine/src/ecs/classes/System.ts:257")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"stop"},"stop"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"stop"),"(): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Stop the system."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/System.ts#L251"},"packages/engine/src/ecs/classes/System.ts:251")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tojson"},"toJSON"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toJSON"),"(): ",(0,r.kt)("em",{parentName:"p"},"any")),(0,r.kt)("p",null,"Serialize the System"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"any")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/System.ts#L286"},"packages/engine/src/ecs/classes/System.ts:286")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getname"},"getName"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static"),(0,r.kt)("strong",{parentName:"p"},"getName"),"(): ",(0,r.kt)("em",{parentName:"p"},"string")),(0,r.kt)("p",null,"Get name of the System"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"string")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/System.ts#L230"},"packages/engine/src/ecs/classes/System.ts:230")))}m.isMDXComponent=!0}}]);