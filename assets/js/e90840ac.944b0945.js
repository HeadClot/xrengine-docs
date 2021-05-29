(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[47695],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(g,a(a({ref:n},s),{},{components:t})):r.createElement(g,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93515:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=t(22122),o=t(19756),i=(t(67294),t(3905)),a=["components"],l={id:"deployment",title:"Deployment"},p={unversionedId:"modules/ops/deployment",id:"modules/ops/deployment",isDocsHomePage:!1,title:"Deployment",description:"Deployment",source:"@site/docs/0_modules/ops/deployment.md",sourceDirName:"0_modules/ops",slug:"/modules/ops/deployment",permalink:"/xrengine-docs/docs/modules/ops/deployment",editUrl:"https://github.com/XRFoundation/XREngine/packages/docs/docs/0_modules/ops/deployment.md",version:"current",frontMatter:{id:"deployment",title:"Deployment"}},c=[{value:"Deployment",id:"deployment",children:[]},{value:"Testing",id:"testing",children:[]},{value:"Linting",id:"linting",children:[]},{value:"Docker",id:"docker",children:[]}],s={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"deployment"},"Deployment"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/xrengine/xrengine/blob/dev/packages/ops/docs/EKS-setup.md"},"AWS EKS Deployment")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/xrengine/xrengine/blob/dev/packages/ops/docs/managing_remote_kubernets.md"},"Managing Kubernets")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/xrengine/xrengine/blob/dev/packages/ops/docs/release-helm-chart.md"},"Managing Helm Charts")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/xrengine/xrengine/blob/dev/packages/ops/xrengine-cloudformation"},"Cloudformation Scripts")),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"Simply run ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn test")," and all your tests in the ",(0,i.kt)("inlineCode",{parentName:"p"},"test/")," directory will be run."),(0,i.kt)("h2",{id:"linting"},"Linting"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"yarn run lint")),(0,i.kt)("h2",{id:"docker"},"Docker"),(0,i.kt)("p",null,"You can run it using docker, if you don't have node installed or need to test."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Build the image\ndocker build --tag xrengine .\n\n# Run the image (deletes itself when you close it)\ndocker run -d --rm --name server -e "MYSQL_URL=mysql://server:password@db:3306/xrengine" -p "3030:3030"  xrengine\n\n# Stop the server\ndocker stop server\n')))}u.isMDXComponent=!0}}]);