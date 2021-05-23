(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[86961],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85139:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return i},default:function(){return c}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),o={id:"game_templates_golf_behaviors_spawnball",title:"Module: game/templates/Golf/behaviors/spawnBall",sidebar_label:"game/templates/Golf/behaviors/spawnBall",custom_edit_url:null},s={unversionedId:"docs-engine/modules/game_templates_golf_behaviors_spawnball",id:"docs-engine/modules/game_templates_golf_behaviors_spawnball",isDocsHomePage:!1,title:"Module: game/templates/Golf/behaviors/spawnBall",description:"Functions",source:"@site/docs/docs-engine/modules/game_templates_golf_behaviors_spawnball.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/game_templates_golf_behaviors_spawnball",permalink:"/xrengine-docs/docs/docs-engine/modules/game_templates_golf_behaviors_spawnball",editUrl:null,version:"current",sidebar_label:"game/templates/Golf/behaviors/spawnBall",frontMatter:{id:"game_templates_golf_behaviors_spawnball",title:"Module: game/templates/Golf/behaviors/spawnBall",sidebar_label:"game/templates/Golf/behaviors/spawnBall",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: game/templates/Golf/behaviors/saveScore",permalink:"/xrengine-docs/docs/docs-engine/modules/game_templates_golf_behaviors_savescore"},next:{title:"Module: game/templates/Golf/behaviors/teleportObject",permalink:"/xrengine-docs/docs/docs-engine/modules/game_templates_golf_behaviors_teleportobject"}},i=[{value:"Functions",id:"functions",children:[{value:"spawnBall",id:"spawnball",children:[]}]}],p={toc:i};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"spawnball"},"spawnBall"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Const"),(0,l.kt)("strong",{parentName:"p"},"spawnBall"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"playerEntity"),": ",(0,l.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,l.kt)("em",{parentName:"a"},"Entity")),"): ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"author"))," HydraFire <github.com/HydraFire>"),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"playerEntity")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_entity.entity"},(0,l.kt)("em",{parentName:"a"},"Entity")))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/game/templates/Golf/behaviors/spawnBall.ts#L17"},"packages/engine/src/game/templates/Golf/behaviors/spawnBall.ts:17")))}c.isMDXComponent=!0}}]);