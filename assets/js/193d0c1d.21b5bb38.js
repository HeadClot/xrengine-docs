(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[19469],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return k},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},k=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},k),{},{components:n})):r.createElement(f,o({ref:t},k))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51794:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],p={id:"networking_interfaces_networktransport.networktransport",title:"Interface: NetworkTransport",sidebar_label:"NetworkTransport",custom_edit_url:null},l={unversionedId:"docs-engine/interfaces/networking_interfaces_networktransport.networktransport",id:"docs-engine/interfaces/networking_interfaces_networktransport.networktransport",isDocsHomePage:!1,title:"Interface: NetworkTransport",description:"networking/interfaces/NetworkTransport.NetworkTransport",source:"@site/docs/docs-engine/interfaces/networking_interfaces_networktransport.networktransport.md",sourceDirName:"docs-engine/interfaces",slug:"/docs-engine/interfaces/networking_interfaces_networktransport.networktransport",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_networktransport.networktransport",editUrl:null,version:"current",sidebar_label:"NetworkTransport",frontMatter:{id:"networking_interfaces_networktransport.networktransport",title:"Interface: NetworkTransport",sidebar_label:"NetworkTransport",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: NetworkSchema",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_networkschema.networkschema"},next:{title:"Interface: NetworkClientDataInterface",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_worldstate.networkclientdatainterface"}},s=[{value:"Methods",id:"methods",children:[{value:"close",id:"close",children:[]},{value:"handleKick",id:"handlekick",children:[]},{value:"initialize",id:"initialize",children:[]},{value:"sendData",id:"senddata",children:[]},{value:"sendReliableData",id:"sendreliabledata",children:[]}]}],k={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/networking_interfaces_networktransport"},"networking/interfaces/NetworkTransport"),".NetworkTransport"),(0,i.kt)("p",null,"Interface for the Transport."),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"close"},"close"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"close"),"(): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Closes all the media soup transports"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/networking/interfaces/NetworkTransport.ts#L33"},"packages/engine/src/networking/interfaces/NetworkTransport.ts:33")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"handlekick"},"handleKick"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"handleKick"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"socket"),": ",(0,i.kt)("em",{parentName:"p"},"any"),"): ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Handle kick event."),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"socket")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Socket on which this event occurred.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/networking/interfaces/NetworkTransport.ts#L7"},"packages/engine/src/networking/interfaces/NetworkTransport.ts:7")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"initialize"},"initialize"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"initialize"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"address?"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"port?"),": ",(0,i.kt)("em",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"instance?"),": ",(0,i.kt)("em",{parentName:"p"},"boolean"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"opts?"),": Object): ",(0,i.kt)("em",{parentName:"p"},"void")," ","|"," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Initialize the transport."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"address?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Address of this transport.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"port?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Port of this transport.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"instance?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether this is a connection to an instance server or not (i.e. channel server)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Options.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")," ","|"," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/networking/interfaces/NetworkTransport.ts#L16"},"packages/engine/src/networking/interfaces/NetworkTransport.ts:16")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"senddata"},"sendData"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"sendData"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,i.kt)("em",{parentName:"p"},"any"),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Send data over transport."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Data to be sent.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/networking/interfaces/NetworkTransport.ts#L22"},"packages/engine/src/networking/interfaces/NetworkTransport.ts:22")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sendreliabledata"},"sendReliableData"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"sendReliableData"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,i.kt)("em",{parentName:"p"},"any"),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Send data through reliable channel over transport."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Data to be sent.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/networking/interfaces/NetworkTransport.ts#L28"},"packages/engine/src/networking/interfaces/NetworkTransport.ts:28")))}c.isMDXComponent=!0}}]);