(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[3559],{3905:function(t,n,e){"use strict";e.d(n,{Zo:function(){return p},kt:function(){return d}});var a=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},s=Object.keys(t);for(a=0;a<s.length;a++)e=s[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)e=s[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var l=a.createContext({}),c=function(t){var n=a.useContext(l),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},p=function(t){var n=c(t.components);return a.createElement(l.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,s=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=c(e),d=r,_=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return e?a.createElement(_,o(o({ref:n},p),{},{components:e})):a.createElement(_,o({ref:n},p))}));function d(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var s=e.length,o=new Array(s);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var c=2;c<s;c++)o[c]=e[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},7240:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=e(2122),r=e(9756),s=(e(7294),e(3905)),o=["components"],i={id:"src_constants_avatarconstants",title:"Module: src/constants/AvatarConstants",sidebar_label:"src/constants/AvatarConstants",custom_edit_url:null},l={unversionedId:"docs-common/modules/src_constants_avatarconstants",id:"docs-common/modules/src_constants_avatarconstants",isDocsHomePage:!1,title:"Module: src/constants/AvatarConstants",description:"Variables",source:"@site/docs/docs-common/modules/src_constants_avatarconstants.md",sourceDirName:"docs-common/modules",slug:"/docs-common/modules/src_constants_avatarconstants",permalink:"/xrengine-docs/docs/docs-common/modules/src_constants_avatarconstants",editUrl:null,version:"current",sidebar_label:"src/constants/AvatarConstants",frontMatter:{id:"src_constants_avatarconstants",title:"Module: src/constants/AvatarConstants",sidebar_label:"src/constants/AvatarConstants",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: src/assets/testScenes",permalink:"/xrengine-docs/docs/docs-common/modules/src_assets_testscenes"},next:{title:"Module: src/enums/avatar-model",permalink:"/xrengine-docs/docs/docs-common/modules/src_enums_avatar_model"}},c=[{value:"Variables",id:"variables",children:[{value:"AVATAR_FILE_ALLOWED_EXTENSIONS",id:"avatar_file_allowed_extensions",children:[]},{value:"DEFAULT_AVATARS",id:"default_avatars",children:[]},{value:"DEFAULT_AVATAR_ID",id:"default_avatar_id",children:[]},{value:"MAX_ALLOWED_TRIANGLES",id:"max_allowed_triangles",children:[]},{value:"MAX_AVATAR_FILE_SIZE",id:"max_avatar_file_size",children:[]},{value:"MAX_THUMBNAIL_FILE_SIZE",id:"max_thumbnail_file_size",children:[]},{value:"MIN_AVATAR_FILE_SIZE",id:"min_avatar_file_size",children:[]},{value:"MIN_THUMBNAIL_FILE_SIZE",id:"min_thumbnail_file_size",children:[]},{value:"PRESIGNED_URL_EXPIRATION_DURATION",id:"presigned_url_expiration_duration",children:[]},{value:"THUMBNAIL_HEIGHT",id:"thumbnail_height",children:[]},{value:"THUMBNAIL_WIDTH",id:"thumbnail_width",children:[]}]}],p={toc:c};function u(t){var n=t.components,e=(0,r.Z)(t,o);return(0,s.kt)("wrapper",(0,a.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"variables"},"Variables"),(0,s.kt)("h3",{id:"avatar_file_allowed_extensions"},"AVATAR","_","FILE","_","ALLOWED","_","EXTENSIONS"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"AVATAR","_","FILE","_","ALLOWED","_","EXTENSIONS"),": ",(0,s.kt)("inlineCode",{parentName:"p"},'".glb,.gltf,.vrm,.fbx"'),"= '.glb,.gltf,.vrm,.fbx'"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/fb2afbc55/packages/common/src/constants/AvatarConstants.ts#L3"},"constants/AvatarConstants.ts:3")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"default_avatars"},"DEFAULT","_","AVATARS"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"DEFAULT","_","AVATARS"),": ",(0,s.kt)("em",{parentName:"p"},"string"),"[]"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/fb2afbc55/packages/common/src/constants/AvatarConstants.ts#L1"},"constants/AvatarConstants.ts:1")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"default_avatar_id"},"DEFAULT","_","AVATAR","_","ID"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"DEFAULT","_","AVATAR","_","ID"),": ",(0,s.kt)("inlineCode",{parentName:"p"},'"Andy"'),"= 'Andy'"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/fb2afbc55/packages/common/src/constants/AvatarConstants.ts#L2"},"constants/AvatarConstants.ts:2")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"max_allowed_triangles"},"MAX","_","ALLOWED","_","TRIANGLES"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"MAX","_","ALLOWED","_","TRIANGLES"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"100000"),"= 100000"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/fb2afbc55/packages/common/src/constants/AvatarConstants.ts#L11"},"constants/AvatarConstants.ts:11")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"max_avatar_file_size"},"MAX","_","AVATAR","_","FILE","_","SIZE"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"MAX","_","AVATAR","_","FILE","_","SIZE"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"15728640"),"= 15728640"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/fb2afbc55/packages/common/src/constants/AvatarConstants.ts#L5"},"constants/AvatarConstants.ts:5")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"max_thumbnail_file_size"},"MAX","_","THUMBNAIL","_","FILE","_","SIZE"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"MAX","_","THUMBNAIL","_","FILE","_","SIZE"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"2097152"),"= 2097152"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/fb2afbc55/packages/common/src/constants/AvatarConstants.ts#L7"},"constants/AvatarConstants.ts:7")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"min_avatar_file_size"},"MIN","_","AVATAR","_","FILE","_","SIZE"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"MIN","_","AVATAR","_","FILE","_","SIZE"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"0"),"= 0"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/fb2afbc55/packages/common/src/constants/AvatarConstants.ts#L4"},"constants/AvatarConstants.ts:4")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"min_thumbnail_file_size"},"MIN","_","THUMBNAIL","_","FILE","_","SIZE"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"MIN","_","THUMBNAIL","_","FILE","_","SIZE"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"0"),"= 0"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/fb2afbc55/packages/common/src/constants/AvatarConstants.ts#L6"},"constants/AvatarConstants.ts:6")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"presigned_url_expiration_duration"},"PRESIGNED","_","URL","_","EXPIRATION","_","DURATION"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"PRESIGNED","_","URL","_","EXPIRATION","_","DURATION"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"3600"),"= 3600"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/fb2afbc55/packages/common/src/constants/AvatarConstants.ts#L8"},"constants/AvatarConstants.ts:8")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"thumbnail_height"},"THUMBNAIL","_","HEIGHT"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"THUMBNAIL","_","HEIGHT"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"300"),"= 300"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/fb2afbc55/packages/common/src/constants/AvatarConstants.ts#L10"},"constants/AvatarConstants.ts:10")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"thumbnail_width"},"THUMBNAIL","_","WIDTH"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"THUMBNAIL","_","WIDTH"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"300"),"= 300"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/fb2afbc55/packages/common/src/constants/AvatarConstants.ts#L9"},"constants/AvatarConstants.ts:9")))}u.isMDXComponent=!0}}]);