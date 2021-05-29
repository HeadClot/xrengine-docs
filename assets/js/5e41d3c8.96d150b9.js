(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[37],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),k=a,m=u["".concat(c,".").concat(k)]||u[k]||d[k]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33110:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],p={id:"networking_interfaces_worldstate.packetnetworkinputinterface",title:"Interface: PacketNetworkInputInterface",sidebar_label:"PacketNetworkInputInterface",custom_edit_url:null},c={unversionedId:"docs-engine/interfaces/networking_interfaces_worldstate.packetnetworkinputinterface",id:"docs-engine/interfaces/networking_interfaces_worldstate.packetnetworkinputinterface",isDocsHomePage:!1,title:"Interface: PacketNetworkInputInterface",description:"networking/interfaces/WorldState.PacketNetworkInputInterface",source:"@site/docs/docs-engine/interfaces/networking_interfaces_worldstate.packetnetworkinputinterface.md",sourceDirName:"docs-engine/interfaces",slug:"/docs-engine/interfaces/networking_interfaces_worldstate.packetnetworkinputinterface",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_worldstate.packetnetworkinputinterface",editUrl:null,version:"current",sidebar_label:"PacketNetworkInputInterface",frontMatter:{id:"networking_interfaces_worldstate.packetnetworkinputinterface",title:"Interface: PacketNetworkInputInterface",sidebar_label:"PacketNetworkInputInterface",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: PacketNetworkClientInputInterface",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_worldstate.packetnetworkclientinputinterface"},next:{title:"Interface: WorldStateInterface",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_worldstate.worldstateinterface"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"axes1d",id:"axes1d",children:[]},{value:"axes2d",id:"axes2d",children:[]},{value:"axes6DOF",id:"axes6dof",children:[]},{value:"buttons",id:"buttons",children:[]},{value:"networkId",id:"networkid",children:[]},{value:"viewVector",id:"viewvector",children:[]}]}],s={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/networking_interfaces_worldstate"},"networking/interfaces/WorldState"),".PacketNetworkInputInterface"),(0,i.kt)("p",null,"Interface for handling packet network input."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"PacketNetworkInputInterface")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_worldstate.packetnetworkclientinputinterface"},(0,i.kt)("em",{parentName:"a"},"PacketNetworkClientInputInterface"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"axes1d"},"axes1d"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"axes1d"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"input"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/input_types_inputalias#inputalias"},(0,i.kt)("em",{parentName:"a"},"InputAlias"))," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"lifecycleState"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/enums/common_enums_lifecyclevalue.lifecyclevalue"},(0,i.kt)("em",{parentName:"a"},"LifecycleValue"))," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/common_types_numericaltypes#numericaltype"},(0,i.kt)("em",{parentName:"a"},"NumericalType")),"  }[]"),(0,i.kt)("p",null,"Axes 1D input received over the network."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/networking/interfaces/WorldState.ts#L149"},"packages/engine/src/networking/interfaces/WorldState.ts:149")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"axes2d"},"axes2d"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"axes2d"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"input"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/input_types_inputalias#inputalias"},(0,i.kt)("em",{parentName:"a"},"InputAlias"))," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"lifecycleState"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/enums/common_enums_lifecyclevalue.lifecyclevalue"},(0,i.kt)("em",{parentName:"a"},"LifecycleValue"))," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/common_types_numericaltypes#numericaltype"},(0,i.kt)("em",{parentName:"a"},"NumericalType")),"  }[]"),(0,i.kt)("p",null,"Axes 2D input received over the network."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/networking/interfaces/WorldState.ts#L155"},"packages/engine/src/networking/interfaces/WorldState.ts:155")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"axes6dof"},"axes6DOF"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"axes6DOF"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"input"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/input_types_inputalias#inputalias"},(0,i.kt)("em",{parentName:"a"},"InputAlias"))," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"qW"),": ",(0,i.kt)("em",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"qX"),": ",(0,i.kt)("em",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"qY"),": ",(0,i.kt)("em",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"qZ"),": ",(0,i.kt)("em",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),": ",(0,i.kt)("em",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),": ",(0,i.kt)("em",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"  }[]"),(0,i.kt)("p",null,"Axes 2D input received over the network."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/networking/interfaces/WorldState.ts#L161"},"packages/engine/src/networking/interfaces/WorldState.ts:161")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"buttons"},"buttons"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"buttons"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"input"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/input_types_inputalias#inputalias"},(0,i.kt)("em",{parentName:"a"},"InputAlias"))," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"lifecycleState"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/enums/common_enums_lifecyclevalue.lifecyclevalue"},(0,i.kt)("em",{parentName:"a"},"LifecycleValue"))," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/common_types_numericaltypes#numericaltype"},(0,i.kt)("em",{parentName:"a"},"NumericalType")),"  }[]"),(0,i.kt)("p",null,"Button input received over the network."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/networking/interfaces/WorldState.ts#L143"},"packages/engine/src/networking/interfaces/WorldState.ts:143")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"networkid"},"networkId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"networkId"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"ID of the network."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/networking/interfaces/WorldState.ts#L141"},"packages/engine/src/networking/interfaces/WorldState.ts:141")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"viewvector"},"viewVector"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"viewVector"),": ",(0,i.kt)("em",{parentName:"p"},"object")),(0,i.kt)("p",null,"Viewport vector of the client."),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"x")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"y")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"z")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/networking/interfaces/WorldState.ts#L172"},"packages/engine/src/networking/interfaces/WorldState.ts:172")))}d.isMDXComponent=!0}}]);