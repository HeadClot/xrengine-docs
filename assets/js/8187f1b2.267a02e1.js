(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[5404],{3905:function(e,t,s){"use strict";s.d(t,{Zo:function(){return m},kt:function(){return k}});var n=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function p(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=l(s),k=a,u=d["".concat(c,".").concat(k)]||d[k]||o[k]||r;return s?n.createElement(u,i(i({ref:t},m),{},{components:s})):n.createElement(u,i({ref:t},m))}));function k(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=s.length,i=new Array(r);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<r;l++)i[l]=s[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,s)}d.displayName="MDXCreateElement"},83783:function(e,t,s){"use strict";s.r(t),s.d(t,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return o}});var n=s(22122),a=s(19756),r=(s(67294),s(3905)),i=["components"],p={id:"xr_systems_xrsystem.xrsystem",title:"Class: XRSystem",sidebar_label:"XRSystem",custom_edit_url:null},c={unversionedId:"docs-engine/classes/xr_systems_xrsystem.xrsystem",id:"docs-engine/classes/xr_systems_xrsystem.xrsystem",isDocsHomePage:!1,title:"Class: XRSystem",description:"xr/systems/XRSystem.XRSystem",source:"@site/docs/docs-engine/classes/xr_systems_xrsystem.xrsystem.md",sourceDirName:"docs-engine/classes",slug:"/docs-engine/classes/xr_systems_xrsystem.xrsystem",permalink:"/xrengine-docs/docs/docs-engine/classes/xr_systems_xrsystem.xrsystem",editUrl:null,version:"current",sidebar_label:"XRSystem",frontMatter:{id:"xr_systems_xrsystem.xrsystem",title:"Class: XRSystem",sidebar_label:"XRSystem",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Class: AnimationMapping",permalink:"/xrengine-docs/docs/docs-engine/classes/xr_functions_avatarfunctions.animationmapping"},next:{title:"Interface: LoadGLTFResultInterface",permalink:"/xrengine-docs/docs/docs-engine/interfaces/assets_functions_loadgltf.loadgltfresultinterface"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"_mandatoryQueries",id:"_mandatoryqueries",children:[]},{value:"_queries",id:"_queries",children:[]},{value:"baseLayer",id:"baselayer",children:[]},{value:"cameraDolly",id:"cameradolly",children:[]},{value:"context",id:"context",children:[]},{value:"controllerUpdateHook",id:"controllerupdatehook",children:[]},{value:"enabled",id:"enabled",children:[]},{value:"executeTime",id:"executetime",children:[]},{value:"initialized",id:"initialized",children:[]},{value:"isRenderering",id:"isrenderering",children:[]},{value:"name",id:"name",children:[]},{value:"offscreen",id:"offscreen",children:[]},{value:"playerPosition",id:"playerposition",children:[]},{value:"priority",id:"priority",children:[]},{value:"queryResults",id:"queryresults",children:[]},{value:"referenceSpace",id:"referencespace",children:[]},{value:"referenceSpaceType",id:"referencespacetype",children:[]},{value:"renderbuffer",id:"renderbuffer",children:[]},{value:"updateType",id:"updatetype",children:[]},{value:"xrFrame",id:"xrframe",children:[]},{value:"EVENTS",id:"events",children:[]},{value:"instance",id:"instance",children:[]},{value:"isSystem",id:"issystem",children:[]},{value:"queries",id:"queries",children:[]}]},{value:"Methods",id:"methods",children:[{value:"clearEventQueues",id:"cleareventqueues",children:[]},{value:"dispose",id:"dispose",children:[]},{value:"execute",id:"execute",children:[]},{value:"getQuery",id:"getquery",children:[]},{value:"initialize",id:"initialize",children:[]},{value:"play",id:"play",children:[]},{value:"stop",id:"stop",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"getName",id:"getname",children:[]}]}],m={toc:l};function o(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/xr_systems_xrsystem"},"xr/systems/XRSystem"),".XRSystem"),(0,r.kt)("p",null,"System for XR session and input handling"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"author"))," Josh Field <github.com/hexafield>"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},(0,r.kt)("em",{parentName:"a"},"System"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},"XRSystem")))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"+"," ",(0,r.kt)("strong",{parentName:"p"},"new XRSystem"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"attributes?"),": ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_system.systemattributes"},(0,r.kt)("em",{parentName:"a"},"SystemAttributes")),"): ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/xr_systems_xrsystem.xrsystem"},(0,r.kt)("em",{parentName:"a"},"XRSystem"))),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"attributes")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_system.systemattributes"},(0,r.kt)("em",{parentName:"a"},"SystemAttributes"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"{}")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/xr_systems_xrsystem.xrsystem"},(0,r.kt)("em",{parentName:"a"},"XRSystem"))),(0,r.kt)("p",null,"Overrides: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/xr/systems/XRSystem.ts#L40"},"packages/engine/src/xr/systems/XRSystem.ts:40")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"_mandatoryqueries"},"_","mandatoryQueries"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"_","mandatoryQueries"),": ",(0,r.kt)("em",{parentName:"p"},"any")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#_mandatoryqueries"},"_mandatoryQueries")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L74"},"packages/engine/src/ecs/classes/System.ts:74")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_queries"},"_","queries"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"_","queries"),": ",(0,r.kt)("em",{parentName:"p"},"object"),"= {}"),(0,r.kt)("p",null,"Queries of system instances."),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#_queries"},"_queries")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L107"},"packages/engine/src/ecs/classes/System.ts:107")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"baselayer"},"baseLayer"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"baseLayer"),": ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/input_types_webxr.xrwebgllayer"},(0,r.kt)("em",{parentName:"a"},"XRWebGLLayer"))),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/xr/systems/XRSystem.ts#L30"},"packages/engine/src/xr/systems/XRSystem.ts:30")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"cameradolly"},"cameraDolly"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"cameraDolly"),": ",(0,r.kt)("em",{parentName:"p"},"Group")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/xr/systems/XRSystem.ts#L39"},"packages/engine/src/xr/systems/XRSystem.ts:39")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"context"},"context"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"context"),": ",(0,r.kt)("em",{parentName:"p"},"any")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/xr/systems/XRSystem.ts#L31"},"packages/engine/src/xr/systems/XRSystem.ts:31")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"controllerupdatehook"},"controllerUpdateHook"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"controllerUpdateHook"),": ",(0,r.kt)("em",{parentName:"p"},"any")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/xr/systems/XRSystem.ts#L34"},"packages/engine/src/xr/systems/XRSystem.ts:34")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"enabled"},"enabled"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"enabled"),": ",(0,r.kt)("em",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Whether the system will execute during the world tick."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#enabled"},"enabled")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L101"},"packages/engine/src/ecs/classes/System.ts:101")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"executetime"},"executeTime"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"executeTime"),": ",(0,r.kt)("em",{parentName:"p"},"number")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#executetime"},"executeTime")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L76"},"packages/engine/src/ecs/classes/System.ts:76")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"initialized"},"initialized"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"initialized"),": ",(0,r.kt)("em",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#initialized"},"initialized")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L77"},"packages/engine/src/ecs/classes/System.ts:77")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isrenderering"},"isRenderering"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"isRenderering"),": ",(0,r.kt)("em",{parentName:"p"},"boolean"),"= false"),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/xr/systems/XRSystem.ts#L29"},"packages/engine/src/xr/systems/XRSystem.ts:29")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"name"),": ",(0,r.kt)("em",{parentName:"p"},"string")),(0,r.kt)("p",null,"Name of the System."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#name"},"name")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L104"},"packages/engine/src/ecs/classes/System.ts:104")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"offscreen"},"offscreen"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"offscreen"),": ",(0,r.kt)("em",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/xr/systems/XRSystem.ts#L26"},"packages/engine/src/xr/systems/XRSystem.ts:26")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"playerposition"},"playerPosition"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"playerPosition"),": ",(0,r.kt)("em",{parentName:"p"},"Vector3")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/xr/systems/XRSystem.ts#L38"},"packages/engine/src/xr/systems/XRSystem.ts:38")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"priority"},"priority"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"priority"),": ",(0,r.kt)("em",{parentName:"p"},"number")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#priority"},"priority")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L75"},"packages/engine/src/ecs/classes/System.ts:75")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"queryresults"},"queryResults"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"queryResults"),": ",(0,r.kt)("em",{parentName:"p"},"object"),"= {}"),(0,r.kt)("p",null,"The results of the queries.\nShould be used inside of execute."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,r.kt)("h4",{id:"type-declaration-1"},"Type declaration:"),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#queryresults"},"queryResults")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L87"},"packages/engine/src/ecs/classes/System.ts:87")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"referencespace"},"referenceSpace"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"referenceSpace"),": ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/input_types_webxr.xrreferencespace"},(0,r.kt)("em",{parentName:"a"},"XRReferenceSpace"))),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/xr/systems/XRSystem.ts#L37"},"packages/engine/src/xr/systems/XRSystem.ts:37")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"referencespacetype"},"referenceSpaceType"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"referenceSpaceType"),": ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/input_types_webxr#xrreferencespacetype"},(0,r.kt)("em",{parentName:"a"},"XRReferenceSpaceType")),"= 'local-floor'"),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/xr/systems/XRSystem.ts#L36"},"packages/engine/src/xr/systems/XRSystem.ts:36")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"renderbuffer"},"renderbuffer"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"renderbuffer"),": WebGLRenderbuffer"),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/xr/systems/XRSystem.ts#L32"},"packages/engine/src/xr/systems/XRSystem.ts:32")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"updatetype"},"updateType"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"updateType"),": ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/enums/ecs_functions_systemupdatetype.systemupdatetype"},(0,r.kt)("em",{parentName:"a"},"SystemUpdateType"))),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#updatetype"},"updateType")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L79"},"packages/engine/src/ecs/classes/System.ts:79")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"xrframe"},"xrFrame"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"xrFrame"),": ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/input_types_webxr.xrframe"},(0,r.kt)("em",{parentName:"a"},"XRFrame"))),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/xr/systems/XRSystem.ts#L27"},"packages/engine/src/xr/systems/XRSystem.ts:27")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"events"},"EVENTS"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"EVENTS"),": ",(0,r.kt)("em",{parentName:"p"},"object")),(0,r.kt)("h4",{id:"type-declaration-2"},"Type declaration:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"XR_END")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"XR_SESSION")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"XR_START")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"string"))))),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/xr/systems/XRSystem.ts#L20"},"packages/engine/src/xr/systems/XRSystem.ts:20")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"instance"},"instance"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"instance"),": ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/xr_systems_xrsystem.xrsystem"},(0,r.kt)("em",{parentName:"a"},"XRSystem"))),(0,r.kt)("p",null,"Defines what Components the System will query for.\nThis needs to be user defined."),(0,r.kt)("p",null,"Overrides: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#instance"},"instance")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/xr/systems/XRSystem.ts#L40"},"packages/engine/src/xr/systems/XRSystem.ts:40")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"issystem"},"isSystem"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"isSystem"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#issystem"},"isSystem")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L73"},"packages/engine/src/ecs/classes/System.ts:73")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"queries"},"queries"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"queries"),": ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_system.systemqueries"},(0,r.kt)("em",{parentName:"a"},"SystemQueries")),"= {}"),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#queries"},"queries")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L68"},"packages/engine/src/ecs/classes/System.ts:68")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"cleareventqueues"},"clearEventQueues"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"clearEventQueues"),"(): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Clears event queues."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L262"},"packages/engine/src/ecs/classes/System.ts:262")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"dispose"},"dispose"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"dispose"),"(): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Removes resize listener."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Overrides: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/xr/systems/XRSystem.ts#L73"},"packages/engine/src/xr/systems/XRSystem.ts:73")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"execute"},"execute"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"execute"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"delta"),": ",(0,r.kt)("em",{parentName:"p"},"number"),"): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Executes the system. Called each frame by default from the Engine."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"delta")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Time since last frame.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Overrides: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/xr/systems/XRSystem.ts#L83"},"packages/engine/src/xr/systems/XRSystem.ts:83")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getquery"},"getQuery"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getQuery"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"components"),": (",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentconstructor"},(0,r.kt)("em",{parentName:"a"},"ComponentConstructor")),"<any",">"," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_system.notcomponent"},(0,r.kt)("em",{parentName:"a"},"NotComponent")),"<any",">",")[]): ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_query.query"},(0,r.kt)("em",{parentName:"a"},"Query"))),(0,r.kt)("p",null,"Get query from the component."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"components")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentconstructor"},(0,r.kt)("em",{parentName:"a"},"ComponentConstructor")),"<any",">"," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_system.notcomponent"},(0,r.kt)("em",{parentName:"a"},"NotComponent")),"<any",">",")[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of components either component or not component.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_query.query"},(0,r.kt)("em",{parentName:"a"},"Query"))),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L241"},"packages/engine/src/ecs/classes/System.ts:241")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"initialize"},"initialize"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"initialize"),"(): ",(0,r.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L112"},"packages/engine/src/ecs/classes/System.ts:112")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"play"},"play"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"play"),"(): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Plays the system."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L257"},"packages/engine/src/ecs/classes/System.ts:257")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"stop"},"stop"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"stop"),"(): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Stop the system."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L251"},"packages/engine/src/ecs/classes/System.ts:251")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tojson"},"toJSON"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toJSON"),"(): ",(0,r.kt)("em",{parentName:"p"},"any")),(0,r.kt)("p",null,"Serialize the System"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"any")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L286"},"packages/engine/src/ecs/classes/System.ts:286")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getname"},"getName"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static"),(0,r.kt)("strong",{parentName:"p"},"getName"),"(): ",(0,r.kt)("em",{parentName:"p"},"string")),(0,r.kt)("p",null,"Get name of the System"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"string")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/ecs/classes/System.ts#L230"},"packages/engine/src/ecs/classes/System.ts:230")))}o.isMDXComponent=!0}}]);