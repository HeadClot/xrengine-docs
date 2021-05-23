(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[7144],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||l[m]||c;return t?a.createElement(f,i(i({ref:n},d),{},{components:t})):a.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<c;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},29984:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s},default:function(){return d}});var a=t(22122),r=t(19756),c=(t(67294),t(3905)),i={id:"scene_interfaces_scenedatacomponent.scenedatacomponent",title:"Interface: SceneDataComponent",sidebar_label:"SceneDataComponent",custom_edit_url:null},o={unversionedId:"docs-engine/interfaces/scene_interfaces_scenedatacomponent.scenedatacomponent",id:"docs-engine/interfaces/scene_interfaces_scenedatacomponent.scenedatacomponent",isDocsHomePage:!1,title:"Interface: SceneDataComponent",description:"scene/interfaces/SceneDataComponent.SceneDataComponent",source:"@site/docs/docs-engine/interfaces/scene_interfaces_scenedatacomponent.scenedatacomponent.md",sourceDirName:"docs-engine/interfaces",slug:"/docs-engine/interfaces/scene_interfaces_scenedatacomponent.scenedatacomponent",permalink:"/xrengine-docs/docs/docs-engine/interfaces/scene_interfaces_scenedatacomponent.scenedatacomponent",editUrl:null,version:"current",sidebar_label:"SceneDataComponent",frontMatter:{id:"scene_interfaces_scenedatacomponent.scenedatacomponent",title:"Interface: SceneDataComponent",sidebar_label:"SceneDataComponent",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: SceneData",permalink:"/xrengine-docs/docs/docs-engine/interfaces/scene_interfaces_scenedata.scenedata"},next:{title:"Interface: SceneDataEntity",permalink:"/xrengine-docs/docs/docs-engine/interfaces/scene_interfaces_scenedataentity.scenedataentity"}},s=[{value:"Properties",id:"properties",children:[{value:"createdAt",id:"createdat",children:[]},{value:"data",id:"data",children:[]},{value:"entityId",id:"entityid",children:[]},{value:"id",id:"id",children:[]},{value:"name",id:"name",children:[]},{value:"props",id:"props",children:[]},{value:"sceneEntityId",id:"sceneentityid",children:[]},{value:"type",id:"type",children:[]},{value:"updatedAt",id:"updatedat",children:[]}]}],p={toc:s};function d(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/scene_interfaces_scenedatacomponent"},"scene/interfaces/SceneDataComponent"),".SceneDataComponent"),(0,c.kt)("h2",{id:"properties"},"Properties"),(0,c.kt)("h3",{id:"createdat"},"createdAt"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("strong",{parentName:"p"},"createdAt"),": ",(0,c.kt)("em",{parentName:"p"},"string")),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/scene/interfaces/SceneDataComponent.ts#L9"},"packages/engine/src/scene/interfaces/SceneDataComponent.ts:9")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"data"},"data"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("strong",{parentName:"p"},"data"),": ",(0,c.kt)("em",{parentName:"p"},"Record"),"<string, any",">"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/scene/interfaces/SceneDataComponent.ts#L7"},"packages/engine/src/scene/interfaces/SceneDataComponent.ts:7")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"entityid"},"entityId"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("strong",{parentName:"p"},"entityId"),": ",(0,c.kt)("em",{parentName:"p"},"string")),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/scene/interfaces/SceneDataComponent.ts#L3"},"packages/engine/src/scene/interfaces/SceneDataComponent.ts:3")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"id"},"id"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("strong",{parentName:"p"},"id"),": ",(0,c.kt)("em",{parentName:"p"},"string")),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/scene/interfaces/SceneDataComponent.ts#L2"},"packages/engine/src/scene/interfaces/SceneDataComponent.ts:2")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"name"},"name"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("strong",{parentName:"p"},"name"),": ",(0,c.kt)("em",{parentName:"p"},"string")),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/scene/interfaces/SceneDataComponent.ts#L5"},"packages/engine/src/scene/interfaces/SceneDataComponent.ts:5")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"props"},"props"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("strong",{parentName:"p"},"props"),": ",(0,c.kt)("em",{parentName:"p"},"Record"),"<string, any",">"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/scene/interfaces/SceneDataComponent.ts#L8"},"packages/engine/src/scene/interfaces/SceneDataComponent.ts:8")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"sceneentityid"},"sceneEntityId"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("strong",{parentName:"p"},"sceneEntityId"),": ",(0,c.kt)("em",{parentName:"p"},"string")),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/scene/interfaces/SceneDataComponent.ts#L4"},"packages/engine/src/scene/interfaces/SceneDataComponent.ts:4")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"type"},"type"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("strong",{parentName:"p"},"type"),": ",(0,c.kt)("em",{parentName:"p"},"string")),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/scene/interfaces/SceneDataComponent.ts#L6"},"packages/engine/src/scene/interfaces/SceneDataComponent.ts:6")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"updatedat"},"updatedAt"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("strong",{parentName:"p"},"updatedAt"),": ",(0,c.kt)("em",{parentName:"p"},"string")),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/scene/interfaces/SceneDataComponent.ts#L10"},"packages/engine/src/scene/interfaces/SceneDataComponent.ts:10")))}d.isMDXComponent=!0}}]);