(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[14082],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,g=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21799:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],s={id:"networking_interfaces_worldstate.worldstatesnapshot",title:"Interface: WorldStateSnapshot",sidebar_label:"WorldStateSnapshot",custom_edit_url:null},c={unversionedId:"docs-engine/interfaces/networking_interfaces_worldstate.worldstatesnapshot",id:"docs-engine/interfaces/networking_interfaces_worldstate.worldstatesnapshot",isDocsHomePage:!1,title:"Interface: WorldStateSnapshot",description:"networking/interfaces/WorldState.WorldStateSnapshot",source:"@site/docs/docs-engine/interfaces/networking_interfaces_worldstate.worldstatesnapshot.md",sourceDirName:"docs-engine/interfaces",slug:"/docs-engine/interfaces/networking_interfaces_worldstate.worldstatesnapshot",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_worldstate.worldstatesnapshot",editUrl:null,version:"current",sidebar_label:"WorldStateSnapshot",frontMatter:{id:"networking_interfaces_worldstate.worldstatesnapshot",title:"Interface: WorldStateSnapshot",sidebar_label:"WorldStateSnapshot",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: WorldStateInterface",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_worldstate.worldstateinterface"},next:{title:"Interface: InterpolatedSnapshot",permalink:"/xrengine-docs/docs/docs-engine/interfaces/networking_types_snapshotdatatypes.interpolatedsnapshot"}},l=[{value:"Properties",id:"properties",children:[{value:"id",id:"id",children:[]},{value:"state",id:"state",children:[]},{value:"time",id:"time",children:[]}]}],p={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/networking_interfaces_worldstate"},"networking/interfaces/WorldState"),".WorldStateSnapshot"),(0,o.kt)("p",null,"Interface for world state snapshot."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"id"},"id"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"id"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"ID of the snapshot."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/networking/interfaces/WorldState.ts#L107"},"packages/engine/src/networking/interfaces/WorldState.ts:107")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"state"},"state"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"state"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"[]"),(0,o.kt)("p",null,"State of the world while this snapshot is taken."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/networking/interfaces/WorldState.ts#L109"},"packages/engine/src/networking/interfaces/WorldState.ts:109")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"time"},"time"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"time"),": ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("p",null,"Time of the snapshot."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/networking/interfaces/WorldState.ts#L105"},"packages/engine/src/networking/interfaces/WorldState.ts:105")))}d.isMDXComponent=!0}}]);