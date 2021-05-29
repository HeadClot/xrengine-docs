(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[22152],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return u}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=l(t),u=a,g=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},665:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=t(22122),a=t(19756),i=(t(67294),t(3905)),o=["components"],d={id:"vehicle_behaviors_onaddendingincar",title:"Module: vehicle/behaviors/onAddEndingInCar",sidebar_label:"vehicle/behaviors/onAddEndingInCar",custom_edit_url:null},c={unversionedId:"docs-engine/modules/vehicle_behaviors_onaddendingincar",id:"docs-engine/modules/vehicle_behaviors_onaddendingincar",isDocsHomePage:!1,title:"Module: vehicle/behaviors/onAddEndingInCar",description:"Functions",source:"@site/docs/docs-engine/modules/vehicle_behaviors_onaddendingincar.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/vehicle_behaviors_onaddendingincar",permalink:"/xrengine-docs/docs/docs-engine/modules/vehicle_behaviors_onaddendingincar",editUrl:null,version:"current",sidebar_label:"vehicle/behaviors/onAddEndingInCar",frontMatter:{id:"vehicle_behaviors_onaddendingincar",title:"Module: vehicle/behaviors/onAddEndingInCar",sidebar_label:"vehicle/behaviors/onAddEndingInCar",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: vehicle/behaviors/handleVehicleStateChange",permalink:"/xrengine-docs/docs/docs-engine/modules/vehicle_behaviors_handlevehiclestatechange"},next:{title:"Module: vehicle/behaviors/onAddedInCar",permalink:"/xrengine-docs/docs/docs-engine/modules/vehicle_behaviors_onaddedincar"}},l=[{value:"Functions",id:"functions",children:[{value:"onAddEndingInCar",id:"onaddendingincar",children:[]}]}],s={toc:l};function p(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"onaddendingincar"},"onAddEndingInCar"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const"),(0,i.kt)("strong",{parentName:"p"},"onAddEndingInCar"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,i.kt)("em",{parentName:"a"},"Entity")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"entityCar"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,i.kt)("em",{parentName:"a"},"Entity")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"seat"),": ",(0,i.kt)("em",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"delta"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,i.kt)("em",{parentName:"a"},"Entity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entityCar")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,i.kt)("em",{parentName:"a"},"Entity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"seat")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"delta")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/vehicle/behaviors/onAddEndingInCar.ts#L59"},"packages/engine/src/vehicle/behaviors/onAddEndingInCar.ts:59")))}p.isMDXComponent=!0}}]);