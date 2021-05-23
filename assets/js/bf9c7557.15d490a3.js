(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[51544],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=o,y=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return t?r.createElement(y,a(a({ref:n},u),{},{components:t})):r.createElement(y,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9648:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=t(22122),o=t(19756),i=(t(67294),t(3905)),a={id:"common_functions_ismyplayer",title:"Module: common/functions/isMyPlayer",sidebar_label:"common/functions/isMyPlayer",custom_edit_url:null},c={unversionedId:"docs-engine/modules/common_functions_ismyplayer",id:"docs-engine/modules/common_functions_ismyplayer",isDocsHomePage:!1,title:"Module: common/functions/isMyPlayer",description:"Functions",source:"@site/docs/docs-engine/modules/common_functions_ismyplayer.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/common_functions_ismyplayer",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_ismyplayer",editUrl:null,version:"current",sidebar_label:"common/functions/isMyPlayer",frontMatter:{id:"common_functions_ismyplayer",title:"Module: common/functions/isMyPlayer",sidebar_label:"common/functions/isMyPlayer",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: common/functions/isMobile",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_ismobile"},next:{title:"Module: common/functions/isOtherPlayer",permalink:"/xrengine-docs/docs/docs-engine/modules/common_functions_isotherplayer"}},l=[{value:"Functions",id:"functions",children:[{value:"isMyPlayer",id:"ismyplayer",children:[]}]}],s={toc:l};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"ismyplayer"},"isMyPlayer"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const"),(0,i.kt)("strong",{parentName:"p"},"isMyPlayer"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("em",{parentName:"p"},"any"),"): ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/b2dd30534/packages/engine/src/common/functions/isMyPlayer.ts#L8"},"packages/engine/src/common/functions/isMyPlayer.ts:8")))}u.isMDXComponent=!0}}]);