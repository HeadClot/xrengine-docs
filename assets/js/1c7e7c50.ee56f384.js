(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[89393],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),m=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=m(t.components);return a.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),k=m(n),c=r,N=k["".concat(l,".").concat(c)]||k[c]||s[c]||i;return n?a.createElement(N,o(o({ref:e},p),{},{components:n})):a.createElement(N,o({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=k;var d={};for(var l in e)hasOwnProperty.call(e,l)&&(d[l]=e[l]);d.originalType=t,d.mdxType="string"==typeof t?t:r,o[1]=d;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6600:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return d},metadata:function(){return l},toc:function(){return m},default:function(){return s}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=["components"],d={id:"networking_constants_videoconstants",title:"Module: networking/constants/VideoConstants",sidebar_label:"networking/constants/VideoConstants",custom_edit_url:null},l={unversionedId:"docs-engine/modules/networking_constants_videoconstants",id:"docs-engine/modules/networking_constants_videoconstants",isDocsHomePage:!1,title:"Module: networking/constants/VideoConstants",description:"Variables",source:"@site/docs/docs-engine/modules/networking_constants_videoconstants.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/networking_constants_videoconstants",permalink:"/xrengine-docs/docs/docs-engine/modules/networking_constants_videoconstants",editUrl:null,version:"current",sidebar_label:"networking/constants/VideoConstants",frontMatter:{id:"networking_constants_videoconstants",title:"Module: networking/constants/VideoConstants",sidebar_label:"networking/constants/VideoConstants",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: networking/components/NetworkObject",permalink:"/xrengine-docs/docs/docs-engine/modules/networking_components_networkobject"},next:{title:"Module: networking/enums/MessageTypes",permalink:"/xrengine-docs/docs/docs-engine/modules/networking_enums_messagetypes"}},m=[{value:"Variables",id:"variables",children:[{value:"CAM_VIDEO_SIMULCAST_ENCODINGS",id:"cam_video_simulcast_encodings",children:[]},{value:"VIDEO_CONSTRAINTS",id:"video_constraints",children:[]},{value:"localMediaConstraints",id:"localmediaconstraints",children:[]}]}],p={toc:m};function s(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"cam_video_simulcast_encodings"},"CAM","_","VIDEO","_","SIMULCAST","_","ENCODINGS"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"CAM","_","VIDEO","_","SIMULCAST","_","ENCODINGS"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"maxBitrate"),": ",(0,i.kt)("em",{parentName:"p"},"number")," = 36000; ",(0,i.kt)("inlineCode",{parentName:"p"},"scaleResolutionDownBy"),": ",(0,i.kt)("em",{parentName:"p"},"number")," = 4 }[]"),(0,i.kt)("p",null,"Encodings for outgoing video.\\\nJust two resolutions, for now, as chrome 75 seems to ignore more\nthan two encodings."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/networking/constants/VideoConstants.ts#L23"},"packages/engine/src/networking/constants/VideoConstants.ts:23")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"video_constraints"},"VIDEO","_","CONSTRAINTS"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"VIDEO","_","CONSTRAINTS"),": ",(0,i.kt)("em",{parentName:"p"},"object")),(0,i.kt)("p",null,"VIDEO_CONSTRAINTS is video quality levels."),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"hd")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"hd.height")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"hd.height.ideal")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"hd.width")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"hd.width.ideal")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"qvga")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"qvga.height")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"qvga.height.ideal")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"qvga.width")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"qvga.width.ideal")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"vga")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"vga.height")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"vga.height.ideal")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"vga.width")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"vga.width.ideal")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/networking/constants/VideoConstants.ts#L2"},"packages/engine/src/networking/constants/VideoConstants.ts:2")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"localmediaconstraints"},"localMediaConstraints"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"localMediaConstraints"),": ",(0,i.kt)("em",{parentName:"p"},"object")),(0,i.kt)("p",null,"localMediaConstraints is passed to the getUserMedia object to request a lower video quality than the maximum."),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"audio")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"boolean"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"video")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"video.frameRate")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"video.frameRate.max")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"video.height")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"video.height.ideal")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"video.width")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"video.width.ideal")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/networking/constants/VideoConstants.ts#L9"},"packages/engine/src/networking/constants/VideoConstants.ts:9")))}s.isMDXComponent=!0}}]);