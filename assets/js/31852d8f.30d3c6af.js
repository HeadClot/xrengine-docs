(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[57064],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return k}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(t),k=a,u=m["".concat(c,".").concat(k)]||m[k]||d[k]||o;return t?n.createElement(u,s(s({ref:r},p),{},{components:t})):n.createElement(u,s({ref:r},p))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},25804:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=t(22122),a=t(19756),o=(t(67294),t(3905)),s=["components"],i={id:"editor_functions_errors.rethrownerror",title:"Class: RethrownError",sidebar_label:"RethrownError",custom_edit_url:null},c={unversionedId:"docs-engine/classes/editor_functions_errors.rethrownerror",id:"docs-engine/classes/editor_functions_errors.rethrownerror",isDocsHomePage:!1,title:"Class: RethrownError",description:"editor/functions/errors.RethrownError",source:"@site/docs/docs-engine/classes/editor_functions_errors.rethrownerror.md",sourceDirName:"docs-engine/classes",slug:"/docs-engine/classes/editor_functions_errors.rethrownerror",permalink:"/xrengine-docs/docs/docs-engine/classes/editor_functions_errors.rethrownerror",editUrl:null,version:"current",sidebar_label:"RethrownError",frontMatter:{id:"editor_functions_errors.rethrownerror",title:"Class: RethrownError",sidebar_label:"RethrownError",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Class: MultiError",permalink:"/xrengine-docs/docs/docs-engine/classes/editor_functions_errors.multierror"},next:{title:"Class: default",permalink:"/xrengine-docs/docs/docs-engine/classes/editor_heightfield_heightfieldclient.default"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"stack",id:"stack",children:[]},{value:"prepareStackTrace",id:"preparestacktrace",children:[]},{value:"stackTraceLimit",id:"stacktracelimit",children:[]}]},{value:"Methods",id:"methods",children:[{value:"captureStackTrace",id:"capturestacktrace",children:[]}]}],p={toc:l};function d(e){var r=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/editor_functions_errors"},"editor/functions/errors"),".RethrownError"),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/editor_functions_errors.baseerror"},(0,o.kt)("em",{parentName:"a"},"BaseError"))),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("strong",{parentName:"p"},"RethrownError")))),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"+"," ",(0,o.kt)("strong",{parentName:"p"},"new RethrownError"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"message"),": ",(0,o.kt)("em",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"error"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"): ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/editor_functions_errors.rethrownerror"},(0,o.kt)("em",{parentName:"a"},"RethrownError"))),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"message")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"error")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/editor_functions_errors.rethrownerror"},(0,o.kt)("em",{parentName:"a"},"RethrownError"))),(0,o.kt)("p",null,"Overrides: ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/editor_functions_errors.baseerror"},"BaseError")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/editor/functions/errors.ts#L33"},"packages/engine/src/editor/functions/errors.ts:33")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"message"},"message"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"message"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/editor_functions_errors.baseerror"},"BaseError"),".",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/editor_functions_errors.baseerror#message"},"message")),(0,o.kt)("p",null,"Defined in: packages/docs/node_modules/typescript/lib/lib.es5.d.ts:974"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"name"},"name"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"name"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/editor_functions_errors.baseerror"},"BaseError"),".",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/editor_functions_errors.baseerror#name"},"name")),(0,o.kt)("p",null,"Defined in: packages/docs/node_modules/typescript/lib/lib.es5.d.ts:973"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"stack"},"stack"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"stack"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/editor_functions_errors.baseerror"},"BaseError"),".",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/editor_functions_errors.baseerror#stack"},"stack")),(0,o.kt)("p",null,"Defined in: packages/docs/node_modules/typescript/lib/lib.es5.d.ts:975"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"preparestacktrace"},"prepareStackTrace"),(0,o.kt)("p",null,"\u25aa ",(0,o.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"prepareStackTrace"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"err"),": Error, ",(0,o.kt)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]) => ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,"Optional override for formatting stack traces"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,o.kt)("a",{parentName:"p",href:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces"},"https://v8.dev/docs/stack-trace-api#customizing-stack-traces")),(0,o.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,o.kt)("p",null,"\u25b8 (",(0,o.kt)("inlineCode",{parentName:"p"},"err"),": Error, ",(0,o.kt)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]): ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"err")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Error")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"stackTraces")),(0,o.kt)("td",{parentName:"tr",align:"left"},"CallSite[]")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/editor_functions_errors.baseerror"},"BaseError"),".",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/editor_functions_errors.baseerror#preparestacktrace"},"prepareStackTrace")),(0,o.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"stacktracelimit"},"stackTraceLimit"),(0,o.kt)("p",null,"\u25aa ",(0,o.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,o.kt)("strong",{parentName:"p"},"stackTraceLimit"),": ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/editor_functions_errors.baseerror"},"BaseError"),".",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/editor_functions_errors.baseerror#stacktracelimit"},"stackTraceLimit")),(0,o.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:13"),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"capturestacktrace"},"captureStackTrace"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Static"),(0,o.kt)("strong",{parentName:"p"},"captureStackTrace"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"targetObject"),": ",(0,o.kt)("em",{parentName:"p"},"object"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"constructorOpt?"),": Function): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Create .stack property on a target object"),(0,o.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"targetObject")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"object"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"constructorOpt?")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Function")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/editor_functions_errors.baseerror"},"BaseError")),(0,o.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:4"))}d.isMDXComponent=!0}}]);