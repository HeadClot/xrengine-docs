(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[88758],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return N},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},N=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},E={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,N=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=a,_=p["".concat(o,".").concat(d)]||p[d]||E[d]||i;return t?r.createElement(_,c(c({ref:n},N),{},{components:t})):r.createElement(_,c({ref:n},N))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<i;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},78143:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return l},default:function(){return E}});var r=t(22122),a=t(19756),i=(t(67294),t(3905)),c=["components"],s={id:"src_reducers_actions",title:"Module: src/reducers/actions",sidebar_label:"src/reducers/actions",custom_edit_url:null},o={unversionedId:"docs-client/modules/src_reducers_actions",id:"docs-client/modules/src_reducers_actions",isDocsHomePage:!1,title:"Module: src/reducers/actions",description:"Variables",source:"@site/docs/docs-client/modules/src_reducers_actions.md",sourceDirName:"docs-client/modules",slug:"/docs-client/modules/src_reducers_actions",permalink:"/xrengine-docs/docs/docs-client/modules/src_reducers_actions",editUrl:null,version:"current",sidebar_label:"src/reducers/actions",frontMatter:{id:"src_reducers_actions",title:"Module: src/reducers/actions",sidebar_label:"src/reducers/actions",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: src/reducers",permalink:"/xrengine-docs/docs/docs-client/modules/src_reducers"},next:{title:"Module: src/reducers/channelConnection/actions",permalink:"/xrengine-docs/docs/docs-client/modules/src_reducers_channelconnection_actions"}},l=[{value:"Variables",id:"variables",children:[{value:"CAM_AUDIO_CHANGED",id:"cam_audio_changed",children:[]},{value:"CAM_VIDEO_CHANGED",id:"cam_video_changed",children:[]},{value:"CHANNEL_SERVER_CONNECTED",id:"channel_server_connected",children:[]},{value:"CHANNEL_SERVER_CONNECTING",id:"channel_server_connecting",children:[]},{value:"CHANNEL_SERVER_DISCONNECTED",id:"channel_server_disconnected",children:[]},{value:"CHANNEL_SERVER_PROVISIONED",id:"channel_server_provisioned",children:[]},{value:"CHANNEL_SERVER_PROVISIONING",id:"channel_server_provisioning",children:[]},{value:"CHANNEL_TYPE_CHANGED",id:"channel_type_changed",children:[]},{value:"CONSUMERS_CHANGED",id:"consumers_changed",children:[]},{value:"FACE_TRACKING_CHANGED",id:"face_tracking_changed",children:[]},{value:"INSTANCE_SERVER_CONNECTED",id:"instance_server_connected",children:[]},{value:"INSTANCE_SERVER_CONNECTING",id:"instance_server_connecting",children:[]},{value:"INSTANCE_SERVER_DISCONNECTED",id:"instance_server_disconnected",children:[]},{value:"INSTANCE_SERVER_PROVISIONED",id:"instance_server_provisioned",children:[]},{value:"INSTANCE_SERVER_PROVISIONING",id:"instance_server_provisioning",children:[]},{value:"SCREEN_AUDIO_CHANGED",id:"screen_audio_changed",children:[]},{value:"SCREEN_VIDEO_CHANGED",id:"screen_video_changed",children:[]},{value:"SOCKET_CREATED",id:"socket_created",children:[]}]}],N={toc:l};function E(e){var n=e.components,t=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},N,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"cam_audio_changed"},"CAM","_","AUDIO","_","CHANGED"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"CAM","_","AUDIO","_","CHANGED"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"CAM_AUDIO_CHANGED"'),"= 'CAM","_","AUDIO","_","CHANGED'"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/client/src/reducers/actions.ts#L2"},"packages/client/src/reducers/actions.ts:2")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"cam_video_changed"},"CAM","_","VIDEO","_","CHANGED"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"CAM","_","VIDEO","_","CHANGED"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"CAM_VIDEO_CHANGED"'),"= 'CAM","_","VIDEO","_","CHANGED'"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/client/src/reducers/actions.ts#L1"},"packages/client/src/reducers/actions.ts:1")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"channel_server_connected"},"CHANNEL","_","SERVER","_","CONNECTED"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"CHANNEL","_","SERVER","_","CONNECTED"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"CHANNEL_SERVER_CONNECTED"'),"= 'CHANNEL","_","SERVER","_","CONNECTED'"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/client/src/reducers/actions.ts#L20"},"packages/client/src/reducers/actions.ts:20")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"channel_server_connecting"},"CHANNEL","_","SERVER","_","CONNECTING"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"CHANNEL","_","SERVER","_","CONNECTING"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"CHANNEL_SERVER_CONNECTING"'),"= 'CHANNEL","_","SERVER","_","CONNECTING'"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/client/src/reducers/actions.ts#L19"},"packages/client/src/reducers/actions.ts:19")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"channel_server_disconnected"},"CHANNEL","_","SERVER","_","DISCONNECTED"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"CHANNEL","_","SERVER","_","DISCONNECTED"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"CHANNEL_SERVER_DISCONNECTED"'),"= 'CHANNEL","_","SERVER","_","DISCONNECTED'"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/client/src/reducers/actions.ts#L21"},"packages/client/src/reducers/actions.ts:21")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"channel_server_provisioned"},"CHANNEL","_","SERVER","_","PROVISIONED"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"CHANNEL","_","SERVER","_","PROVISIONED"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"CHANNEL_SERVER_PROVISIONED"'),"= 'CHANNEL","_","SERVER","_","PROVISIONED'"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/client/src/reducers/actions.ts#L18"},"packages/client/src/reducers/actions.ts:18")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"channel_server_provisioning"},"CHANNEL","_","SERVER","_","PROVISIONING"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"CHANNEL","_","SERVER","_","PROVISIONING"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"CHANNEL_SERVER_PROVISIONING"'),"= 'CHANNEL","_","SERVER","_","PROVISIONING'"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/client/src/reducers/actions.ts#L17"},"packages/client/src/reducers/actions.ts:17")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"channel_type_changed"},"CHANNEL","_","TYPE","_","CHANGED"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"CHANNEL","_","TYPE","_","CHANGED"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"CHANNEL_TYPE_CHANGED"'),"= 'CHANNEL","_","TYPE","_","CHANGED'"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/client/src/reducers/actions.ts#L8"},"packages/client/src/reducers/actions.ts:8")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"consumers_changed"},"CONSUMERS","_","CHANGED"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"CONSUMERS","_","CHANGED"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"CONSUMERS_CHANGED"'),"= 'CONSUMERS","_","CHANGED'"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/client/src/reducers/actions.ts#L6"},"packages/client/src/reducers/actions.ts:6")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"face_tracking_changed"},"FACE","_","TRACKING","_","CHANGED"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"FACE","_","TRACKING","_","CHANGED"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"FACE_TRACKING_CHANGED"'),"= 'FACE","_","TRACKING","_","CHANGED'"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/client/src/reducers/actions.ts#L3"},"packages/client/src/reducers/actions.ts:3")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"instance_server_connected"},"INSTANCE","_","SERVER","_","CONNECTED"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"INSTANCE","_","SERVER","_","CONNECTED"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"INSTANCE_SERVER_CONNECTED"'),"= 'INSTANCE","_","SERVER","_","CONNECTED'"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/client/src/reducers/actions.ts#L13"},"packages/client/src/reducers/actions.ts:13")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"instance_server_connecting"},"INSTANCE","_","SERVER","_","CONNECTING"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"INSTANCE","_","SERVER","_","CONNECTING"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"INSTANCE_SERVER_CONNECTING"'),"= 'INSTANCE","_","SERVER","_","CONNECTING'"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/client/src/reducers/actions.ts#L12"},"packages/client/src/reducers/actions.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"instance_server_disconnected"},"INSTANCE","_","SERVER","_","DISCONNECTED"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"INSTANCE","_","SERVER","_","DISCONNECTED"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"INSTANCE_SERVER_DISCONNECTED"'),"= 'INSTANCE","_","SERVER","_","DISCONNECTED'"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/client/src/reducers/actions.ts#L14"},"packages/client/src/reducers/actions.ts:14")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"instance_server_provisioned"},"INSTANCE","_","SERVER","_","PROVISIONED"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"INSTANCE","_","SERVER","_","PROVISIONED"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"INSTANCE_SERVER_PROVISIONED"'),"= 'INSTANCE","_","SERVER","_","PROVISIONED'"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/client/src/reducers/actions.ts#L11"},"packages/client/src/reducers/actions.ts:11")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"instance_server_provisioning"},"INSTANCE","_","SERVER","_","PROVISIONING"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"INSTANCE","_","SERVER","_","PROVISIONING"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"INSTANCE_SERVER_PROVISIONING"'),"= 'INSTANCE","_","SERVER","_","PROVISIONING'"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/client/src/reducers/actions.ts#L10"},"packages/client/src/reducers/actions.ts:10")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"screen_audio_changed"},"SCREEN","_","AUDIO","_","CHANGED"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"SCREEN","_","AUDIO","_","CHANGED"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"SCREEN_AUDIO_CHANGED"'),"= 'SCREEN","_","AUDIO","_","CHANGED'"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/client/src/reducers/actions.ts#L5"},"packages/client/src/reducers/actions.ts:5")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"screen_video_changed"},"SCREEN","_","VIDEO","_","CHANGED"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"SCREEN","_","VIDEO","_","CHANGED"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"SCREEN_VIDEO_CHANGED"'),"= 'SCREEN","_","VIDEO","_","CHANGED'"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/client/src/reducers/actions.ts#L4"},"packages/client/src/reducers/actions.ts:4")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"socket_created"},"SOCKET","_","CREATED"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"SOCKET","_","CREATED"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"SOCKET_CREATED"'),"= 'SOCKET","_","CREATED'"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/client/src/reducers/actions.ts#L15"},"packages/client/src/reducers/actions.ts:15")))}E.isMDXComponent=!0}}]);