(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[59592],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,k=d["".concat(p,".").concat(u)]||d[u]||l[u]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69582:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=["components"],m={id:"common_interfaces_behavior",title:"Module: common/interfaces/Behavior",sidebar_label:"common/interfaces/Behavior",custom_edit_url:null},p={unversionedId:"docs-engine/modules/common_interfaces_behavior",id:"docs-engine/modules/common_interfaces_behavior",isDocsHomePage:!1,title:"Module: common/interfaces/Behavior",description:"Type aliases",source:"@site/docs/docs-engine/modules/common_interfaces_behavior.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/common_interfaces_behavior",permalink:"/xrengine-docs/docs/docs-engine/modules/common_interfaces_behavior",editUrl:null,version:"current",sidebar_label:"common/interfaces/Behavior",frontMatter:{id:"common_interfaces_behavior",title:"Module: common/interfaces/Behavior",sidebar_label:"common/interfaces/Behavior",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: common/functions/vectorToScreenXYZ",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_vectortoscreenxyz"},next:{title:"Module: common/interfaces/BehaviorValue",permalink:"/xrengine-docs/docs/docs-engine/modules/common_interfaces_behaviorvalue"}},s=[{value:"Type aliases",id:"type-aliases",children:[{value:"Behavior",id:"behavior",children:[]}]}],c={toc:s};function l(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"type-aliases"},"Type aliases"),(0,i.kt)("h3",{id:"behavior"},"Behavior"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"Behavior"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,i.kt)("em",{parentName:"a"},"Entity")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"args?"),": ",(0,i.kt)("em",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"delta?"),": ",(0,i.kt)("em",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"entityOut?"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,i.kt)("em",{parentName:"a"},"Entity")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"time?"),": ",(0,i.kt)("em",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"checks?"),": ",(0,i.kt)("em",{parentName:"p"},"any"),") => ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Type for Behavior of different components."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"param"))," Entity for which behavior will be defined."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"param"))," Args for behavior."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"param"))," Time since last frame."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"param"))," "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"param"))," "),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,i.kt)("em",{parentName:"a"},"Entity")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"args?"),": ",(0,i.kt)("em",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"delta?"),": ",(0,i.kt)("em",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"entityOut?"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,i.kt)("em",{parentName:"a"},"Entity")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"time?"),": ",(0,i.kt)("em",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"checks?"),": ",(0,i.kt)("em",{parentName:"p"},"any"),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,i.kt)("em",{parentName:"a"},"Entity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"delta?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entityOut?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,i.kt)("em",{parentName:"a"},"Entity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"time?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"checks?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/common/interfaces/Behavior.ts#L10"},"packages/engine/src/common/interfaces/Behavior.ts:10")))}l.isMDXComponent=!0}}]);