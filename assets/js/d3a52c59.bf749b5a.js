(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[69290],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},E=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),E=l(t),d=s,m=E["".concat(c,".").concat(d)]||E[d]||u[d]||a;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=E;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}E.displayName="MDXCreateElement"},5182:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c},default:function(){return p}});var r=t(22122),s=t(19756),a=(t(67294),t(3905)),o={id:"ecs_constants_events",title:"Module: ecs/constants/Events",sidebar_label:"ecs/constants/Events",custom_edit_url:null},i={unversionedId:"docs-engine/modules/ecs_constants_events",id:"docs-engine/modules/ecs_constants_events",isDocsHomePage:!1,title:"Module: ecs/constants/Events",description:"Name of different events which will occur on the entities.",source:"@site/docs/docs-engine/modules/ecs_constants_events.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/ecs_constants_events",permalink:"/xrengine-docs/docs/docs-engine/modules/ecs_constants_events",editUrl:null,version:"current",sidebar_label:"ecs/constants/Events",frontMatter:{id:"ecs_constants_events",title:"Module: ecs/constants/Events",sidebar_label:"ecs/constants/Events",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: ecs/classes/SystemStateComponent",permalink:"/xrengine-docs/docs/docs-engine/modules/ecs_classes_systemstatecomponent"},next:{title:"Module: ecs/functions/ComponentFunctions",permalink:"/xrengine-docs/docs/docs-engine/modules/ecs_functions_componentfunctions"}},c=[{value:"Entity Event Variables",id:"entity-event-variables",children:[{value:"COMPONENT_ADDED",id:"component_added",children:[]},{value:"COMPONENT_REMOVE",id:"component_remove",children:[]},{value:"ENTITY_CREATED",id:"entity_created",children:[]},{value:"ENTITY_REMOVED",id:"entity_removed",children:[]}]},{value:"Query Event Variables",id:"query-event-variables",children:[{value:"QUERY_COMPONENT_CHANGED",id:"query_component_changed",children:[]},{value:"QUERY_ENTITY_ADDED",id:"query_entity_added",children:[]},{value:"QUERY_ENTITY_REMOVED",id:"query_entity_removed",children:[]}]}],l={toc:c};function p(e){var n=e.components,t=(0,s.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Name of different events which will occur on the entities."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,a.kt)("h2",{id:"entity-event-variables"},"Entity Event Variables"),(0,a.kt)("h3",{id:"component_added"},"COMPONENT","_","ADDED"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"COMPONENT","_","ADDED"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"Entity#COMPONENT_ADDED"'),"= 'Entity#COMPONENT","_","ADDED'"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f0a68caaf/packages/engine/src/ecs/constants/Events.ts#L19"},"packages/engine/src/ecs/constants/Events.ts:19")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"component_remove"},"COMPONENT","_","REMOVE"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"COMPONENT","_","REMOVE"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"Entity#COMPONENT_REMOVE"'),"= 'Entity#COMPONENT","_","REMOVE'"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f0a68caaf/packages/engine/src/ecs/constants/Events.ts#L21"},"packages/engine/src/ecs/constants/Events.ts:21")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"entity_created"},"ENTITY","_","CREATED"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"ENTITY","_","CREATED"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"Entity#ENTITY_CREATE"'),"= 'Entity#ENTITY","_","CREATE'"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f0a68caaf/packages/engine/src/ecs/constants/Events.ts#L15"},"packages/engine/src/ecs/constants/Events.ts:15")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"entity_removed"},"ENTITY","_","REMOVED"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"ENTITY","_","REMOVED"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"Entity#ENTITY_REMOVED"'),"= 'Entity#ENTITY","_","REMOVED'"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f0a68caaf/packages/engine/src/ecs/constants/Events.ts#L17"},"packages/engine/src/ecs/constants/Events.ts:17")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"query-event-variables"},"Query Event Variables"),(0,a.kt)("h3",{id:"query_component_changed"},"QUERY","_","COMPONENT","_","CHANGED"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"QUERY","_","COMPONENT","_","CHANGED"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"Query#COMPONENT_CHANGED"'),"= 'Query#COMPONENT","_","CHANGED'"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f0a68caaf/packages/engine/src/ecs/constants/Events.ts#L12"},"packages/engine/src/ecs/constants/Events.ts:12")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"query_entity_added"},"QUERY","_","ENTITY","_","ADDED"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"QUERY","_","ENTITY","_","ADDED"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"Query#ENTITY_ADDED"'),"= 'Query#ENTITY","_","ADDED'"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f0a68caaf/packages/engine/src/ecs/constants/Events.ts#L8"},"packages/engine/src/ecs/constants/Events.ts:8")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"query_entity_removed"},"QUERY","_","ENTITY","_","REMOVED"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"QUERY","_","ENTITY","_","REMOVED"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"Query#ENTITY_REMOVED"'),"= 'Query#ENTITY","_","REMOVED'"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f0a68caaf/packages/engine/src/ecs/constants/Events.ts#L10"},"packages/engine/src/ecs/constants/Events.ts:10")))}p.isMDXComponent=!0}}]);