(self.webpackChunk_xr3ngine_docs=self.webpackChunk_xr3ngine_docs||[]).push([[43488],{30876:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return N}});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),s=i(a),N=r,c=s["".concat(o,".").concat(N)]||s[N]||k[N]||l;return a?n.createElement(c,p(p({ref:t},d),{},{components:a})):n.createElement(c,p({ref:t},d))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=s;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:r,p[1]=m;for(var i=2;i<l;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},18936:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return m},toc:function(){return o},default:function(){return d}});var n=a(7560),r=a(98283),l=(a(2784),a(30876)),p={id:"networkfunctions",title:"Module: NetworkFunctions",sidebar_label:"NetworkFunctions",custom_edit_url:null},m={unversionedId:"docs-gameserver/modules/networkfunctions",id:"docs-gameserver/modules/networkfunctions",isDocsHomePage:!1,title:"Module: NetworkFunctions",description:"Functions",source:"@site/docs/docs-gameserver/modules/networkfunctions.md",sourceDirName:"docs-gameserver/modules",slug:"/docs-gameserver/modules/networkfunctions",permalink:"/docs/docs/docs-gameserver/modules/networkfunctions",editUrl:null,version:"current",sidebar_label:"NetworkFunctions",frontMatter:{id:"networkfunctions",title:"Module: NetworkFunctions",sidebar_label:"NetworkFunctions",custom_edit_url:null},sidebar:"sidebar",previous:{title:"@xr3ngine/gameserver",permalink:"/docs/docs/docs-gameserver"},next:{title:"Module: SocketWebRTCServerTransport",permalink:"/docs/docs/docs-gameserver/modules/socketwebrtcservertransport"}},o=[{value:"Functions",id:"functions",children:[{value:"cleanupOldGameservers",id:"cleanupoldgameservers",children:[]},{value:"getFreeSubdomain",id:"getfreesubdomain",children:[]},{value:"getUserIdFromSocketId",id:"getuseridfromsocketid",children:[]},{value:"handleConnectToWorld",id:"handleconnecttoworld",children:[]},{value:"handleDisconnect",id:"handledisconnect",children:[]},{value:"handleHeartbeat",id:"handleheartbeat",children:[]},{value:"handleIncomingMessage",id:"handleincomingmessage",children:[]},{value:"handleJoinWorld",id:"handlejoinworld",children:[]},{value:"handleLeaveWorld",id:"handleleaveworld",children:[]},{value:"validateNetworkObjects",id:"validatenetworkobjects",children:[]}]}],i={toc:o};function d(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"cleanupoldgameservers"},"cleanupOldGameservers"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"cleanupOldGameservers"),"(): ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/gameserver/src/NetworkFunctions.ts#L63"},"NetworkFunctions.ts:63")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getfreesubdomain"},"getFreeSubdomain"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"getFreeSubdomain"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"gsIdentifier"),": ",(0,l.kt)("em",{parentName:"p"},"string"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"subdomainNumber"),": ",(0,l.kt)("em",{parentName:"p"},"number"),"): ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<string",">"),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"gsIdentifier")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"subdomainNumber")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"number"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<string",">"),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/gameserver/src/NetworkFunctions.ts#L17"},"NetworkFunctions.ts:17")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getuseridfromsocketid"},"getUserIdFromSocketId"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"getUserIdFromSocketId"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"socketId"),": ",(0,l.kt)("em",{parentName:"p"},"any"),"): ",(0,l.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"null")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"socketId")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"null")),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/gameserver/src/NetworkFunctions.ts#L95"},"NetworkFunctions.ts:95")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"handleconnecttoworld"},"handleConnectToWorld"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"handleConnectToWorld"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"socket"),": ",(0,l.kt)("em",{parentName:"p"},"any"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,l.kt)("em",{parentName:"p"},"any"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"callback"),": ",(0,l.kt)("em",{parentName:"p"},"any"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"userId"),": ",(0,l.kt)("em",{parentName:"p"},"any"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"user"),": ",(0,l.kt)("em",{parentName:"p"},"any"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"avatarDetail"),": ",(0,l.kt)("em",{parentName:"p"},"any"),"): ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"socket")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"data")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"callback")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"userId")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"user")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"avatarDetail")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/gameserver/src/NetworkFunctions.ts#L180"},"NetworkFunctions.ts:180")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"handledisconnect"},"handleDisconnect"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"handleDisconnect"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"socket"),": ",(0,l.kt)("em",{parentName:"p"},"any"),"): ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"socket")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/gameserver/src/NetworkFunctions.ts#L360"},"NetworkFunctions.ts:360")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"handleheartbeat"},"handleHeartbeat"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"handleHeartbeat"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"socket"),": ",(0,l.kt)("em",{parentName:"p"},"any"),"): ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,l.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"socket")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/gameserver/src/NetworkFunctions.ts#L353"},"NetworkFunctions.ts:353")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"handleincomingmessage"},"handleIncomingMessage"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"handleIncomingMessage"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"socket"),": ",(0,l.kt)("em",{parentName:"p"},"any"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"message"),": ",(0,l.kt)("em",{parentName:"p"},"any"),"): ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,l.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"socket")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"message")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/gameserver/src/NetworkFunctions.ts#L349"},"NetworkFunctions.ts:349")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"handlejoinworld"},"handleJoinWorld"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"handleJoinWorld"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"socket"),": ",(0,l.kt)("em",{parentName:"p"},"any"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,l.kt)("em",{parentName:"p"},"any"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"callback"),": ",(0,l.kt)("em",{parentName:"p"},"any"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"userId"),": ",(0,l.kt)("em",{parentName:"p"},"any"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"user"),": ",(0,l.kt)("em",{parentName:"p"},"any"),"): ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,l.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"socket")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"data")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"callback")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"userId")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"user")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/gameserver/src/NetworkFunctions.ts#L272"},"NetworkFunctions.ts:272")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"handleleaveworld"},"handleLeaveWorld"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"handleLeaveWorld"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"socket"),": ",(0,l.kt)("em",{parentName:"p"},"any"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,l.kt)("em",{parentName:"p"},"any"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"callback"),": ",(0,l.kt)("em",{parentName:"p"},"any"),"): ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,l.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"socket")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"data")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"callback")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/gameserver/src/NetworkFunctions.ts#L404"},"NetworkFunctions.ts:404")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"validatenetworkobjects"},"validateNetworkObjects"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"validateNetworkObjects"),"(): ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("p",null,"Defined in: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/gameserver/src/NetworkFunctions.ts#L108"},"NetworkFunctions.ts:108")))}d.isMDXComponent=!0}}]);