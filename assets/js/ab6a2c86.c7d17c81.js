(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[37670],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return o},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),d=m(a),c=r,g=d["".concat(s,".").concat(c)]||d[c]||k[c]||i;return a?n.createElement(g,l(l({ref:t},o),{},{components:a})):n.createElement(g,l({ref:t},o))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7613:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return k}});var n=a(22122),r=a(19756),i=(a(67294),a(3905)),l=["components"],p={id:"user_magic_link_magic_link_class.magiclink",title:"Class: Magiclink",sidebar_label:"Magiclink",custom_edit_url:null},s={unversionedId:"docs-server-core/classes/user_magic_link_magic_link_class.magiclink",id:"docs-server-core/classes/user_magic_link_magic_link_class.magiclink",isDocsHomePage:!1,title:"Class: Magiclink",description:"user/magic-link/magic-link.class.Magiclink",source:"@site/docs/docs-server-core/classes/user_magic_link_magic_link_class.magiclink.md",sourceDirName:"docs-server-core/classes",slug:"/docs-server-core/classes/user_magic_link_magic_link_class.magiclink",permalink:"/xrengine-docs/docs/docs-server-core/classes/user_magic_link_magic_link_class.magiclink",editUrl:null,version:"current",sidebar_label:"Magiclink",frontMatter:{id:"user_magic_link_magic_link_class.magiclink",title:"Class: Magiclink",sidebar_label:"Magiclink",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Class: Login",permalink:"/xrengine-docs/docs/docs-server-core/classes/user_login_login_class.login"},next:{title:"Class: Sms",permalink:"/xrengine-docs/docs/docs-server-core/classes/user_sms_sms_class.sms"}},m=[{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"app",id:"app",children:[]},{value:"docs",id:"docs",children:[]},{value:"options",id:"options",children:[]}]},{value:"Methods",id:"methods",children:[{value:"create",id:"create",children:[]},{value:"find",id:"find",children:[]},{value:"get",id:"get",children:[]},{value:"patch",id:"patch",children:[]},{value:"remove",id:"remove",children:[]},{value:"sendEmail",id:"sendemail",children:[]},{value:"sendSms",id:"sendsms",children:[]},{value:"setup",id:"setup",children:[]},{value:"update",id:"update",children:[]}]}],o={toc:m};function k(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-server-core/modules/user_magic_link_magic_link_class"},"user/magic-link/magic-link.class"),".Magiclink"),(0,i.kt)("h2",{id:"implements"},"Implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"ServiceMethods"),"<Data",">")),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"+"," ",(0,i.kt)("strong",{parentName:"p"},"new Magiclink"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),": ServiceOptions, ",(0,i.kt)("inlineCode",{parentName:"p"},"app"),": Application): ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-server-core/classes/user_magic_link_magic_link_class.magiclink"},(0,i.kt)("em",{parentName:"a"},"Magiclink"))),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},"ServiceOptions"),(0,i.kt)("td",{parentName:"tr",align:"left"},"{}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"app")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Application"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-server-core/classes/user_magic_link_magic_link_class.magiclink"},(0,i.kt)("em",{parentName:"a"},"Magiclink"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/server-core/src/user/magic-link/magic-link.class.ts#L29"},"packages/server-core/src/user/magic-link/magic-link.class.ts:29")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"app"},"app"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"app"),": Application"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/server-core/src/user/magic-link/magic-link.class.ts#L27"},"packages/server-core/src/user/magic-link/magic-link.class.ts:27")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"docs"},"docs"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"docs"),": ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/server-core/src/user/magic-link/magic-link.class.ts#L29"},"packages/server-core/src/user/magic-link/magic-link.class.ts:29")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"options"},"options"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"options"),": ServiceOptions"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/server-core/src/user/magic-link/magic-link.class.ts#L28"},"packages/server-core/src/user/magic-link/magic-link.class.ts:28")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"create"},"create"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"create"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,i.kt)("em",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"params?"),": Params): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<Data",">"),(0,i.kt)("p",null,"A function which is used to create magic link"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"author"))," Vyacheslav Solovjov"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any")),(0,i.kt)("td",{parentName:"tr",align:"left"},"used create magic link")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"params?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Params"),(0,i.kt)("td",{parentName:"tr",align:"left"},"contain user info")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<Data",">"),(0,i.kt)("p",null,"creted data"),(0,i.kt)("p",null,"Implementation of: ServiceMethods.create"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/server-core/src/user/magic-link/magic-link.class.ts#L215"},"packages/server-core/src/user/magic-link/magic-link.class.ts:215")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"find"},"find"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"find"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"params?"),": Params): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<Data[] ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-server-core/interfaces/types_pageobject.default"},(0,i.kt)("em",{parentName:"a"},"default")),"<Data",">",">"),(0,i.kt)("p",null,"A function which find magic link  and display it"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"author"))," Vyacheslav Solovjov"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"params?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Params")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<Data[] ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-server-core/interfaces/types_pageobject.default"},(0,i.kt)("em",{parentName:"a"},"default")),"<Data",">",">"),(0,i.kt)("p",null,"{@Array} all magic link"),(0,i.kt)("p",null,"Implementation of: ServiceMethods.find"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/server-core/src/user/magic-link/magic-link.class.ts#L45"},"packages/server-core/src/user/magic-link/magic-link.class.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"get"},"get"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"get"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"id"),": Id, ",(0,i.kt)("inlineCode",{parentName:"p"},"params?"),": Params): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<Data",">"),(0,i.kt)("p",null,"A function which find specific magic link by id"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"author"))," Vyacheslav Solovjov"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Id"),(0,i.kt)("td",{parentName:"tr",align:"left"},"of specific magic link")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"params?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Params"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<Data",">"),(0,i.kt)("p",null,"{@Object} contains id of magic link and message"),(0,i.kt)("p",null,"Implementation of: ServiceMethods.get"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/server-core/src/user/magic-link/magic-link.class.ts#L57"},"packages/server-core/src/user/magic-link/magic-link.class.ts:57")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"patch"},"patch"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"patch"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"id"),": NullableId, ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),": Data, ",(0,i.kt)("inlineCode",{parentName:"p"},"params?"),": Params): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<Data",">"),(0,i.kt)("p",null,"A function which is used to update magic link"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:"left"},"NullableId"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Data"),(0,i.kt)("td",{parentName:"tr",align:"left"},"used to update")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"params?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Params"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<Data",">"),(0,i.kt)("p",null,"data"),(0,i.kt)("p",null,"Implementation of: ServiceMethods.patch"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/server-core/src/user/magic-link/magic-link.class.ts#L84"},"packages/server-core/src/user/magic-link/magic-link.class.ts:84")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"remove"},"remove"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"remove"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"id"),": NullableId, ",(0,i.kt)("inlineCode",{parentName:"p"},"params?"),": Params): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<Data",">"),(0,i.kt)("p",null,"A function which is used to remove magic link"),(0,i.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:"left"},"NullableId"),(0,i.kt)("td",{parentName:"tr",align:"left"},"of magic link used to remove data")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"params?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Params"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<Data",">"),(0,i.kt)("p",null,"id"),(0,i.kt)("p",null,"Implementation of: ServiceMethods.remove"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/server-core/src/user/magic-link/magic-link.class.ts#L94"},"packages/server-core/src/user/magic-link/magic-link.class.ts:94")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sendemail"},"sendEmail"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"sendEmail"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"toEmail"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"token"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"connection"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"login"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},"identityProvider"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-server-core/classes/user_identity_provider_identity_provider_class.identityprovider"},(0,i.kt)("em",{parentName:"a"},"IdentityProvider")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"subscriptionId?"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"A function used to sent an email"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"author"))," Vyacheslav Solovjov"),(0,i.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"toEmail")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"email of reciever")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"token")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"generated token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"connection"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"login"')),(0,i.kt)("td",{parentName:"tr",align:"left"},"of login")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"identityProvider")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-server-core/classes/user_identity_provider_identity_provider_class.identityprovider"},(0,i.kt)("em",{parentName:"a"},"IdentityProvider"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"subscriptionId?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"{@function} sent email"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/server-core/src/user/magic-link/magic-link.class.ts#L108"},"packages/server-core/src/user/magic-link/magic-link.class.ts:108")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sendsms"},"sendSms"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"sendSms"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"mobile"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"token"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"connection"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"login"'),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"A function which used to send sms"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"author"))," Vyacheslav Solovjov"),(0,i.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mobile")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"of receiver user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"token")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"generated token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"connection"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"login"')),(0,i.kt)("td",{parentName:"tr",align:"left"},"of login")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"{@function}  send sms"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/server-core/src/user/magic-link/magic-link.class.ts#L176"},"packages/server-core/src/user/magic-link/magic-link.class.ts:176")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setup"},"setup"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setup"),"(): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Implementation of: ServiceMethods.setup"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/server-core/src/user/magic-link/magic-link.class.ts#L36"},"packages/server-core/src/user/magic-link/magic-link.class.ts:36")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"update"},"update"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"update"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"id"),": NullableId, ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),": Data, ",(0,i.kt)("inlineCode",{parentName:"p"},"params?"),": Params): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<Data",">"),(0,i.kt)("p",null,"A function which is used to update magic link"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"author"))," Vyacheslav Solovjov"),(0,i.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:"left"},"NullableId"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Data"),(0,i.kt)("td",{parentName:"tr",align:"left"},"which will be used for updating magic link")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"params?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Params"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<Data",">"),(0,i.kt)("p",null,"updated data"),(0,i.kt)("p",null,"Implementation of: ServiceMethods.update"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/server-core/src/user/magic-link/magic-link.class.ts#L72"},"packages/server-core/src/user/magic-link/magic-link.class.ts:72")))}k.isMDXComponent=!0}}]);