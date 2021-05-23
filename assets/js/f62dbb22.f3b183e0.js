(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[4199],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),m=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(g.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,g=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),l=m(a),d=r,u=l["".concat(g,".").concat(d)]||l[d]||p[d]||s;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=l;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<s;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}l.displayName="MDXCreateElement"},49781:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return g},default:function(){return c}});var n=a(22122),r=a(19756),s=(a(67294),a(3905)),i={id:"game_types_gamemessage.gamestateupdatemessage",title:"Interface: GameStateUpdateMessage",sidebar_label:"GameStateUpdateMessage",custom_edit_url:null},o={unversionedId:"docs-engine/interfaces/game_types_gamemessage.gamestateupdatemessage",id:"docs-engine/interfaces/game_types_gamemessage.gamestateupdatemessage",isDocsHomePage:!1,title:"Interface: GameStateUpdateMessage",description:"game/types/GameMessage.GameStateUpdateMessage",source:"@site/docs/docs-engine/interfaces/game_types_gamemessage.gamestateupdatemessage.md",sourceDirName:"docs-engine/interfaces",slug:"/docs-engine/interfaces/game_types_gamemessage.gamestateupdatemessage",permalink:"/xrengine-docs/docs/docs-engine/interfaces/game_types_gamemessage.gamestateupdatemessage",editUrl:null,version:"current",sidebar_label:"GameStateUpdateMessage",frontMatter:{id:"game_types_gamemessage.gamestateupdatemessage",title:"Interface: GameStateUpdateMessage",sidebar_label:"GameStateUpdateMessage",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: GameStateActionMessage",permalink:"/xrengine-docs/docs/docs-engine/interfaces/game_types_gamemessage.gamestateactionmessage"},next:{title:"Interface: StorageElement",permalink:"/xrengine-docs/docs/docs-engine/interfaces/game_types_gamemessage.storageelement"}},g=[{value:"Properties",id:"properties",children:[{value:"game",id:"game",children:[]},{value:"ownerId",id:"ownerid",children:[]},{value:"state",id:"state",children:[]}]}],m={toc:g};function c(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/game_types_gamemessage"},"game/types/GameMessage"),".GameStateUpdateMessage"),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"game"},"game"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"game"),": ",(0,s.kt)("em",{parentName:"p"},"string")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/game/types/GameMessage.ts#L33"},"packages/engine/src/game/types/GameMessage.ts:33")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"ownerid"},"ownerId"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"ownerId"),": ",(0,s.kt)("em",{parentName:"p"},"string")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/game/types/GameMessage.ts#L34"},"packages/engine/src/game/types/GameMessage.ts:34")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"state"},"state"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"state"),": ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/game_types_gamemessage.gamestate"},(0,s.kt)("em",{parentName:"a"},"GameState")),"[]"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/game/types/GameMessage.ts#L35"},"packages/engine/src/game/types/GameMessage.ts:35")))}c.isMDXComponent=!0}}]);