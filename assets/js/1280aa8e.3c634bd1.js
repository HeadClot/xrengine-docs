(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[83318],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,u=m["".concat(p,".").concat(k)]||m[k]||l[k]||i;return n?r.createElement(u,o(o({ref:t},c),{},{components:n})):r.createElement(u,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24718:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],d={id:"interaction_prefabs_networkrigidbody",title:"Module: interaction/prefabs/NetworkRigidBody",sidebar_label:"interaction/prefabs/NetworkRigidBody",custom_edit_url:null},p={unversionedId:"docs-engine/modules/interaction_prefabs_networkrigidbody",id:"docs-engine/modules/interaction_prefabs_networkrigidbody",isDocsHomePage:!1,title:"Module: interaction/prefabs/NetworkRigidBody",description:"Variables",source:"@site/docs/docs-engine/modules/interaction_prefabs_networkrigidbody.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/interaction_prefabs_networkrigidbody",permalink:"/xrengine-docs/docs/docs-engine/modules/interaction_prefabs_networkrigidbody",editUrl:null,version:"current",sidebar_label:"interaction/prefabs/NetworkRigidBody",frontMatter:{id:"interaction_prefabs_networkrigidbody",title:"Module: interaction/prefabs/NetworkRigidBody",sidebar_label:"interaction/prefabs/NetworkRigidBody",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: interaction/interfaces/CommonInteractiveData",permalink:"/xrengine-docs/docs/docs-engine/modules/interaction_interfaces_commoninteractivedata"},next:{title:"Module: interaction/systems/InteractiveSystem",permalink:"/xrengine-docs/docs/docs-engine/modules/interaction_systems_interactivesystem"}},s=[{value:"Variables",id:"variables",children:[{value:"NetworkRigidBody",id:"networkrigidbody",children:[]}]},{value:"Functions",id:"functions",children:[{value:"createNetworkRigidBody",id:"createnetworkrigidbody",children:[]}]}],c={toc:s};function l(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"networkrigidbody"},"NetworkRigidBody"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"NetworkRigidBody"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/networking_interfaces_networkprefab.networkprefab"},(0,i.kt)("em",{parentName:"a"},"NetworkPrefab"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/interaction/prefabs/NetworkRigidBody.ts#L52"},"packages/engine/src/interaction/prefabs/NetworkRigidBody.ts:52")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"createnetworkrigidbody"},"createNetworkRigidBody"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createNetworkRigidBody"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"entity?"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,i.kt)("em",{parentName:"a"},"Entity"))," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"networkId?"),": ",(0,i.kt)("em",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"ownerId?"),": ",(0,i.kt)("em",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"parameters?"),": ",(0,i.kt)("em",{parentName:"p"},"any")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"uniqueId"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"  }): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"author"))," HydraFire <github.com/HydraFire>"),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args.entity?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,i.kt)("em",{parentName:"a"},"Entity")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args.networkId?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args.ownerId?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args.parameters?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args.uniqueId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/interaction/prefabs/NetworkRigidBody.ts#L15"},"packages/engine/src/interaction/prefabs/NetworkRigidBody.ts:15")))}l.isMDXComponent=!0}}]);