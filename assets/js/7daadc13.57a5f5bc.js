(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[18055],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,k=u["".concat(m,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(k,o(o({ref:t},l),{},{components:n})):r.createElement(k,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96252:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return m},toc:function(){return p},default:function(){return c}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],s={id:"common_functions_timer.fixedstepsrunner",title:"Class: FixedStepsRunner",sidebar_label:"FixedStepsRunner",custom_edit_url:null},m={unversionedId:"docs-engine/classes/common_functions_timer.fixedstepsrunner",id:"docs-engine/classes/common_functions_timer.fixedstepsrunner",isDocsHomePage:!1,title:"Class: FixedStepsRunner",description:"common/functions/Timer.FixedStepsRunner",source:"@site/docs/docs-engine/classes/common_functions_timer.fixedstepsrunner.md",sourceDirName:"docs-engine/classes",slug:"/docs-engine/classes/common_functions_timer.fixedstepsrunner",permalink:"/xrengine-docs/docs/docs-engine/classes/common_functions_timer.fixedstepsrunner",editUrl:null,version:"current",sidebar_label:"FixedStepsRunner",frontMatter:{id:"common_functions_timer.fixedstepsrunner",title:"Class: FixedStepsRunner",sidebar_label:"FixedStepsRunner",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Class: BehaviorComponent<TDataType, BehaviorSchema, TValue\\>",permalink:"/xrengine-docs/docs/docs-engine/classes/common_components_behaviorcomponent.behaviorcomponent"},next:{title:"Class: DebugHelpersSystem",permalink:"/xrengine-docs/docs/docs-engine/classes/debug_systems_debughelperssystem.debughelperssystem"}},p=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"accumulator",id:"accumulator",children:[]},{value:"callback",id:"callback",children:[]},{value:"limit",id:"limit",children:[]},{value:"shownErrorPreviously",id:"shownerrorpreviously",children:[]},{value:"subsequentErrorsLimit",id:"subsequenterrorslimit",children:[]},{value:"subsequentErrorsResetLimit",id:"subsequenterrorsresetlimit",children:[]},{value:"subsequentErrorsShown",id:"subsequenterrorsshown",children:[]},{value:"timestep",id:"timestep",children:[]},{value:"updatesLimit",id:"updateslimit",children:[]}]},{value:"Methods",id:"methods",children:[{value:"canRun",id:"canrun",children:[]},{value:"run",id:"run",children:[]}]}],l={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/common_functions_timer"},"common/functions/Timer"),".FixedStepsRunner"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"+"," ",(0,i.kt)("strong",{parentName:"p"},"new FixedStepsRunner"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"updatesPerSecond"),": ",(0,i.kt)("em",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"callback"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"time"),": ",(0,i.kt)("em",{parentName:"p"},"number"),") => ",(0,i.kt)("em",{parentName:"p"},"void"),"): ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_functions_timer.fixedstepsrunner"},(0,i.kt)("em",{parentName:"a"},"FixedStepsRunner"))),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"updatesPerSecond")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"callback")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"time"),": ",(0,i.kt)("em",{parentName:"td"},"number"),") => ",(0,i.kt)("em",{parentName:"td"},"void"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/common_functions_timer.fixedstepsrunner"},(0,i.kt)("em",{parentName:"a"},"FixedStepsRunner"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/engine/src/common/functions/Timer.ts#L239"},"packages/engine/src/common/functions/Timer.ts:239")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"accumulator"},"accumulator"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"accumulator"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"= 0"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/engine/src/common/functions/Timer.ts#L238"},"packages/engine/src/common/functions/Timer.ts:238")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"callback"},"callback"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"callback"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"time"),": ",(0,i.kt)("em",{parentName:"p"},"number"),") => ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"time"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"time")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/engine/src/common/functions/Timer.ts#L239"},"packages/engine/src/common/functions/Timer.ts:239")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/engine/src/common/functions/Timer.ts#L239"},"packages/engine/src/common/functions/Timer.ts:239")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"limit"},"limit"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"limit"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/engine/src/common/functions/Timer.ts#L231"},"packages/engine/src/common/functions/Timer.ts:231")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"shownerrorpreviously"},"shownErrorPreviously"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"shownErrorPreviously"),": ",(0,i.kt)("em",{parentName:"p"},"boolean"),"= false"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/engine/src/common/functions/Timer.ts#L237"},"packages/engine/src/common/functions/Timer.ts:237")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"subsequenterrorslimit"},"subsequentErrorsLimit"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"subsequentErrorsLimit"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"10"),"= 10"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/engine/src/common/functions/Timer.ts#L234"},"packages/engine/src/common/functions/Timer.ts:234")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"subsequenterrorsresetlimit"},"subsequentErrorsResetLimit"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"subsequentErrorsResetLimit"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"1000"),"= 1000"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/engine/src/common/functions/Timer.ts#L235"},"packages/engine/src/common/functions/Timer.ts:235")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"subsequenterrorsshown"},"subsequentErrorsShown"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"subsequentErrorsShown"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"= 0"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/engine/src/common/functions/Timer.ts#L236"},"packages/engine/src/common/functions/Timer.ts:236")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"timestep"},"timestep"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"timestep"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/engine/src/common/functions/Timer.ts#L230"},"packages/engine/src/common/functions/Timer.ts:230")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updateslimit"},"updatesLimit"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"updatesLimit"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/engine/src/common/functions/Timer.ts#L232"},"packages/engine/src/common/functions/Timer.ts:232")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"canrun"},"canRun"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"canRun"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"delta"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"): ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"delta")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/engine/src/common/functions/Timer.ts#L248"},"packages/engine/src/common/functions/Timer.ts:248")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"run"},"run"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"run"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"delta"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"delta")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/engine/src/common/functions/Timer.ts#L252"},"packages/engine/src/common/functions/Timer.ts:252")))}c.isMDXComponent=!0}}]);