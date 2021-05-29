(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[1772],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return c},kt:function(){return g}});var t=n(67294);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=t.createContext({}),s=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):d(d({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(i.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(n),g=l,p=u["".concat(i,".").concat(g)]||u[g]||f[g]||o;return n?t.createElement(p,d(d({ref:r},c),{},{components:n})):t.createElement(p,d({ref:r},c))}));function g(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var o=n.length,d=new Array(o);d[0]=u;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:l,d[1]=a;for(var s=2;s<o;s++)d[s]=n[s];return t.createElement.apply(null,d)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23798:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return a},metadata:function(){return i},toc:function(){return s},default:function(){return f}});var t=n(22122),l=n(19756),o=(n(67294),n(3905)),d=["components"],a={id:"renderer_effects_blending_glsl_darken_shader_frag",title:"Module: renderer/effects/blending/glsl/darken/shader.frag",sidebar_label:"renderer/effects/blending/glsl/darken/shader.frag",custom_edit_url:null},i={unversionedId:"docs-engine/modules/renderer_effects_blending_glsl_darken_shader_frag",id:"docs-engine/modules/renderer_effects_blending_glsl_darken_shader_frag",isDocsHomePage:!1,title:"Module: renderer/effects/blending/glsl/darken/shader.frag",description:"Properties",source:"@site/docs/docs-engine/modules/renderer_effects_blending_glsl_darken_shader_frag.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/renderer_effects_blending_glsl_darken_shader_frag",permalink:"/xrengine-docs/docs/docs-engine/modules/renderer_effects_blending_glsl_darken_shader_frag",editUrl:null,version:"current",sidebar_label:"renderer/effects/blending/glsl/darken/shader.frag",frontMatter:{id:"renderer_effects_blending_glsl_darken_shader_frag",title:"Module: renderer/effects/blending/glsl/darken/shader.frag",sidebar_label:"renderer/effects/blending/glsl/darken/shader.frag",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: renderer/effects/blending/glsl/color-dodge/shader.frag",permalink:"/xrengine-docs/docs/docs-engine/modules/renderer_effects_blending_glsl_color_dodge_shader_frag"},next:{title:"Module: renderer/effects/blending/glsl/difference/shader.frag",permalink:"/xrengine-docs/docs/docs-engine/modules/renderer_effects_blending_glsl_difference_shader_frag"}},s=[{value:"Properties",id:"properties",children:[{value:"default",id:"default",children:[]}]}],c={toc:s};function f(e){var r=e.components,n=(0,l.Z)(e,d);return(0,o.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"default"},"default"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\\n\\n\\treturn min(x, y) * opacity + x * (1.0 - opacity);\\n\\n}\\n"')))}f.isMDXComponent=!0}}]);