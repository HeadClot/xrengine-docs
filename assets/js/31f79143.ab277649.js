(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[56417],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return l},kt:function(){return g}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),d=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=d(e.components);return a.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=d(t),g=n,u=m["".concat(p,".").concat(g)]||m[g]||c[g]||o;return t?a.createElement(u,s(s({ref:r},l),{},{components:t})):a.createElement(u,s({ref:r},l))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var d=2;d<o;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},45202:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=t(22122),n=t(19756),o=(t(67294),t(3905)),s=["components"],i={id:"media_storageprovider_s3_storage.s3provider",title:"Class: S3Provider",sidebar_label:"S3Provider",custom_edit_url:null},p={unversionedId:"docs-server-core/classes/media_storageprovider_s3_storage.s3provider",id:"docs-server-core/classes/media_storageprovider_s3_storage.s3provider",isDocsHomePage:!1,title:"Class: S3Provider",description:"media/storageprovider/s3.storage.S3Provider",source:"@site/docs/docs-server-core/classes/media_storageprovider_s3_storage.s3provider.md",sourceDirName:"docs-server-core/classes",slug:"/docs-server-core/classes/media_storageprovider_s3_storage.s3provider",permalink:"/xrengine-docs/docs/docs-server-core/classes/media_storageprovider_s3_storage.s3provider",editUrl:null,version:"current",sidebar_label:"S3Provider",frontMatter:{id:"media_storageprovider_s3_storage.s3provider",title:"Class: S3Provider",sidebar_label:"S3Provider",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Class: LocalStorage",permalink:"/xrengine-docs/docs/docs-server-core/classes/media_storageprovider_local_storage.localstorage"},next:{title:"Class: StorageProvider",permalink:"/xrengine-docs/docs/docs-server-core/classes/media_storageprovider_storageprovider.storageprovider"}},d=[{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"blob",id:"blob",children:[]},{value:"bucket",id:"bucket",children:[]},{value:"provider",id:"provider",children:[]}]},{value:"Methods",id:"methods",children:[{value:"deleteResources",id:"deleteresources",children:[]},{value:"getProvider",id:"getprovider",children:[]},{value:"getSignedUrl",id:"getsignedurl",children:[]},{value:"getStorage",id:"getstorage",children:[]}]}],l={toc:d};function c(e){var r=e.components,t=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-server-core/modules/media_storageprovider_s3_storage"},"media/storageprovider/s3.storage"),".S3Provider"),(0,o.kt)("h2",{id:"implements"},"Implements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/xrengine-docs/docs/docs-server-core/interfaces/media_storageprovider_storageprovider_interface.storageproviderinterface"},(0,o.kt)("em",{parentName:"a"},"StorageProviderInterface")))),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"+"," ",(0,o.kt)("strong",{parentName:"p"},"new S3Provider"),"(): ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-server-core/classes/media_storageprovider_s3_storage.s3provider"},(0,o.kt)("em",{parentName:"a"},"S3Provider"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-server-core/classes/media_storageprovider_s3_storage.s3provider"},(0,o.kt)("em",{parentName:"a"},"S3Provider"))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"blob"},"blob"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"blob"),": ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/server-core/src/media/storageprovider/s3.storage.ts#L14"},"packages/server-core/src/media/storageprovider/s3.storage.ts:14")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"bucket"},"bucket"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"bucket"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/server-core/src/media/storageprovider/s3.storage.ts#L7"},"packages/server-core/src/media/storageprovider/s3.storage.ts:7")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"provider"},"provider"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"provider"),": ",(0,o.kt)("em",{parentName:"p"},"S3")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/server-core/src/media/storageprovider/s3.storage.ts#L8"},"packages/server-core/src/media/storageprovider/s3.storage.ts:8")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"deleteresources"},"deleteResources"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"deleteResources"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"keys"),": ",(0,o.kt)("em",{parentName:"p"},"string"),"[]): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"keys")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"string"),"[]")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/server-core/src/media/storageprovider/s3.storage.ts#L43"},"packages/server-core/src/media/storageprovider/s3.storage.ts:43")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getprovider"},"getProvider"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getProvider"),"(): ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,"Implementation of: ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-server-core/interfaces/media_storageprovider_storageprovider_interface.storageproviderinterface"},"StorageProviderInterface")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/server-core/src/media/storageprovider/s3.storage.ts#L21"},"packages/server-core/src/media/storageprovider/s3.storage.ts:21")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getsignedurl"},"getSignedUrl"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getSignedUrl"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"key"),": ",(0,o.kt)("em",{parentName:"p"},"string"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"expiresAfter"),": ",(0,o.kt)("em",{parentName:"p"},"number"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"conditions"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,o.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"key")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"expiresAfter")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"number"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"conditions")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/server-core/src/media/storageprovider/s3.storage.ts#L27"},"packages/server-core/src/media/storageprovider/s3.storage.ts:27")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getstorage"},"getStorage"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getStorage"),"(): ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,"Implementation of: ",(0,o.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-server-core/interfaces/media_storageprovider_storageprovider_interface.storageproviderinterface"},"StorageProviderInterface")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/358689c6a/packages/server-core/src/media/storageprovider/s3.storage.ts#L25"},"packages/server-core/src/media/storageprovider/s3.storage.ts:25")))}c.isMDXComponent=!0}}]);