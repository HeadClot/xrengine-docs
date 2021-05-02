(self.webpackChunk_xr3ngine_docs=self.webpackChunk_xr3ngine_docs||[]).push([[42227],{30876:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return f}});var r=t(2784);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var a=r.createContext({}),l=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,c=e.mdxType,s=e.originalType,a=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(t),f=c,m=u["".concat(a,".").concat(f)]||u[f]||p[f]||s;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function f(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var s=t.length,o=new Array(s);o[0]=u;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:c,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},17350:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return a},default:function(){return d}});var r=t(7560),c=t(98283),s=(t(2784),t(30876)),o={id:"src_world_reducers_scenes_actions.scenesfetchedaction",title:"Interface: ScenesFetchedAction",sidebar_label:"ScenesFetchedAction",custom_edit_url:null},i={unversionedId:"docs-client-core/interfaces/src_world_reducers_scenes_actions.scenesfetchedaction",id:"docs-client-core/interfaces/src_world_reducers_scenes_actions.scenesfetchedaction",isDocsHomePage:!1,title:"Interface: ScenesFetchedAction",description:"src/world/reducers/scenes/actions.ScenesFetchedAction",source:"@site/docs/docs-client-core/interfaces/src_world_reducers_scenes_actions.scenesfetchedaction.md",sourceDirName:"docs-client-core/interfaces",slug:"/docs-client-core/interfaces/src_world_reducers_scenes_actions.scenesfetchedaction",permalink:"/docs/docs/docs-client-core/interfaces/src_world_reducers_scenes_actions.scenesfetchedaction",editUrl:null,version:"current",sidebar_label:"ScenesFetchedAction",frontMatter:{id:"src_world_reducers_scenes_actions.scenesfetchedaction",title:"Interface: ScenesFetchedAction",sidebar_label:"ScenesFetchedAction",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: PublicScenesState",permalink:"/docs/docs/docs-client-core/interfaces/src_world_reducers_scenes_actions.publicscenesstate"},next:{title:"xr3ngine",permalink:"/docs/docs/docs-client"}},a=[{value:"Properties",id:"properties",children:[{value:"message",id:"message",children:[]},{value:"scene",id:"scene",children:[]},{value:"scenes",id:"scenes",children:[]},{value:"type",id:"type",children:[]}]}],l={toc:a};function d(e){var n=e.components,t=(0,c.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/modules/src_world_reducers_scenes_actions"},"src/world/reducers/scenes/actions"),".ScenesFetchedAction"),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"message"},"message"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"message"),": ",(0,s.kt)("em",{parentName:"p"},"string")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/world/reducers/scenes/actions.ts#L24"},"packages/client-core/src/world/reducers/scenes/actions.ts:24")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"scene"},"scene"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"scene"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_world_reducers_scenes_actions.publicscene"},(0,s.kt)("em",{parentName:"a"},"PublicScene"))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/world/reducers/scenes/actions.ts#L23"},"packages/client-core/src/world/reducers/scenes/actions.ts:23")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"scenes"},"scenes"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"scenes"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_world_reducers_scenes_actions.publicscene"},(0,s.kt)("em",{parentName:"a"},"PublicScene")),"[]"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/world/reducers/scenes/actions.ts#L22"},"packages/client-core/src/world/reducers/scenes/actions.ts:22")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"type"},"type"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"type"),": ",(0,s.kt)("em",{parentName:"p"},"string")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/world/reducers/scenes/actions.ts#L21"},"packages/client-core/src/world/reducers/scenes/actions.ts:21")))}d.isMDXComponent=!0}}]);