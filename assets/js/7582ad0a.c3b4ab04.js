(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[52230],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,u=m["".concat(o,".").concat(h)]||m[h]||d[h]||i;return n?a.createElement(u,s(s({ref:t},l),{},{components:n})):a.createElement(u,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5346:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return o},default:function(){return l}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),s={id:"state_interfaces_stateschema.stateschemavalue",title:"Interface: StateSchemaValue",sidebar_label:"StateSchemaValue",custom_edit_url:null},c={unversionedId:"docs-engine/interfaces/state_interfaces_stateschema.stateschemavalue",id:"docs-engine/interfaces/state_interfaces_stateschema.stateschemavalue",isDocsHomePage:!1,title:"Interface: StateSchemaValue",description:"state/interfaces/StateSchema.StateSchemaValue",source:"@site/docs/docs-engine/interfaces/state_interfaces_stateschema.stateschemavalue.md",sourceDirName:"docs-engine/interfaces",slug:"/docs-engine/interfaces/state_interfaces_stateschema.stateschemavalue",permalink:"/xrengine-docs/docs/docs-engine/interfaces/state_interfaces_stateschema.stateschemavalue",editUrl:null,version:"current",sidebar_label:"StateSchemaValue",frontMatter:{id:"state_interfaces_stateschema.stateschemavalue",title:"Interface: StateSchemaValue",sidebar_label:"StateSchemaValue",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: StateSchema",permalink:"/xrengine-docs/docs/docs-engine/interfaces/state_interfaces_stateschema.stateschema"},next:{title:"Interface: StateValue<T\\>",permalink:"/xrengine-docs/docs/docs-engine/interfaces/state_interfaces_statevalue.statevalue"}},o=[{value:"Properties",id:"properties",children:[{value:"blockedBy",id:"blockedby",children:[]},{value:"canEnterVehicles",id:"canentervehicles",children:[]},{value:"canFindVehiclesToEnter",id:"canfindvehiclestoenter",children:[]},{value:"canLeaveVehicles",id:"canleavevehicles",children:[]},{value:"component",id:"component",children:[]},{value:"componentProperties",id:"componentproperties",children:[]},{value:"onChanged",id:"onchanged",children:[]},{value:"onEntry",id:"onentry",children:[]},{value:"onExit",id:"onexit",children:[]},{value:"onLateUpdate",id:"onlateupdate",children:[]},{value:"onUpdate",id:"onupdate",children:[]},{value:"overrides",id:"overrides",children:[]}]}],p={toc:o};function l(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/state_interfaces_stateschema"},"state/interfaces/StateSchema"),".StateSchemaValue"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"blockedby"},"blockedBy"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"blockedBy"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/state_types_statealias#statealias"},(0,i.kt)("em",{parentName:"a"},"StateAlias"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/state/interfaces/StateSchema.ts#L5"},"packages/engine/src/state/interfaces/StateSchema.ts:5")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"canentervehicles"},"canEnterVehicles"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"canEnterVehicles"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/state/interfaces/StateSchema.ts#L8"},"packages/engine/src/state/interfaces/StateSchema.ts:8")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"canfindvehiclestoenter"},"canFindVehiclesToEnter"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"canFindVehiclesToEnter"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/state/interfaces/StateSchema.ts#L7"},"packages/engine/src/state/interfaces/StateSchema.ts:7")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"canleavevehicles"},"canLeaveVehicles"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"canLeaveVehicles"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/state/interfaces/StateSchema.ts#L9"},"packages/engine/src/state/interfaces/StateSchema.ts:9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"component"},"component"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"component"),": ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/state/interfaces/StateSchema.ts#L4"},"packages/engine/src/state/interfaces/StateSchema.ts:4")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"componentproperties"},"componentProperties"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"componentProperties"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"component"),": ",(0,i.kt)("em",{parentName:"p"},"any")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"properties"),": { ","[key: string]",": ",(0,i.kt)("em",{parentName:"p"},"any"),";  }  }[]"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/state/interfaces/StateSchema.ts#L10"},"packages/engine/src/state/interfaces/StateSchema.ts:10")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onchanged"},"onChanged"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"onChanged"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/state_interfaces_stateschema.behavioralias"},(0,i.kt)("em",{parentName:"a"},"BehaviorAlias")),"[]"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/state/interfaces/StateSchema.ts#L17"},"packages/engine/src/state/interfaces/StateSchema.ts:17")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onentry"},"onEntry"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"onEntry"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/state_interfaces_stateschema.behavioralias"},(0,i.kt)("em",{parentName:"a"},"BehaviorAlias")),"[]"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/state/interfaces/StateSchema.ts#L16"},"packages/engine/src/state/interfaces/StateSchema.ts:16")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onexit"},"onExit"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"onExit"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/state_interfaces_stateschema.behavioralias"},(0,i.kt)("em",{parentName:"a"},"BehaviorAlias")),"[]"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/state/interfaces/StateSchema.ts#L20"},"packages/engine/src/state/interfaces/StateSchema.ts:20")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onlateupdate"},"onLateUpdate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"onLateUpdate"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/state_interfaces_stateschema.behavioralias"},(0,i.kt)("em",{parentName:"a"},"BehaviorAlias")),"[]"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/state/interfaces/StateSchema.ts#L19"},"packages/engine/src/state/interfaces/StateSchema.ts:19")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onupdate"},"onUpdate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"onUpdate"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/state_interfaces_stateschema.behavioralias"},(0,i.kt)("em",{parentName:"a"},"BehaviorAlias")),"[]"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/state/interfaces/StateSchema.ts#L18"},"packages/engine/src/state/interfaces/StateSchema.ts:18")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"overrides"},"overrides"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"overrides"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/state_types_statealias#statealias"},(0,i.kt)("em",{parentName:"a"},"StateAlias"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/state/interfaces/StateSchema.ts#L6"},"packages/engine/src/state/interfaces/StateSchema.ts:6")))}l.isMDXComponent=!0}}]);