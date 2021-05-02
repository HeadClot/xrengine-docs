(self.webpackChunk_xr3ngine_docs=self.webpackChunk_xr3ngine_docs||[]).push([[95740],{30876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return v}});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),v=i,f=d["".concat(a,".").concat(v)]||d[v]||u[v]||c;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,o=new Array(c);o[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<c;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91521:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return a},default:function(){return p}});var r=n(7560),i=n(98283),c=(n(2784),n(30876)),o={id:"src_social_reducers_invite_actions.invitesretrievedaction",title:"Interface: InvitesRetrievedAction",sidebar_label:"InvitesRetrievedAction",custom_edit_url:null},s={unversionedId:"docs-client-core/interfaces/src_social_reducers_invite_actions.invitesretrievedaction",id:"docs-client-core/interfaces/src_social_reducers_invite_actions.invitesretrievedaction",isDocsHomePage:!1,title:"Interface: InvitesRetrievedAction",description:"src/social/reducers/invite/actions.InvitesRetrievedAction",source:"@site/docs/docs-client-core/interfaces/src_social_reducers_invite_actions.invitesretrievedaction.md",sourceDirName:"docs-client-core/interfaces",slug:"/docs-client-core/interfaces/src_social_reducers_invite_actions.invitesretrievedaction",permalink:"/docs/docs/docs-client-core/interfaces/src_social_reducers_invite_actions.invitesretrievedaction",editUrl:null,version:"current",sidebar_label:"InvitesRetrievedAction",frontMatter:{id:"src_social_reducers_invite_actions.invitesretrievedaction",title:"Interface: InvitesRetrievedAction",sidebar_label:"InvitesRetrievedAction",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: InviteTargetSetAction",permalink:"/docs/docs/docs-client-core/interfaces/src_social_reducers_invite_actions.invitetargetsetaction"},next:{title:"Interface: InviteTypeCreatedAction",permalink:"/docs/docs/docs-client-core/interfaces/src_social_reducers_invitetype_actions.invitetypecreatedaction"}},a=[{value:"Properties",id:"properties",children:[{value:"invites",id:"invites",children:[]},{value:"limit",id:"limit",children:[]},{value:"skip",id:"skip",children:[]},{value:"total",id:"total",children:[]},{value:"type",id:"type",children:[]}]}],l={toc:a};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/docs/docs/docs-client-core/modules/src_social_reducers_invite_actions"},"src/social/reducers/invite/actions"),".InvitesRetrievedAction"),(0,c.kt)("h2",{id:"properties"},"Properties"),(0,c.kt)("h3",{id:"invites"},"invites"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("strong",{parentName:"p"},"invites"),": Invite[]"),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/social/reducers/invite/actions.ts#L34"},"packages/client-core/src/social/reducers/invite/actions.ts:34")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"limit"},"limit"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("strong",{parentName:"p"},"limit"),": ",(0,c.kt)("em",{parentName:"p"},"number")),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/social/reducers/invite/actions.ts#L36"},"packages/client-core/src/social/reducers/invite/actions.ts:36")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"skip"},"skip"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("strong",{parentName:"p"},"skip"),": ",(0,c.kt)("em",{parentName:"p"},"number")),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/social/reducers/invite/actions.ts#L37"},"packages/client-core/src/social/reducers/invite/actions.ts:37")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"total"},"total"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("strong",{parentName:"p"},"total"),": ",(0,c.kt)("em",{parentName:"p"},"number")),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/social/reducers/invite/actions.ts#L35"},"packages/client-core/src/social/reducers/invite/actions.ts:35")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"type"},"type"),(0,c.kt)("p",null,"\u2022 ",(0,c.kt)("strong",{parentName:"p"},"type"),": ",(0,c.kt)("em",{parentName:"p"},"string")),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/XRFoundation/XREngine/blob/4fad527c0/packages/client-core/src/social/reducers/invite/actions.ts#L33"},"packages/client-core/src/social/reducers/invite/actions.ts:33")))}p.isMDXComponent=!0}}]);