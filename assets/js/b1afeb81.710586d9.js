(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[32249],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),k=l(n),g=a,f=k["".concat(c,".").concat(g)]||k[g]||p[g]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=k;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},86175:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={id:"networking_interfaces_worldstate.worldstateinterface",title:"Interface: WorldStateInterface",sidebar_label:"WorldStateInterface",custom_edit_url:null},s={unversionedId:"docs-engine/interfaces/networking_interfaces_worldstate.worldstateinterface",id:"docs-engine/interfaces/networking_interfaces_worldstate.worldstateinterface",isDocsHomePage:!1,title:"Interface: WorldStateInterface",description:"networking/interfaces/WorldState.WorldStateInterface",source:"@site/docs/docs-engine/interfaces/networking_interfaces_worldstate.worldstateinterface.md",sourceDirName:"docs-engine/interfaces",slug:"/docs-engine/interfaces/networking_interfaces_worldstate.worldstateinterface",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_worldstate.worldstateinterface",editUrl:null,version:"current",sidebar_label:"WorldStateInterface",frontMatter:{id:"networking_interfaces_worldstate.worldstateinterface",title:"Interface: WorldStateInterface",sidebar_label:"WorldStateInterface",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: PacketNetworkInputInterface",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_worldstate.packetnetworkinputinterface"},next:{title:"Interface: WorldStateSnapshot",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_worldstate.worldstatesnapshot"}},c=[{value:"Properties",id:"properties",children:[{value:"clientsConnected",id:"clientsconnected",children:[]},{value:"clientsDisconnected",id:"clientsdisconnected",children:[]},{value:"createObjects",id:"createobjects",children:[]},{value:"destroyObjects",id:"destroyobjects",children:[]},{value:"editObjects",id:"editobjects",children:[]},{value:"gameState",id:"gamestate",children:[]},{value:"gameStateActions",id:"gamestateactions",children:[]},{value:"ikTransforms",id:"iktransforms",children:[]},{value:"inputs",id:"inputs",children:[]},{value:"tick",id:"tick",children:[]},{value:"time",id:"time",children:[]},{value:"transforms",id:"transforms",children:[]}]}],l={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/networking_interfaces_worldstate"},"networking/interfaces/WorldState"),".WorldStateInterface"),(0,i.kt)("p",null,"Interface for world state."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"clientsconnected"},"clientsConnected"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"clientsConnected"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_worldstate.networkclientdatainterface"},(0,i.kt)("em",{parentName:"a"},"NetworkClientDataInterface")),"[]"),(0,i.kt)("p",null,"List of connected clients."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/interfaces/WorldState.ts#L129"},"packages/engine/src/networking/interfaces/WorldState.ts:129")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"clientsdisconnected"},"clientsDisconnected"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"clientsDisconnected"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_worldstate.networkclientdatainterface"},(0,i.kt)("em",{parentName:"a"},"NetworkClientDataInterface")),"[]"),(0,i.kt)("p",null,"List of disconnected clients."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/interfaces/WorldState.ts#L131"},"packages/engine/src/networking/interfaces/WorldState.ts:131")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createobjects"},"createObjects"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"createObjects"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_worldstate.networkobjectcreateinterface"},(0,i.kt)("em",{parentName:"a"},"NetworkObjectCreateInterface")),"[]"),(0,i.kt)("p",null,"List of created objects."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/interfaces/WorldState.ts#L133"},"packages/engine/src/networking/interfaces/WorldState.ts:133")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"destroyobjects"},"destroyObjects"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"destroyObjects"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_worldstate.networkobjectremoveinterface"},(0,i.kt)("em",{parentName:"a"},"NetworkObjectRemoveInterface")),"[]"),(0,i.kt)("p",null,"List of destroyed objects."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/interfaces/WorldState.ts#L137"},"packages/engine/src/networking/interfaces/WorldState.ts:137")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"editobjects"},"editObjects"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"editObjects"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_worldstate.networkobjecteditinterface"},(0,i.kt)("em",{parentName:"a"},"NetworkObjectEditInterface")),"[]"),(0,i.kt)("p",null,"List of created objects."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/interfaces/WorldState.ts#L135"},"packages/engine/src/networking/interfaces/WorldState.ts:135")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gamestate"},"gameState"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"gameState"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/game_types_gamemessage.gamestateupdatemessage"},(0,i.kt)("em",{parentName:"a"},"GameStateUpdateMessage")),"[]"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/interfaces/WorldState.ts#L138"},"packages/engine/src/networking/interfaces/WorldState.ts:138")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gamestateactions"},"gameStateActions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"gameStateActions"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/game_types_gamemessage.gamestateactionmessage"},(0,i.kt)("em",{parentName:"a"},"GameStateActionMessage")),"[]"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/interfaces/WorldState.ts#L139"},"packages/engine/src/networking/interfaces/WorldState.ts:139")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"iktransforms"},"ikTransforms"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"ikTransforms"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/networking_types_snapshotdatatypes#stateentityikgroup"},(0,i.kt)("em",{parentName:"a"},"StateEntityIKGroup"))),(0,i.kt)("p",null,"transform of ik avatars."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/interfaces/WorldState.ts#L124"},"packages/engine/src/networking/interfaces/WorldState.ts:124")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"inputs"},"inputs"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"inputs"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_worldstate.networkinputinterface"},(0,i.kt)("em",{parentName:"a"},"NetworkInputInterface")),"[]"),(0,i.kt)("p",null,"Inputs received."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/interfaces/WorldState.ts#L127"},"packages/engine/src/networking/interfaces/WorldState.ts:127")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tick"},"tick"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"tick"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Current world tick."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/interfaces/WorldState.ts#L118"},"packages/engine/src/networking/interfaces/WorldState.ts:118")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"time"},"time"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"time"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"For interpolation."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/interfaces/WorldState.ts#L120"},"packages/engine/src/networking/interfaces/WorldState.ts:120")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transforms"},"transforms"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"transforms"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/networking_types_snapshotdatatypes#stateentitygroup"},(0,i.kt)("em",{parentName:"a"},"StateEntityGroup"))),(0,i.kt)("p",null,"transform of world."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/interfaces/WorldState.ts#L122"},"packages/engine/src/networking/interfaces/WorldState.ts:122")))}d.isMDXComponent=!0}}]);