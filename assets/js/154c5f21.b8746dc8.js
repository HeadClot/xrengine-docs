(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[92630],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return o},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,m=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=s(a),k=r,g=d["".concat(p,".").concat(k)]||d[k]||u[k]||m;return a?n.createElement(g,i(i({ref:t},o),{},{components:a})):n.createElement(g,i({ref:t},o))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=a.length,i=new Array(m);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<m;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},78912:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var n=a(22122),r=a(19756),m=(a(67294),a(3905)),i=["components"],l={id:"user_auth_management_auth_management_utils",title:"Module: user/auth-management/auth-management.utils",sidebar_label:"user/auth-management/auth-management.utils",custom_edit_url:null},p={unversionedId:"docs-server-core/modules/user_auth_management_auth_management_utils",id:"docs-server-core/modules/user_auth_management_auth_management_utils",isDocsHomePage:!1,title:"Module: user/auth-management/auth-management.utils",description:"Functions",source:"@site/docs/docs-server-core/modules/user_auth_management_auth_management_utils.md",sourceDirName:"docs-server-core/modules",slug:"/docs-server-core/modules/user_auth_management_auth_management_utils",permalink:"/xrengine-docs/docs/docs-server-core/modules/user_auth_management_auth_management_utils",editUrl:null,version:"current",sidebar_label:"user/auth-management/auth-management.utils",frontMatter:{id:"user_auth_management_auth_management_utils",title:"Module: user/auth-management/auth-management.utils",sidebar_label:"user/auth-management/auth-management.utils",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: user/auth-management/auth-management.service",permalink:"/xrengine-docs/docs/docs-server-core/modules/user_auth_management_auth_management_service"},next:{title:"Module: user/authentication",permalink:"/xrengine-docs/docs/docs-server-core/modules/user_authentication"}},s=[{value:"Functions",id:"functions",children:[{value:"extractLoggedInUserFromParams",id:"extractloggedinuserfromparams",children:[]},{value:"getInviteLink",id:"getinvitelink",children:[]},{value:"getLink",id:"getlink",children:[]},{value:"sendEmail",id:"sendemail",children:[]},{value:"sendSms",id:"sendsms",children:[]}]}],o={toc:s};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,m.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("h2",{id:"functions"},"Functions"),(0,m.kt)("h3",{id:"extractloggedinuserfromparams"},"extractLoggedInUserFromParams"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("inlineCode",{parentName:"p"},"Const"),(0,m.kt)("strong",{parentName:"p"},"extractLoggedInUserFromParams"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"params"),": Params): ",(0,m.kt)("em",{parentName:"p"},"any")),(0,m.kt)("p",null,"This method will extract the loggedIn User from params"),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("inlineCode",{parentName:"strong"},"author"))," Vyacheslav Solovjov"),(0,m.kt)("h4",{id:"parameters"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"params")),(0,m.kt)("td",{parentName:"tr",align:"left"},"Params")))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"any")),(0,m.kt)("p",null,"extracted user"),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/server-core/src/user/auth-management/auth-management.utils.ts#L77"},"packages/server-core/src/user/auth-management/auth-management.utils.ts:77")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"getinvitelink"},"getInviteLink"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"getInviteLink"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,m.kt)("em",{parentName:"p"},"string"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"id"),": ",(0,m.kt)("em",{parentName:"p"},"string"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"passcode"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"A method which get an invite link"),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("inlineCode",{parentName:"strong"},"author"))," Vyacheslav Solovjov"),(0,m.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"type")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string")),(0,m.kt)("td",{parentName:"tr",align:"left"})),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"id")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string")),(0,m.kt)("td",{parentName:"tr",align:"left"},"of accept invite")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"passcode")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string")),(0,m.kt)("td",{parentName:"tr",align:"left"})))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"invite link"),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/server-core/src/user/auth-management/auth-management.utils.ts#L28"},"packages/server-core/src/user/auth-management/auth-management.utils.ts:28")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"getlink"},"getLink"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"getLink"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,m.kt)("em",{parentName:"p"},"string"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"hash"),": ",(0,m.kt)("em",{parentName:"p"},"string"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"subscriptionId?"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"A method which get link"),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("inlineCode",{parentName:"strong"},"author"))," Vyacheslav Solovjov"),(0,m.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"type")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string")),(0,m.kt)("td",{parentName:"tr",align:"left"})),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"hash")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string")),(0,m.kt)("td",{parentName:"tr",align:"left"},"hashed link")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"subscriptionId?")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string")),(0,m.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"login url"),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/server-core/src/user/auth-management/auth-management.utils.ts#L13"},"packages/server-core/src/user/auth-management/auth-management.utils.ts:13")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"sendemail"},"sendEmail"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"sendEmail"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"app"),": Application, ",(0,m.kt)("inlineCode",{parentName:"p"},"email"),": ",(0,m.kt)("em",{parentName:"p"},"any"),"): ",(0,m.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,m.kt)("p",null,"A method which send an email"),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("inlineCode",{parentName:"strong"},"author"))," Vyacheslav Solovjov"),(0,m.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"app")),(0,m.kt)("td",{parentName:"tr",align:"left"},"Application"),(0,m.kt)("td",{parentName:"tr",align:"left"})),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"email")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"any")),(0,m.kt)("td",{parentName:"tr",align:"left"},"which is going to recieve message Text message links can't have HTML escaped ampersands.")))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/server-core/src/user/auth-management/auth-management.utils.ts#L40"},"packages/server-core/src/user/auth-management/auth-management.utils.ts:40")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"sendsms"},"sendSms"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("inlineCode",{parentName:"p"},"Const"),(0,m.kt)("strong",{parentName:"p"},"sendSms"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"app"),": Application, ",(0,m.kt)("inlineCode",{parentName:"p"},"sms"),": ",(0,m.kt)("em",{parentName:"p"},"any"),"): ",(0,m.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,m.kt)("p",null,"A function which send sms"),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("inlineCode",{parentName:"strong"},"author"))," Vyacheslav Solovjov"),(0,m.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"app")),(0,m.kt)("td",{parentName:"tr",align:"left"},"Application"),(0,m.kt)("td",{parentName:"tr",align:"left"})),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"sms")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"any")),(0,m.kt)("td",{parentName:"tr",align:"left"},"text which is going to be sent")))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/server-core/src/user/auth-management/auth-management.utils.ts#L62"},"packages/server-core/src/user/auth-management/auth-management.utils.ts:62")))}u.isMDXComponent=!0}}]);