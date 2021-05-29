(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[19263],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return l},kt:function(){return m}});var t=n(67294);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=t.createContext({}),u=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},l=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),g=u(n),m=s,f=g["".concat(c,".").concat(m)]||g[m]||p[m]||a;return n?t.createElement(f,o(o({ref:r},l),{},{components:n})):t.createElement(f,o({ref:r},l))}));function m(e,r){var n=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=g;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},88441:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var t=n(22122),s=n(19756),a=(n(67294),n(3905)),o=["components"],i={id:"worker_messagequeue.message",title:"Interface: Message",sidebar_label:"Message",custom_edit_url:null},c={unversionedId:"docs-engine/interfaces/worker_messagequeue.message",id:"docs-engine/interfaces/worker_messagequeue.message",isDocsHomePage:!1,title:"Interface: Message",description:"worker/MessageQueue.Message",source:"@site/docs/docs-engine/interfaces/worker_messagequeue.message.md",sourceDirName:"docs-engine/interfaces",slug:"/docs-engine/interfaces/worker_messagequeue.message",permalink:"/xrengine-docs/docs/docs-engine/interfaces/worker_messagequeue.message",editUrl:null,version:"current",sidebar_label:"Message",frontMatter:{id:"worker_messagequeue.message",title:"Interface: Message",sidebar_label:"Message",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: StateValue<T\\>",permalink:"/xrengine-docs/docs/docs-engine/interfaces/state_interfaces_statevalue.statevalue"},next:{title:"@xrengine/gameserver",permalink:"/xrengine-docs/docs/docs-gameserver"}},u=[{value:"Properties",id:"properties",children:[{value:"message",id:"message",children:[]},{value:"messageType",id:"messagetype",children:[]},{value:"transferables",id:"transferables",children:[]}]}],l={toc:u};function p(e){var r=e.components,n=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/worker_messagequeue"},"worker/MessageQueue"),".Message"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"message"},"message"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"message"),": ",(0,a.kt)("em",{parentName:"p"},"object")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/engine/src/worker/MessageQueue.ts#L38"},"packages/engine/src/worker/MessageQueue.ts:38")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"messagetype"},"messageType"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"messageType"),": ",(0,a.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/enums/worker_messagequeue.messagetype"},(0,a.kt)("em",{parentName:"a"},"MessageType"))),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/engine/src/worker/MessageQueue.ts#L37"},"packages/engine/src/worker/MessageQueue.ts:37")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"transferables"},"transferables"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"transferables"),": Transferable[]"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/engine/src/worker/MessageQueue.ts#L39"},"packages/engine/src/worker/MessageQueue.ts:39")))}p.isMDXComponent=!0}}]);