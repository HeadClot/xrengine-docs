(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[28268],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,g=c["".concat(d,".").concat(u)]||c[u]||p[u]||o;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},36729:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return d},default:function(){return m}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),l={id:"game_templates_golf_behaviors_addrole",title:"Module: game/templates/Golf/behaviors/addRole",sidebar_label:"game/templates/Golf/behaviors/addRole",custom_edit_url:null},i={unversionedId:"docs-engine/modules/game_templates_golf_behaviors_addrole",id:"docs-engine/modules/game_templates_golf_behaviors_addrole",isDocsHomePage:!1,title:"Module: game/templates/Golf/behaviors/addRole",description:"Functions",source:"@site/docs/docs-engine/modules/game_templates_golf_behaviors_addrole.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/game_templates_golf_behaviors_addrole",permalink:"/xrengine-docs/docs/docs-engine/modules/game_templates_golf_behaviors_addrole",editUrl:null,version:"current",sidebar_label:"game/templates/Golf/behaviors/addRole",frontMatter:{id:"game_templates_golf_behaviors_addrole",title:"Module: game/templates/Golf/behaviors/addRole",sidebar_label:"game/templates/Golf/behaviors/addRole",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: game/templates/Golf/behaviors/addHole",permalink:"/xrengine-docs/docs/docs-engine/modules/game_templates_golf_behaviors_addhole"},next:{title:"Module: game/templates/Golf/behaviors/addTurn",permalink:"/xrengine-docs/docs/docs-engine/modules/game_templates_golf_behaviors_addturn"}},d=[{value:"Functions",id:"functions",children:[{value:"addRole",id:"addrole",children:[]}]}],s={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"addrole"},"addRole"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const"),(0,o.kt)("strong",{parentName:"p"},"addRole"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"args?"),": ",(0,o.kt)("em",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"delta?"),": ",(0,o.kt)("em",{parentName:"p"},"number"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"entityOut?"),": ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"time?"),": ",(0,o.kt)("em",{parentName:"p"},"number"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"checks?"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"author"))," HydraFire <github.com/HydraFire>"),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"entity")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"args?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"delta?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"number"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"entityOut?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,o.kt)("em",{parentName:"a"},"Entity")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"time?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"number"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"checks?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/game/templates/Golf/behaviors/addRole.ts#L13"},"packages/engine/src/game/templates/Golf/behaviors/addRole.ts:13")))}m.isMDXComponent=!0}}]);