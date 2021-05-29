(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[95342],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34737:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return m}});var r=n(22122),o=n(19756),s=(n(67294),n(3905)),a=["components"],c={id:"ecs_classes_system.notcomponent",title:"Interface: NotComponent<C>",sidebar_label:"NotComponent",custom_edit_url:null},i={unversionedId:"docs-engine/interfaces/ecs_classes_system.notcomponent",id:"docs-engine/interfaces/ecs_classes_system.notcomponent",isDocsHomePage:!1,title:"Interface: NotComponent<C\\>",description:"ecs/classes/System.NotComponent",source:"@site/docs/docs-engine/interfaces/ecs_classes_system.notcomponent.md",sourceDirName:"docs-engine/interfaces",slug:"/docs-engine/interfaces/ecs_classes_system.notcomponent",permalink:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_system.notcomponent",editUrl:null,version:"current",sidebar_label:"NotComponent",frontMatter:{id:"ecs_classes_system.notcomponent",title:"Interface: NotComponent<C>",sidebar_label:"NotComponent",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: QueryStatType",permalink:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_query.querystattype"},next:{title:"Interface: SystemAttributes",permalink:"/xrengine-docs/docs/docs-engine/interfaces/ecs_classes_system.systemattributes"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Properties",id:"properties",children:[{value:"Component",id:"component",children:[]},{value:"type",id:"type",children:[]}]}],l={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/ecs_classes_system"},"ecs/classes/System"),".NotComponent"),(0,s.kt)("p",null,"Interface for not components."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,s.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"C")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},(0,s.kt)("em",{parentName:"a"},"Component")),"<any",">"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Subclass of ",(0,s.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},"Component"),".")))),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"component"},"Component"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"Component"),": ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentconstructor"},(0,s.kt)("em",{parentName:"a"},"ComponentConstructor")),"<C",">"),(0,s.kt)("p",null,"Component object."),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/engine/src/ecs/classes/System.ts#L52"},"packages/engine/src/ecs/classes/System.ts:52")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"type"},"type"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},'"not"')),(0,s.kt)("p",null,"Type is set to 'not' to make a not component."),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/engine/src/ecs/classes/System.ts#L49"},"packages/engine/src/ecs/classes/System.ts:49")))}m.isMDXComponent=!0}}]);