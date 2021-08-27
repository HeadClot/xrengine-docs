"use strict";(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[3409],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9431:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"troubleshooting",title:"Troubleshooting"},s=void 0,c={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"Invalid Certificate errors in local environment",source:"@site/docs/2_troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/xrengine-docs/docs/troubleshooting",editUrl:"https://github.com/XRFoundation/XREngine/packages/docs/docs/2_troubleshooting.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"troubleshooting",title:"Troubleshooting"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"invalid-certificate-errors-in-local-environment"},"Invalid Certificate errors in local environment"),(0,i.kt)("p",null,"   As of this writing, the cert provided in the xrengine package for local use\nis not adequately signed. Browsers will throw up warnings about going to insecure pages.\nYou should be able to tell the browser to ignore it, usually by clicking on some sort\nof 'advanced options' button or link and then something along the lines of 'go there anyway'."),(0,i.kt)("p",null,"   Chrome sometimes does not show a clickable option on the warning. If so, just\ntype ",(0,i.kt)("inlineCode",{parentName:"p"},"badidea")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"thisisunsafe")," when on that page. You don't enter that into the\naddress bar or into a text box, Chrome is just passively listening for those commands."),(0,i.kt)("h5",{id:"allow-gameserver-address-connection-via-installing-local-certificate-authority"},"Allow gameserver address connection via installing local Certificate Authority"),(0,i.kt)("p",null,"   For more detailed instructions check: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FiloSottile/mkcert"},"https://github.com/FiloSottile/mkcert")),(0,i.kt)("p",null,"   Short version (common for development process on Ubuntu):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt install libnss3-tools"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"brew install mkcert")," (if you don't have brew, check it's page: ",(0,i.kt)("a",{parentName:"p",href:"https://brew.sh/"},"https://brew.sh/"),")")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"mkcert --install"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"./certs")," folder")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"mkcert -key-file key.pem -cert-file cert.pem localhost 127.0.0.1 ::1"),(0,i.kt)("h5",{parentName:"li",id:"allow-gameserver-address-connection-with-invalid-certificate"},"Allow gameserver address connection with invalid certificate"),(0,i.kt)("p",{parentName:"li"},"The gameserver functionality is hosted on an address other than 127.0.0.1 in the local\nenvironment. Accepting an invalid certificate for 127.0.0.1 will not apply to this address.\nOpen the dev console for Chrome/Firefox by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+i")," simultaneously, and\ngo to the Console or Network tabs."),(0,i.kt)("p",{parentName:"li"},"If you see errors about not being able to connect to\nsomething like ",(0,i.kt)("inlineCode",{parentName:"p"},"https://192.168.0.81/socket.io/?location=<foobar>"),", right click on\nthat URL and open it in a new tab. You should again get a warning page about an invalid\ncertificate, and you again need to allow it.  "),(0,i.kt)("h4",{parentName:"li",id:"accessdenied-connecting-to-mariadb"},"AccessDenied connecting to mariadb"),(0,i.kt)("p",{parentName:"li"},"Make sure you don't have another instance of mariadb running on port 3306"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"    lsof -i :3306\n")),(0,i.kt)("p",{parentName:"li"},"On Linux, you can also check if any processes are running on port 3306 with\n",(0,i.kt)("inlineCode",{parentName:"p"},"sudo netstat -utlp | grep 3306"),"\nThe last column should look like ",(0,i.kt)("inlineCode",{parentName:"p"},"<ID>/<something"),"\nYou can kill any running process with ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo kill <ID>")),(0,i.kt)("h4",{parentName:"li",id:"error-listen-eaddrinuse-3030"},"Error: listen EADDRINUSE :::3030"),(0,i.kt)("p",{parentName:"li"},"check which process is using port 3030 and kill"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"    killall -9 node\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"OR\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"    lsof -i :3030\n    kill -3 <proccessIDfromPreviousCommand>\n")),(0,i.kt)("h4",{parentName:"li",id:"typeerror-cannot-read-property-position-of-undefined-when-accessing-locationhome"},"'TypeError: Cannot read property 'position' of undefined' when accessing /location/home"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"As of this writing, there's a bug with the default seeded test location.\nGo to /editor/projects and open the 'Test' project. Save the project, and\nthe error should go away.\n")),(0,i.kt)("h4",{parentName:"li",id:"weird-issues-with-your-database"},"Weird issues with your database?"),(0,i.kt)("p",{parentName:"li"},"Try"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"npm run dev-reinit-db // in server package\n")))))}d.isMDXComponent=!0}}]);