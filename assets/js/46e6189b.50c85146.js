(self.webpackChunk_xrengine_docs=self.webpackChunk_xrengine_docs||[]).push([[91104],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return i},kt:function(){return k}});var o=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=o.createContext({}),l=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},i=function(e){var n=l(e.components);return o.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=l(t),k=s,u=d["".concat(p,".").concat(k)]||d[k]||m[k]||r;return t?o.createElement(u,a(a({ref:n},i),{},{components:t})):o.createElement(u,a({ref:n},i))}));function k(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,a=new Array(r);a[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:s,a[1]=c;for(var l=2;l<r;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61884:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p},default:function(){return i}});var o=t(22122),s=t(19756),r=(t(67294),t(3905)),a={id:"physics_components_usercontrollerobjectcomponent.usercontrolledcollidercomponent",title:"Class: UserControlledColliderComponent",sidebar_label:"UserControlledColliderComponent",custom_edit_url:null},c={unversionedId:"docs-engine/classes/physics_components_usercontrollerobjectcomponent.usercontrolledcollidercomponent",id:"docs-engine/classes/physics_components_usercontrollerobjectcomponent.usercontrolledcollidercomponent",isDocsHomePage:!1,title:"Class: UserControlledColliderComponent",description:"physics/components/UserControllerObjectComponent.UserControlledColliderComponent",source:"@site/docs/docs-engine/classes/physics_components_usercontrollerobjectcomponent.usercontrolledcollidercomponent.md",sourceDirName:"docs-engine/classes",slug:"/docs-engine/classes/physics_components_usercontrollerobjectcomponent.usercontrolledcollidercomponent",permalink:"/xrengine-docs/docs/docs-engine/classes/physics_components_usercontrollerobjectcomponent.usercontrolledcollidercomponent",editUrl:null,version:"current",sidebar_label:"UserControlledColliderComponent",frontMatter:{id:"physics_components_usercontrollerobjectcomponent.usercontrolledcollidercomponent",title:"Class: UserControlledColliderComponent",sidebar_label:"UserControlledColliderComponent",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Class: RigidBodyComponent",permalink:"/xrengine-docs/docs/docs-engine/classes/physics_components_rigidbody.rigidbodycomponent"},next:{title:"Class: PhysicsSystem",permalink:"/xrengine-docs/docs/docs-engine/classes/physics_systems_physicssystem.physicssystem"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"_pool",id:"_pool",children:[]},{value:"_typeId",id:"_typeid",children:[]},{value:"entity",id:"entity",children:[]},{value:"name",id:"name",children:[]},{value:"ownerNetworkId",id:"ownernetworkid",children:[]},{value:"_schema",id:"_schema",children:[]},{value:"_typeId",id:"_typeid-1",children:[]}]},{value:"Methods",id:"methods",children:[{value:"checkUndefinedAttributes",id:"checkundefinedattributes",children:[]},{value:"clone",id:"clone",children:[]},{value:"copy",id:"copy",children:[]},{value:"dispose",id:"dispose",children:[]},{value:"reset",id:"reset",children:[]},{value:"getName",id:"getname",children:[]}]}],l={toc:p};function i(e){var n=e.components,t=(0,s.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/modules/physics_components_usercontrollerobjectcomponent"},"physics/components/UserControllerObjectComponent"),".UserControlledColliderComponent"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"author"))," Josh Field <github.com/HexaField>"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},(0,r.kt)("em",{parentName:"a"},"Component")),"<",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_components_usercontrollerobjectcomponent.usercontrolledcollidercomponent"},(0,r.kt)("em",{parentName:"a"},"UserControlledColliderComponent")),">"),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},"UserControlledColliderComponent")))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"+"," ",(0,r.kt)("strong",{parentName:"p"},"new UserControlledColliderComponent"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"props?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," ","|"," ",(0,r.kt)("em",{parentName:"p"},"Partial"),"<Omit<",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_components_usercontrollerobjectcomponent.usercontrolledcollidercomponent"},(0,r.kt)("em",{parentName:"a"},"UserControlledColliderComponent")),", keyof ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},(0,r.kt)("em",{parentName:"a"},"Component")),"<any",">",">",">","): ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_components_usercontrollerobjectcomponent.usercontrolledcollidercomponent"},(0,r.kt)("em",{parentName:"a"},"UserControlledColliderComponent"))),(0,r.kt)("p",null,"Component class constructor."),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"props?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")," ","|"," ",(0,r.kt)("em",{parentName:"td"},"Partial"),"<Omit<",(0,r.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/physics_components_usercontrollerobjectcomponent.usercontrolledcollidercomponent"},(0,r.kt)("em",{parentName:"a"},"UserControlledColliderComponent")),", keyof ",(0,r.kt)("a",{parentName:"td",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},(0,r.kt)("em",{parentName:"a"},"Component")),"<any",">",">",">")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/physics_components_usercontrollerobjectcomponent.usercontrolledcollidercomponent"},(0,r.kt)("em",{parentName:"a"},"UserControlledColliderComponent"))),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},"Component")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Component.ts#L39"},"packages/engine/src/ecs/classes/Component.ts:39")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"_pool"},"_","pool"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"_","pool"),": ",(0,r.kt)("em",{parentName:"p"},"any")),(0,r.kt)("p",null,"The pool an individual instantiated component is attached to.\nEach component type has a pool, pool size is set on engine initialization."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},"Component"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component#_pool"},"_pool")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Component.ts#L24"},"packages/engine/src/ecs/classes/Component.ts:24")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_typeid"},"_","typeId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"_","typeId"),": ",(0,r.kt)("em",{parentName:"p"},"any"),"= -1"),(0,r.kt)("p",null,"The type ID of this component, should be the same as the component's constructed class."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},"Component"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component#_typeid"},"_typeId")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Component.ts#L29"},"packages/engine/src/ecs/classes/Component.ts:29")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"entity"},"entity"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"entity"),": ",(0,r.kt)("em",{parentName:"p"},"any"),'= ""'),(0,r.kt)("p",null,'The "entity" this component is attached to.'),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},"Component"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component#entity"},"entity")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Component.ts#L39"},"packages/engine/src/ecs/classes/Component.ts:39")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"name"),": ",(0,r.kt)("em",{parentName:"p"},"any"),'= ""'),(0,r.kt)("p",null,"The name of the component instance, derived from the class name."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},"Component"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component#name"},"name")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Component.ts#L34"},"packages/engine/src/ecs/classes/Component.ts:34")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"ownernetworkid"},"ownerNetworkId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"ownerNetworkId"),": ",(0,r.kt)("em",{parentName:"p"},"number")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/physics/components/UserControllerObjectComponent.ts#L9"},"packages/engine/src/physics/components/UserControllerObjectComponent.ts:9")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_schema"},"_","schema"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"_","schema"),": ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/interfaces/ecs_interfaces_componentinterfaces.componentschema"},(0,r.kt)("em",{parentName:"a"},"ComponentSchema"))),(0,r.kt)("p",null,"Defines the attributes and attribute types on the constructed component class.\\\nAll component variables should be reflected in the component schema."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},"Component"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component#_schema"},"_schema")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Component.ts#L13"},"packages/engine/src/ecs/classes/Component.ts:13")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_typeid-1"},"_","typeId"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"_","typeId"),": ",(0,r.kt)("em",{parentName:"p"},"number")),(0,r.kt)("p",null,"The unique ID for this type of component (","<","C",">",")."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},"Component"),".",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component#_typeid"},"_typeId")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Component.ts#L18"},"packages/engine/src/ecs/classes/Component.ts:18")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"checkundefinedattributes"},"checkUndefinedAttributes"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"checkUndefinedAttributes"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"src"),": ",(0,r.kt)("em",{parentName:"p"},"any"),"): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Make sure attributes on this component have been defined in the schema"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"src")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"any"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},"Component")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Component.ts#L142"},"packages/engine/src/ecs/classes/Component.ts:142")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"clone"},"clone"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"clone"),"(): ",(0,r.kt)("em",{parentName:"p"},"any")),(0,r.kt)("p",null,"Default logic for cloning component.\nEach component class can override this."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"any")),(0,r.kt)("p",null,"a new component as a clone of itself."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},"Component")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Component.ts#L98"},"packages/engine/src/ecs/classes/Component.ts:98")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"copy"},"copy"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"copy"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"source"),": ",(0,r.kt)("em",{parentName:"p"},"any"),"): ",(0,r.kt)("em",{parentName:"p"},"any")),(0,r.kt)("p",null,"Default logic for copying component.\nEach component class can override this."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"source")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Source Component.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"any")),(0,r.kt)("p",null,"this new component as a copy of the source."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},"Component")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Component.ts#L78"},"packages/engine/src/ecs/classes/Component.ts:78")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"dispose"},"dispose"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"dispose"),"(): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Put the component back into it's component pool.\nCalled when component is removed from an entity."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},"Component")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Component.ts#L125"},"packages/engine/src/ecs/classes/Component.ts:125")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"reset"},"reset"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"reset"),"(): ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Default logic for resetting attributes to default schema values.\nEach component class can override this."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"void")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},"Component")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Component.ts#L106"},"packages/engine/src/ecs/classes/Component.ts:106")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getname"},"getName"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static"),(0,r.kt)("strong",{parentName:"p"},"getName"),"(): ",(0,r.kt)("em",{parentName:"p"},"string")),(0,r.kt)("p",null,"Get the name of this component class.\nUseful for JSON serialization, etc."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("em",{parentName:"p"},"string")),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/xrengine-docs/docs/docs-engine/classes/ecs_classes_component.component"},"Component")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/723b2d194/packages/engine/src/ecs/classes/Component.ts#L135"},"packages/engine/src/ecs/classes/Component.ts:135")))}i.isMDXComponent=!0}}]);