(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[70019],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return f},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,k=d["".concat(l,".").concat(p)]||d[p]||u[p]||i;return n?r.createElement(k,o(o({ref:t},f),{},{components:n})):r.createElement(k,o({ref:t},f))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93523:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l},default:function(){return f}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={id:"networking_interfaces_worldstate.networkclientdatainterface",title:"Interface: NetworkClientDataInterface",sidebar_label:"NetworkClientDataInterface",custom_edit_url:null},c={unversionedId:"docs-engine/interfaces/networking_interfaces_worldstate.networkclientdatainterface",id:"docs-engine/interfaces/networking_interfaces_worldstate.networkclientdatainterface",isDocsHomePage:!1,title:"Interface: NetworkClientDataInterface",description:"networking/interfaces/WorldState.NetworkClientDataInterface",source:"@site/docs/docs-engine/interfaces/networking_interfaces_worldstate.networkclientdatainterface.md",sourceDirName:"docs-engine/interfaces",slug:"/docs-engine/interfaces/networking_interfaces_worldstate.networkclientdatainterface",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_worldstate.networkclientdatainterface",editUrl:null,version:"current",sidebar_label:"NetworkClientDataInterface",frontMatter:{id:"networking_interfaces_worldstate.networkclientdatainterface",title:"Interface: NetworkClientDataInterface",sidebar_label:"NetworkClientDataInterface",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: NetworkTransport",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_networktransport.networktransport"},next:{title:"Interface: NetworkClientInputInterface",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_worldstate.networkclientinputinterface"}},l=[{value:"Properties",id:"properties",children:[{value:"avatarDetail",id:"avatardetail",children:[]},{value:"userId",id:"userid",children:[]}]}],s={toc:l};function f(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/networking_interfaces_worldstate"},"networking/interfaces/WorldState"),".NetworkClientDataInterface"),(0,i.kt)("p",null,"Interface for Client Data."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"avatardetail"},"avatarDetail"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"avatarDetail"),": ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/networking/interfaces/WorldState.ts#L67"},"packages/engine/src/networking/interfaces/WorldState.ts:67")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"userid"},"userId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"userId"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Id of the user."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/8fb997891/packages/engine/src/networking/interfaces/WorldState.ts#L66"},"packages/engine/src/networking/interfaces/WorldState.ts:66")))}f.isMDXComponent=!0}}]);