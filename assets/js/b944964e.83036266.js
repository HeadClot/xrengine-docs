(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[36785],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return k},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},k=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(g,s(s({ref:t},k),{},{components:n})):a.createElement(g,s({ref:t},k))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12271:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p},default:function(){return k}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),s={id:"networking_classes_networkinterpolation.networkinterpolation",title:"Class: NetworkInterpolation",sidebar_label:"NetworkInterpolation",custom_edit_url:null},i={unversionedId:"docs-engine/classes/networking_classes_networkinterpolation.networkinterpolation",id:"docs-engine/classes/networking_classes_networkinterpolation.networkinterpolation",isDocsHomePage:!1,title:"Class: NetworkInterpolation",description:"networking/classes/NetworkInterpolation.NetworkInterpolation",source:"@site/docs/docs-engine/classes/networking_classes_networkinterpolation.networkinterpolation.md",sourceDirName:"docs-engine/classes",slug:"/docs-engine/classes/networking_classes_networkinterpolation.networkinterpolation",permalink:"/xrengine-docs/docs/docs-engine/classes/networking_classes_networkinterpolation.networkinterpolation",editUrl:null,version:"current",sidebar_label:"NetworkInterpolation",frontMatter:{id:"networking_classes_networkinterpolation.networkinterpolation",title:"Class: NetworkInterpolation",sidebar_label:"NetworkInterpolation",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Class: Network",permalink:"/xrengine-docs/docs/docs-engine/classes/networking_classes_network.network"},next:{title:"Class: Vault",permalink:"/xrengine-docs/docs/docs-engine/classes/networking_classes_vault.vault"}},p=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"_interpolationBuffer",id:"_interpolationbuffer",children:[]},{value:"checkCount",id:"checkcount",children:[]},{value:"checkDelay",id:"checkdelay",children:[]},{value:"serverTime",id:"servertime",children:[]},{value:"serverTimePrev",id:"servertimeprev",children:[]},{value:"timeOffset",id:"timeoffset",children:[]},{value:"vault",id:"vault",children:[]},{value:"vaultSize",id:"vaultsize",children:[]},{value:"instance",id:"instance",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"interpolationBuffer",id:"interpolationbuffer",children:[]},{value:"size",id:"size",children:[]}]},{value:"Methods",id:"methods",children:[{value:"add",id:"add",children:[]},{value:"get",id:"get",children:[]},{value:"getById",id:"getbyid",children:[]},{value:"getMaxSize",id:"getmaxsize",children:[]},{value:"setMaxSize",id:"setmaxsize",children:[]}]}],l={toc:p};function k(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/networking_classes_networkinterpolation"},"networking/classes/NetworkInterpolation"),".NetworkInterpolation"),(0,o.kt)("p",null,"Component class for Snapshot interpolation.\\\nSnap shot is based on this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/geckosio/snapshot-interpolation"},"library by yandeu"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"author"))," HydraFire <github.com/HydraFire>"),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"+"," ",(0,o.kt)("strong",{parentName:"p"},"new NetworkInterpolation"),"(): ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/networking_classes_networkinterpolation.networkinterpolation"},(0,o.kt)("em",{parentName:"a"},"NetworkInterpolation"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/networking_classes_networkinterpolation.networkinterpolation"},(0,o.kt)("em",{parentName:"a"},"NetworkInterpolation"))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"_interpolationbuffer"},"_","interpolationBuffer"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"_","interpolationBuffer"),": ",(0,o.kt)("em",{parentName:"p"},"number"),"= 128"),(0,o.kt)("p",null,"Interpolation buffer for snapshots."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/classes/NetworkInterpolation.ts#L26"},"packages/engine/src/networking/classes/NetworkInterpolation.ts:26")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"checkcount"},"checkCount"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"checkCount"),": ",(0,o.kt)("em",{parentName:"p"},"number"),"= 0"),(0,o.kt)("p",null,"The number of checks that will pass before the interpolation delay decreases."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/classes/NetworkInterpolation.ts#L21"},"packages/engine/src/networking/classes/NetworkInterpolation.ts:21")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"checkdelay"},"checkDelay"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"checkDelay"),": ",(0,o.kt)("em",{parentName:"p"},"number"),"= 0"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/classes/NetworkInterpolation.ts#L22"},"packages/engine/src/networking/classes/NetworkInterpolation.ts:22")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"servertime"},"serverTime"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"serverTime"),": ",(0,o.kt)("em",{parentName:"p"},"number"),"= 0"),(0,o.kt)("p",null,"The current server time based on the current snapshot interpolation."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/classes/NetworkInterpolation.ts#L28"},"packages/engine/src/networking/classes/NetworkInterpolation.ts:28")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"servertimeprev"},"serverTimePrev"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"serverTimePrev"),": ",(0,o.kt)("em",{parentName:"p"},"number"),"= 0"),(0,o.kt)("p",null,"Last time interpolation was performed."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/classes/NetworkInterpolation.ts#L24"},"packages/engine/src/networking/classes/NetworkInterpolation.ts:24")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"timeoffset"},"timeOffset"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"timeOffset"),": ",(0,o.kt)("em",{parentName:"p"},"number"),"= 25"),(0,o.kt)("p",null,"Time offset between client and server."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/classes/NetworkInterpolation.ts#L19"},"packages/engine/src/networking/classes/NetworkInterpolation.ts:19")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"vault"},"vault"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"vault"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_types_snapshotdatatypes.snapshot"},(0,o.kt)("em",{parentName:"a"},"Snapshot")),"[]= []"),(0,o.kt)("p",null,"Vault to store snapshots."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/classes/NetworkInterpolation.ts#L15"},"packages/engine/src/networking/classes/NetworkInterpolation.ts:15")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"vaultsize"},"vaultSize"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"vaultSize"),": ",(0,o.kt)("em",{parentName:"p"},"number"),"= 200"),(0,o.kt)("p",null,"Size of the vault."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/classes/NetworkInterpolation.ts#L17"},"packages/engine/src/networking/classes/NetworkInterpolation.ts:17")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"instance"},"instance"),(0,o.kt)("p",null,"\u25aa ",(0,o.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,o.kt)("strong",{parentName:"p"},"instance"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/networking_classes_networkinterpolation.networkinterpolation"},(0,o.kt)("em",{parentName:"a"},"NetworkInterpolation"))),(0,o.kt)("p",null,"An instance of this class, like a singleton."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/classes/NetworkInterpolation.ts#L12"},"packages/engine/src/networking/classes/NetworkInterpolation.ts:12")),(0,o.kt)("h2",{id:"accessors"},"Accessors"),(0,o.kt)("h3",{id:"interpolationbuffer"},"interpolationBuffer"),(0,o.kt)("p",null,"\u2022 get ",(0,o.kt)("strong",{parentName:"p"},"interpolationBuffer"),"(): ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,"Get and set Interpolation buffer."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/classes/NetworkInterpolation.ts#L31"},"packages/engine/src/networking/classes/NetworkInterpolation.ts:31")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"size"},"size"),(0,o.kt)("p",null,"\u2022 get ",(0,o.kt)("strong",{parentName:"p"},"size"),"(): ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("p",null,"Get the current capacity (size) of the vault."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("p",null,"Current capacity (size) of the vault."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/classes/NetworkInterpolation.ts#L99"},"packages/engine/src/networking/classes/NetworkInterpolation.ts:99")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"add"},"add"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"add"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"snapshot"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_types_snapshotdatatypes.snapshot"},(0,o.kt)("em",{parentName:"a"},"Snapshot")),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Add a snapshot to the vault."),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"snapshot")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_types_snapshotdatatypes.snapshot"},(0,o.kt)("em",{parentName:"a"},"Snapshot"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Snapshot to be added in vault.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/classes/NetworkInterpolation.ts#L87"},"packages/engine/src/networking/classes/NetworkInterpolation.ts:87")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"get"},"get"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"get"),"(): ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_types_snapshotdatatypes.snapshot"},(0,o.kt)("em",{parentName:"a"},"Snapshot"))),(0,o.kt)("p",null,"Get the latest snapshot"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_types_snapshotdatatypes.snapshot"},(0,o.kt)("em",{parentName:"a"},"Snapshot"))),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/classes/NetworkInterpolation.ts#L51"},"packages/engine/src/networking/classes/NetworkInterpolation.ts:51")),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"get"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"time"),": ",(0,o.kt)("em",{parentName:"p"},"number"),"): ",(0,o.kt)("em",{parentName:"p"},"object")),(0,o.kt)("p",null,"Get the two snapshots around a specific time"),(0,o.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"time")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"number"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"object")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"newer")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_types_snapshotdatatypes.snapshot"},(0,o.kt)("em",{parentName:"a"},"Snapshot")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"older")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_types_snapshotdatatypes.snapshot"},(0,o.kt)("em",{parentName:"a"},"Snapshot")))))),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/classes/NetworkInterpolation.ts#L53"},"packages/engine/src/networking/classes/NetworkInterpolation.ts:53")),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"get"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"time"),": ",(0,o.kt)("em",{parentName:"p"},"number"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"closest"),": ",(0,o.kt)("em",{parentName:"p"},"boolean"),"): ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_types_snapshotdatatypes.snapshot"},(0,o.kt)("em",{parentName:"a"},"Snapshot"))),(0,o.kt)("p",null,"Get the closest snapshot to e specific time"),(0,o.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"time")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"number"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"closest")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"boolean"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_types_snapshotdatatypes.snapshot"},(0,o.kt)("em",{parentName:"a"},"Snapshot"))),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/classes/NetworkInterpolation.ts#L55"},"packages/engine/src/networking/classes/NetworkInterpolation.ts:55")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getbyid"},"getById"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getById"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"id"),": ",(0,o.kt)("em",{parentName:"p"},"string"),"): ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_types_snapshotdatatypes.snapshot"},(0,o.kt)("em",{parentName:"a"},"Snapshot"))),(0,o.kt)("p",null,"Get a Snapshot by its ID."),(0,o.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"id")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},"ID of the snapshot.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_types_snapshotdatatypes.snapshot"},(0,o.kt)("em",{parentName:"a"},"Snapshot"))),(0,o.kt)("p",null,"Snapshot of given ID."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/classes/NetworkInterpolation.ts#L46"},"packages/engine/src/networking/classes/NetworkInterpolation.ts:46")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getmaxsize"},"getMaxSize"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getMaxSize"),"(): ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("p",null,"Get the max capacity (size) of the vault."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("p",null,"Max capacity o the vault."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/classes/NetworkInterpolation.ts#L115"},"packages/engine/src/networking/classes/NetworkInterpolation.ts:115")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"setmaxsize"},"setMaxSize"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"setMaxSize"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"size"),": ",(0,o.kt)("em",{parentName:"p"},"number"),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Set the max capacity (size) of the vault."),(0,o.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"size")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"left"},"New Max capacity of vault.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/networking/classes/NetworkInterpolation.ts#L107"},"packages/engine/src/networking/classes/NetworkInterpolation.ts:107")))}k.isMDXComponent=!0}}]);