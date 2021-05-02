(self.webpackChunk_xr3ngine_docs=self.webpackChunk_xr3ngine_docs||[]).push([[95432],{30876:function(e,r,t){"use strict";t.d(r,{Zo:function(){return l},kt:function(){return m}});var a=t(2784);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,s=function(e,r){if(null==e)return{};var t,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var d=a.createContext({}),i=function(e){var r=a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=i(e.components);return a.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,s=e.mdxType,n=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=i(t),m=s,k=p["".concat(d,".").concat(m)]||p[m]||u[m]||n;return t?a.createElement(k,c(c({ref:r},l),{},{components:t})):a.createElement(k,c({ref:r},l))}));function m(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var n=t.length,c=new Array(n);c[0]=p;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o.mdxType="string"==typeof e?e:s,c[1]=o;for(var i=2;i<n;i++)c[i]=t[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},12881:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},metadata:function(){return o},toc:function(){return d},default:function(){return l}});var a=t(7560),s=t(98283),n=(t(2784),t(30876)),c={id:"src_user_reducers_user_actions",title:"Module: src/user/reducers/user/actions",sidebar_label:"src/user/reducers/user/actions",custom_edit_url:null},o={unversionedId:"docs-client-core/modules/src_user_reducers_user_actions",id:"docs-client-core/modules/src_user_reducers_user_actions",isDocsHomePage:!1,title:"Module: src/user/reducers/user/actions",description:"Table of contents",source:"@site/docs/docs-client-core/modules/src_user_reducers_user_actions.md",sourceDirName:"docs-client-core/modules",slug:"/docs-client-core/modules/src_user_reducers_user_actions",permalink:"/docs/docs/docs-client-core/modules/src_user_reducers_user_actions",editUrl:null,version:"current",sidebar_label:"src/user/reducers/user/actions",frontMatter:{id:"src_user_reducers_user_actions",title:"Module: src/user/reducers/user/actions",sidebar_label:"src/user/reducers/user/actions",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: src/user/reducers/auth/service",permalink:"/docs/docs/docs-client-core/modules/src_user_reducers_auth_service"},next:{title:"Module: src/user/reducers/user/reducers",permalink:"/docs/docs/docs-client-core/modules/src_user_reducers_user_reducers"}},d=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Interfaces",id:"interfaces",children:[]}]},{value:"Type aliases",id:"type-aliases",children:[{value:"UserAction",id:"useraction",children:[]}]},{value:"Functions",id:"functions",children:[{value:"addedChannelLayerUser",id:"addedchannellayeruser",children:[]},{value:"addedLayerUser",id:"addedlayeruser",children:[]},{value:"changedRelation",id:"changedrelation",children:[]},{value:"clearChannelLayerUsers",id:"clearchannellayerusers",children:[]},{value:"clearLayerUsers",id:"clearlayerusers",children:[]},{value:"displayUserToast",id:"displayusertoast",children:[]},{value:"loadedChannelLayerUsers",id:"loadedchannellayerusers",children:[]},{value:"loadedLayerUsers",id:"loadedlayerusers",children:[]},{value:"loadedUserRelationship",id:"loadeduserrelationship",children:[]},{value:"loadedUsers",id:"loadedusers",children:[]},{value:"removedChannelLayerUser",id:"removedchannellayeruser",children:[]},{value:"removedLayerUser",id:"removedlayeruser",children:[]},{value:"userCreated",id:"usercreated",children:[]},{value:"userPatched",id:"userpatched",children:[]},{value:"userRemoved",id:"userremoved",children:[]}]}],i={toc:d};function l(e){var r=e.components,t=(0,s.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,a.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"interfaces"},"Interfaces"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.addedlayeruseraction"},"AddedLayerUserAction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.changedrelationaction"},"ChangedRelationAction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.clearlayersusersaction"},"ClearLayersUsersAction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.loadedlayerusersaction"},"LoadedLayerUsersAction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.loadeduserrelationshipaction"},"LoadedUserRelationshipAction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.loadedusersaction"},"LoadedUsersAction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.removedlayeruseraction"},"RemovedLayerUserAction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.usercreatedaction"},"UserCreatedAction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.userremovedinstance"},"UserRemovedInstance")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.usertoastaction"},"UserToastAction"))),(0,n.kt)("h2",{id:"type-aliases"},"Type aliases"),(0,n.kt)("h3",{id:"useraction"},"UserAction"),(0,n.kt)("p",null,"\u01ac ",(0,n.kt)("strong",{parentName:"p"},"UserAction"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.loadeduserrelationshipaction"},(0,n.kt)("em",{parentName:"a"},"LoadedUserRelationshipAction"))," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.loadedusersaction"},(0,n.kt)("em",{parentName:"a"},"LoadedUsersAction"))," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.loadedlayerusersaction"},(0,n.kt)("em",{parentName:"a"},"LoadedLayerUsersAction"))," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.clearlayersusersaction"},(0,n.kt)("em",{parentName:"a"},"ClearLayersUsersAction"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/user/reducers/user/actions.ts#L54"},"packages/client-core/src/user/reducers/user/actions.ts:54")),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"addedchannellayeruser"},"addedChannelLayerUser"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"addedChannelLayerUser"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"user"),": User): ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.addedlayeruseraction"},(0,n.kt)("em",{parentName:"a"},"AddedLayerUserAction"))),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"user")),(0,n.kt)("td",{parentName:"tr",align:"left"},"User")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.addedlayeruseraction"},(0,n.kt)("em",{parentName:"a"},"AddedLayerUserAction"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/user/reducers/user/actions.ts#L141"},"packages/client-core/src/user/reducers/user/actions.ts:141")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"addedlayeruser"},"addedLayerUser"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"addedLayerUser"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"user"),": User): ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.addedlayeruseraction"},(0,n.kt)("em",{parentName:"a"},"AddedLayerUserAction"))),(0,n.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"user")),(0,n.kt)("td",{parentName:"tr",align:"left"},"User")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.addedlayeruseraction"},(0,n.kt)("em",{parentName:"a"},"AddedLayerUserAction"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/user/reducers/user/actions.ts#L114"},"packages/client-core/src/user/reducers/user/actions.ts:114")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"changedrelation"},"changedRelation"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"changedRelation"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.changedrelationaction"},(0,n.kt)("em",{parentName:"a"},"ChangedRelationAction"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.changedrelationaction"},(0,n.kt)("em",{parentName:"a"},"ChangedRelationAction"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/user/reducers/user/actions.ts#L95"},"packages/client-core/src/user/reducers/user/actions.ts:95")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"clearchannellayerusers"},"clearChannelLayerUsers"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"clearChannelLayerUsers"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.clearlayersusersaction"},(0,n.kt)("em",{parentName:"a"},"ClearLayersUsersAction"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.clearlayersusersaction"},(0,n.kt)("em",{parentName:"a"},"ClearLayersUsersAction"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/user/reducers/user/actions.ts#L135"},"packages/client-core/src/user/reducers/user/actions.ts:135")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"clearlayerusers"},"clearLayerUsers"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"clearLayerUsers"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.clearlayersusersaction"},(0,n.kt)("em",{parentName:"a"},"ClearLayersUsersAction"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.clearlayersusersaction"},(0,n.kt)("em",{parentName:"a"},"ClearLayersUsersAction"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/user/reducers/user/actions.ts#L108"},"packages/client-core/src/user/reducers/user/actions.ts:108")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"displayusertoast"},"displayUserToast"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"displayUserToast"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"user"),": User, ",(0,n.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,n.kt)("em",{parentName:"p"},"any"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.usertoastaction"},(0,n.kt)("em",{parentName:"a"},"UserToastAction"))),(0,n.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"user")),(0,n.kt)("td",{parentName:"tr",align:"left"},"User")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"args")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"any"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.usertoastaction"},(0,n.kt)("em",{parentName:"a"},"UserToastAction"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/user/reducers/user/actions.ts#L155"},"packages/client-core/src/user/reducers/user/actions.ts:155")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"loadedchannellayerusers"},"loadedChannelLayerUsers"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"loadedChannelLayerUsers"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"users"),": User[]): ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.loadedlayerusersaction"},(0,n.kt)("em",{parentName:"a"},"LoadedLayerUsersAction"))),(0,n.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"users")),(0,n.kt)("td",{parentName:"tr",align:"left"},"User[]")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.loadedlayerusersaction"},(0,n.kt)("em",{parentName:"a"},"LoadedLayerUsersAction"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/user/reducers/user/actions.ts#L128"},"packages/client-core/src/user/reducers/user/actions.ts:128")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"loadedlayerusers"},"loadedLayerUsers"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"loadedLayerUsers"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"users"),": User[]): ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.loadedlayerusersaction"},(0,n.kt)("em",{parentName:"a"},"LoadedLayerUsersAction"))),(0,n.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"users")),(0,n.kt)("td",{parentName:"tr",align:"left"},"User[]")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.loadedlayerusersaction"},(0,n.kt)("em",{parentName:"a"},"LoadedLayerUsersAction"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/user/reducers/user/actions.ts#L101"},"packages/client-core/src/user/reducers/user/actions.ts:101")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"loadeduserrelationship"},"loadedUserRelationship"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"loadedUserRelationship"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"relationship"),": Relationship): ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.loadeduserrelationshipaction"},(0,n.kt)("em",{parentName:"a"},"LoadedUserRelationshipAction"))),(0,n.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"relationship")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Relationship")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.loadeduserrelationshipaction"},(0,n.kt)("em",{parentName:"a"},"LoadedUserRelationshipAction"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/user/reducers/user/actions.ts#L81"},"packages/client-core/src/user/reducers/user/actions.ts:81")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"loadedusers"},"loadedUsers"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"loadedUsers"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"users"),": User[]): ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.loadedusersaction"},(0,n.kt)("em",{parentName:"a"},"LoadedUsersAction"))),(0,n.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"users")),(0,n.kt)("td",{parentName:"tr",align:"left"},"User[]")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.loadedusersaction"},(0,n.kt)("em",{parentName:"a"},"LoadedUsersAction"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/user/reducers/user/actions.ts#L88"},"packages/client-core/src/user/reducers/user/actions.ts:88")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"removedchannellayeruser"},"removedChannelLayerUser"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"removedChannelLayerUser"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"user"),": User): ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.removedlayeruseraction"},(0,n.kt)("em",{parentName:"a"},"RemovedLayerUserAction"))),(0,n.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"user")),(0,n.kt)("td",{parentName:"tr",align:"left"},"User")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.removedlayeruseraction"},(0,n.kt)("em",{parentName:"a"},"RemovedLayerUserAction"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/user/reducers/user/actions.ts#L148"},"packages/client-core/src/user/reducers/user/actions.ts:148")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"removedlayeruser"},"removedLayerUser"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"removedLayerUser"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"user"),": User): ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.removedlayeruseraction"},(0,n.kt)("em",{parentName:"a"},"RemovedLayerUserAction"))),(0,n.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"user")),(0,n.kt)("td",{parentName:"tr",align:"left"},"User")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.removedlayeruseraction"},(0,n.kt)("em",{parentName:"a"},"RemovedLayerUserAction"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/user/reducers/user/actions.ts#L121"},"packages/client-core/src/user/reducers/user/actions.ts:121")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"usercreated"},"userCreated"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"userCreated"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"user"),": User): ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.usercreatedaction"},(0,n.kt)("em",{parentName:"a"},"UserCreatedAction"))),(0,n.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"user")),(0,n.kt)("td",{parentName:"tr",align:"left"},"User")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.usercreatedaction"},(0,n.kt)("em",{parentName:"a"},"UserCreatedAction"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/user/reducers/user/actions.ts#L60"},"packages/client-core/src/user/reducers/user/actions.ts:60")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"userpatched"},"userPatched"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"userPatched"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"user"),": User): ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.usercreatedaction"},(0,n.kt)("em",{parentName:"a"},"UserCreatedAction"))),(0,n.kt)("h4",{id:"parameters-10"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"user")),(0,n.kt)("td",{parentName:"tr",align:"left"},"User")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.usercreatedaction"},(0,n.kt)("em",{parentName:"a"},"UserCreatedAction"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/user/reducers/user/actions.ts#L74"},"packages/client-core/src/user/reducers/user/actions.ts:74")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"userremoved"},"userRemoved"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"userRemoved"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"user"),": ",(0,n.kt)("em",{parentName:"p"},"any"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.userremovedinstance"},(0,n.kt)("em",{parentName:"a"},"UserRemovedInstance"))),(0,n.kt)("h4",{id:"parameters-11"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"user")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"any"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/interfaces/src_user_reducers_user_actions.userremovedinstance"},(0,n.kt)("em",{parentName:"a"},"UserRemovedInstance"))),(0,n.kt)("p",null,"Defined in: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/user/reducers/user/actions.ts#L67"},"packages/client-core/src/user/reducers/user/actions.ts:67")))}l.isMDXComponent=!0}}]);