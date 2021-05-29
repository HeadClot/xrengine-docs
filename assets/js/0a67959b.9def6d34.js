(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[661],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=s.createContext({}),c=function(e){var t=s.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return s.createElement(m.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},k=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),k=c(n),d=a,u=k["".concat(m,".").concat(d)]||k[d]||o[d]||r;return n?s.createElement(u,i(i({ref:t},l),{},{components:n})):s.createElement(u,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=k;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<r;c++)i[c]=n[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}k.displayName="MDXCreateElement"},27432:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return m},toc:function(){return c},default:function(){return o}});var s=n(22122),a=n(19756),r=(n(67294),n(3905)),i=["components"],p={id:"ecs_classes_system.system",title:"Class: System",sidebar_label:"System",custom_edit_url:null},m={unversionedId:"docs-engine/classes/ecs_classes_system.system",id:"docs-engine/classes/ecs_classes_system.system",isDocsHomePage:!1,title:"Class: System",description:"ecs/classes/System.System",source:"@site/docs/docs-engine/classes/ecs_classes_system.system.md",sourceDirName:"docs-engine/classes",slug:"/docs-engine/classes/ecs_classes_system.system",permalink:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system",editUrl:null,version:"current",sidebar_label:"System",frontMatter:{id:"ecs_classes_system.system",title:"Class: System",sidebar_label:"System",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Class: Query",permalink:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_query.query"},next:{title:"Class: SystemStateComponent<C\\>",permalink:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_systemstatecomponent.systemstatecomponent"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Indexable",id:"indexable",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"_mandatoryQueries",id:"_mandatoryqueries",children:[]},{value:"_queries",id:"_queries",children:[]},{value:"enabled",id:"enabled",children:[]},{value:"executeTime",id:"executetime",children:[]},{value:"initialized",id:"initialized",children:[]},{value:"name",id:"name",children:[]},{value:"priority",id:"priority",children:[]},{value:"queryResults",id:"queryresults",children:[]},{value:"updateType",id:"updatetype",children:[]},{value:"instance",id:"instance",children:[]},{value:"isSystem",id:"issystem",children:[]},{value:"queries",id:"queries",children:[]}]},{value:"Methods",id:"methods",children:[{value:"clearEventQueues",id:"cleareventqueues",children:[]},{value:"dispose",id:"dispose",children:[]},{value:"execute",id:"execute",children:[]},{value:"getQuery",id:"getquery",children:[]},{value:"initialize",id:"initialize",children:[]},{value:"play",id:"play",children:[]},{value:"stop",id:"stop",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"getName",id:"getname",children:[]}]}],l={toc:c};function o(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,s.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/ecs_classes_system"},"ecs/classes/System"),".System"),(0,r.kt)("p",null,"Abstract class to define System properties."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"System")),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/audio_systems_audiosystem.audiosystem"},(0,r.kt)("em",{parentName:"a"},"AudioSystem"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/audio_systems_positionalaudiosystem.positionalaudiosystem"},(0,r.kt)("em",{parentName:"a"},"PositionalAudioSystem"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/camera_systems_camerasystem.camerasystem"},(0,r.kt)("em",{parentName:"a"},"CameraSystem"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/character_charactercontrollersystem.charactercontrollersystem"},(0,r.kt)("em",{parentName:"a"},"CharacterControllerSystem"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/debug_systems_debughelperssystem.debughelperssystem"},(0,r.kt)("em",{parentName:"a"},"DebugHelpersSystem"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/game_systems_gamemanagersystem.gamemanagersystem"},(0,r.kt)("em",{parentName:"a"},"GameManagerSystem"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/input_systems_actionsystem.actionsystem"},(0,r.kt)("em",{parentName:"a"},"ActionSystem"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/input_systems_clientinputsystem.clientinputsystem"},(0,r.kt)("em",{parentName:"a"},"ClientInputSystem"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/interaction_systems_interactivesystem.interactivesystem"},(0,r.kt)("em",{parentName:"a"},"InteractiveSystem"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/networking_systems_clientnetworkstatesystem.clientnetworkstatesystem"},(0,r.kt)("em",{parentName:"a"},"ClientNetworkStateSystem"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/networking_systems_clientnetworksystem.clientnetworksystem"},(0,r.kt)("em",{parentName:"a"},"ClientNetworkSystem"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/networking_systems_mediastreamsystem.mediastreamsystem"},(0,r.kt)("em",{parentName:"a"},"MediaStreamSystem"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/networking_systems_servernetworkincomingsystem.servernetworkincomingsystem"},(0,r.kt)("em",{parentName:"a"},"ServerNetworkIncomingSystem"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/networking_systems_servernetworkoutgoingsystem.servernetworkoutgoingsystem"},(0,r.kt)("em",{parentName:"a"},"ServerNetworkOutgoingSystem"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/particles_systems_particlesystem.particlesystem"},(0,r.kt)("em",{parentName:"a"},"ParticleSystem"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_systems_physicssystem.physicssystem"},(0,r.kt)("em",{parentName:"a"},"PhysicsSystem"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_highlightsystem.highlightsystem"},(0,r.kt)("em",{parentName:"a"},"HighlightSystem"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/renderer_webglrenderersystem.webglrenderersystem"},(0,r.kt)("em",{parentName:"a"},"WebGLRendererSystem"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/scene_systems_serverspawnsystem.serverspawnsystem"},(0,r.kt)("em",{parentName:"a"},"ServerSpawnSystem"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/state_systems_statesystem.statesystem"},(0,r.kt)("em",{parentName:"a"},"StateSystem"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/transform_systems_transformsystem.transformsystem"},(0,r.kt)("em",{parentName:"a"},"TransformSystem"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ui_systems_uipanelsystem.uipanelsystem"},(0,r.kt)("em",{parentName:"a"},"UIPanelSystem"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/vehicle_vehiclesystem.vehiclesystem"},(0,r.kt)("em",{parentName:"a"},"VehicleSystem"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/xr_systems_xrsystem.xrsystem"},(0,r.kt)("em",{parentName:"a"},"XRSystem"))))),(0,r.kt)("h2",{id:"indexable"},"Indexable"),(0,r.kt)("p",null,"\u25aa ","[x: ",(0,r.kt)("em",{parentName:"p"},"string"),"]",": ",(0,r.kt)("em",{parentName:"p"},"any")),(0,r.kt)("p",null,"Name of the property."),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"+"," ",(0,r.kt)("strong",{parentName:"p"},"new System"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"attributes?"),": ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_system.systemattributes"},(0,r.kt)("em",{parentName:"a"},"SystemAttributes")),"): ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},(0,r.kt)("em",{parentName:"a"},"System"))),(0,r.kt)("p",null,"Initializes system"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"attributes")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_system.systemattributes"},(0,r.kt)("em",{parentName:"a"},"SystemAttributes"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"User defined system attributes.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},(0,r.kt)("em",{parentName:"a"},"System"))),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L112"},"packages/engine/src/ecs/classes/System.ts:112")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"_mandatoryqueries"},"_","mandatoryQueries"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"_","mandatoryQueries"),": ",(0,r.kt)("em",{parentName:"p"},"any")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L74"},"packages/engine/src/ecs/classes/System.ts:74")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_queries"},"_","queries"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"_","queries"),": ",(0,r.kt)("em",{parentName:"p"},"object"),"= {}"),(0,r.kt)("p",null,"Queries of system instances."),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L107"},"packages/engine/src/ecs/classes/System.ts:107")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"enabled"},"enabled"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"enabled"),": ",(0,r.kt)("em",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Whether the system will execute during the world tick."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L101"},"packages/engine/src/ecs/classes/System.ts:101")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"executetime"},"executeTime"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"executeTime"),": ",(0,r.kt)("em",{parentName:"p"},"number")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L76"},"packages/engine/src/ecs/classes/System.ts:76")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"initialized"},"initialized"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"initialized"),": ",(0,r.kt)("em",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L77"},"packages/engine/src/ecs/classes/System.ts:77")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"name"),": ",(0,r.kt)("em",{parentName:"p"},"string")),(0,r.kt)("p",null,"Name of the System."),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L104"},"packages/engine/src/ecs/classes/System.ts:104")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"priority"},"priority"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"priority"),": ",(0,r.kt)("em",{parentName:"p"},"number")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L75"},"packages/engine/src/ecs/classes/System.ts:75")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"queryresults"},"queryResults"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"queryResults"),": ",(0,r.kt)("em",{parentName:"p"},"object"),"= {}"),(0,r.kt)("p",null,"The results of the queries.\nShould be used inside of execute."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,r.kt)("h4",{id:"type-declaration-1"},"Type declaration:"),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L87"},"packages/engine/src/ecs/classes/System.ts:87")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"updatetype"},"updateType"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"updateType"),": ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/enums/ecs_functions_systemupdatetype.systemupdatetype"},(0,r.kt)("em",{parentName:"a"},"SystemUpdateType"))),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L79"},"packages/engine/src/ecs/classes/System.ts:79")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"instance"},"instance"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"instance"),": ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},(0,r.kt)("em",{parentName:"a"},"System"))),(0,r.kt)("p",null,"Defines what Components the System will query for.\nThis needs to be user defined."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L67"},"packages/engine/src/ecs/classes/System.ts:67")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"issystem"},"isSystem"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"isSystem"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L73"},"packages/engine/src/ecs/classes/System.ts:73")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"queries"},"queries"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"queries"),": ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_system.systemqueries"},(0,r.kt)("em",{parentName:"a"},"SystemQueries")),"= {}"),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L68"},"packages/engine/src/ecs/classes/System.ts:68")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"cleareventqueues"},"clearEventQueues"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"clearEventQueues"),"(): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Clears event queues."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L262"},"packages/engine/src/ecs/classes/System.ts:262")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"dispose"},"dispose"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"dispose"),"(): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L283"},"packages/engine/src/ecs/classes/System.ts:283")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"execute"},"execute"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional"),(0,r.kt)("strong",{parentName:"p"},"execute"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"delta"),": ",(0,r.kt)("em",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"time"),": ",(0,r.kt)("em",{parentName:"p"},"number"),"): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Execute Method definition."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"delta")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"time")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"number"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L110"},"packages/engine/src/ecs/classes/System.ts:110")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getquery"},"getQuery"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getQuery"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"components"),": (",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentconstructor"},(0,r.kt)("em",{parentName:"a"},"ComponentConstructor")),"<any",">"," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_system.notcomponent"},(0,r.kt)("em",{parentName:"a"},"NotComponent")),"<any",">",")[]): ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_query.query"},(0,r.kt)("em",{parentName:"a"},"Query"))),(0,r.kt)("p",null,"Get query from the component."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"components")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentconstructor"},(0,r.kt)("em",{parentName:"a"},"ComponentConstructor")),"<any",">"," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_system.notcomponent"},(0,r.kt)("em",{parentName:"a"},"NotComponent")),"<any",">",")[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of components either component or not component.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_query.query"},(0,r.kt)("em",{parentName:"a"},"Query"))),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L241"},"packages/engine/src/ecs/classes/System.ts:241")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"initialize"},"initialize"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"initialize"),"(): ",(0,r.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L112"},"packages/engine/src/ecs/classes/System.ts:112")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"play"},"play"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"play"),"(): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Plays the system."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L257"},"packages/engine/src/ecs/classes/System.ts:257")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"stop"},"stop"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"stop"),"(): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Stop the system."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L251"},"packages/engine/src/ecs/classes/System.ts:251")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tojson"},"toJSON"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toJSON"),"(): ",(0,r.kt)("em",{parentName:"p"},"any")),(0,r.kt)("p",null,"Serialize the System"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"any")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L286"},"packages/engine/src/ecs/classes/System.ts:286")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getname"},"getName"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static"),(0,r.kt)("strong",{parentName:"p"},"getName"),"(): ",(0,r.kt)("em",{parentName:"p"},"string")),(0,r.kt)("p",null,"Get name of the System"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"string")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L230"},"packages/engine/src/ecs/classes/System.ts:230")))}o.isMDXComponent=!0}}]);