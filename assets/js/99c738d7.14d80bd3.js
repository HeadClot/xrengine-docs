(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[13893],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=m(n),d=r,k=g["".concat(p,".").concat(d)]||g[d]||l[d]||o;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var m=2;m<o;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},51239:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m},default:function(){return l}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),s=["components"],i={id:"game_types_gamemode.gamemode",title:"Interface: GameMode",sidebar_label:"GameMode",custom_edit_url:null},p={unversionedId:"docs-engine/interfaces/game_types_gamemode.gamemode",id:"docs-engine/interfaces/game_types_gamemode.gamemode",isDocsHomePage:!1,title:"Interface: GameMode",description:"game/types/GameMode.GameMode",source:"@site/docs/docs-engine/interfaces/game_types_gamemode.gamemode.md",sourceDirName:"docs-engine/interfaces",slug:"/docs-engine/interfaces/game_types_gamemode.gamemode",permalink:"/xrengine-docs/docs/docs-engine/interfaces/game_types_gamemode.gamemode",editUrl:null,version:"current",sidebar_label:"GameMode",frontMatter:{id:"game_types_gamemode.gamemode",title:"Interface: GameMode",sidebar_label:"GameMode",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: StorageElement",permalink:"/xrengine-docs/docs/docs-engine/interfaces/game_types_gamemessage.storageelement"},next:{title:"Interface: GameRolesInterface",permalink:"/xrengine-docs/docs/docs-engine/interfaces/game_types_gamemode.gamerolesinterface"}},m=[{value:"Properties",id:"properties",children:[{value:"gameObjectRoles",id:"gameobjectroles",children:[]},{value:"gamePlayerRoles",id:"gameplayerroles",children:[]},{value:"initGameState",id:"initgamestate",children:[]},{value:"name",id:"name",children:[]},{value:"onGameLoading",id:"ongameloading",children:[]},{value:"onGameStart",id:"ongamestart",children:[]},{value:"onPlayerLeave",id:"onplayerleave",children:[]},{value:"priority",id:"priority",children:[]},{value:"registerActionTagComponents",id:"registeractiontagcomponents",children:[]},{value:"registerStateTagComponents",id:"registerstatetagcomponents",children:[]}]}],c={toc:m};function l(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/game_types_gamemode"},"game/types/GameMode"),".GameMode"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"gameobjectroles"},"gameObjectRoles"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"gameObjectRoles"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/game_types_gamemode.gamerolesinterface"},(0,o.kt)("em",{parentName:"a"},"GameRolesInterface"))),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/game/types/GameMode.ts#L43"},"packages/engine/src/game/types/GameMode.ts:43")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"gameplayerroles"},"gamePlayerRoles"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"gamePlayerRoles"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/game_types_gamemode.gamerolesinterface"},(0,o.kt)("em",{parentName:"a"},"GameRolesInterface"))),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/game/types/GameMode.ts#L42"},"packages/engine/src/game/types/GameMode.ts:42")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"initgamestate"},"initGameState"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"initGameState"),": ",(0,o.kt)("em",{parentName:"p"},"object")),(0,o.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/game/types/GameMode.ts#L35"},"packages/engine/src/game/types/GameMode.ts:35")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"name"},"name"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"name"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/game/types/GameMode.ts#L28"},"packages/engine/src/game/types/GameMode.ts:28")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"ongameloading"},"onGameLoading"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"onGameLoading"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"gameEntity"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")),") => ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"type-declaration-1"},"Type declaration:"),(0,o.kt)("p",null,"\u25b8 (",(0,o.kt)("inlineCode",{parentName:"p"},"gameEntity"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"gameEntity")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/game/types/GameMode.ts#L30"},"packages/engine/src/game/types/GameMode.ts:30")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/game/types/GameMode.ts#L30"},"packages/engine/src/game/types/GameMode.ts:30")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"ongamestart"},"onGameStart"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"onGameStart"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"gameEntity"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")),") => ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"type-declaration-2"},"Type declaration:"),(0,o.kt)("p",null,"\u25b8 (",(0,o.kt)("inlineCode",{parentName:"p"},"gameEntity"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"gameEntity")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/game/types/GameMode.ts#L31"},"packages/engine/src/game/types/GameMode.ts:31")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/game/types/GameMode.ts#L31"},"packages/engine/src/game/types/GameMode.ts:31")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"onplayerleave"},"onPlayerLeave"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"onPlayerLeave"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"gameEntity"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")),") => ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"type-declaration-3"},"Type declaration:"),(0,o.kt)("p",null,"\u25b8 (",(0,o.kt)("inlineCode",{parentName:"p"},"gameEntity"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"gameEntity")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/game/types/GameMode.ts#L32"},"packages/engine/src/game/types/GameMode.ts:32")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/game/types/GameMode.ts#L32"},"packages/engine/src/game/types/GameMode.ts:32")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"priority"},"priority"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"priority"),": ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/game/types/GameMode.ts#L29"},"packages/engine/src/game/types/GameMode.ts:29")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"registeractiontagcomponents"},"registerActionTagComponents"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"registerActionTagComponents"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentconstructor"},(0,o.kt)("em",{parentName:"a"},"ComponentConstructor")),"<",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},(0,o.kt)("em",{parentName:"a"},"Component")),"<any",">",">","[]"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/game/types/GameMode.ts#L33"},"packages/engine/src/game/types/GameMode.ts:33")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"registerstatetagcomponents"},"registerStateTagComponents"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"registerStateTagComponents"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentconstructor"},(0,o.kt)("em",{parentName:"a"},"ComponentConstructor")),"<",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},(0,o.kt)("em",{parentName:"a"},"Component")),"<any",">",">","[]"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/game/types/GameMode.ts#L34"},"packages/engine/src/game/types/GameMode.ts:34")))}l.isMDXComponent=!0}}]);