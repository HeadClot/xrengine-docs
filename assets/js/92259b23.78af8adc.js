(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[46341],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),f=l(n),u=o,k=f["".concat(s,".").concat(u)]||f[u]||p[u]||a;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},27924:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],c={id:"networking_interfaces_worldstate.networkobjecteditinterface",title:"Interface: NetworkObjectEditInterface",sidebar_label:"NetworkObjectEditInterface",custom_edit_url:null},s={unversionedId:"docs-engine/interfaces/networking_interfaces_worldstate.networkobjecteditinterface",id:"docs-engine/interfaces/networking_interfaces_worldstate.networkobjecteditinterface",isDocsHomePage:!1,title:"Interface: NetworkObjectEditInterface",description:"networking/interfaces/WorldState.NetworkObjectEditInterface",source:"@site/docs/docs-engine/interfaces/networking_interfaces_worldstate.networkobjecteditinterface.md",sourceDirName:"docs-engine/interfaces",slug:"/docs-engine/interfaces/networking_interfaces_worldstate.networkobjecteditinterface",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_worldstate.networkobjecteditinterface",editUrl:null,version:"current",sidebar_label:"NetworkObjectEditInterface",frontMatter:{id:"networking_interfaces_worldstate.networkobjecteditinterface",title:"Interface: NetworkObjectEditInterface",sidebar_label:"NetworkObjectEditInterface",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: NetworkObjectCreateInterface",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_worldstate.networkobjectcreateinterface"},next:{title:"Interface: NetworkObjectRemoveInterface",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_worldstate.networkobjectremoveinterface"}},l=[{value:"Properties",id:"properties",children:[{value:"networkId",id:"networkid",children:[]},{value:"ownerId",id:"ownerid",children:[]},{value:"type",id:"type",children:[]},{value:"values",id:"values",children:[]}]}],d={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/networking_interfaces_worldstate"},"networking/interfaces/WorldState"),".NetworkObjectEditInterface"),(0,a.kt)("p",null,"Interface for creation of network object."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"networkid"},"networkId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"networkId"),": ",(0,a.kt)("em",{parentName:"p"},"number")),(0,a.kt)("p",null,"Id of the network."),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/networking/interfaces/WorldState.ts#L76"},"packages/engine/src/networking/interfaces/WorldState.ts:76")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ownerid"},"ownerId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"ownerId"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Id of the owner."),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/networking/interfaces/WorldState.ts#L78"},"packages/engine/src/networking/interfaces/WorldState.ts:78")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"type"},"type"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"type"),": ",(0,a.kt)("em",{parentName:"p"},"number")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/networking/interfaces/WorldState.ts#L80"},"packages/engine/src/networking/interfaces/WorldState.ts:80")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"values"},"values"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"values"),": ",(0,a.kt)("em",{parentName:"p"},"number"),"[]"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/networking/interfaces/WorldState.ts#L81"},"packages/engine/src/networking/interfaces/WorldState.ts:81")))}p.isMDXComponent=!0}}]);