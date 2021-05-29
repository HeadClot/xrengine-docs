(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[46673],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=o(r),m=a,u=f["".concat(s,".").concat(m)]||f[m]||d[m]||i;return r?n.createElement(u,c(c({ref:t},p),{},{components:r})):n.createElement(u,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<i;o++)c[o]=r[o];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},59234:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return o},default:function(){return d}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),c=["components"],l={id:"particles_interfaces.particlemesh",title:"Interface: ParticleMesh",sidebar_label:"ParticleMesh",custom_edit_url:null},s={unversionedId:"docs-engine/interfaces/particles_interfaces.particlemesh",id:"docs-engine/interfaces/particles_interfaces.particlemesh",isDocsHomePage:!1,title:"Interface: ParticleMesh",description:"particles/interfaces.ParticleMesh",source:"@site/docs/docs-engine/interfaces/particles_interfaces.particlemesh.md",sourceDirName:"docs-engine/interfaces",slug:"/docs-engine/interfaces/particles_interfaces.particlemesh",permalink:"/xrengine-docs/docs/docs-engine/interfaces/particles_interfaces.particlemesh",editUrl:null,version:"current",sidebar_label:"ParticleMesh",frontMatter:{id:"particles_interfaces.particlemesh",title:"Interface: ParticleMesh",sidebar_label:"ParticleMesh",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: ParticleEmitterInterface",permalink:"/xrengine-docs/docs/docs-engine/interfaces/particles_interfaces.particleemitterinterface"},next:{title:"Interface: ParticleMeshMaterial",permalink:"/xrengine-docs/docs/docs-engine/interfaces/particles_interfaces.particlemeshmaterial"}},o=[{value:"Properties",id:"properties",children:[{value:"geometry",id:"geometry",children:[]},{value:"material",id:"material",children:[]},{value:"userData",id:"userdata",children:[]}]}],p={toc:o};function d(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/particles_interfaces"},"particles/interfaces"),".ParticleMesh"),(0,i.kt)("p",null,"Interface for particle mesh."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"geometry"},"geometry"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"geometry"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/particles_interfaces#particlegeometry"},(0,i.kt)("em",{parentName:"a"},"ParticleGeometry"))),(0,i.kt)("p",null,"Geometry of particle mesh."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/particles/interfaces/index.ts#L12"},"packages/engine/src/particles/interfaces/index.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"material"},"material"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"material"),": ",(0,i.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/particles_interfaces.particlemeshmaterial"},(0,i.kt)("em",{parentName:"a"},"ParticleMeshMaterial"))),(0,i.kt)("p",null,"Material for particles."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/particles/interfaces/index.ts#L14"},"packages/engine/src/particles/interfaces/index.ts:14")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"userdata"},"userData"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"userData"),": ",(0,i.kt)("em",{parentName:"p"},"object")),(0,i.kt)("p",null,"User data."),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"meshConfig")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Configs for mesh.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nextIndex")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/particles/interfaces/index.ts#L16"},"packages/engine/src/particles/interfaces/index.ts:16")))}d.isMDXComponent=!0}}]);