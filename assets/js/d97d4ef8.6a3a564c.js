(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[76741],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return t?n.createElement(m,c(c({ref:r},s),{},{components:t})):n.createElement(m,c({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=d;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},77237:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},metadata:function(){return a},toc:function(){return u},default:function(){return s}});var n=t(22122),o=t(19756),i=(t(67294),t(3905)),c={id:"docker",title:"Docker"},a={unversionedId:"modules/ops/docker",id:"modules/ops/docker",isDocsHomePage:!1,title:"Docker",description:"Docker image configurations",source:"@site/docs/0_modules/ops/docker.md",sourceDirName:"0_modules/ops",slug:"/modules/ops/docker",permalink:"/xrengine-docs/docs/modules/ops/docker",editUrl:"https://github.com/XRFoundation/XREngine/packages/docs/docs/0_modules/ops/docker.md",version:"current",frontMatter:{id:"docker",title:"Docker"}},u=[{value:"Docker image configurations",id:"docker-image-configurations",children:[]}],l={toc:u};function s(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"docker-image-configurations"},"Docker image configurations"),(0,i.kt)("p",null,"Enviroment variables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NODE_ENV")," controls the config/*.js file for feathers.js to load ","[default: production]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PORT")," controls the listening port ","[default: 3030]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MYSQL_URL")," e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql://<user>:<pass>@<host>:<port>/<db>")," points to MariaDB server with a username and password")))}s.isMDXComponent=!0}}]);