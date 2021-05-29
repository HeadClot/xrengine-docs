(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[95637],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return s},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),o=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=o(a),f=r,c=k["".concat(m,".").concat(f)]||k[f]||d[f]||l;return a?n.createElement(c,p(p({ref:t},s),{},{components:a})):n.createElement(c,p({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=k;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},74722:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return m},toc:function(){return o},default:function(){return d}});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),p=["components"],i={id:"game_templates_golf_prefab_golfclubprefab",title:"Module: game/templates/Golf/prefab/GolfClubPrefab",sidebar_label:"game/templates/Golf/prefab/GolfClubPrefab",custom_edit_url:null},m={unversionedId:"docs-engine/modules/game_templates_golf_prefab_golfclubprefab",id:"docs-engine/modules/game_templates_golf_prefab_golfclubprefab",isDocsHomePage:!1,title:"Module: game/templates/Golf/prefab/GolfClubPrefab",description:"Variables",source:"@site/docs/docs-engine/modules/game_templates_golf_prefab_golfclubprefab.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/game_templates_golf_prefab_golfclubprefab",permalink:"/xrengine-docs/docs/docs-engine/modules/game_templates_golf_prefab_golfclubprefab",editUrl:null,version:"current",sidebar_label:"game/templates/Golf/prefab/GolfClubPrefab",frontMatter:{id:"game_templates_golf_prefab_golfclubprefab",title:"Module: game/templates/Golf/prefab/GolfClubPrefab",sidebar_label:"game/templates/Golf/prefab/GolfClubPrefab",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: game/templates/Golf/prefab/GolfBallPrefab",permalink:"/xrengine-docs/docs/docs-engine/modules/game_templates_golf_prefab_golfballprefab"},next:{title:"Module: game/templates/Golf/prefab/GolfGamePrefabs",permalink:"/xrengine-docs/docs/docs-engine/modules/game_templates_golf_prefab_golfgameprefabs"}},o=[{value:"Variables",id:"variables",children:[{value:"GolfClubPrefab",id:"golfclubprefab",children:[]}]},{value:"Functions",id:"functions",children:[{value:"createGolfClubPrefab",id:"creategolfclubprefab",children:[]},{value:"enableClub",id:"enableclub",children:[]},{value:"initializeGolfClub",id:"initializegolfclub",children:[]},{value:"spawnClub",id:"spawnclub",children:[]},{value:"updateClub",id:"updateclub",children:[]}]}],s={toc:o};function d(e){var t=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"variables"},"Variables"),(0,l.kt)("h3",{id:"golfclubprefab"},"GolfClubPrefab"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,l.kt)("strong",{parentName:"p"},"GolfClubPrefab"),": ",(0,l.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_networkprefab.networkprefab"},(0,l.kt)("em",{parentName:"a"},"NetworkPrefab"))),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/game/templates/Golf/prefab/GolfClubPrefab.ts#L310"},"packages/engine/src/game/templates/Golf/prefab/GolfClubPrefab.ts:310")),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"creategolfclubprefab"},"createGolfClubPrefab"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Const"),(0,l.kt)("strong",{parentName:"p"},"createGolfClubPrefab"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"args"),": { ",(0,l.kt)("inlineCode",{parentName:"p"},"networkId?"),": ",(0,l.kt)("em",{parentName:"p"},"number")," ; ",(0,l.kt)("inlineCode",{parentName:"p"},"ownerId?"),": ",(0,l.kt)("em",{parentName:"p"},"string")," ; ",(0,l.kt)("inlineCode",{parentName:"p"},"parameters?"),": ",(0,l.kt)("em",{parentName:"p"},"any")," ; ",(0,l.kt)("inlineCode",{parentName:"p"},"uniqueId"),": ",(0,l.kt)("em",{parentName:"p"},"string"),"  }): ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"args")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"object"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"args.networkId?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"args.ownerId?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"args.parameters?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"args.uniqueId")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/game/templates/Golf/prefab/GolfClubPrefab.ts#L286"},"packages/engine/src/game/templates/Golf/prefab/GolfClubPrefab.ts:286")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"enableclub"},"enableClub"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Const"),(0,l.kt)("strong",{parentName:"p"},"enableClub"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"entityClub"),": ",(0,l.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,l.kt)("em",{parentName:"a"},"Entity")),", ",(0,l.kt)("inlineCode",{parentName:"p"},"enable"),": ",(0,l.kt)("em",{parentName:"p"},"boolean"),"): ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"entityClub")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,l.kt)("em",{parentName:"a"},"Entity")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"enable")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"boolean"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/game/templates/Golf/prefab/GolfClubPrefab.ts#L76"},"packages/engine/src/game/templates/Golf/prefab/GolfClubPrefab.ts:76")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"initializegolfclub"},"initializeGolfClub"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Const"),(0,l.kt)("strong",{parentName:"p"},"initializeGolfClub"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,l.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,l.kt)("em",{parentName:"a"},"Entity")),"): ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"entity")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,l.kt)("em",{parentName:"a"},"Entity")))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/game/templates/Golf/prefab/GolfClubPrefab.ts#L178"},"packages/engine/src/game/templates/Golf/prefab/GolfClubPrefab.ts:178")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"spawnclub"},"spawnClub"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Const"),(0,l.kt)("strong",{parentName:"p"},"spawnClub"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,l.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,l.kt)("em",{parentName:"a"},"Entity")),", ",(0,l.kt)("inlineCode",{parentName:"p"},"args?"),": ",(0,l.kt)("em",{parentName:"p"},"any"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"delta?"),": ",(0,l.kt)("em",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"entityOut?"),": ",(0,l.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,l.kt)("em",{parentName:"a"},"Entity")),", ",(0,l.kt)("inlineCode",{parentName:"p"},"time?"),": ",(0,l.kt)("em",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"checks?"),": ",(0,l.kt)("em",{parentName:"p"},"any"),"): ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"author"))," Josh Field <github.com/HexaField>"),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"entity")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,l.kt)("em",{parentName:"a"},"Entity")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"args?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"delta?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"entityOut?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,l.kt)("em",{parentName:"a"},"Entity")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"time?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"checks?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/game/templates/Golf/prefab/GolfClubPrefab.ts#L39"},"packages/engine/src/game/templates/Golf/prefab/GolfClubPrefab.ts:39")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"updateclub"},"updateClub"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Const"),(0,l.kt)("strong",{parentName:"p"},"updateClub"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,l.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,l.kt)("em",{parentName:"a"},"Entity")),", ",(0,l.kt)("inlineCode",{parentName:"p"},"args?"),": ",(0,l.kt)("em",{parentName:"p"},"any"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"delta?"),": ",(0,l.kt)("em",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"entityOut?"),": ",(0,l.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,l.kt)("em",{parentName:"a"},"Entity")),", ",(0,l.kt)("inlineCode",{parentName:"p"},"time?"),": ",(0,l.kt)("em",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"checks?"),": ",(0,l.kt)("em",{parentName:"p"},"any"),"): ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"author"))," Josh Field <github.com/HexaField>"),(0,l.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"entity")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,l.kt)("em",{parentName:"a"},"Entity")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"args?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"delta?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"entityOut?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,l.kt)("em",{parentName:"a"},"Entity")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"time?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"checks?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/game/templates/Golf/prefab/GolfClubPrefab.ts#L90"},"packages/engine/src/game/templates/Golf/prefab/GolfClubPrefab.ts:90")))}d.isMDXComponent=!0}}]);