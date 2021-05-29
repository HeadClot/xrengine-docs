(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[12502],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),k=p(n),u=a,m=k["".concat(s,".").concat(u)]||k[u]||f[u]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},95607:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],c={id:"networking_interfaces_networkschema.networkschema",title:"Interface: NetworkSchema",sidebar_label:"NetworkSchema",custom_edit_url:null},s={unversionedId:"docs-engine/interfaces/networking_interfaces_networkschema.networkschema",id:"docs-engine/interfaces/networking_interfaces_networkschema.networkschema",isDocsHomePage:!1,title:"Interface: NetworkSchema",description:"networking/interfaces/NetworkSchema.NetworkSchema",source:"@site/docs/docs-engine/interfaces/networking_interfaces_networkschema.networkschema.md",sourceDirName:"docs-engine/interfaces",slug:"/docs-engine/interfaces/networking_interfaces_networkschema.networkschema",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_networkschema.networkschema",editUrl:null,version:"current",sidebar_label:"NetworkSchema",frontMatter:{id:"networking_interfaces_networkschema.networkschema",title:"Interface: NetworkSchema",sidebar_label:"NetworkSchema",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: NetworkPrefab",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_networkprefab.networkprefab"},next:{title:"Interface: NetworkTransport",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_networktransport.networktransport"}},p=[{value:"Properties",id:"properties",children:[{value:"defaultClientPrefab",id:"defaultclientprefab",children:[]},{value:"messageTypes",id:"messagetypes",children:[]},{value:"prefabs",id:"prefabs",children:[]},{value:"transport",id:"transport",children:[]}]}],l={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/networking_interfaces_networkschema"},"networking/interfaces/NetworkSchema"),".NetworkSchema"),(0,o.kt)("p",null,"Interface for Network schema."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"defaultclientprefab"},"defaultClientPrefab"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"defaultClientPrefab"),": ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("p",null,"Default prefab for the client."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/engine/src/networking/interfaces/NetworkSchema.ts#L12"},"packages/engine/src/networking/interfaces/NetworkSchema.ts:12")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"messagetypes"},"messageTypes"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"messageTypes"),": ",(0,o.kt)("em",{parentName:"p"},"object")),(0,o.kt)("p",null,"List of supported message types."),(0,o.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/engine/src/networking/interfaces/NetworkSchema.ts#L8"},"packages/engine/src/networking/interfaces/NetworkSchema.ts:8")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"prefabs"},"prefabs"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"prefabs"),": ",(0,o.kt)("em",{parentName:"p"},"object")),(0,o.kt)("p",null,"Prefabs for the schema."),(0,o.kt)("h4",{id:"type-declaration-1"},"Type declaration:"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/engine/src/networking/interfaces/NetworkSchema.ts#L14"},"packages/engine/src/networking/interfaces/NetworkSchema.ts:14")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"transport"},"transport"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"transport"),": ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,"Transporter of the message."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/engine/src/networking/interfaces/NetworkSchema.ts#L6"},"packages/engine/src/networking/interfaces/NetworkSchema.ts:6")))}f.isMDXComponent=!0}}]);