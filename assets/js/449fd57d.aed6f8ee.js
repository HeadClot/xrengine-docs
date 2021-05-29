(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[74169],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(n),k=a,m=d["".concat(c,".").concat(k)]||d[k]||s[k]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69775:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],u={id:"networking_functions_updatenetworkstate",title:"Module: networking/functions/updateNetworkState",sidebar_label:"networking/functions/updateNetworkState",custom_edit_url:null},c={unversionedId:"docs-engine/modules/networking_functions_updatenetworkstate",id:"docs-engine/modules/networking_functions_updatenetworkstate",isDocsHomePage:!1,title:"Module: networking/functions/updateNetworkState",description:"Functions",source:"@site/docs/docs-engine/modules/networking_functions_updatenetworkstate.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/networking_functions_updatenetworkstate",permalink:"/xrengine-docs/docs/docs-engine/modules/networking_functions_updatenetworkstate",editUrl:null,version:"current",sidebar_label:"networking/functions/updateNetworkState",frontMatter:{id:"networking_functions_updatenetworkstate",title:"Module: networking/functions/updateNetworkState",sidebar_label:"networking/functions/updateNetworkState",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: networking/functions/sendClientObjectUpdate",permalink:"/xrengine-docs/docs/docs-engine/modules/networking_functions_sendclientobjectupdate"},next:{title:"Module: networking/interfaces/NetworkObjectList",permalink:"/xrengine-docs/docs/docs-engine/modules/networking_interfaces_networkobjectlist"}},l=[{value:"Functions",id:"functions",children:[{value:"handleNetworkStateUpdate",id:"handlenetworkstateupdate",children:[]}]}],p={toc:l};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"handlenetworkstateupdate"},"handleNetworkStateUpdate"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"handleNetworkStateUpdate"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"socket"),": ",(0,o.kt)("em",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,o.kt)("em",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"isServer?"),": ",(0,o.kt)("em",{parentName:"p"},"boolean"),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"socket")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"data")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"isServer?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"boolean"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/networking/functions/updateNetworkState.ts#L5"},"packages/engine/src/networking/functions/updateNetworkState.ts:5")))}s.isMDXComponent=!0}}]);