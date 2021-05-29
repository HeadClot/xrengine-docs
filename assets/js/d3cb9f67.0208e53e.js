(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[40525],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return f},kt:function(){return k}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},f=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),m=p(t),k=a,d=m["".concat(s,".").concat(k)]||m[k]||l[k]||o;return t?r.createElement(d,i(i({ref:n},f),{},{components:t})):r.createElement(d,i({ref:n},f))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},89324:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return l}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),i=["components"],c={id:"networking_interfaces_networkprefab.networkprefab",title:"Interface: NetworkPrefab",sidebar_label:"NetworkPrefab",custom_edit_url:null},s={unversionedId:"docs-engine/interfaces/networking_interfaces_networkprefab.networkprefab",id:"docs-engine/interfaces/networking_interfaces_networkprefab.networkprefab",isDocsHomePage:!1,title:"Interface: NetworkPrefab",description:"networking/interfaces/NetworkPrefab.NetworkPrefab",source:"@site/docs/docs-engine/interfaces/networking_interfaces_networkprefab.networkprefab.md",sourceDirName:"docs-engine/interfaces",slug:"/docs-engine/interfaces/networking_interfaces_networkprefab.networkprefab",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_networkprefab.networkprefab",editUrl:null,version:"current",sidebar_label:"NetworkPrefab",frontMatter:{id:"networking_interfaces_networkprefab.networkprefab",title:"Interface: NetworkPrefab",sidebar_label:"NetworkPrefab",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: NetworkObjectList",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_networkobjectlist.networkobjectlist"},next:{title:"Interface: NetworkSchema",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_networkschema.networkschema"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"clientComponents",id:"clientcomponents",children:[]},{value:"initialize",id:"initialize",children:[]},{value:"localClientComponents",id:"localclientcomponents",children:[]},{value:"networkComponents",id:"networkcomponents",children:[]},{value:"onAfterCreate",id:"onaftercreate",children:[]},{value:"onAfterDestroy",id:"onafterdestroy",children:[]},{value:"onBeforeCreate",id:"onbeforecreate",children:[]},{value:"onBeforeDestroy",id:"onbeforedestroy",children:[]},{value:"serverComponents",id:"servercomponents",children:[]}]}],f={toc:p};function l(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/networking_interfaces_networkprefab"},"networking/interfaces/NetworkPrefab"),".NetworkPrefab"),(0,o.kt)("p",null,"Interface for Network prefab."),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/common_interfaces_prefab.prefab"},(0,o.kt)("em",{parentName:"a"},"Prefab"))),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("strong",{parentName:"p"},"NetworkPrefab")))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"clientcomponents"},"clientComponents"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"clientComponents"),": NetworkComponentInterface[]"),(0,o.kt)("p",null,"List of only client components."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/networking/interfaces/NetworkPrefab.ts#L19"},"packages/engine/src/networking/interfaces/NetworkPrefab.ts:19")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"initialize"},"initialize"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"initialize"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"args"),": {}) => ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Called to create a new instance of the prefab"),(0,o.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,o.kt)("p",null,"\u25b8 (",(0,o.kt)("inlineCode",{parentName:"p"},"args"),": {}): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"args")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"object"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/common/interfaces/Prefab.ts#L10"},"packages/engine/src/common/interfaces/Prefab.ts:10")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/common_interfaces_prefab.prefab"},"Prefab"),".",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/common_interfaces_prefab.prefab#initialize"},"initialize")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/common/interfaces/Prefab.ts#L10"},"packages/engine/src/common/interfaces/Prefab.ts:10")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"localclientcomponents"},"localClientComponents"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"localClientComponents"),": { ",(0,o.kt)("inlineCode",{parentName:"p"},"data?"),": ",(0,o.kt)("em",{parentName:"p"},"any")," ; ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"  }[]"),(0,o.kt)("p",null,"List of Components to be implemented on Entity."),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/common_interfaces_prefab.prefab"},"Prefab"),".",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/common_interfaces_prefab.prefab#localclientcomponents"},"localClientComponents")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/common/interfaces/Prefab.ts#L13"},"packages/engine/src/common/interfaces/Prefab.ts:13")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"networkcomponents"},"networkComponents"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"networkComponents"),": NetworkComponentInterface[]"),(0,o.kt)("p",null,"List of network components."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/networking/interfaces/NetworkPrefab.ts#L21"},"packages/engine/src/networking/interfaces/NetworkPrefab.ts:21")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"onaftercreate"},"onAfterCreate"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"onAfterCreate"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/common_interfaces_behaviorvalue.behaviorvalue"},(0,o.kt)("em",{parentName:"a"},"BehaviorValue")),"[]"),(0,o.kt)("p",null,"Call after Creation of Entity from this Prefab."),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/common_interfaces_prefab.prefab"},"Prefab"),".",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/common_interfaces_prefab.prefab#onaftercreate"},"onAfterCreate")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/common/interfaces/Prefab.ts#L23"},"packages/engine/src/common/interfaces/Prefab.ts:23")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"onafterdestroy"},"onAfterDestroy"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"onAfterDestroy"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/common_interfaces_behaviorvalue.behaviorvalue"},(0,o.kt)("em",{parentName:"a"},"BehaviorValue")),"[]"),(0,o.kt)("p",null,"Call after destruction of Entity created from this Prefab."),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/common_interfaces_prefab.prefab"},"Prefab"),".",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/common_interfaces_prefab.prefab#onafterdestroy"},"onAfterDestroy")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/common/interfaces/Prefab.ts#L27"},"packages/engine/src/common/interfaces/Prefab.ts:27")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"onbeforecreate"},"onBeforeCreate"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"onBeforeCreate"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/common_interfaces_behaviorvalue.behaviorvalue"},(0,o.kt)("em",{parentName:"a"},"BehaviorValue")),"[]"),(0,o.kt)("p",null,"Call before Creation of Entity from this Prefab."),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/common_interfaces_prefab.prefab"},"Prefab"),".",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/common_interfaces_prefab.prefab#onbeforecreate"},"onBeforeCreate")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/common/interfaces/Prefab.ts#L21"},"packages/engine/src/common/interfaces/Prefab.ts:21")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"onbeforedestroy"},"onBeforeDestroy"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"onBeforeDestroy"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/common_interfaces_behaviorvalue.behaviorvalue"},(0,o.kt)("em",{parentName:"a"},"BehaviorValue")),"[]"),(0,o.kt)("p",null,"Call before destruction of Entity created from this Prefab."),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/common_interfaces_prefab.prefab"},"Prefab"),".",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/common_interfaces_prefab.prefab#onbeforedestroy"},"onBeforeDestroy")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/common/interfaces/Prefab.ts#L25"},"packages/engine/src/common/interfaces/Prefab.ts:25")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"servercomponents"},"serverComponents"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"serverComponents"),": NetworkComponentInterface[]"),(0,o.kt)("p",null,"List of server components."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/networking/interfaces/NetworkPrefab.ts#L23"},"packages/engine/src/networking/interfaces/NetworkPrefab.ts:23")))}l.isMDXComponent=!0}}]);