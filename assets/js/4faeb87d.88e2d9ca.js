(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[11450],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return c},kt:function(){return g}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=t.createContext({}),f=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=f(e.components);return t.createElement(o.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=f(n),g=a,p=u["".concat(o,".").concat(g)]||u[g]||d[g]||i;return n?t.createElement(p,l(l({ref:r},c),{},{components:n})):t.createElement(p,l({ref:r},c))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var f=2;f<i;f++)l[f]=n[f];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85365:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return f},default:function(){return d}});var t=n(22122),a=n(19756),i=(n(67294),n(3905)),l=["components"],s={id:"renderer_effects_glsl_antialiasing_fxaa_frag",title:"Module: renderer/effects/glsl/antialiasing/fxaa.frag",sidebar_label:"renderer/effects/glsl/antialiasing/fxaa.frag",custom_edit_url:null},o={unversionedId:"docs-engine/modules/renderer_effects_glsl_antialiasing_fxaa_frag",id:"docs-engine/modules/renderer_effects_glsl_antialiasing_fxaa_frag",isDocsHomePage:!1,title:"Module: renderer/effects/glsl/antialiasing/fxaa.frag",description:"Properties",source:"@site/docs/docs-engine/modules/renderer_effects_glsl_antialiasing_fxaa_frag.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/renderer_effects_glsl_antialiasing_fxaa_frag",permalink:"/xrengine-docs/docs/docs-engine/modules/renderer_effects_glsl_antialiasing_fxaa_frag",editUrl:null,version:"current",sidebar_label:"renderer/effects/glsl/antialiasing/fxaa.frag",frontMatter:{id:"renderer_effects_glsl_antialiasing_fxaa_frag",title:"Module: renderer/effects/glsl/antialiasing/fxaa.frag",sidebar_label:"renderer/effects/glsl/antialiasing/fxaa.frag",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: renderer/effects/blending/glsl/subtract/shader.frag",permalink:"/xrengine-docs/docs/docs-engine/modules/renderer_effects_blending_glsl_subtract_shader_frag"},next:{title:"Module: renderer/effects/glsl/linear-to-srgb/shader.frag",permalink:"/xrengine-docs/docs/docs-engine/modules/renderer_effects_glsl_linear_to_srgb_shader_frag"}},f=[{value:"Properties",id:"properties",children:[{value:"default",id:"default",children:[]}]}],c={toc:f};function d(e){var r=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"default"},"default"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"default"),": ",(0,i.kt)("em",{parentName:"p"},"string")))}d.isMDXComponent=!0}}]);