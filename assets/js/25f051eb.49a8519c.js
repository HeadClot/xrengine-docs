(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[41718],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return c},kt:function(){return g}});var t=n(67294);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),d=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=d(e.components);return t.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),g=l,p=u["".concat(s,".").concat(g)]||u[g]||f[g]||o;return n?t.createElement(p,a(a({ref:r},c),{},{components:n})):t.createElement(p,a({ref:r},c))}));function g(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=u;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var d=2;d<o;d++)a[d]=n[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38668:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return a},metadata:function(){return i},toc:function(){return s},default:function(){return c}});var t=n(22122),l=n(19756),o=(n(67294),n(3905)),a={id:"renderer_effects_blending_glsl_normal_shader_frag",title:"Module: renderer/effects/blending/glsl/normal/shader.frag",sidebar_label:"renderer/effects/blending/glsl/normal/shader.frag",custom_edit_url:null},i={unversionedId:"docs-engine/modules/renderer_effects_blending_glsl_normal_shader_frag",id:"docs-engine/modules/renderer_effects_blending_glsl_normal_shader_frag",isDocsHomePage:!1,title:"Module: renderer/effects/blending/glsl/normal/shader.frag",description:"Properties",source:"@site/docs/docs-engine/modules/renderer_effects_blending_glsl_normal_shader_frag.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/renderer_effects_blending_glsl_normal_shader_frag",permalink:"/xrengine-docs/docs/docs-engine/modules/renderer_effects_blending_glsl_normal_shader_frag",editUrl:null,version:"current",sidebar_label:"renderer/effects/blending/glsl/normal/shader.frag",frontMatter:{id:"renderer_effects_blending_glsl_normal_shader_frag",title:"Module: renderer/effects/blending/glsl/normal/shader.frag",sidebar_label:"renderer/effects/blending/glsl/normal/shader.frag",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: renderer/effects/blending/glsl/negation/shader.frag",permalink:"/xrengine-docs/docs/docs-engine/modules/renderer_effects_blending_glsl_negation_shader_frag"},next:{title:"Module: renderer/effects/blending/glsl/overlay/shader.frag",permalink:"/xrengine-docs/docs/docs-engine/modules/renderer_effects_blending_glsl_overlay_shader_frag"}},s=[{value:"Properties",id:"properties",children:[{value:"default",id:"default",children:[]}]}],d={toc:s};function c(e){var r=e.components,n=(0,l.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"default"},"default"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\\n\\n\\treturn y * opacity + x * (1.0 - opacity);\\n\\n}\\n"')))}c.isMDXComponent=!0}}]);