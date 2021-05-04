(self.webpackChunk_xr3ngine_docs=self.webpackChunk_xr3ngine_docs||[]).push([[21157],{30876:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return u}});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},_=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),_=l(t),u=o,m=_["".concat(s,".").concat(u)]||_[u]||d[u]||c;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=_;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}_.displayName="MDXCreateElement"},55987:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return i},toc:function(){return s},default:function(){return p}});var r=t(7560),o=t(98283),c=(t(2784),t(30876)),a={id:"src_common_reducers_actions",title:"Module: src/common/reducers/actions",sidebar_label:"src/common/reducers/actions",custom_edit_url:null},i={unversionedId:"docs-client-core/modules/src_common_reducers_actions",id:"docs-client-core/modules/src_common_reducers_actions",isDocsHomePage:!1,title:"Module: src/common/reducers/actions",description:"Variables",source:"@site/docs/docs-client-core/modules/src_common_reducers_actions.md",sourceDirName:"docs-client-core/modules",slug:"/docs-client-core/modules/src_common_reducers_actions",permalink:"/xrengine-docs/docs/docs-client-core/modules/src_common_reducers_actions",editUrl:null,version:"current",sidebar_label:"src/common/reducers/actions",frontMatter:{id:"src_common_reducers_actions",title:"Module: src/common/reducers/actions",sidebar_label:"src/common/reducers/actions",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: src/common/reducers",permalink:"/xrengine-docs/docs/docs-client-core/modules/src_common_reducers"},next:{title:"Module: src/common/reducers/alert/actions",permalink:"/xrengine-docs/docs/docs-client-core/modules/src_common_reducers_alert_actions"}},s=[{value:"Variables",id:"variables",children:[{value:"ADDED_LAYER_USER",id:"added_layer_user",children:[]},{value:"CANCELED_INVITATION",id:"canceled_invitation",children:[]},{value:"CHANGED_RELATION",id:"changed_relation",children:[]},{value:"CLEAR_LAYER_USERS",id:"clear_layer_users",children:[]},{value:"CLOSE_DIALOG",id:"close_dialog",children:[]},{value:"INVITED_USER",id:"invited_user",children:[]},{value:"LOADED_LAYER_USERS",id:"loaded_layer_users",children:[]},{value:"LOADED_RELATIONSHIP",id:"loaded_relationship",children:[]},{value:"LOADED_SEATS",id:"loaded_seats",children:[]},{value:"LOADED_USERS",id:"loaded_users",children:[]},{value:"REMOVED_LAYER_USER",id:"removed_layer_user",children:[]},{value:"REMOVED_SEAT",id:"removed_seat",children:[]},{value:"SET_APP_LOADED",id:"set_app_loaded",children:[]},{value:"SET_APP_LOADING_PERCENT",id:"set_app_loading_percent",children:[]},{value:"SET_APP_ONBOARDING_STEP",id:"set_app_onboarding_step",children:[]},{value:"SET_APP_SPECIFIC_ONBOARDING_STEP",id:"set_app_specific_onboarding_step",children:[]},{value:"SET_IN_VR_MODE",id:"set_in_vr_mode",children:[]},{value:"SET_USER_HAS_INTERACTED",id:"set_user_has_interacted",children:[]},{value:"SET_VIEWPORT_SIZE",id:"set_viewport_size",children:[]},{value:"SHOW_DIALOG",id:"show_dialog",children:[]},{value:"USER_TOAST",id:"user_toast",children:[]}]}],l={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"variables"},"Variables"),(0,c.kt)("h3",{id:"added_layer_user"},"ADDED","_","LAYER","_","USER"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,c.kt)("strong",{parentName:"p"},"ADDED","_","LAYER","_","USER"),": ",(0,c.kt)("inlineCode",{parentName:"p"},'"ADDED_LAYER_USER"'),"= 'ADDED","_","LAYER","_","USER'"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f1951b7dc/packages/client-core/src/common/reducers/actions.ts#L8"},"packages/client-core/src/common/reducers/actions.ts:8")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"canceled_invitation"},"CANCELED","_","INVITATION"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,c.kt)("strong",{parentName:"p"},"CANCELED","_","INVITATION"),": ",(0,c.kt)("inlineCode",{parentName:"p"},'"CANCELED_INVITATION"'),"= 'CANCELED","_","INVITATION'"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f1951b7dc/packages/client-core/src/common/reducers/actions.ts#L14"},"packages/client-core/src/common/reducers/actions.ts:14")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"changed_relation"},"CHANGED","_","RELATION"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,c.kt)("strong",{parentName:"p"},"CHANGED","_","RELATION"),": ",(0,c.kt)("inlineCode",{parentName:"p"},'"CHANGED_RELATION"'),"= 'CHANGED","_","RELATION'"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f1951b7dc/packages/client-core/src/common/reducers/actions.ts#L5"},"packages/client-core/src/common/reducers/actions.ts:5")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"clear_layer_users"},"CLEAR","_","LAYER","_","USERS"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,c.kt)("strong",{parentName:"p"},"CLEAR","_","LAYER","_","USERS"),": ",(0,c.kt)("inlineCode",{parentName:"p"},'"CLEAR_LAYER_USERS"'),"= 'CLEAR","_","LAYER","_","USERS'"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f1951b7dc/packages/client-core/src/common/reducers/actions.ts#L6"},"packages/client-core/src/common/reducers/actions.ts:6")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"close_dialog"},"CLOSE","_","DIALOG"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,c.kt)("strong",{parentName:"p"},"CLOSE","_","DIALOG"),": ",(0,c.kt)("inlineCode",{parentName:"p"},'"CLOSE_DIALOG"'),"= 'CLOSE","_","DIALOG'"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f1951b7dc/packages/client-core/src/common/reducers/actions.ts#L29"},"packages/client-core/src/common/reducers/actions.ts:29")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"invited_user"},"INVITED","_","USER"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,c.kt)("strong",{parentName:"p"},"INVITED","_","USER"),": ",(0,c.kt)("inlineCode",{parentName:"p"},'"INVITED_USER"'),"= 'INVITED","_","USER'"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f1951b7dc/packages/client-core/src/common/reducers/actions.ts#L13"},"packages/client-core/src/common/reducers/actions.ts:13")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"loaded_layer_users"},"LOADED","_","LAYER","_","USERS"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,c.kt)("strong",{parentName:"p"},"LOADED","_","LAYER","_","USERS"),": ",(0,c.kt)("inlineCode",{parentName:"p"},'"LOADED_LAYER_USERS"'),"= 'LOADED","_","LAYER","_","USERS'"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f1951b7dc/packages/client-core/src/common/reducers/actions.ts#L7"},"packages/client-core/src/common/reducers/actions.ts:7")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"loaded_relationship"},"LOADED","_","RELATIONSHIP"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,c.kt)("strong",{parentName:"p"},"LOADED","_","RELATIONSHIP"),": ",(0,c.kt)("inlineCode",{parentName:"p"},'"LOADED_RELATIONSHIP"'),"= 'LOADED","_","RELATIONSHIP'"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f1951b7dc/packages/client-core/src/common/reducers/actions.ts#L3"},"packages/client-core/src/common/reducers/actions.ts:3")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"loaded_seats"},"LOADED","_","SEATS"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,c.kt)("strong",{parentName:"p"},"LOADED","_","SEATS"),": ",(0,c.kt)("inlineCode",{parentName:"p"},'"LOADED_SEATS"'),"= 'LOADED","_","SEATS'"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f1951b7dc/packages/client-core/src/common/reducers/actions.ts#L12"},"packages/client-core/src/common/reducers/actions.ts:12")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"loaded_users"},"LOADED","_","USERS"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,c.kt)("strong",{parentName:"p"},"LOADED","_","USERS"),": ",(0,c.kt)("inlineCode",{parentName:"p"},'"LOADED_USERS"'),"= 'LOADED","_","USERS'"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f1951b7dc/packages/client-core/src/common/reducers/actions.ts#L4"},"packages/client-core/src/common/reducers/actions.ts:4")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"removed_layer_user"},"REMOVED","_","LAYER","_","USER"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,c.kt)("strong",{parentName:"p"},"REMOVED","_","LAYER","_","USER"),": ",(0,c.kt)("inlineCode",{parentName:"p"},'"REMOVED_LAYER_USER"'),"= 'REMOVED","_","LAYER","_","USER'"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f1951b7dc/packages/client-core/src/common/reducers/actions.ts#L9"},"packages/client-core/src/common/reducers/actions.ts:9")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"removed_seat"},"REMOVED","_","SEAT"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,c.kt)("strong",{parentName:"p"},"REMOVED","_","SEAT"),": ",(0,c.kt)("inlineCode",{parentName:"p"},'"REMOVED_SEAT"'),"= 'REMOVED","_","SEAT'"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f1951b7dc/packages/client-core/src/common/reducers/actions.ts#L15"},"packages/client-core/src/common/reducers/actions.ts:15")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"set_app_loaded"},"SET","_","APP","_","LOADED"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,c.kt)("strong",{parentName:"p"},"SET","_","APP","_","LOADED"),": ",(0,c.kt)("inlineCode",{parentName:"p"},'"SET_APP_LOADED"'),"= 'SET","_","APP","_","LOADED'"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f1951b7dc/packages/client-core/src/common/reducers/actions.ts#L1"},"packages/client-core/src/common/reducers/actions.ts:1")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"set_app_loading_percent"},"SET","_","APP","_","LOADING","_","PERCENT"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,c.kt)("strong",{parentName:"p"},"SET","_","APP","_","LOADING","_","PERCENT"),": ",(0,c.kt)("inlineCode",{parentName:"p"},'"SET_APP_LOADING_PERCENT"'),"= 'SET","_","APP","_","LOADING","_","PERCENT'"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f1951b7dc/packages/client-core/src/common/reducers/actions.ts#L17"},"packages/client-core/src/common/reducers/actions.ts:17")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"set_app_onboarding_step"},"SET","_","APP","_","ONBOARDING","_","STEP"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,c.kt)("strong",{parentName:"p"},"SET","_","APP","_","ONBOARDING","_","STEP"),": ",(0,c.kt)("inlineCode",{parentName:"p"},'"SET_APP_ONBOARDING_STEP"'),"= 'SET","_","APP","_","ONBOARDING","_","STEP'"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f1951b7dc/packages/client-core/src/common/reducers/actions.ts#L25"},"packages/client-core/src/common/reducers/actions.ts:25")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"set_app_specific_onboarding_step"},"SET","_","APP","_","SPECIFIC","_","ONBOARDING","_","STEP"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,c.kt)("strong",{parentName:"p"},"SET","_","APP","_","SPECIFIC","_","ONBOARDING","_","STEP"),": ",(0,c.kt)("inlineCode",{parentName:"p"},'"SET_APP_SPECIFIC_ONBOARDING_STEP"'),"= 'SET","_","APP","_","SPECIFIC","_","ONBOARDING","_","STEP'"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f1951b7dc/packages/client-core/src/common/reducers/actions.ts#L26"},"packages/client-core/src/common/reducers/actions.ts:26")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"set_in_vr_mode"},"SET","_","IN","_","VR","_","MODE"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,c.kt)("strong",{parentName:"p"},"SET","_","IN","_","VR","_","MODE"),": ",(0,c.kt)("inlineCode",{parentName:"p"},'"SET_IN_VR_MODE"'),"= 'SET","_","IN","_","VR","_","MODE'"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f1951b7dc/packages/client-core/src/common/reducers/actions.ts#L21"},"packages/client-core/src/common/reducers/actions.ts:21")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"set_user_has_interacted"},"SET","_","USER","_","HAS","_","INTERACTED"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,c.kt)("strong",{parentName:"p"},"SET","_","USER","_","HAS","_","INTERACTED"),": ",(0,c.kt)("inlineCode",{parentName:"p"},'"SET_USER_HAS_INTERACTED"'),"= 'SET","_","USER","_","HAS","_","INTERACTED'"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f1951b7dc/packages/client-core/src/common/reducers/actions.ts#L23"},"packages/client-core/src/common/reducers/actions.ts:23")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"set_viewport_size"},"SET","_","VIEWPORT","_","SIZE"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,c.kt)("strong",{parentName:"p"},"SET","_","VIEWPORT","_","SIZE"),": ",(0,c.kt)("inlineCode",{parentName:"p"},'"SET_VIEWPORT_SIZE"'),"= 'SET","_","VIEWPORT","_","SIZE'"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f1951b7dc/packages/client-core/src/common/reducers/actions.ts#L19"},"packages/client-core/src/common/reducers/actions.ts:19")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"show_dialog"},"SHOW","_","DIALOG"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,c.kt)("strong",{parentName:"p"},"SHOW","_","DIALOG"),": ",(0,c.kt)("inlineCode",{parentName:"p"},'"SHOW_DIALOG"'),"= 'SHOW","_","DIALOG'"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f1951b7dc/packages/client-core/src/common/reducers/actions.ts#L28"},"packages/client-core/src/common/reducers/actions.ts:28")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"user_toast"},"USER","_","TOAST"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,c.kt)("strong",{parentName:"p"},"USER","_","TOAST"),": ",(0,c.kt)("inlineCode",{parentName:"p"},'"USER_TOAST"'),"= 'USER","_","TOAST'"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/f1951b7dc/packages/client-core/src/common/reducers/actions.ts#L10"},"packages/client-core/src/common/reducers/actions.ts:10")))}p.isMDXComponent=!0}}]);