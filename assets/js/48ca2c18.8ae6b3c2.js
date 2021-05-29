(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[43885],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,k=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11664:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p},default:function(){return m}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l=["components"],s={id:"xr_classes_skeletonutils",title:"Module: xr/classes/SkeletonUtils",sidebar_label:"xr/classes/SkeletonUtils",custom_edit_url:null},i={unversionedId:"docs-engine/modules/xr_classes_skeletonutils",id:"docs-engine/modules/xr_classes_skeletonutils",isDocsHomePage:!1,title:"Module: xr/classes/SkeletonUtils",description:"Functions",source:"@site/docs/docs-engine/modules/xr_classes_skeletonutils.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/xr_classes_skeletonutils",permalink:"/xrengine-docs/docs/docs-engine/modules/xr_classes_skeletonutils",editUrl:null,version:"current",sidebar_label:"xr/classes/SkeletonUtils",frontMatter:{id:"xr_classes_skeletonutils",title:"Module: xr/classes/SkeletonUtils",sidebar_label:"xr/classes/SkeletonUtils",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: xr/classes/ShoulderTransforms",permalink:"/xrengine-docs/docs/docs-engine/modules/xr_classes_shouldertransforms"},next:{title:"Module: xr/classes/XRArmIK",permalink:"/xrengine-docs/docs/docs-engine/modules/xr_classes_xrarmik"}},p=[{value:"Functions",id:"functions",children:[{value:"fixSkeletonZForward",id:"fixskeletonzforward",children:[]},{value:"setQuaternionFromDirection",id:"setquaternionfromdirection",children:[]}]}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"fixskeletonzforward"},"fixSkeletonZForward"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"fixSkeletonZForward"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"rootBone"),": ",(0,o.kt)("em",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"): ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"author"))," Avaer Kazmer"),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"rootBone")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any")),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"context")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any")),(0,o.kt)("td",{parentName:"tr",align:"left"},"options and buffer for stateful bone calculations                 context.exclude: ","[ boneNames to exclude ]","                 context.preRotations: { boneName: THREE.Quaternion, ... }")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,"Takes in a rootBone and recursively traverses the bone heirarchy,\nsetting each bone's +Z axis to face it's child bones. The IK system follows this\nconvention, so this step is necessary to update the bindings of a skinned mesh."),(0,o.kt)("p",null,"Must rebind the model to it's skeleton after this function."),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/xr/classes/SkeletonUtils.ts#L34"},"packages/engine/src/xr/classes/SkeletonUtils.ts:34")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"setquaternionfromdirection"},"setQuaternionFromDirection"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"setQuaternionFromDirection"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"direction"),": ",(0,o.kt)("em",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"up"),": ",(0,o.kt)("em",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"target"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"): ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"author"))," Avaer Kazmer"),(0,o.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"direction")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"up")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"target")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/472168025/packages/engine/src/xr/classes/SkeletonUtils.ts#L169"},"packages/engine/src/xr/classes/SkeletonUtils.ts:169")))}m.isMDXComponent=!0}}]);