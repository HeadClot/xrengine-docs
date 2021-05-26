(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[85483],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40172:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return o},default:function(){return s}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),l={id:"particles_functions_particlehelpers",title:"Module: particles/functions/particleHelpers",sidebar_label:"particles/functions/particleHelpers",custom_edit_url:null},p={unversionedId:"docs-engine/modules/particles_functions_particlehelpers",id:"docs-engine/modules/particles_functions_particlehelpers",isDocsHomePage:!1,title:"Module: particles/functions/particleHelpers",description:"Variables",source:"@site/docs/docs-engine/modules/particles_functions_particlehelpers.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/particles_functions_particlehelpers",permalink:"/xrengine-docs/docs/docs-engine/modules/particles_functions_particlehelpers",editUrl:null,version:"current",sidebar_label:"particles/functions/particleHelpers",frontMatter:{id:"particles_functions_particlehelpers",title:"Module: particles/functions/particleHelpers",sidebar_label:"particles/functions/particleHelpers",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: particles/functions/ParticleEmitterMesh",permalink:"/xrengine-docs/docs/docs-engine/modules/particles_functions_particleemittermesh"},next:{title:"Module: particles/interfaces",permalink:"/xrengine-docs/docs/docs-engine/modules/particles_interfaces"}},o=[{value:"Variables",id:"variables",children:[{value:"DEG2RAD",id:"deg2rad",children:[]},{value:"fragmentShader",id:"fragmentshader",children:[]},{value:"vertexShader",id:"vertexshader",children:[]}]},{value:"Functions",id:"functions",children:[{value:"applyTransform",id:"applytransform",children:[]},{value:"createParticleEmitterObject",id:"createparticleemitterobject",children:[]}]}],c={toc:o};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"deg2rad"},"DEG2RAD"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"DEG2RAD"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"0.0174533"),"= 0.0174533"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/particles/functions/particleHelpers.ts#L8"},"packages/engine/src/particles/functions/particleHelpers.ts:8")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fragmentshader"},"fragmentShader"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"fragmentShader"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"\\n  #include <common>\\n  #include <fog_pars_fragment>\\n  uniform sampler2D map;\\n  varying vec2 vUV;\\n  varying vec4 vColor;\\n  void main() {\\n    gl_FragColor = texture2D(map,  vUV) * vColor;\\n    #include <fog_fragment>\\n  }\\n"')),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/particles/functions/particleHelpers.ts#L34"},"packages/engine/src/particles/functions/particleHelpers.ts:34")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"vertexshader"},"vertexShader"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"vertexShader"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"\\n  #include <common>\\n  attribute vec4 particlePosition;\\n  attribute vec4 particleColor;\\n  attribute float particleAngle;\\n  varying vec4 vColor;\\n  varying vec2 vUV;\\n  uniform mat4 emitterMatrix;\\n  #include <fog_pars_vertex>\\n  void main() {\\n    vUV = uv;\\n    vColor = particleColor;\\n    float particleScale = particlePosition.w;\\n    vec4 mvPosition = viewMatrix * emitterMatrix * vec4(particlePosition.xyz, 1.0);\\n    \\n    vec3 rotatedPosition = position;\\n    rotatedPosition.x = cos( particleAngle ) * position.x - sin( particleAngle ) * position.y;\\n    rotatedPosition.y = sin( particleAngle ) * position.x + cos( particleAngle ) * position.y;\\n    mvPosition.xyz += rotatedPosition * particleScale;\\n    gl_Position = projectionMatrix * mvPosition;\\n    #include <fog_vertex>\\n  }\\n"')),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/particles/functions/particleHelpers.ts#L10"},"packages/engine/src/particles/functions/particleHelpers.ts:10")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"applytransform"},"applyTransform"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const"),(0,i.kt)("strong",{parentName:"p"},"applyTransform"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("em",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"emitter"),": ",(0,i.kt)("em",{parentName:"p"},"any"),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"emitter")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/particles/functions/particleHelpers.ts#L54"},"packages/engine/src/particles/functions/particleHelpers.ts:54")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createparticleemitterobject"},"createParticleEmitterObject"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const"),(0,i.kt)("strong",{parentName:"p"},"createParticleEmitterObject"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("em",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"configs"),": ",(0,i.kt)("em",{parentName:"p"},"any"),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"configs")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/particles/functions/particleHelpers.ts#L46"},"packages/engine/src/particles/functions/particleHelpers.ts:46")))}s.isMDXComponent=!0}}]);