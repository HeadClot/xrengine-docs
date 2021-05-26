(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[24924],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81008:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o={id:"networking_functions_initializenetworkobject",title:"Module: networking/functions/initializeNetworkObject",sidebar_label:"networking/functions/initializeNetworkObject",custom_edit_url:null},c={unversionedId:"docs-engine/modules/networking_functions_initializenetworkobject",id:"docs-engine/modules/networking_functions_initializenetworkobject",isDocsHomePage:!1,title:"Module: networking/functions/initializeNetworkObject",description:"Functions",source:"@site/docs/docs-engine/modules/networking_functions_initializenetworkobject.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/networking_functions_initializenetworkobject",permalink:"/xrengine-docs/docs/docs-engine/modules/networking_functions_initializenetworkobject",editUrl:null,version:"current",sidebar_label:"networking/functions/initializeNetworkObject",frontMatter:{id:"networking_functions_initializenetworkobject",title:"Module: networking/functions/initializeNetworkObject",sidebar_label:"networking/functions/initializeNetworkObject",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: networking/functions/handleInputOnServer",permalink:"/xrengine-docs/docs/docs-engine/modules/networking_functions_handleinputonserver"},next:{title:"Module: networking/functions/sendClientObjectUpdate",permalink:"/xrengine-docs/docs/docs-engine/modules/networking_functions_sendclientobjectupdate"}},l=[{value:"Functions",id:"functions",children:[{value:"initializeNetworkObject",id:"initializenetworkobject",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"initializenetworkobject"},"initializeNetworkObject"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"initializeNetworkObject"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"args"),": { ",(0,a.kt)("inlineCode",{parentName:"p"},"entity?"),": ",(0,a.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,a.kt)("em",{parentName:"a"},"Entity"))," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"networkId?"),": ",(0,a.kt)("em",{parentName:"p"},"number")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"override?"),": ",(0,a.kt)("em",{parentName:"p"},"any")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"ownerId"),": ",(0,a.kt)("em",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"prefabType?"),": ",(0,a.kt)("em",{parentName:"p"},"number")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"uniqueId"),": ",(0,a.kt)("em",{parentName:"p"},"string"),"  }): ",(0,a.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/networking_components_networkobject.networkobject"},(0,a.kt)("em",{parentName:"a"},"NetworkObject"))),(0,a.kt)("p",null,"Initialize Network object"),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"args")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"object"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"args.entity?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,a.kt)("em",{parentName:"a"},"Entity")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"args.networkId?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"number"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"args.override?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"any"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"args.ownerId")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"args.prefabType?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"number"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"args.uniqueId")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"string"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ",(0,a.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/networking_components_networkobject.networkobject"},(0,a.kt)("em",{parentName:"a"},"NetworkObject"))),(0,a.kt)("p",null,"Newly created object."),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/networking/functions/initializeNetworkObject.ts#L141"},"packages/engine/src/networking/functions/initializeNetworkObject.ts:141")))}p.isMDXComponent=!0}}]);