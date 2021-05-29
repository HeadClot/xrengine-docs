(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[96474],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=i(a),u=r,c=k["".concat(p,".").concat(u)]||k[u]||d[u]||s;return a?n.createElement(c,l(l({ref:t},m),{},{components:a})):n.createElement(c,l({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var i=2;i<s;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},33657:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return i},default:function(){return d}});var n=a(22122),r=a(19756),s=(a(67294),a(3905)),l=["components"],o={id:"assets_threejs_various_convexhull.convexhull",title:"Class: ConvexHull",sidebar_label:"ConvexHull",custom_edit_url:null},p={unversionedId:"docs-engine/classes/assets_threejs_various_convexhull.convexhull",id:"docs-engine/classes/assets_threejs_various_convexhull.convexhull",isDocsHomePage:!1,title:"Class: ConvexHull",description:"assets/threejs-various/ConvexHull.ConvexHull",source:"@site/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull.md",sourceDirName:"docs-engine/classes",slug:"/docs-engine/classes/assets_threejs_various_convexhull.convexhull",permalink:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull",editUrl:null,version:"current",sidebar_label:"ConvexHull",frontMatter:{id:"assets_threejs_various_convexhull.convexhull",title:"Class: ConvexHull",sidebar_label:"ConvexHull",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Class: ConvexGeometry",permalink:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexgeometry.convexgeometry"},next:{title:"Class: AudioEnabled",permalink:"/xrengine-docs/docs/docs-engine/classes/audio_components_audioenabled.audioenabled"}},i=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"assigned",id:"assigned",children:[]},{value:"faces",id:"faces",children:[]},{value:"newFaces",id:"newfaces",children:[]},{value:"tolerance",id:"tolerance",children:[]},{value:"unassigned",id:"unassigned",children:[]},{value:"vertices",id:"vertices",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addAdjoiningFace",id:"addadjoiningface",children:[]},{value:"addNewFaces",id:"addnewfaces",children:[]},{value:"addVertexToFace",id:"addvertextoface",children:[]},{value:"addVertexToHull",id:"addvertextohull",children:[]},{value:"cleanup",id:"cleanup",children:[]},{value:"compute",id:"compute",children:[]},{value:"computeExtremes",id:"computeextremes",children:[]},{value:"computeHorizon",id:"computehorizon",children:[]},{value:"computeInitialHull",id:"computeinitialhull",children:[]},{value:"containsPoint",id:"containspoint",children:[]},{value:"deleteFaceVertices",id:"deletefacevertices",children:[]},{value:"intersectRay",id:"intersectray",children:[]},{value:"intersectsRay",id:"intersectsray",children:[]},{value:"makeEmpty",id:"makeempty",children:[]},{value:"nextVertexToAdd",id:"nextvertextoadd",children:[]},{value:"reindexFaces",id:"reindexfaces",children:[]},{value:"removeAllVerticesFromFace",id:"removeallverticesfromface",children:[]},{value:"removeVertexFromFace",id:"removevertexfromface",children:[]},{value:"resolveUnassignedPoints",id:"resolveunassignedpoints",children:[]},{value:"setFromObject",id:"setfromobject",children:[]},{value:"setFromPoints",id:"setfrompoints",children:[]}]}],m={toc:i};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/assets_threejs_various_convexhull"},"assets/threejs-various/ConvexHull"),".ConvexHull"),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,"+"," ",(0,s.kt)("strong",{parentName:"p"},"new ConvexHull"),"(): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L27"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:27")),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"assigned"},"assigned"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"assigned"),": ",(0,s.kt)("em",{parentName:"p"},"VertexList")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L25"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:25")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"faces"},"faces"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"faces"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"[]"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L23"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:23")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"newfaces"},"newFaces"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"newFaces"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"[]"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L24"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:24")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"tolerance"},"tolerance"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"tolerance"),": ",(0,s.kt)("em",{parentName:"p"},"number")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L22"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:22")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"unassigned"},"unassigned"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"unassigned"),": ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L27"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:27")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"vertices"},"vertices"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"vertices"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"[]"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L26"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:26")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"addadjoiningface"},"addAdjoiningFace"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"addAdjoiningFace"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"eyeVertex"),": ",(0,s.kt)("em",{parentName:"p"},"any"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"horizonEdge"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"): ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("h4",{id:"parameters"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"eyeVertex")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"horizonEdge")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L810"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:810")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"addnewfaces"},"addNewFaces"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"addNewFaces"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"eyeVertex"),": ",(0,s.kt)("em",{parentName:"p"},"any"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"horizon"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"eyeVertex")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"horizon")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L830"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:830")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"addvertextoface"},"addVertexToFace"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"addVertexToFace"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"vertex"),": ",(0,s.kt)("em",{parentName:"p"},"any"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"face"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"vertex")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"face")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L237"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:237")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"addvertextohull"},"addVertexToHull"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"addVertexToHull"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"eyeVertex"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"eyeVertex")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L872"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:872")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"cleanup"},"cleanup"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"cleanup"),"(): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L894"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:894")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"compute"},"compute"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"compute"),"(): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L904"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:904")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"computeextremes"},"computeExtremes"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"computeExtremes"),"(): ",(0,s.kt)("em",{parentName:"p"},"object")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"object")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"max")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"),"[]")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"min")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"),"[]")))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L432"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:432")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"computehorizon"},"computeHorizon"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"computeHorizon"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"eyePoint"),": ",(0,s.kt)("em",{parentName:"p"},"any"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"crossEdge"),": ",(0,s.kt)("em",{parentName:"p"},"any"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"face"),": ",(0,s.kt)("em",{parentName:"p"},"any"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"horizon"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"eyePoint")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"crossEdge")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"face")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"horizon")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L754"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:754")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"computeinitialhull"},"computeInitialHull"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"computeInitialHull"),"(): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L501"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:501")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"containspoint"},"containsPoint"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"containsPoint"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"point"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"): ",(0,s.kt)("em",{parentName:"p"},"boolean")),(0,s.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"point")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"boolean")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L126"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:126")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"deletefacevertices"},"deleteFaceVertices"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"deleteFaceVertices"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"face"),": ",(0,s.kt)("em",{parentName:"p"},"any"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"absorbingFace?"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"face")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"absorbingFace")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L319"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:319")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"intersectray"},"intersectRay"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"intersectRay"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"ray"),": ",(0,s.kt)("em",{parentName:"p"},"any"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"target"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"): ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"ray")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"target")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L144"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:144")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"intersectsray"},"intersectsRay"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"intersectsRay"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"ray"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"): ",(0,s.kt)("em",{parentName:"p"},"boolean")),(0,s.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"ray")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"boolean")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L220"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:220")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"makeempty"},"makeEmpty"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"makeEmpty"),"(): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L226"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:226")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"nextvertextoadd"},"nextVertexToAdd"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"nextVertexToAdd"),"(): ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L714"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:714")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"reindexfaces"},"reindexFaces"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"reindexFaces"),"(): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L690"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:690")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"removeallverticesfromface"},"removeAllVerticesFromFace"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"removeAllVerticesFromFace"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"face"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"): ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"face")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"any")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L289"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:289")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"removevertexfromface"},"removeVertexFromFace"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"removeVertexFromFace"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"vertex"),": ",(0,s.kt)("em",{parentName:"p"},"any"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"face"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("h4",{id:"parameters-10"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"vertex")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"face")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L259"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:259")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"resolveunassignedpoints"},"resolveUnassignedPoints"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"resolveUnassignedPoints"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"newFaces"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("h4",{id:"parameters-11"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"newFaces")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L375"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:375")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"setfromobject"},"setFromObject"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"setFromObject"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"object"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("h4",{id:"parameters-12"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"object")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L81"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:81")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"setfrompoints"},"setFromPoints"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"setFromPoints"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"points"),": ",(0,s.kt)("em",{parentName:"p"},"any"),"): ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("h4",{id:"parameters-13"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"points")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"any"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/assets_threejs_various_convexhull.convexhull"},(0,s.kt)("em",{parentName:"a"},"ConvexHull"))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/assets/threejs-various/ConvexHull.ts#L53"},"packages/engine/src/assets/threejs-various/ConvexHull.ts:53")))}d.isMDXComponent=!0}}]);