(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[99831],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,y=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76136:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],l={id:"vehicle_behaviors_onupdateplayerincar",title:"Module: vehicle/behaviors/onUpdatePlayerInCar",sidebar_label:"vehicle/behaviors/onUpdatePlayerInCar",custom_edit_url:null},c={unversionedId:"docs-engine/modules/vehicle_behaviors_onupdateplayerincar",id:"docs-engine/modules/vehicle_behaviors_onupdateplayerincar",isDocsHomePage:!1,title:"Module: vehicle/behaviors/onUpdatePlayerInCar",description:"Functions",source:"@site/docs/docs-engine/modules/vehicle_behaviors_onupdateplayerincar.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/vehicle_behaviors_onupdateplayerincar",permalink:"/xrengine-docs/docs/docs-engine/modules/vehicle_behaviors_onupdateplayerincar",editUrl:null,version:"current",sidebar_label:"vehicle/behaviors/onUpdatePlayerInCar",frontMatter:{id:"vehicle_behaviors_onupdateplayerincar",title:"Module: vehicle/behaviors/onUpdatePlayerInCar",sidebar_label:"vehicle/behaviors/onUpdatePlayerInCar",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: vehicle/behaviors/onStartRemoveFromCar",permalink:"/xrengine-docs/docs/docs-engine/modules/vehicle_behaviors_onstartremovefromcar"},next:{title:"Module: vehicle/behaviors/vehicleCorrectionBehavior",permalink:"/xrengine-docs/docs/docs-engine/modules/vehicle_behaviors_vehiclecorrectionbehavior"}},p=[{value:"Functions",id:"functions",children:[{value:"onUpdatePlayerInCar",id:"onupdateplayerincar",children:[]}]}],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"onupdateplayerincar"},"onUpdatePlayerInCar"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const"),(0,i.kt)("strong",{parentName:"p"},"onUpdatePlayerInCar"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,i.kt)("em",{parentName:"a"},"Entity")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"entityCar"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,i.kt)("em",{parentName:"a"},"Entity")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"seat"),": ",(0,i.kt)("em",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"delta"),": ",(0,i.kt)("em",{parentName:"p"},"any"),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"author"))," HydraFire <github.com/HydraFire>"),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,i.kt)("em",{parentName:"a"},"Entity"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"is the entity to handle state changes to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entityCar")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,i.kt)("em",{parentName:"a"},"Entity"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"seat")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"idex array of seats")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"delta")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/vehicle/behaviors/onUpdatePlayerInCar.ts#L17"},"packages/engine/src/vehicle/behaviors/onUpdatePlayerInCar.ts:17")))}d.isMDXComponent=!0}}]);