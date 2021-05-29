(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[99870],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return N}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),k=p(n),N=r,c=k["".concat(o,".").concat(N)]||k[N]||s[N]||i;return n?a.createElement(c,d(d({ref:t},l),{},{components:n})):a.createElement(c,d({ref:t},l))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=k;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:r,d[1]=m;for(var p=2;p<i;p++)d[p]=n[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},42665:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},metadata:function(){return o},toc:function(){return p},default:function(){return s}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),d=["components"],m={id:"input_schema_clientinputschema",title:"Module: input/schema/ClientInputSchema",sidebar_label:"input/schema/ClientInputSchema",custom_edit_url:null},o={unversionedId:"docs-engine/modules/input_schema_clientinputschema",id:"docs-engine/modules/input_schema_clientinputschema",isDocsHomePage:!1,title:"Module: input/schema/ClientInputSchema",description:"Variables",source:"@site/docs/docs-engine/modules/input_schema_clientinputschema.md",sourceDirName:"docs-engine/modules",slug:"/docs-engine/modules/input_schema_clientinputschema",permalink:"/xrengine-docs/docs/docs-engine/modules/input_schema_clientinputschema",editUrl:null,version:"current",sidebar_label:"input/schema/ClientInputSchema",frontMatter:{id:"input_schema_clientinputschema",title:"Module: input/schema/ClientInputSchema",sidebar_label:"input/schema/ClientInputSchema",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: input/interfaces/InputValue",permalink:"/xrengine-docs/docs/docs-engine/modules/input_interfaces_inputvalue"},next:{title:"Module: input/systems/ActionSystem",permalink:"/xrengine-docs/docs/docs-engine/modules/input_systems_actionsystem"}},p=[{value:"Variables",id:"variables",children:[{value:"ClientInputSchema",id:"clientinputschema",children:[]}]}],l={toc:p};function s(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"clientinputschema"},"ClientInputSchema"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"ClientInputSchema"),": ",(0,i.kt)("em",{parentName:"p"},"object")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventBindings")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventBindings.contextmenu")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"behavior"),": (",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"event"),": MouseEvent  }) => ",(0,i.kt)("em",{parentName:"td"},"void"),"  }[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventBindings.gamepadconnected")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"behavior"),": (",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"event"),": ",(0,i.kt)("em",{parentName:"td"},"any"),"  }) => ",(0,i.kt)("em",{parentName:"td"},"void")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"element"),": ",(0,i.kt)("em",{parentName:"td"},"string")," = 'window' }[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventBindings.gamepaddisconnected")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"behavior"),": (",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"event"),": ",(0,i.kt)("em",{parentName:"td"},"any"),"  }) => ",(0,i.kt)("em",{parentName:"td"},"void")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"element"),": ",(0,i.kt)("em",{parentName:"td"},"string")," = 'window' }[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventBindings.keydown")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/enums/common_enums_binaryvalue.binaryvalue"},(0,i.kt)("em",{parentName:"a"},"BinaryValue")),"  } ; ",(0,i.kt)("inlineCode",{parentName:"td"},"behavior"),": (",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"event"),": KeyboardEvent ; ",(0,i.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/modules/common_types_numericaltypes#binarytype"},(0,i.kt)("em",{parentName:"a"},"BinaryType")),"  }) => ",(0,i.kt)("em",{parentName:"td"},"any")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"element"),": ",(0,i.kt)("em",{parentName:"td"},"string")," = 'document' }[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventBindings.keyup")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/enums/common_enums_binaryvalue.binaryvalue"},(0,i.kt)("em",{parentName:"a"},"BinaryValue")),"  } ; ",(0,i.kt)("inlineCode",{parentName:"td"},"behavior"),": (",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"event"),": KeyboardEvent ; ",(0,i.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/modules/common_types_numericaltypes#binarytype"},(0,i.kt)("em",{parentName:"a"},"BinaryType")),"  }) => ",(0,i.kt)("em",{parentName:"td"},"any")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"element"),": ",(0,i.kt)("em",{parentName:"td"},"string")," = 'document' }[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventBindings.mobilegamepadbuttondown")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/enums/common_enums_binaryvalue.binaryvalue"},(0,i.kt)("em",{parentName:"a"},"BinaryValue")),"  } ; ",(0,i.kt)("inlineCode",{parentName:"td"},"behavior"),": (",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"event"),": CustomEvent ; ",(0,i.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/modules/common_types_numericaltypes#binarytype"},(0,i.kt)("em",{parentName:"a"},"BinaryType")),"  }) => ",(0,i.kt)("em",{parentName:"td"},"any")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"element"),": ",(0,i.kt)("em",{parentName:"td"},"string")," = 'document' }[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventBindings.mobilegamepadbuttonup")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/enums/common_enums_binaryvalue.binaryvalue"},(0,i.kt)("em",{parentName:"a"},"BinaryValue")),"  } ; ",(0,i.kt)("inlineCode",{parentName:"td"},"behavior"),": (",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"event"),": CustomEvent ; ",(0,i.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/modules/common_types_numericaltypes#binarytype"},(0,i.kt)("em",{parentName:"a"},"BinaryType")),"  }) => ",(0,i.kt)("em",{parentName:"td"},"any")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"element"),": ",(0,i.kt)("em",{parentName:"td"},"string")," = 'document' }[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventBindings.mousedown")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/enums/common_enums_binaryvalue.binaryvalue"},(0,i.kt)("em",{parentName:"a"},"BinaryValue")),"  } ; ",(0,i.kt)("inlineCode",{parentName:"td"},"behavior"),": (",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"event"),": MouseEvent ; ",(0,i.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/modules/common_types_numericaltypes#binarytype"},(0,i.kt)("em",{parentName:"a"},"BinaryType")),"  }) => ",(0,i.kt)("em",{parentName:"td"},"void"),"  }[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventBindings.mouseleave")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"behavior"),": (",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"event"),": MouseEvent  }) => ",(0,i.kt)("em",{parentName:"td"},"void"),"  }[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventBindings.mousemove")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"behavior"),": (",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"event"),": MouseEvent  }) => ",(0,i.kt)("em",{parentName:"td"},"void"),"  }[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventBindings.mouseup")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/enums/common_enums_binaryvalue.binaryvalue"},(0,i.kt)("em",{parentName:"a"},"BinaryValue")),"  } ; ",(0,i.kt)("inlineCode",{parentName:"td"},"behavior"),": (",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"event"),": MouseEvent ; ",(0,i.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/modules/common_types_numericaltypes#binarytype"},(0,i.kt)("em",{parentName:"a"},"BinaryType")),"  }) => ",(0,i.kt)("em",{parentName:"td"},"void"),"  }[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventBindings.stickmove")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"behavior"),": (",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"event"),": ",(0,i.kt)("em",{parentName:"td"},"CustomEvent"),"<any",">","  }) => ",(0,i.kt)("em",{parentName:"td"},"void")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"element"),": ",(0,i.kt)("em",{parentName:"td"},"string")," = 'document' }[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventBindings.touchcancel")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/enums/common_enums_binaryvalue.binaryvalue"},(0,i.kt)("em",{parentName:"a"},"BinaryValue")),"  } ; ",(0,i.kt)("inlineCode",{parentName:"td"},"behavior"),": (",(0,i.kt)("inlineCode",{parentName:"td"},"__namedParameters"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"event"),": TouchEvent ; ",(0,i.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/modules/common_types_numericaltypes#binarytype"},(0,i.kt)("em",{parentName:"a"},"BinaryType")),"  }) => ",(0,i.kt)("em",{parentName:"td"},"void")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"passive"),": ",(0,i.kt)("em",{parentName:"td"},"boolean")," = true }[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventBindings.touchend")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/enums/common_enums_binaryvalue.binaryvalue"},(0,i.kt)("em",{parentName:"a"},"BinaryValue")),"  } ; ",(0,i.kt)("inlineCode",{parentName:"td"},"behavior"),": (",(0,i.kt)("inlineCode",{parentName:"td"},"__namedParameters"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"event"),": TouchEvent ; ",(0,i.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/modules/common_types_numericaltypes#binarytype"},(0,i.kt)("em",{parentName:"a"},"BinaryType")),"  }) => ",(0,i.kt)("em",{parentName:"td"},"void")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"passive"),": ",(0,i.kt)("em",{parentName:"td"},"boolean")," = true }[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventBindings.touchmove")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"behavior"),": (",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"event"),": TouchEvent  }) => ",(0,i.kt)("em",{parentName:"td"},"void")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"passive"),": ",(0,i.kt)("em",{parentName:"td"},"boolean")," = true }[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventBindings.touchstart")),(0,i.kt)("td",{parentName:"tr",align:"left"},"({ ",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/enums/common_enums_binaryvalue.binaryvalue"},(0,i.kt)("em",{parentName:"a"},"BinaryValue")),"  } ; ",(0,i.kt)("inlineCode",{parentName:"td"},"behavior"),": (",(0,i.kt)("inlineCode",{parentName:"td"},"__namedParameters"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"event"),": TouchEvent ; ",(0,i.kt)("inlineCode",{parentName:"td"},"value"),": ",(0,i.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/modules/common_types_numericaltypes#binarytype"},(0,i.kt)("em",{parentName:"a"},"BinaryType")),"  }) => ",(0,i.kt)("em",{parentName:"td"},"void")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"passive"),": ",(0,i.kt)("em",{parentName:"td"},"boolean")," = true } ","|"," { ",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,i.kt)("em",{parentName:"td"},"undefined")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"behavior"),": (",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"event"),": TouchEvent  }) => ",(0,i.kt)("em",{parentName:"td"},"void")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"passive"),": ",(0,i.kt)("em",{parentName:"td"},"boolean")," = true })[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventBindings.visibilitychange")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"behavior"),": (",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,i.kt)("em",{parentName:"td"},"any"),") => ",(0,i.kt)("em",{parentName:"td"},"void")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"element"),": ",(0,i.kt)("em",{parentName:"td"},"string")," = 'document' }[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventBindings.wheel")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"behavior"),": (",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"event"),": WheelEvent  }) => ",(0,i.kt)("em",{parentName:"td"},"void")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"passive"),": ",(0,i.kt)("em",{parentName:"td"},"boolean")," = true }[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"onAdded")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"behavior"),": () => ",(0,i.kt)("em",{parentName:"td"},"void"),"  }[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"onRemoved")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"behavior"),": () => ",(0,i.kt)("em",{parentName:"td"},"void"),"  }[]")))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/0ed700334/packages/engine/src/input/schema/ClientInputSchema.ts#L637"},"packages/engine/src/input/schema/ClientInputSchema.ts:637")))}s.isMDXComponent=!0}}]);