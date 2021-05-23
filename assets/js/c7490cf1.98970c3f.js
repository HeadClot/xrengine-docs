(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[5445],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return i},kt:function(){return g}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=t.createContext({}),s=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},i=function(e){var r=s(e.components);return t.createElement(d.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,l=e.originalType,d=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),u=s(n),g=o,p=u["".concat(d,".").concat(g)]||u[g]||f[g]||l;return n?t.createElement(p,c(c({ref:r},i),{},{components:n})):t.createElement(p,c({ref:r},i))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=n.length,c=new Array(l);c[0]=u;var a={};for(var d in r)hasOwnProperty.call(r,d)&&(a[d]=r[d]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<l;s++)c[s]=n[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98650:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return c},metadata:function(){return a},toc:function(){return d},default:function(){return i}});var t=n(22122),o=n(19756),l=(n(67294),n(3905)),c={id:"renderer_effects_blending_glsl_color_burn_shader_frag",title:"Module: renderer/effects/blending/glsl/color-burn/shader.frag",sidebar_label:"renderer/effects/blending/glsl/color-burn/shader.frag",custom_edit_url:null},a={unversionedId:"docs-engine/modules/renderer_effects_blending_glsl_color_burn_shader_frag",id:"docs-engine/modules/renderer_effects_blending_glsl_color_burn_shader_frag",isDocsHomePage:!1,title:"Module: renderer/effects/blending/glsl/color-burn/shader.frag",description:"Properties",source:"@site/docs/docs-engine/modules/renderer_effects_blending_glsl_color_burn_shader_frag.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/renderer_effects_blending_glsl_color_burn_shader_frag",permalink:"/xrengine-docs/docs/docs-engine/modules/renderer_effects_blending_glsl_color_burn_shader_frag",editUrl:null,version:"current",sidebar_label:"renderer/effects/blending/glsl/color-burn/shader.frag",frontMatter:{id:"renderer_effects_blending_glsl_color_burn_shader_frag",title:"Module: renderer/effects/blending/glsl/color-burn/shader.frag",sidebar_label:"renderer/effects/blending/glsl/color-burn/shader.frag",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: renderer/effects/blending/glsl/average/shader.frag",permalink:"/xrengine-docs/docs/docs-engine/modules/renderer_effects_blending_glsl_average_shader_frag"},next:{title:"Module: renderer/effects/blending/glsl/color-dodge/shader.frag",permalink:"/xrengine-docs/docs/docs-engine/modules/renderer_effects_blending_glsl_color_dodge_shader_frag"}},d=[{value:"Properties",id:"properties",children:[{value:"default",id:"default",children:[]}]}],s={toc:d};function i(e){var r=e.components,n=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"default"},"default"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"p"},'"float blend(const in float x, const in float y) {\\n\\treturn (y == 0.0) ? y : max(1.0 - (1.0 - x) / y, 0.0);\\n}\\n\\nvec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\\n\\tvec4 z = vec4(blend(x.r, y.r), blend(x.g, y.g), blend(x.b, y.b), blend(x.a, y.a));\\n\\treturn z * opacity + x * (1.0 - opacity);\\n}"')))}i.isMDXComponent=!0}}]);