(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[63314],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,k=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50788:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],c={id:"scene_behaviors_createboxcollider",title:"Module: scene/behaviors/createBoxCollider",sidebar_label:"scene/behaviors/createBoxCollider",custom_edit_url:null},l={unversionedId:"docs-engine/modules/scene_behaviors_createboxcollider",id:"docs-engine/modules/scene_behaviors_createboxcollider",isDocsHomePage:!1,title:"Module: scene/behaviors/createBoxCollider",description:"Functions",source:"@site/docs/docs-engine/modules/scene_behaviors_createboxcollider.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/scene_behaviors_createboxcollider",permalink:"/xrengine-docs/docs/docs-engine/modules/scene_behaviors_createboxcollider",editUrl:null,version:"current",sidebar_label:"scene/behaviors/createBoxCollider",frontMatter:{id:"scene_behaviors_createboxcollider",title:"Module: scene/behaviors/createBoxCollider",sidebar_label:"scene/behaviors/createBoxCollider",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: scene/behaviors/createBackground",permalink:"/xrengine-docs/docs/docs-engine/modules/scene_behaviors_createbackground"},next:{title:"Module: scene/behaviors/createCommonInteractive",permalink:"/xrengine-docs/docs/docs-engine/modules/scene_behaviors_createcommoninteractive"}},s=[{value:"Functions",id:"functions",children:[{value:"createBoxCollider",id:"createboxcollider",children:[]}]}],d={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"createboxcollider"},"createBoxCollider"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const"),(0,o.kt)("strong",{parentName:"p"},"createBoxCollider"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"args?"),": ",(0,o.kt)("em",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"delta?"),": ",(0,o.kt)("em",{parentName:"p"},"number"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"entityOut?"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"time?"),": ",(0,o.kt)("em",{parentName:"p"},"number"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"checks?"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"author"))," HydraFire <github.com/HydraFire>"),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"entity")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"args?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"delta?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"number"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"entityOut?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"time?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"number"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"checks?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/scene/behaviors/createBoxCollider.ts#L8"},"packages/engine/src/scene/behaviors/createBoxCollider.ts:8")))}p.isMDXComponent=!0}}]);