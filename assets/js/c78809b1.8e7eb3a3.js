(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[4724],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),k=r,g=d["".concat(i,".").concat(k)]||d[k]||c[k]||o;return n?a.createElement(g,m(m({ref:t},l),{},{components:n})):a.createElement(g,m({ref:t},l))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,m=new Array(o);m[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,m[1]=p;for(var s=2;s<o;s++)m[s]=n[s];return a.createElement.apply(null,m)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42265:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return s},default:function(){return c}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),m=["components"],p={id:"game_functions_functionsstate",title:"Module: game/functions/functionsState",sidebar_label:"game/functions/functionsState",custom_edit_url:null},i={unversionedId:"docs-engine/modules/game_functions_functionsstate",id:"docs-engine/modules/game_functions_functionsstate",isDocsHomePage:!1,title:"Module: game/functions/functionsState",description:"Functions",source:"@site/docs/docs-engine/modules/game_functions_functionsstate.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/game_functions_functionsstate",permalink:"/xrengine-docs/docs/docs-engine/modules/game_functions_functionsstate",editUrl:null,version:"current",sidebar_label:"game/functions/functionsState",frontMatter:{id:"game_functions_functionsstate",title:"Module: game/functions/functionsState",sidebar_label:"game/functions/functionsState",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: game/functions/functionsActions",permalink:"/xrengine-docs/docs/docs-engine/modules/game_functions_functionsactions"},next:{title:"Module: game/functions/functionsStorage",permalink:"/xrengine-docs/docs/docs-engine/modules/game_functions_functionsstorage"}},s=[{value:"Functions",id:"functions",children:[{value:"addStateComponent",id:"addstatecomponent",children:[]},{value:"applyState",id:"applystate",children:[]},{value:"applyStateToClient",id:"applystatetoclient",children:[]},{value:"changeRole",id:"changerole",children:[]},{value:"clearRemovedEntitysFromGame",id:"clearremovedentitysfromgame",children:[]},{value:"correctState",id:"correctstate",children:[]},{value:"initState",id:"initstate",children:[]},{value:"reInitState",id:"reinitstate",children:[]},{value:"removeEntityFromState",id:"removeentityfromstate",children:[]},{value:"removeStateComponent",id:"removestatecomponent",children:[]},{value:"requireState",id:"requirestate",children:[]},{value:"saveInitStateCopy",id:"saveinitstatecopy",children:[]},{value:"sendState",id:"sendstate",children:[]}]}],l={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,m);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"addstatecomponent"},"addStateComponent"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const"),(0,o.kt)("strong",{parentName:"p"},"addStateComponent"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"component"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentconstructor"},(0,o.kt)("em",{parentName:"a"},"ComponentConstructor")),"<",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},(0,o.kt)("em",{parentName:"a"},"Component")),"<any",">",">","): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"entity")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"component")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentconstructor"},(0,o.kt)("em",{parentName:"a"},"ComponentConstructor")),"<",(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},(0,o.kt)("em",{parentName:"a"},"Component")),"<any",">",">")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/game/functions/functionsState.ts#L172"},"packages/engine/src/game/functions/functionsState.ts:172")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"applystate"},"applyState"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const"),(0,o.kt)("strong",{parentName:"p"},"applyState"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"game"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/game_components_game.game"},(0,o.kt)("em",{parentName:"a"},"Game")),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"game")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/game_components_game.game"},(0,o.kt)("em",{parentName:"a"},"Game")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/game/functions/functionsState.ts#L86"},"packages/engine/src/game/functions/functionsState.ts:86")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"applystatetoclient"},"applyStateToClient"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const"),(0,o.kt)("strong",{parentName:"p"},"applyStateToClient"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"stateMessage"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/game_types_gamemessage.gamestateupdatemessage"},(0,o.kt)("em",{parentName:"a"},"GameStateUpdateMessage")),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"stateMessage")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/game_types_gamemessage.gamestateupdatemessage"},(0,o.kt)("em",{parentName:"a"},"GameStateUpdateMessage")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/game/functions/functionsState.ts#L78"},"packages/engine/src/game/functions/functionsState.ts:78")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"changerole"},"changeRole"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const"),(0,o.kt)("strong",{parentName:"p"},"changeRole"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"newGameRole"),": ",(0,o.kt)("em",{parentName:"p"},"string"),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"entity")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"newGameRole")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"string"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/game/functions/functionsState.ts#L214"},"packages/engine/src/game/functions/functionsState.ts:214")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"clearremovedentitysfromgame"},"clearRemovedEntitysFromGame"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const"),(0,o.kt)("strong",{parentName:"p"},"clearRemovedEntitysFromGame"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"game"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"game")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/game/functions/functionsState.ts#L163"},"packages/engine/src/game/functions/functionsState.ts:163")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"correctstate"},"correctState"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const"),(0,o.kt)("strong",{parentName:"p"},"correctState"),"(): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/game/functions/functionsState.ts#L150"},"packages/engine/src/game/functions/functionsState.ts:150")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"initstate"},"initState"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const"),(0,o.kt)("strong",{parentName:"p"},"initState"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"game"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/game_components_game.game"},(0,o.kt)("em",{parentName:"a"},"Game")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"gameSchema"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/game_types_gamemode.gamemode"},(0,o.kt)("em",{parentName:"a"},"GameMode")),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"game")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/game_components_game.game"},(0,o.kt)("em",{parentName:"a"},"Game")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"gameSchema")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/game_types_gamemode.gamemode"},(0,o.kt)("em",{parentName:"a"},"GameMode")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/game/functions/functionsState.ts#L47"},"packages/engine/src/game/functions/functionsState.ts:47")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"reinitstate"},"reInitState"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const"),(0,o.kt)("strong",{parentName:"p"},"reInitState"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"game"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/game_components_game.game"},(0,o.kt)("em",{parentName:"a"},"Game")),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"game")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/game_components_game.game"},(0,o.kt)("em",{parentName:"a"},"Game")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/game/functions/functionsState.ts#L57"},"packages/engine/src/game/functions/functionsState.ts:57")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"removeentityfromstate"},"removeEntityFromState"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const"),(0,o.kt)("strong",{parentName:"p"},"removeEntityFromState"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"objectOrPlayerComponent"),": ",(0,o.kt)("em",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"game"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"objectOrPlayerComponent")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"game")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/game/functions/functionsState.ts#L154"},"packages/engine/src/game/functions/functionsState.ts:154")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"removestatecomponent"},"removeStateComponent"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const"),(0,o.kt)("strong",{parentName:"p"},"removeStateComponent"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"component"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentconstructor"},(0,o.kt)("em",{parentName:"a"},"ComponentConstructor")),"<",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},(0,o.kt)("em",{parentName:"a"},"Component")),"<any",">",">","): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"entity")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"component")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentconstructor"},(0,o.kt)("em",{parentName:"a"},"ComponentConstructor")),"<",(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},(0,o.kt)("em",{parentName:"a"},"Component")),"<any",">",">")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/game/functions/functionsState.ts#L197"},"packages/engine/src/game/functions/functionsState.ts:197")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"requirestate"},"requireState"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const"),(0,o.kt)("strong",{parentName:"p"},"requireState"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"game"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/game_components_game.game"},(0,o.kt)("em",{parentName:"a"},"Game")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"playerComp"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/game_components_gameplayer.gameplayer"},(0,o.kt)("em",{parentName:"a"},"GamePlayer")),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"game")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/game_components_game.game"},(0,o.kt)("em",{parentName:"a"},"Game")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"playerComp")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/game_components_gameplayer.gameplayer"},(0,o.kt)("em",{parentName:"a"},"GamePlayer")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/game/functions/functionsState.ts#L71"},"packages/engine/src/game/functions/functionsState.ts:71")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"saveinitstatecopy"},"saveInitStateCopy"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const"),(0,o.kt)("strong",{parentName:"p"},"saveInitStateCopy"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"parameters-10"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"entity")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/game/functions/functionsState.ts#L52"},"packages/engine/src/game/functions/functionsState.ts:52")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"sendstate"},"sendState"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const"),(0,o.kt)("strong",{parentName:"p"},"sendState"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"game"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/game_components_game.game"},(0,o.kt)("em",{parentName:"a"},"Game")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"playerComp"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/game_components_gameplayer.gameplayer"},(0,o.kt)("em",{parentName:"a"},"GamePlayer")),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"parameters-11"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"game")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/game_components_game.game"},(0,o.kt)("em",{parentName:"a"},"Game")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"playerComp")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/game_components_gameplayer.gameplayer"},(0,o.kt)("em",{parentName:"a"},"GamePlayer")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/game/functions/functionsState.ts#L63"},"packages/engine/src/game/functions/functionsState.ts:63")))}c.isMDXComponent=!0}}]);