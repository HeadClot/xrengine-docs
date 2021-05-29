(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[70504],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),o=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=o(n),k=i,m=d["".concat(l,".").concat(k)]||d[k]||u[k]||r;return n?a.createElement(m,p(p({ref:t},c),{},{components:n})):a.createElement(m,p({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,p=new Array(r);p[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,p[1]=s;for(var o=2;o<r;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98841:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return o},default:function(){return u}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),p=["components"],s={id:"particles_interfaces.particlemeshoptions",title:"Interface: particleMeshOptions",sidebar_label:"particleMeshOptions",custom_edit_url:null},l={unversionedId:"docs-engine/interfaces/particles_interfaces.particlemeshoptions",id:"docs-engine/interfaces/particles_interfaces.particlemeshoptions",isDocsHomePage:!1,title:"Interface: particleMeshOptions",description:"particles/interfaces.particleMeshOptions",source:"@site/docs/docs-engine/interfaces/particles_interfaces.particlemeshoptions.md",sourceDirName:"docs-engine/interfaces",slug:"/docs-engine/interfaces/particles_interfaces.particlemeshoptions",permalink:"/xrengine-docs/docs/docs-engine/interfaces/particles_interfaces.particlemeshoptions",editUrl:null,version:"current",sidebar_label:"particleMeshOptions",frontMatter:{id:"particles_interfaces.particlemeshoptions",title:"Interface: particleMeshOptions",sidebar_label:"particleMeshOptions",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: emitterOptions",permalink:"/xrengine-docs/docs/docs-engine/interfaces/particles_interfaces.emitteroptions"},next:{title:"Interface: particleOptions",permalink:"/xrengine-docs/docs/docs-engine/interfaces/particles_interfaces.particleoptions"}},o=[{value:"Properties",id:"properties",children:[{value:"alphaTest",id:"alphatest",children:[]},{value:"blending",id:"blending",children:[]},{value:"depthTest",id:"depthtest",children:[]},{value:"depthWrite",id:"depthwrite",children:[]},{value:"fog",id:"fog",children:[]},{value:"mesh",id:"mesh",children:[]},{value:"particleCount",id:"particlecount",children:[]},{value:"particleSize",id:"particlesize",children:[]},{value:"style",id:"style",children:[]},{value:"texture",id:"texture",children:[]},{value:"textureFrame",id:"textureframe",children:[]},{value:"transparent",id:"transparent",children:[]},{value:"useAngularMotion",id:"useangularmotion",children:[]},{value:"useBrownianMotion",id:"usebrownianmotion",children:[]},{value:"useFramesOrOrientation",id:"useframesororientation",children:[]},{value:"useLinearMotion",id:"uselinearmotion",children:[]},{value:"useOrbitalMotion",id:"useorbitalmotion",children:[]},{value:"usePerspective",id:"useperspective",children:[]},{value:"useRadialMotion",id:"useradialmotion",children:[]},{value:"useVelocityScale",id:"usevelocityscale",children:[]},{value:"useWorldMotion",id:"useworldmotion",children:[]}]}],c={toc:o};function u(e){var t=e.components,n=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/particles_interfaces"},"particles/interfaces"),".particleMeshOptions"),(0,r.kt)("p",null,"Interface for particle mesh options."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"alphatest"},"alphaTest"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"alphaTest"),": ",(0,r.kt)("em",{parentName:"p"},"number")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/particles/interfaces/index.ts#L51"},"packages/engine/src/particles/interfaces/index.ts:51")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"blending"},"blending"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"blending"),": Blending"),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/particles/interfaces/index.ts#L54"},"packages/engine/src/particles/interfaces/index.ts:54")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"depthtest"},"depthTest"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"depthTest"),": ",(0,r.kt)("em",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/particles/interfaces/index.ts#L53"},"packages/engine/src/particles/interfaces/index.ts:53")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"depthwrite"},"depthWrite"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"depthWrite"),": ",(0,r.kt)("em",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/particles/interfaces/index.ts#L52"},"packages/engine/src/particles/interfaces/index.ts:52")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fog"},"fog"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"fog"),": ",(0,r.kt)("em",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/particles/interfaces/index.ts#L55"},"packages/engine/src/particles/interfaces/index.ts:55")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"mesh"},"mesh"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"mesh"),": ",(0,r.kt)("em",{parentName:"p"},"any")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/particles/interfaces/index.ts#L48"},"packages/engine/src/particles/interfaces/index.ts:48")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"particlecount"},"particleCount"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"particleCount"),": ",(0,r.kt)("em",{parentName:"p"},"number")),(0,r.kt)("p",null,"Number of particles in this mesh."),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/particles/interfaces/index.ts#L44"},"packages/engine/src/particles/interfaces/index.ts:44")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"particlesize"},"particleSize"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"particleSize"),": ",(0,r.kt)("em",{parentName:"p"},"number")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/particles/interfaces/index.ts#L49"},"packages/engine/src/particles/interfaces/index.ts:49")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"style"},"style"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"style"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"particle"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"mesh"')),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/particles/interfaces/index.ts#L47"},"packages/engine/src/particles/interfaces/index.ts:47")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"texture"},"texture"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"texture"),": ",(0,r.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("em",{parentName:"p"},"Texture")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/particles/interfaces/index.ts#L45"},"packages/engine/src/particles/interfaces/index.ts:45")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"textureframe"},"textureFrame"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"textureFrame"),": ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/particles_interfaces.textureframe"},(0,r.kt)("em",{parentName:"a"},"textureFrame"))),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/particles/interfaces/index.ts#L46"},"packages/engine/src/particles/interfaces/index.ts:46")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transparent"},"transparent"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"transparent"),": ",(0,r.kt)("em",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/particles/interfaces/index.ts#L50"},"packages/engine/src/particles/interfaces/index.ts:50")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"useangularmotion"},"useAngularMotion"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"useAngularMotion"),": ",(0,r.kt)("em",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/particles/interfaces/index.ts#L59"},"packages/engine/src/particles/interfaces/index.ts:59")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"usebrownianmotion"},"useBrownianMotion"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"useBrownianMotion"),": ",(0,r.kt)("em",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/particles/interfaces/index.ts#L62"},"packages/engine/src/particles/interfaces/index.ts:62")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"useframesororientation"},"useFramesOrOrientation"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"useFramesOrOrientation"),": ",(0,r.kt)("em",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/particles/interfaces/index.ts#L64"},"packages/engine/src/particles/interfaces/index.ts:64")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"uselinearmotion"},"useLinearMotion"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"useLinearMotion"),": ",(0,r.kt)("em",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/particles/interfaces/index.ts#L57"},"packages/engine/src/particles/interfaces/index.ts:57")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"useorbitalmotion"},"useOrbitalMotion"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"useOrbitalMotion"),": ",(0,r.kt)("em",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/particles/interfaces/index.ts#L58"},"packages/engine/src/particles/interfaces/index.ts:58")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"useperspective"},"usePerspective"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"usePerspective"),": ",(0,r.kt)("em",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/particles/interfaces/index.ts#L56"},"packages/engine/src/particles/interfaces/index.ts:56")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"useradialmotion"},"useRadialMotion"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"useRadialMotion"),": ",(0,r.kt)("em",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/particles/interfaces/index.ts#L60"},"packages/engine/src/particles/interfaces/index.ts:60")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"usevelocityscale"},"useVelocityScale"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"useVelocityScale"),": ",(0,r.kt)("em",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/particles/interfaces/index.ts#L63"},"packages/engine/src/particles/interfaces/index.ts:63")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"useworldmotion"},"useWorldMotion"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"useWorldMotion"),": ",(0,r.kt)("em",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4aa1c0ae7/packages/engine/src/particles/interfaces/index.ts#L61"},"packages/engine/src/particles/interfaces/index.ts:61")))}u.isMDXComponent=!0}}]);