(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[64924],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),a=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=a(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=a(n),m=s,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:s,i[1]=c;for(var a=2;a<l;a++)i[a]=n[a];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22863:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return o},toc:function(){return a},default:function(){return p}});var r=n(22122),s=n(19756),l=(n(67294),n(3905)),i=["components"],c={id:"physics_classes_quickhull",title:"Module: physics/classes/quickhull",sidebar_label:"physics/classes/quickhull",custom_edit_url:null},o={unversionedId:"docs-engine/modules/physics_classes_quickhull",id:"docs-engine/modules/physics_classes_quickhull",isDocsHomePage:!1,title:"Module: physics/classes/quickhull",description:"Functions",source:"@site/docs/docs-engine/modules/physics_classes_quickhull.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/physics_classes_quickhull",permalink:"/xrengine-docs/docs/docs-engine/modules/physics_classes_quickhull",editUrl:null,version:"current",sidebar_label:"physics/classes/quickhull",frontMatter:{id:"physics_classes_quickhull",title:"Module: physics/classes/quickhull",sidebar_label:"physics/classes/quickhull",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: physics/classes/VectorSpringSimulator",permalink:"/xrengine-docs/docs/docs-engine/modules/physics_classes_vectorspringsimulator"},next:{title:"Module: physics/components/ColliderComponent",permalink:"/xrengine-docs/docs/docs-engine/modules/physics_components_collidercomponent"}},a=[{value:"Functions",id:"functions",children:[{value:"quickhull",id:"quickhull",children:[]}]}],u={toc:a};function p(e){var t=e.components,n=(0,s.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"quickhull"},"quickhull"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Const"),(0,l.kt)("strong",{parentName:"p"},"quickhull"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"geometry"),": ",(0,l.kt)("em",{parentName:"p"},"BufferGeometry"),"): ",(0,l.kt)("em",{parentName:"p"},"BufferGeometry")),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"geometry")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"BufferGeometry"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"BufferGeometry")),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/physics/classes/quickhull.ts#L44"},"packages/engine/src/physics/classes/quickhull.ts:44")))}p.isMDXComponent=!0}}]);