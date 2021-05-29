(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[2596],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},o=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),o=d(a),u=n,k=o["".concat(p,".").concat(u)]||o[u]||l[u]||i;return a?r.createElement(k,s(s({ref:t},m),{},{components:a})):r.createElement(k,s({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=o;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var d=2;d<i;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}o.displayName="MDXCreateElement"},47004:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return l}});var r=a(22122),n=a(19756),i=(a(67294),a(3905)),s=["components"],c={id:"src_reducers_mediastream_service",title:"Module: src/reducers/mediastream/service",sidebar_label:"src/reducers/mediastream/service",custom_edit_url:null},p={unversionedId:"docs-client/modules/src_reducers_mediastream_service",id:"docs-client/modules/src_reducers_mediastream_service",isDocsHomePage:!1,title:"Module: src/reducers/mediastream/service",description:"Functions",source:"@site/docs/docs-client/modules/src_reducers_mediastream_service.md",sourceDirName:"docs-client/modules",slug:"/docs-client/modules/src_reducers_mediastream_service",permalink:"/xrengine-docs/docs/docs-client/modules/src_reducers_mediastream_service",editUrl:null,version:"current",sidebar_label:"src/reducers/mediastream/service",frontMatter:{id:"src_reducers_mediastream_service",title:"Module: src/reducers/mediastream/service",sidebar_label:"src/reducers/mediastream/service",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: src/reducers/mediastream/selector",permalink:"/xrengine-docs/docs/docs-client/modules/src_reducers_mediastream_selector"},next:{title:"Module: src/reducers/reducers",permalink:"/xrengine-docs/docs/docs-client/modules/src_reducers_reducers"}},d=[{value:"Functions",id:"functions",children:[{value:"changeCamAudioState",id:"changecamaudiostate",children:[]},{value:"changeCamVideoState",id:"changecamvideostate",children:[]},{value:"changeFaceTrackingState",id:"changefacetrackingstate",children:[]},{value:"triggerUpdateConsumers",id:"triggerupdateconsumers",children:[]},{value:"updateCamAudioState",id:"updatecamaudiostate",children:[]},{value:"updateCamVideoState",id:"updatecamvideostate",children:[]},{value:"updateConsumers",id:"updateconsumers",children:[]},{value:"updateFaceTrackingState",id:"updatefacetrackingstate",children:[]}]}],m={toc:d};function l(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"changecamaudiostate"},"changeCamAudioState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const"),(0,i.kt)("strong",{parentName:"p"},"changeCamAudioState"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"isEnable"),": ",(0,i.kt)("em",{parentName:"p"},"boolean"),"): ",(0,i.kt)("em",{parentName:"p"},"function")),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"isEnable")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"boolean"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," (",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch"),": ",(0,i.kt)("em",{parentName:"p"},"Dispatch"),"<AnyAction",">",") => ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/client/src/reducers/mediastream/service.ts#L42"},"packages/client/src/reducers/mediastream/service.ts:42")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"changecamvideostate"},"changeCamVideoState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const"),(0,i.kt)("strong",{parentName:"p"},"changeCamVideoState"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"isEnable"),": ",(0,i.kt)("em",{parentName:"p"},"boolean"),"): ",(0,i.kt)("em",{parentName:"p"},"function")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"isEnable")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"boolean"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," (",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch"),": ",(0,i.kt)("em",{parentName:"p"},"Dispatch"),"<AnyAction",">",") => ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/client/src/reducers/mediastream/service.ts#L20"},"packages/client/src/reducers/mediastream/service.ts:20")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"changefacetrackingstate"},"changeFaceTrackingState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const"),(0,i.kt)("strong",{parentName:"p"},"changeFaceTrackingState"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"isEnable"),": ",(0,i.kt)("em",{parentName:"p"},"boolean"),"): ",(0,i.kt)("em",{parentName:"p"},"function")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"isEnable")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"boolean"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," (",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch"),": ",(0,i.kt)("em",{parentName:"p"},"Dispatch"),"<AnyAction",">",") => ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/client/src/reducers/mediastream/service.ts#L51"},"packages/client/src/reducers/mediastream/service.ts:51")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"triggerupdateconsumers"},"triggerUpdateConsumers"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const"),(0,i.kt)("strong",{parentName:"p"},"triggerUpdateConsumers"),"(): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/client/src/reducers/mediastream/service.ts#L24"},"packages/client/src/reducers/mediastream/service.ts:24")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updatecamaudiostate"},"updateCamAudioState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const"),(0,i.kt)("strong",{parentName:"p"},"updateCamAudioState"),"(): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/client/src/reducers/mediastream/service.ts#L35"},"packages/client/src/reducers/mediastream/service.ts:35")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updatecamvideostate"},"updateCamVideoState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const"),(0,i.kt)("strong",{parentName:"p"},"updateCamVideoState"),"(): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/client/src/reducers/mediastream/service.ts#L13"},"packages/client/src/reducers/mediastream/service.ts:13")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updateconsumers"},"updateConsumers"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const"),(0,i.kt)("strong",{parentName:"p"},"updateConsumers"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"consumers"),": ",(0,i.kt)("em",{parentName:"p"},"any"),"[]): ",(0,i.kt)("em",{parentName:"p"},"function")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"consumers")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"),"[]")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," (",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch"),": ",(0,i.kt)("em",{parentName:"p"},"Dispatch"),"<AnyAction",">",") => ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/client/src/reducers/mediastream/service.ts#L31"},"packages/client/src/reducers/mediastream/service.ts:31")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updatefacetrackingstate"},"updateFaceTrackingState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const"),(0,i.kt)("strong",{parentName:"p"},"updateFaceTrackingState"),"(): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/client/src/reducers/mediastream/service.ts#L46"},"packages/client/src/reducers/mediastream/service.ts:46")))}l.isMDXComponent=!0}}]);