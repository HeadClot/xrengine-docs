(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[79885],{3905:function(e,s,t){"use strict";t.d(s,{Zo:function(){return p},kt:function(){return u}});var n=t(67294);function a(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function i(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?i(Object(t),!0).forEach((function(s){a(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}function o(e,s){if(null==e)return{};var t,n,a=function(e,s){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],s.indexOf(t)>=0||(a[t]=e[t]);return a}(e,s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var s=n.useContext(c),t=s;return e&&(t="function"==typeof e?e(s):r(r({},s),e)),t},p=function(e){var s=l(e.components);return n.createElement(c.Provider,{value:s},e.children)},m={inlineCode:"code",wrapper:function(e){var s=e.children;return n.createElement(n.Fragment,{},s)}},d=n.forwardRef((function(e,s){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return t?n.createElement(k,r(r({ref:s},p),{},{components:t})):n.createElement(k,r({ref:s},p))}));function u(e,s){var t=arguments,a=s&&s.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=d;var o={};for(var c in s)hasOwnProperty.call(s,c)&&(o[c]=s[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var l=2;l<i;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},63758:function(e,s,t){"use strict";t.r(s),t.d(s,{frontMatter:function(){return r},metadata:function(){return o},toc:function(){return c},default:function(){return p}});var n=t(22122),a=t(19756),i=(t(67294),t(3905)),r={id:"audio_systems_positionalaudiosystem.positionalaudiosystem",title:"Class: PositionalAudioSystem",sidebar_label:"PositionalAudioSystem",custom_edit_url:null},o={unversionedId:"docs-engine/classes/audio_systems_positionalaudiosystem.positionalaudiosystem",id:"docs-engine/classes/audio_systems_positionalaudiosystem.positionalaudiosystem",isDocsHomePage:!1,title:"Class: PositionalAudioSystem",description:"audio/systems/PositionalAudioSystem.PositionalAudioSystem",source:"@site/docs/docs-engine/classes/audio_systems_positionalaudiosystem.positionalaudiosystem.md",sourceDirName:"docs-engine/classes",slug:"/docs-engine/classes/audio_systems_positionalaudiosystem.positionalaudiosystem",permalink:"/xrengine-docs/docs/docs-engine/classes/audio_systems_positionalaudiosystem.positionalaudiosystem",editUrl:null,version:"current",sidebar_label:"PositionalAudioSystem",frontMatter:{id:"audio_systems_positionalaudiosystem.positionalaudiosystem",title:"Class: PositionalAudioSystem",sidebar_label:"PositionalAudioSystem",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Class: AudioSystem",permalink:"/xrengine-docs/docs/docs-engine/classes/audio_systems_audiosystem.audiosystem"},next:{title:"Class: CameraComponent",permalink:"/xrengine-docs/docs/docs-engine/classes/camera_components_cameracomponent.cameracomponent"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"_mandatoryQueries",id:"_mandatoryqueries",children:[]},{value:"_queries",id:"_queries",children:[]},{value:"audioInitialised",id:"audioinitialised",children:[]},{value:"characterAudioStream",id:"characteraudiostream",children:[]},{value:"enabled",id:"enabled",children:[]},{value:"executeTime",id:"executetime",children:[]},{value:"initialized",id:"initialized",children:[]},{value:"name",id:"name",children:[]},{value:"priority",id:"priority",children:[]},{value:"queryResults",id:"queryresults",children:[]},{value:"updateType",id:"updatetype",children:[]},{value:"instance",id:"instance",children:[]},{value:"isSystem",id:"issystem",children:[]},{value:"queries",id:"queries",children:[]}]},{value:"Methods",id:"methods",children:[{value:"clearEventQueues",id:"cleareventqueues",children:[]},{value:"dispose",id:"dispose",children:[]},{value:"execute",id:"execute",children:[]},{value:"getQuery",id:"getquery",children:[]},{value:"initialize",id:"initialize",children:[]},{value:"play",id:"play",children:[]},{value:"resume",id:"resume",children:[]},{value:"stop",id:"stop",children:[]},{value:"suspend",id:"suspend",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"getName",id:"getname",children:[]}]}],l={toc:c};function p(e){var s=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:s,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/audio_systems_positionalaudiosystem"},"audio/systems/PositionalAudioSystem"),".PositionalAudioSystem"),(0,i.kt)("p",null,"System class which provides methods for Positional Audio system."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},(0,i.kt)("em",{parentName:"a"},"System"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},"PositionalAudioSystem")))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"+"," ",(0,i.kt)("strong",{parentName:"p"},"new PositionalAudioSystem"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"attributes?"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_system.systemattributes"},(0,i.kt)("em",{parentName:"a"},"SystemAttributes")),"): ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/audio_systems_positionalaudiosystem.positionalaudiosystem"},(0,i.kt)("em",{parentName:"a"},"PositionalAudioSystem"))),(0,i.kt)("p",null,"Constructs Positional Audio System."),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"attributes")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_system.systemattributes"},(0,i.kt)("em",{parentName:"a"},"SystemAttributes"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"{}")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/audio_systems_positionalaudiosystem.positionalaudiosystem"},(0,i.kt)("em",{parentName:"a"},"PositionalAudioSystem"))),(0,i.kt)("p",null,"Overrides: ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/audio/systems/PositionalAudioSystem.ts#L40"},"packages/engine/src/audio/systems/PositionalAudioSystem.ts:40")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"_mandatoryqueries"},"_","mandatoryQueries"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","mandatoryQueries"),": ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#_mandatoryqueries"},"_mandatoryQueries")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/ecs/classes/System.ts#L74"},"packages/engine/src/ecs/classes/System.ts:74")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_queries"},"_","queries"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","queries"),": ",(0,i.kt)("em",{parentName:"p"},"object"),"= {}"),(0,i.kt)("p",null,"Queries of system instances."),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#_queries"},"_queries")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/ecs/classes/System.ts#L107"},"packages/engine/src/ecs/classes/System.ts:107")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"audioinitialised"},"audioInitialised"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"audioInitialised"),": ",(0,i.kt)("em",{parentName:"p"},"boolean"),"= false"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/audio/systems/PositionalAudioSystem.ts#L40"},"packages/engine/src/audio/systems/PositionalAudioSystem.ts:40")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"characteraudiostream"},"characterAudioStream"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"characterAudioStream"),": ",(0,i.kt)("em",{parentName:"p"},"Map"),"<any, any",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/audio/systems/PositionalAudioSystem.ts#L39"},"packages/engine/src/audio/systems/PositionalAudioSystem.ts:39")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"enabled"},"enabled"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"enabled"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Whether the system will execute during the world tick."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#enabled"},"enabled")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/ecs/classes/System.ts#L101"},"packages/engine/src/ecs/classes/System.ts:101")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"executetime"},"executeTime"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"executeTime"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#executetime"},"executeTime")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/ecs/classes/System.ts#L76"},"packages/engine/src/ecs/classes/System.ts:76")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"initialized"},"initialized"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"initialized"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#initialized"},"initialized")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/ecs/classes/System.ts#L77"},"packages/engine/src/ecs/classes/System.ts:77")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"name"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Name of the System."),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#name"},"name")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/ecs/classes/System.ts#L104"},"packages/engine/src/ecs/classes/System.ts:104")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"priority"},"priority"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"priority"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#priority"},"priority")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/ecs/classes/System.ts#L75"},"packages/engine/src/ecs/classes/System.ts:75")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"queryresults"},"queryResults"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"queryResults"),": ",(0,i.kt)("em",{parentName:"p"},"object"),"= {}"),(0,i.kt)("p",null,"The results of the queries.\nShould be used inside of execute."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration:"),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#queryresults"},"queryResults")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/ecs/classes/System.ts#L87"},"packages/engine/src/ecs/classes/System.ts:87")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updatetype"},"updateType"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"updateType"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/enums/ecs_functions_systemupdatetype.systemupdatetype"},(0,i.kt)("em",{parentName:"a"},"SystemUpdateType"))),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#updatetype"},"updateType")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/ecs/classes/System.ts#L79"},"packages/engine/src/ecs/classes/System.ts:79")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"instance"},"instance"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"instance"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/audio_systems_positionalaudiosystem.positionalaudiosystem"},(0,i.kt)("em",{parentName:"a"},"PositionalAudioSystem")),"= null"),(0,i.kt)("p",null,"Static instance for positional audio."),(0,i.kt)("p",null,"Overrides: ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#instance"},"instance")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/audio/systems/PositionalAudioSystem.ts#L37"},"packages/engine/src/audio/systems/PositionalAudioSystem.ts:37")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"issystem"},"isSystem"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"isSystem"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#issystem"},"isSystem")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/ecs/classes/System.ts#L73"},"packages/engine/src/ecs/classes/System.ts:73")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"queries"},"queries"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"queries"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_system.systemqueries"},(0,i.kt)("em",{parentName:"a"},"SystemQueries")),"= {}"),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System"),".",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system#queries"},"queries")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/ecs/classes/System.ts#L68"},"packages/engine/src/ecs/classes/System.ts:68")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"cleareventqueues"},"clearEventQueues"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"clearEventQueues"),"(): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Clears event queues."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/ecs/classes/System.ts#L262"},"packages/engine/src/ecs/classes/System.ts:262")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dispose"},"dispose"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"dispose"),"(): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/ecs/classes/System.ts#L283"},"packages/engine/src/ecs/classes/System.ts:283")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"execute"},"execute"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"execute"),"(): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Execute the positional audio system for different events of queries."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Overrides: ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/audio/systems/PositionalAudioSystem.ts#L50"},"packages/engine/src/audio/systems/PositionalAudioSystem.ts:50")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getquery"},"getQuery"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getQuery"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"components"),": (",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentconstructor"},(0,i.kt)("em",{parentName:"a"},"ComponentConstructor")),"<any",">"," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_system.notcomponent"},(0,i.kt)("em",{parentName:"a"},"NotComponent")),"<any",">",")[]): ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_query.query"},(0,i.kt)("em",{parentName:"a"},"Query"))),(0,i.kt)("p",null,"Get query from the component."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"components")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentconstructor"},(0,i.kt)("em",{parentName:"a"},"ComponentConstructor")),"<any",">"," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_system.notcomponent"},(0,i.kt)("em",{parentName:"a"},"NotComponent")),"<any",">",")[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"List of components either component or not component.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_query.query"},(0,i.kt)("em",{parentName:"a"},"Query"))),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/ecs/classes/System.ts#L241"},"packages/engine/src/ecs/classes/System.ts:241")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"initialize"},"initialize"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"initialize"),"(): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/ecs/classes/System.ts#L112"},"packages/engine/src/ecs/classes/System.ts:112")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"play"},"play"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"play"),"(): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Plays the system."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/ecs/classes/System.ts#L257"},"packages/engine/src/ecs/classes/System.ts:257")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"resume"},"resume"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"resume"),"(): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Resume positional audio components."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/audio/systems/PositionalAudioSystem.ts#L145"},"packages/engine/src/audio/systems/PositionalAudioSystem.ts:145")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stop"},"stop"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"stop"),"(): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Stop the system."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/ecs/classes/System.ts#L251"},"packages/engine/src/ecs/classes/System.ts:251")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"suspend"},"suspend"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"suspend"),"(): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Suspend positional audio components."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/audio/systems/PositionalAudioSystem.ts#L137"},"packages/engine/src/audio/systems/PositionalAudioSystem.ts:137")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tojson"},"toJSON"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"toJSON"),"(): ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Serialize the System"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/ecs/classes/System.ts#L286"},"packages/engine/src/ecs/classes/System.ts:286")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getname"},"getName"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static"),(0,i.kt)("strong",{parentName:"p"},"getName"),"(): ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Get name of the System"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_system.system"},"System")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/ecs/classes/System.ts#L230"},"packages/engine/src/ecs/classes/System.ts:230")))}p.isMDXComponent=!0}}]);