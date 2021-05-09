(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[16229],{30876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return f},kt:function(){return u}});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),p=s(n),u=o,d=p["".concat(m,".").concat(u)]||p[u]||l[u]||a;return n?r.createElement(d,c(c({ref:t},f),{},{components:n})):r.createElement(d,c({ref:t},f))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},70612:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return m},default:function(){return f}});var r=n(7560),o=n(98283),a=(n(2784),n(30876)),c={id:"src_interfaces_comment.commentinterface",title:"Interface: CommentInterface",sidebar_label:"CommentInterface",custom_edit_url:null},i={unversionedId:"docs-common/interfaces/src_interfaces_comment.commentinterface",id:"docs-common/interfaces/src_interfaces_comment.commentinterface",isDocsHomePage:!1,title:"Interface: CommentInterface",description:"src/interfaces/Comment.CommentInterface",source:"@site/docs/docs-common/interfaces/src_interfaces_comment.commentinterface.md",sourceDirName:"docs-common/interfaces",slug:"/docs-common/interfaces/src_interfaces_comment.commentinterface",permalink:"/xrengine-docs/docs/docs-common/interfaces/src_interfaces_comment.commentinterface",editUrl:null,version:"current",sidebar_label:"CommentInterface",frontMatter:{id:"src_interfaces_comment.commentinterface",title:"Interface: CommentInterface",sidebar_label:"CommentInterface",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: AuthUser",permalink:"/xrengine-docs/docs/docs-common/interfaces/src_interfaces_authuser.authuser"},next:{title:"Interface: Creator",permalink:"/xrengine-docs/docs/docs-common/interfaces/src_interfaces_creator.creator"}},m=[{value:"Properties",id:"properties",children:[{value:"creator",id:"creator",children:[]},{value:"feedId",id:"feedid",children:[]},{value:"fires",id:"fires",children:[]},{value:"id",id:"id",children:[]},{value:"isFired",id:"isfired",children:[]},{value:"text",id:"text",children:[]}]}],s={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-common/modules/src_interfaces_comment"},"src/interfaces/Comment"),".CommentInterface"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"creator"},"creator"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"creator"),": ",(0,a.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-common/interfaces/src_interfaces_creator.creatorshort"},(0,a.kt)("em",{parentName:"a"},"CreatorShort"))),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7da5a4984/packages/common/src/interfaces/Comment.ts#L7"},"interfaces/Comment.ts:7")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"feedid"},"feedId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"feedId"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7da5a4984/packages/common/src/interfaces/Comment.ts#L6"},"interfaces/Comment.ts:6")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fires"},"fires"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"fires"),": ",(0,a.kt)("em",{parentName:"p"},"number")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7da5a4984/packages/common/src/interfaces/Comment.ts#L9"},"interfaces/Comment.ts:9")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"id"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7da5a4984/packages/common/src/interfaces/Comment.ts#L5"},"interfaces/Comment.ts:5")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isfired"},"isFired"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"isFired"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7da5a4984/packages/common/src/interfaces/Comment.ts#L10"},"interfaces/Comment.ts:10")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"text"},"text"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"text"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/7da5a4984/packages/common/src/interfaces/Comment.ts#L8"},"interfaces/Comment.ts:8")))}f.isMDXComponent=!0}}]);