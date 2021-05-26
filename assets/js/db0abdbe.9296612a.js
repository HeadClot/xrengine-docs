(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[70734],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=i(n),h=o,k=d["".concat(c,".").concat(h)]||d[h]||l[h]||s;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,r[1]=p;for(var i=2;i<s;i++)r[i]=n[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23806:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(22122),o=n(19756),s=(n(67294),n(3905)),r={id:"state_components_state.state",title:"Class: State",sidebar_label:"State",custom_edit_url:null},p={unversionedId:"docs-engine/classes/state_components_state.state",id:"docs-engine/classes/state_components_state.state",isDocsHomePage:!1,title:"Class: State",description:"state/components/State.State",source:"@site/docs/docs-engine/classes/state_components_state.state.md",sourceDirName:"docs-engine/classes",slug:"/docs-engine/classes/state_components_state.state",permalink:"/xrengine-docs/docs/docs-engine/classes/state_components_state.state",editUrl:null,version:"current",sidebar_label:"State",frontMatter:{id:"state_components_state.state",title:"Class: State",sidebar_label:"State",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Class: ServerSpawnSystem",permalink:"/xrengine-docs/docs/docs-engine/classes/scene_systems_serverspawnsystem.serverspawnsystem"},next:{title:"Class: StateSystem",permalink:"/xrengine-docs/docs/docs-engine/classes/state_systems_statesystem.statesystem"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"_pool",id:"_pool",children:[]},{value:"_typeId",id:"_typeid",children:[]},{value:"data",id:"data",children:[]},{value:"entity",id:"entity",children:[]},{value:"lastData",id:"lastdata",children:[]},{value:"name",id:"name",children:[]},{value:"schema",id:"schema",children:[]},{value:"timer",id:"timer",children:[]},{value:"_schema",id:"_schema",children:[]},{value:"_typeId",id:"_typeid-1",children:[]}]},{value:"Methods",id:"methods",children:[{value:"checkUndefinedAttributes",id:"checkundefinedattributes",children:[]},{value:"clone",id:"clone",children:[]},{value:"copy",id:"copy",children:[]},{value:"dispose",id:"dispose",children:[]},{value:"reset",id:"reset",children:[]},{value:"getName",id:"getname",children:[]}]}],i={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/state_components_state"},"state/components/State"),".State"),(0,s.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent"},(0,s.kt)("em",{parentName:"a"},"BehaviorComponent")),"<",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/state_types_statealias#statealias"},(0,s.kt)("em",{parentName:"a"},"StateAlias")),", ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/state_interfaces_stateschema.stateschema"},(0,s.kt)("em",{parentName:"a"},"StateSchema")),", ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/state_interfaces_statevalue.statevalue"},(0,s.kt)("em",{parentName:"a"},"StateValue")),"<",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/common_types_numericaltypes#numericaltype"},(0,s.kt)("em",{parentName:"a"},"NumericalType")),">",">"),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("strong",{parentName:"p"},"State")))),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,"+"," ",(0,s.kt)("strong",{parentName:"p"},"new State"),"(): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/state_components_state.state"},(0,s.kt)("em",{parentName:"a"},"State"))),(0,s.kt)("p",null,"Constructs a component an empty map."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/state_components_state.state"},(0,s.kt)("em",{parentName:"a"},"State"))),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent"},"BehaviorComponent")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/common/components/BehaviorComponent.ts#L36"},"packages/engine/src/common/components/BehaviorComponent.ts:36")),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"_pool"},"_","pool"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"_","pool"),": ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("p",null,"The pool an individual instantiated component is attached to.\nEach component type has a pool, pool size is set on engine initialization."),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent"},"BehaviorComponent"),".",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent#_pool"},"_pool")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Component.ts#L24"},"packages/engine/src/ecs/classes/Component.ts:24")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"_typeid"},"_","typeId"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"_","typeId"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"= -1"),(0,s.kt)("p",null,"The type ID of this component, should be the same as the component's constructed class."),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent"},"BehaviorComponent"),".",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent#_typeid"},"_typeId")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Component.ts#L29"},"packages/engine/src/ecs/classes/Component.ts:29")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"data"},"data"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"data"),": ",(0,s.kt)("em",{parentName:"p"},"BehaviorMapType"),"<",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/state_types_statealias#statealias"},(0,s.kt)("em",{parentName:"a"},"StateAlias")),", ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/state_interfaces_statevalue.statevalue"},(0,s.kt)("em",{parentName:"a"},"StateValue")),"<",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/common_types_numericaltypes#numericaltype"},(0,s.kt)("em",{parentName:"a"},"NumericalType")),">",">"),(0,s.kt)("p",null,"Holds current state related data of the component."),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent"},"BehaviorComponent"),".",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent#data"},"data")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/common/components/BehaviorComponent.ts#L36"},"packages/engine/src/common/components/BehaviorComponent.ts:36")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"entity"},"entity"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"entity"),": ",(0,s.kt)("em",{parentName:"p"},"any"),'= ""'),(0,s.kt)("p",null,'The "entity" this component is attached to.'),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent"},"BehaviorComponent"),".",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent#entity"},"entity")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Component.ts#L39"},"packages/engine/src/ecs/classes/Component.ts:39")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"lastdata"},"lastData"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"lastData"),": ",(0,s.kt)("em",{parentName:"p"},"BehaviorMapType"),"<",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/state_types_statealias#statealias"},(0,s.kt)("em",{parentName:"a"},"StateAlias")),", ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/state_interfaces_statevalue.statevalue"},(0,s.kt)("em",{parentName:"a"},"StateValue")),"<",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/common_types_numericaltypes#numericaltype"},(0,s.kt)("em",{parentName:"a"},"NumericalType")),">",">"),(0,s.kt)("p",null,"Holds previous state related data of the component."),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent"},"BehaviorComponent"),".",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent#lastdata"},"lastData")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/common/components/BehaviorComponent.ts#L34"},"packages/engine/src/common/components/BehaviorComponent.ts:34")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"name"},"name"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"name"),": ",(0,s.kt)("em",{parentName:"p"},"any"),'= ""'),(0,s.kt)("p",null,"The name of the component instance, derived from the class name."),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent"},"BehaviorComponent"),".",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent#name"},"name")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Component.ts#L34"},"packages/engine/src/ecs/classes/Component.ts:34")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"schema"},"schema"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"schema"),": ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/state_interfaces_stateschema.stateschema"},(0,s.kt)("em",{parentName:"a"},"StateSchema"))),(0,s.kt)("p",null,"Behavior Schema of the component."),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent"},"BehaviorComponent"),".",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent#schema"},"schema")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/common/components/BehaviorComponent.ts#L32"},"packages/engine/src/common/components/BehaviorComponent.ts:32")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"timer"},"timer"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"timer"),": ",(0,s.kt)("em",{parentName:"p"},"number")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/state/components/State.ts#L9"},"packages/engine/src/state/components/State.ts:9")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"_schema"},"_","schema"),(0,s.kt)("p",null,"\u25aa ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"_","schema"),": ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentschema"},(0,s.kt)("em",{parentName:"a"},"ComponentSchema"))),(0,s.kt)("p",null,"Defines the attributes and attribute types on the constructed component class.\\\nAll component variables should be reflected in the component schema."),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent"},"BehaviorComponent"),".",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent#_schema"},"_schema")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Component.ts#L13"},"packages/engine/src/ecs/classes/Component.ts:13")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"_typeid-1"},"_","typeId"),(0,s.kt)("p",null,"\u25aa ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"_","typeId"),": ",(0,s.kt)("em",{parentName:"p"},"number")),(0,s.kt)("p",null,"The unique ID for this type of component (","<","C",">",")."),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent"},"BehaviorComponent"),".",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent#_typeid"},"_typeId")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Component.ts#L18"},"packages/engine/src/ecs/classes/Component.ts:18")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"checkundefinedattributes"},"checkUndefinedAttributes"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"checkUndefinedAttributes"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"src"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Make sure attributes on this component have been defined in the schema"),(0,s.kt)("h4",{id:"parameters"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"src")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent"},"BehaviorComponent")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Component.ts#L142"},"packages/engine/src/ecs/classes/Component.ts:142")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"clone"},"clone"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"clone"),"(): ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("p",null,"Default logic for cloning component.\nEach component class can override this."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("p",null,"a new component as a clone of itself."),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent"},"BehaviorComponent")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Component.ts#L98"},"packages/engine/src/ecs/classes/Component.ts:98")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"copy"},"copy"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"copy"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"src"),": ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/state_components_state.state"},(0,s.kt)("em",{parentName:"a"},"State")),"): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/state_components_state.state"},(0,s.kt)("em",{parentName:"a"},"State"))),(0,s.kt)("p",null,"Make Copy of the given Component."),(0,s.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"src")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/state_components_state.state"},(0,s.kt)("em",{parentName:"a"},"State"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Source Component to make copy.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/state_components_state.state"},(0,s.kt)("em",{parentName:"a"},"State"))),(0,s.kt)("p",null,"Copied Component."),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent"},"BehaviorComponent")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/common/components/BehaviorComponent.ts#L52"},"packages/engine/src/common/components/BehaviorComponent.ts:52")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"dispose"},"dispose"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"dispose"),"(): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Put the component back into it's component pool.\nCalled when component is removed from an entity."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent"},"BehaviorComponent")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Component.ts#L125"},"packages/engine/src/ecs/classes/Component.ts:125")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"reset"},"reset"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"reset"),"(): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Clear the Component."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent"},"BehaviorComponent")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/common/components/BehaviorComponent.ts#L59"},"packages/engine/src/common/components/BehaviorComponent.ts:59")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"getname"},"getName"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Static"),(0,s.kt)("strong",{parentName:"p"},"getName"),"(): ",(0,s.kt)("em",{parentName:"p"},"string")),(0,s.kt)("p",null,"Get the name of this component class.\nUseful for JSON serialization, etc."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"string")),(0,s.kt)("p",null,"Inherited from: ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent"},"BehaviorComponent")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Component.ts#L135"},"packages/engine/src/ecs/classes/Component.ts:135")))}m.isMDXComponent=!0}}]);