(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[81920],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),h=n,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||o;return r?a.createElement(u,i(i({ref:t},s),{},{components:r})):a.createElement(u,i({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69026:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=r(22122),n=r(19756),o=(r(67294),r(3905)),i=["components"],c={id:"character_behaviors_characterinterpolationbehavior",title:"Module: character/behaviors/characterInterpolationBehavior",sidebar_label:"character/behaviors/characterInterpolationBehavior",custom_edit_url:null},l={unversionedId:"docs-engine/modules/character_behaviors_characterinterpolationbehavior",id:"docs-engine/modules/character_behaviors_characterinterpolationbehavior",isDocsHomePage:!1,title:"Module: character/behaviors/characterInterpolationBehavior",description:"Functions",source:"@site/docs/docs-engine/modules/character_behaviors_characterinterpolationbehavior.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/character_behaviors_characterinterpolationbehavior",permalink:"/xrengine-docs/docs/docs-engine/modules/character_behaviors_characterinterpolationbehavior",editUrl:null,version:"current",sidebar_label:"character/behaviors/characterInterpolationBehavior",frontMatter:{id:"character_behaviors_characterinterpolationbehavior",title:"Module: character/behaviors/characterInterpolationBehavior",sidebar_label:"character/behaviors/characterInterpolationBehavior",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: character/behaviors/characterCorrectionBehavior",permalink:"/xrengine-docs/docs/docs-engine/modules/character_behaviors_charactercorrectionbehavior"},next:{title:"Module: character/behaviors/characterMoveBehavior",permalink:"/xrengine-docs/docs/docs-engine/modules/character_behaviors_charactermovebehavior"}},p=[{value:"Functions",id:"functions",children:[{value:"characterInterpolationBehavior",id:"characterinterpolationbehavior",children:[]}]}],s={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"characterinterpolationbehavior"},"characterInterpolationBehavior"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const"),(0,o.kt)("strong",{parentName:"p"},"characterInterpolationBehavior"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"args?"),": ",(0,o.kt)("em",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"delta?"),": ",(0,o.kt)("em",{parentName:"p"},"number"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"entityOut?"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"time?"),": ",(0,o.kt)("em",{parentName:"p"},"number"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"checks?"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"author"))," HydraFire <github.com/HydraFire>"),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"entity")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"args?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"delta?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"number"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"entityOut?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"time?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"number"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"checks?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/character/behaviors/characterInterpolationBehavior.ts#L12"},"packages/engine/src/character/behaviors/characterInterpolationBehavior.ts:12")))}d.isMDXComponent=!0}}]);