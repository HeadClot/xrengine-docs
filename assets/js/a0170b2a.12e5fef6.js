(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[44598],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return g}});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=l(t),g=s,k=u["".concat(c,".").concat(g)]||u[g]||p[g]||i;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function g(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,o=new Array(i);o[0]=u;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},47713:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return r},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var a=t(22122),s=t(19756),i=(t(67294),t(3905)),o=["components"],r={id:"ecs_classes_engine",title:"Module: ecs/classes/Engine",sidebar_label:"ecs/classes/Engine",custom_edit_url:null},c={unversionedId:"docs-engine/modules/ecs_classes_engine",id:"docs-engine/modules/ecs_classes_engine",isDocsHomePage:!1,title:"Module: ecs/classes/Engine",description:"This file constains declaration of Engine Class.",source:"@site/docs/docs-engine/modules/ecs_classes_engine.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/ecs_classes_engine",permalink:"/xrengine-docs/docs/docs-engine/modules/ecs_classes_engine",editUrl:null,version:"current",sidebar_label:"ecs/classes/Engine",frontMatter:{id:"ecs_classes_engine",title:"Module: ecs/classes/Engine",sidebar_label:"ecs/classes/Engine",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: ecs/classes/Component",permalink:"/xrengine-docs/docs/docs-engine/modules/ecs_classes_component"},next:{title:"Module: ecs/classes/EngineEvents",permalink:"/xrengine-docs/docs/docs-engine/modules/ecs_classes_engineevents"}},l=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Classes",id:"classes",children:[]}]},{value:"Type aliases",id:"type-aliases",children:[{value:"Audio",id:"audio",children:[]},{value:"AudioListener",id:"audiolistener",children:[]},{value:"AudioLoader",id:"audioloader",children:[]},{value:"PositionalAudio",id:"positionalaudio",children:[]},{value:"VideoTexture",id:"videotexture",children:[]}]},{value:"Variables",id:"variables",children:[{value:"Audio",id:"audio-1",children:[]},{value:"AudioListener",id:"audiolistener-1",children:[]},{value:"AudioLoader",id:"audioloader-1",children:[]},{value:"PositionalAudio",id:"positionalaudio-1",children:[]},{value:"VideoTexture",id:"videotexture-1",children:[]}]},{value:"Functions",id:"functions",children:[{value:"awaitEngineLoaded",id:"awaitengineloaded",children:[]}]}],d={toc:l};function p(e){var n=e.components,t=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This file constains declaration of Engine Class."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"author"))," Fernando Serrano, Robert Long"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"classes"},"Classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_engine.engine"},"Engine"))),(0,i.kt)("h2",{id:"type-aliases"},"Type aliases"),(0,i.kt)("h3",{id:"audio"},"Audio"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"Audio"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_audio.audioobjectproxy"},(0,i.kt)("em",{parentName:"a"},"AudioObjectProxy"))," ","|"," THREE","_","Audio"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/Engine.ts#L41"},"packages/engine/src/ecs/classes/Engine.ts:41")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"audiolistener"},"AudioListener"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"AudioListener"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_audio.audiolistenerproxy"},(0,i.kt)("em",{parentName:"a"},"AudioListenerProxy"))," ","|"," THREE","_","AudioListener"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/Engine.ts#L42"},"packages/engine/src/ecs/classes/Engine.ts:42")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"audioloader"},"AudioLoader"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"AudioLoader"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_audio.audioloaderproxy"},(0,i.kt)("em",{parentName:"a"},"AudioLoaderProxy"))," ","|"," THREE","_","AudioLoader"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/Engine.ts#L43"},"packages/engine/src/ecs/classes/Engine.ts:43")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"positionalaudio"},"PositionalAudio"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"PositionalAudio"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_audio.positionalaudioobjectproxy"},(0,i.kt)("em",{parentName:"a"},"PositionalAudioObjectProxy"))," ","|"," THREE","_","PositionalAudio"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/Engine.ts#L44"},"packages/engine/src/ecs/classes/Engine.ts:44")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"videotexture"},"VideoTexture"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"VideoTexture"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_videotexture.videotextureproxy"},(0,i.kt)("em",{parentName:"a"},"VideoTextureProxy"))," ","|"," THREE","_","VideoTexture"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/Engine.ts#L45"},"packages/engine/src/ecs/classes/Engine.ts:45")),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"audio-1"},"Audio"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"Audio"),": ",(0,i.kt)("em",{parentName:"p"},"typeof")," ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_audio.audioobjectproxy"},(0,i.kt)("em",{parentName:"a"},"AudioObjectProxy"))," ","|"," ",(0,i.kt)("em",{parentName:"p"},"typeof")," Audio"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/Engine.ts#L35"},"packages/engine/src/ecs/classes/Engine.ts:35")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"audiolistener-1"},"AudioListener"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"AudioListener"),": ",(0,i.kt)("em",{parentName:"p"},"typeof")," ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_audio.audiolistenerproxy"},(0,i.kt)("em",{parentName:"a"},"AudioListenerProxy"))," ","|"," ",(0,i.kt)("em",{parentName:"p"},"typeof")," AudioListener"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/Engine.ts#L36"},"packages/engine/src/ecs/classes/Engine.ts:36")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"audioloader-1"},"AudioLoader"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"AudioLoader"),": ",(0,i.kt)("em",{parentName:"p"},"typeof")," ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_audio.audioloaderproxy"},(0,i.kt)("em",{parentName:"a"},"AudioLoaderProxy"))," ","|"," ",(0,i.kt)("em",{parentName:"p"},"typeof")," AudioLoader"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/Engine.ts#L37"},"packages/engine/src/ecs/classes/Engine.ts:37")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"positionalaudio-1"},"PositionalAudio"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"PositionalAudio"),": ",(0,i.kt)("em",{parentName:"p"},"typeof")," ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_audio.positionalaudioobjectproxy"},(0,i.kt)("em",{parentName:"a"},"PositionalAudioObjectProxy"))," ","|"," ",(0,i.kt)("em",{parentName:"p"},"typeof")," PositionalAudio"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/Engine.ts#L38"},"packages/engine/src/ecs/classes/Engine.ts:38")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"videotexture-1"},"VideoTexture"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"VideoTexture"),": ",(0,i.kt)("em",{parentName:"p"},"typeof")," ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/worker_videotexture.videotextureproxy"},(0,i.kt)("em",{parentName:"a"},"VideoTextureProxy"))," ","|"," ",(0,i.kt)("em",{parentName:"p"},"typeof")," VideoTexture"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/Engine.ts#L39"},"packages/engine/src/ecs/classes/Engine.ts:39")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"awaitengineloaded"},"awaitEngineLoaded"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const"),(0,i.kt)("strong",{parentName:"p"},"awaitEngineLoaded"),"(): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/ecs/classes/Engine.ts#L302"},"packages/engine/src/ecs/classes/Engine.ts:302")))}p.isMDXComponent=!0}}]);