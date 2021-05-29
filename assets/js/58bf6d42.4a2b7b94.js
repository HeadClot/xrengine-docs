(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[56015],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return o},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=m(a),k=r,d=u["".concat(p,".").concat(k)]||u[k]||c[k]||s;return a?n.createElement(d,i(i({ref:t},o),{},{components:a})):n.createElement(d,i({ref:t},o))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<s;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},84530:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var n=a(22122),r=a(19756),s=(a(67294),a(3905)),i=["components"],l={id:"physics_classes_simulatorbase.simulatorbase",title:"Class: SimulatorBase",sidebar_label:"SimulatorBase",custom_edit_url:null},p={unversionedId:"docs-engine/classes/physics_classes_simulatorbase.simulatorbase",id:"docs-engine/classes/physics_classes_simulatorbase.simulatorbase",isDocsHomePage:!1,title:"Class: SimulatorBase",description:"physics/classes/SimulatorBase.SimulatorBase",source:"@site/docs/docs-engine/classes/physics_classes_simulatorbase.simulatorbase.md",sourceDirName:"docs-engine/classes",slug:"/docs-engine/classes/physics_classes_simulatorbase.simulatorbase",permalink:"/xrengine-docs/docs/docs-engine/classes/physics_classes_simulatorbase.simulatorbase",editUrl:null,version:"current",sidebar_label:"SimulatorBase",frontMatter:{id:"physics_classes_simulatorbase.simulatorbase",title:"Class: SimulatorBase",sidebar_label:"SimulatorBase",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Class: SimulationFrame",permalink:"/xrengine-docs/docs/docs-engine/classes/physics_classes_simulationframe.simulationframe"},next:{title:"Class: RelativeSpringSimulator",permalink:"/xrengine-docs/docs/docs-engine/classes/physics_classes_springsimulator.relativespringsimulator"}},m=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"cache",id:"cache",children:[]},{value:"damping",id:"damping",children:[]},{value:"frameTime",id:"frametime",children:[]},{value:"mass",id:"mass",children:[]},{value:"offset",id:"offset",children:[]}]},{value:"Methods",id:"methods",children:[{value:"generateFrames",id:"generateframes",children:[]},{value:"getFrame",id:"getframe",children:[]},{value:"lastFrame",id:"lastframe",children:[]},{value:"setFPS",id:"setfps",children:[]},{value:"simulate",id:"simulate",children:[]}]}],o={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/physics_classes_simulatorbase"},"physics/classes/SimulatorBase"),".SimulatorBase"),(0,s.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"SimulatorBase")),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_classes_springsimulator.springsimulator"},(0,s.kt)("em",{parentName:"a"},"SpringSimulator"))),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_classes_springsimulator.relativespringsimulator"},(0,s.kt)("em",{parentName:"a"},"RelativeSpringSimulator"))),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_classes_vectorspringsimulator.vectorspringsimulator"},(0,s.kt)("em",{parentName:"a"},"VectorSpringSimulator"))))),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,"+"," ",(0,s.kt)("strong",{parentName:"p"},"new SimulatorBase"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"fps"),": ",(0,s.kt)("em",{parentName:"p"},"number"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"mass"),": ",(0,s.kt)("em",{parentName:"p"},"number"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"damping"),": ",(0,s.kt)("em",{parentName:"p"},"number"),"): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_classes_simulatorbase.simulatorbase"},(0,s.kt)("em",{parentName:"a"},"SimulatorBase"))),(0,s.kt)("h4",{id:"parameters"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"fps")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"number"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"mass")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"number"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"damping")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"number"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_classes_simulatorbase.simulatorbase"},(0,s.kt)("em",{parentName:"a"},"SimulatorBase"))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/physics/classes/SimulatorBase.ts#L7"},"packages/engine/src/physics/classes/SimulatorBase.ts:7")),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"cache"},"cache"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,s.kt)("strong",{parentName:"p"},"cache"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"[]"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/physics/classes/SimulatorBase.ts#L7"},"packages/engine/src/physics/classes/SimulatorBase.ts:7")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"damping"},"damping"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"damping"),": ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/physics/classes/SimulatorBase.ts#L4"},"packages/engine/src/physics/classes/SimulatorBase.ts:4")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"frametime"},"frameTime"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"frameTime"),": ",(0,s.kt)("em",{parentName:"p"},"number")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/physics/classes/SimulatorBase.ts#L5"},"packages/engine/src/physics/classes/SimulatorBase.ts:5")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"mass"},"mass"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"mass"),": ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/physics/classes/SimulatorBase.ts#L3"},"packages/engine/src/physics/classes/SimulatorBase.ts:3")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"offset"},"offset"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"offset"),": ",(0,s.kt)("em",{parentName:"p"},"number")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/physics/classes/SimulatorBase.ts#L6"},"packages/engine/src/physics/classes/SimulatorBase.ts:6")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"generateframes"},"generateFrames"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"generateFrames"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"timeStep"),": ",(0,s.kt)("em",{parentName:"p"},"number"),"): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Generates frames between last simulation call and the current one"),(0,s.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"timeStep")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"number"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/physics/classes/SimulatorBase.ts#L31"},"packages/engine/src/physics/classes/SimulatorBase.ts:31")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"getframe"},"getFrame"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Abstract"),(0,s.kt)("strong",{parentName:"p"},"getFrame"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"isLastFrame"),": ",(0,s.kt)("em",{parentName:"p"},"boolean"),"): ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"isLastFrame")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"boolean"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/physics/classes/SimulatorBase.ts#L50"},"packages/engine/src/physics/classes/SimulatorBase.ts:50")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"lastframe"},"lastFrame"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"lastFrame"),"(): ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/physics/classes/SimulatorBase.ts#L22"},"packages/engine/src/physics/classes/SimulatorBase.ts:22")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"setfps"},"setFPS"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"setFPS"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,s.kt)("em",{parentName:"p"},"number"),"): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"value")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"number"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/physics/classes/SimulatorBase.ts#L17"},"packages/engine/src/physics/classes/SimulatorBase.ts:17")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"simulate"},"simulate"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Abstract"),(0,s.kt)("strong",{parentName:"p"},"simulate"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"timeStep"),": ",(0,s.kt)("em",{parentName:"p"},"number"),"): ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"timeStep")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"number"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"void")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/physics/classes/SimulatorBase.ts#L51"},"packages/engine/src/physics/classes/SimulatorBase.ts:51")))}c.isMDXComponent=!0}}]);