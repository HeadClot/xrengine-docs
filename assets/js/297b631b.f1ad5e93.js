(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[33481],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return d}});var s=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=s.createContext({}),o=function(e){var t=s.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=o(e.components);return s.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=o(a),d=n,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return a?s.createElement(k,i(i({ref:t},c),{},{components:a})):s.createElement(k,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<r;o++)i[o]=a[o];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}u.displayName="MDXCreateElement"},47998:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return o},default:function(){return m}});var s=a(22122),n=a(19756),r=(a(67294),a(3905)),i=["components"],l={id:"physics_classes_vectorspringsimulator.vectorspringsimulator",title:"Class: VectorSpringSimulator",sidebar_label:"VectorSpringSimulator",custom_edit_url:null},p={unversionedId:"docs-engine/classes/physics_classes_vectorspringsimulator.vectorspringsimulator",id:"docs-engine/classes/physics_classes_vectorspringsimulator.vectorspringsimulator",isDocsHomePage:!1,title:"Class: VectorSpringSimulator",description:"physics/classes/VectorSpringSimulator.VectorSpringSimulator",source:"@site/docs/docs-engine/classes/physics_classes_vectorspringsimulator.vectorspringsimulator.md",sourceDirName:"docs-engine/classes",slug:"/docs-engine/classes/physics_classes_vectorspringsimulator.vectorspringsimulator",permalink:"/xrengine-docs/docs/docs-engine/classes/physics_classes_vectorspringsimulator.vectorspringsimulator",editUrl:null,version:"current",sidebar_label:"VectorSpringSimulator",frontMatter:{id:"physics_classes_vectorspringsimulator.vectorspringsimulator",title:"Class: VectorSpringSimulator",sidebar_label:"VectorSpringSimulator",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Class: SpringSimulator",permalink:"/xrengine-docs/docs/docs-engine/classes/physics_classes_springsimulator.springsimulator"},next:{title:"Class: ColliderComponent",permalink:"/xrengine-docs/docs/docs-engine/classes/physics_components_collidercomponent.collidercomponent"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"cache",id:"cache",children:[]},{value:"damping",id:"damping",children:[]},{value:"frameTime",id:"frametime",children:[]},{value:"mass",id:"mass",children:[]},{value:"offset",id:"offset",children:[]},{value:"position",id:"position",children:[]},{value:"target",id:"target",children:[]},{value:"velocity",id:"velocity",children:[]}]},{value:"Methods",id:"methods",children:[{value:"generateFrames",id:"generateframes",children:[]},{value:"getFrame",id:"getframe",children:[]},{value:"init",id:"init",children:[]},{value:"lastFrame",id:"lastframe",children:[]},{value:"setFPS",id:"setfps",children:[]},{value:"simulate",id:"simulate",children:[]}]}],c={toc:o};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,s.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/physics_classes_vectorspringsimulator"},"physics/classes/VectorSpringSimulator"),".VectorSpringSimulator"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_classes_simulatorbase.simulatorbase"},(0,r.kt)("em",{parentName:"a"},"SimulatorBase"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},"VectorSpringSimulator")))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"+"," ",(0,r.kt)("strong",{parentName:"p"},"new VectorSpringSimulator"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"fps"),": ",(0,r.kt)("em",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mass"),": ",(0,r.kt)("em",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"damping"),": ",(0,r.kt)("em",{parentName:"p"},"number"),"): ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_classes_vectorspringsimulator.vectorspringsimulator"},(0,r.kt)("em",{parentName:"a"},"VectorSpringSimulator"))),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fps")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mass")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"damping")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"number"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_classes_vectorspringsimulator.vectorspringsimulator"},(0,r.kt)("em",{parentName:"a"},"VectorSpringSimulator"))),(0,r.kt)("p",null,"Overrides: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_classes_simulatorbase.simulatorbase"},"SimulatorBase")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/physics/classes/VectorSpringSimulator.ts#L21"},"packages/engine/src/physics/classes/VectorSpringSimulator.ts:21")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"cache"},"cache"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"cache"),": ",(0,r.kt)("em",{parentName:"p"},"SimulationFrameVector"),"[]"),(0,r.kt)("p",null,"Overrides: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_classes_simulatorbase.simulatorbase"},"SimulatorBase"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_classes_simulatorbase.simulatorbase#cache"},"cache")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/physics/classes/VectorSpringSimulator.ts#L21"},"packages/engine/src/physics/classes/VectorSpringSimulator.ts:21")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"damping"},"damping"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"damping"),": ",(0,r.kt)("em",{parentName:"p"},"any")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_classes_simulatorbase.simulatorbase"},"SimulatorBase"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_classes_simulatorbase.simulatorbase#damping"},"damping")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/physics/classes/SimulatorBase.ts#L4"},"packages/engine/src/physics/classes/SimulatorBase.ts:4")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"frametime"},"frameTime"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"frameTime"),": ",(0,r.kt)("em",{parentName:"p"},"number")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_classes_simulatorbase.simulatorbase"},"SimulatorBase"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_classes_simulatorbase.simulatorbase#frametime"},"frameTime")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/physics/classes/SimulatorBase.ts#L5"},"packages/engine/src/physics/classes/SimulatorBase.ts:5")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"mass"},"mass"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"mass"),": ",(0,r.kt)("em",{parentName:"p"},"any")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_classes_simulatorbase.simulatorbase"},"SimulatorBase"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_classes_simulatorbase.simulatorbase#mass"},"mass")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/physics/classes/SimulatorBase.ts#L3"},"packages/engine/src/physics/classes/SimulatorBase.ts:3")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"offset"},"offset"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"offset"),": ",(0,r.kt)("em",{parentName:"p"},"number")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_classes_simulatorbase.simulatorbase"},"SimulatorBase"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_classes_simulatorbase.simulatorbase#offset"},"offset")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/physics/classes/SimulatorBase.ts#L6"},"packages/engine/src/physics/classes/SimulatorBase.ts:6")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"position"},"position"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"position"),": ",(0,r.kt)("em",{parentName:"p"},"Vector3")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/physics/classes/VectorSpringSimulator.ts#L18"},"packages/engine/src/physics/classes/VectorSpringSimulator.ts:18")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"target"},"target"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"target"),": ",(0,r.kt)("em",{parentName:"p"},"Vector3")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/physics/classes/VectorSpringSimulator.ts#L20"},"packages/engine/src/physics/classes/VectorSpringSimulator.ts:20")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"velocity"},"velocity"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"velocity"),": ",(0,r.kt)("em",{parentName:"p"},"Vector3")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/physics/classes/VectorSpringSimulator.ts#L19"},"packages/engine/src/physics/classes/VectorSpringSimulator.ts:19")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"generateframes"},"generateFrames"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"generateFrames"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"timeStep"),": ",(0,r.kt)("em",{parentName:"p"},"number"),"): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Generates frames between last simulation call and the current one"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"timeStep")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"number"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_classes_simulatorbase.simulatorbase"},"SimulatorBase")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/physics/classes/SimulatorBase.ts#L31"},"packages/engine/src/physics/classes/SimulatorBase.ts:31")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getframe"},"getFrame"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getFrame"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"isLastFrame"),": ",(0,r.kt)("em",{parentName:"p"},"boolean"),"): ",(0,r.kt)("em",{parentName:"p"},"SimulationFrameVector")),(0,r.kt)("p",null,"Gets another simulation frame"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"isLastFrame")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"boolean"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"SimulationFrameVector")),(0,r.kt)("p",null,"Overrides: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_classes_simulatorbase.simulatorbase"},"SimulatorBase")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/physics/classes/VectorSpringSimulator.ts#L64"},"packages/engine/src/physics/classes/VectorSpringSimulator.ts:64")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"init"},"init"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"init"),"(): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/physics/classes/VectorSpringSimulator.ts#L31"},"packages/engine/src/physics/classes/VectorSpringSimulator.ts:31")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"lastframe"},"lastFrame"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"lastFrame"),"(): ",(0,r.kt)("em",{parentName:"p"},"any")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"any")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_classes_simulatorbase.simulatorbase"},"SimulatorBase")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/physics/classes/SimulatorBase.ts#L22"},"packages/engine/src/physics/classes/SimulatorBase.ts:22")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setfps"},"setFPS"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setFPS"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,r.kt)("em",{parentName:"p"},"number"),"): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"number"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_classes_simulatorbase.simulatorbase"},"SimulatorBase")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/physics/classes/SimulatorBase.ts#L17"},"packages/engine/src/physics/classes/SimulatorBase.ts:17")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"simulate"},"simulate"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"simulate"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"timeStep"),": ",(0,r.kt)("em",{parentName:"p"},"number"),"): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Advances the simulation by given time step"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"timeStep")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"number"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Overrides: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_classes_simulatorbase.simulatorbase"},"SimulatorBase")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/physics/classes/VectorSpringSimulator.ts#L51"},"packages/engine/src/physics/classes/VectorSpringSimulator.ts:51")))}m.isMDXComponent=!0}}]);