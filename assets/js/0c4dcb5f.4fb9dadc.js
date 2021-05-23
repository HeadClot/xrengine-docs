(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[40806],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=d(n),u=o,f=l["".concat(c,".").concat(u)]||l[u]||p[u]||a;return n?r.createElement(f,m(m({ref:t},s),{},{components:n})):r.createElement(f,m({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,m=new Array(a);m[0]=l;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,m[1]=i;for(var d=2;d<a;d++)m[d]=n[d];return r.createElement.apply(null,m)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},55016:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},metadata:function(){return i},toc:function(){return c},default:function(){return s}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),m={id:"common_behaviors_addcomponentfromschema",title:"Module: common/behaviors/addComponentFromSchema",sidebar_label:"common/behaviors/addComponentFromSchema",custom_edit_url:null},i={unversionedId:"docs-engine/modules/common_behaviors_addcomponentfromschema",id:"docs-engine/modules/common_behaviors_addcomponentfromschema",isDocsHomePage:!1,title:"Module: common/behaviors/addComponentFromSchema",description:"Functions",source:"@site/docs/docs-engine/modules/common_behaviors_addcomponentfromschema.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/common_behaviors_addcomponentfromschema",permalink:"/xrengine-docs/docs/docs-engine/modules/common_behaviors_addcomponentfromschema",editUrl:null,version:"current",sidebar_label:"common/behaviors/addComponentFromSchema",frontMatter:{id:"common_behaviors_addcomponentfromschema",title:"Module: common/behaviors/addComponentFromSchema",sidebar_label:"common/behaviors/addComponentFromSchema",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: character/state/CharacterStates",permalink:"/xrengine-docs/docs/docs-engine/modules/character_state_characterstates"},next:{title:"Module: common/classes/BufferGeometryUtils",permalink:"/xrengine-docs/docs/docs-engine/modules/common_classes_buffergeometryutils"}},c=[{value:"Functions",id:"functions",children:[{value:"addComponentFromSchema",id:"addcomponentfromschema",children:[]}]}],d={toc:c};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"addcomponentfromschema"},"addComponentFromSchema"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const"),(0,a.kt)("strong",{parentName:"p"},"addComponentFromSchema"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,a.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,a.kt)("em",{parentName:"a"},"Entity")),", ",(0,a.kt)("inlineCode",{parentName:"p"},"args"),": { ",(0,a.kt)("inlineCode",{parentName:"p"},"component"),": ",(0,a.kt)("em",{parentName:"p"},"any")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"componentArgs"),": ",(0,a.kt)("em",{parentName:"p"},"any"),"  }): ",(0,a.kt)("em",{parentName:"p"},"void")),(0,a.kt)("p",null,"Add Component into Entity."),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"entity")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,a.kt)("em",{parentName:"a"},"Entity"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Entity in which component will be added.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"args")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"object")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Args contains Component and args of Component which will be added into the Entity.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"args.component")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"any")),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"args.componentArgs")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"any")),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ",(0,a.kt)("em",{parentName:"p"},"void")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/common/behaviors/addComponentFromSchema.ts#L9"},"packages/engine/src/common/behaviors/addComponentFromSchema.ts:9")))}s.isMDXComponent=!0}}]);