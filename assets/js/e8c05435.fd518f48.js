"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29763],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},91811:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"useNavigation",title:"useNavigation",sidebar_label:"useNavigation"},i=void 0,l={unversionedId:"api-reference/core/hooks/navigation/useNavigation",id:"api-reference/core/hooks/navigation/useNavigation",title:"useNavigation",description:"useNavigation is a hook that provides methods to navigate the app. Internally, it uses the go method of the routerProvider.",source:"@site/docs/api-reference/core/hooks/navigation/useNavigation.md",sourceDirName:"api-reference/core/hooks/navigation",slug:"/api-reference/core/hooks/navigation/useNavigation",permalink:"/docs/api-reference/core/hooks/navigation/useNavigation",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/navigation/useNavigation.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1679578974,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{id:"useNavigation",title:"useNavigation",sidebar_label:"useNavigation"},sidebar:"someSidebar",previous:{title:"useGetToPath \ud83c\udd95",permalink:"/docs/api-reference/core/hooks/navigation/useGetToPath"},next:{title:"useNotification",permalink:"/docs/api-reference/core/hooks/useNotification/"}},s={},p=[{value:"Return Values",id:"return-values",level:2},{value:"<code>list</code>",id:"list",level:3},{value:"<code>create</code>",id:"create",level:3},{value:"<code>edit</code>",id:"edit",level:3},{value:"<code>show</code>",id:"show",level:3},{value:"<code>clone</code>",id:"clone",level:3},{value:"<code>push</code>",id:"push",level:3},{value:"<code>replace</code>",id:"replace",level:3},{value:"<code>goBack</code>",id:"goback",level:3},{value:"<code>listUrl</code>",id:"listurl",level:3},{value:"<code>createUrl</code>",id:"createurl",level:3},{value:"<code>editUrl</code>",id:"editurl",level:3},{value:"<code>showUrl</code>",id:"showurl",level:3},{value:"<code>cloneUrl</code>",id:"cloneurl",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Return values",id:"return-values-1",level:3},{value:"Interface",id:"interface",level:4}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useNavigation")," is a hook that provides methods to navigate the app. Internally, it uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"go")," method of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/router-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"routerProvider")),". "),(0,r.kt)("p",null,"This hook is a legacy hook and not recommended to use even though it is still available and not deprecated. We recommend using your router libraries' hooks and methods instead of this when dealing with the custom navigations."),(0,r.kt)("p",null,"If you're in need of a navigation hook to use to navigate between your actions and resources, we recommend using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useGo"},(0,r.kt)("inlineCode",{parentName:"a"},"useGo"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useGetToPath"},(0,r.kt)("inlineCode",{parentName:"a"},"useGetToPath"))," hooks."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst {\n    list,\n    create,\n    edit,\n    show,\n    clone,\n    push,\n    replace,\n    goBack,\n    listUrl,\n    createUrl,\n    editUrl,\n    showUrl,\n    cloneUrl,\n} = useNavigation();\n')),(0,r.kt)("h2",{id:"return-values"},"Return Values"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"All functions the ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigation")," hook returns except ",(0,r.kt)("inlineCode",{parentName:"p"},"push"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"goBack"),", accepts a ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," parameter. This is an optional parameter and can be used to pass additional parameters to the routes if they contain multiple parameters other than ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),".")),(0,r.kt)("h3",{id:"list"},(0,r.kt)("inlineCode",{parentName:"h3"},"list")),(0,r.kt)("p",null,"It is a method that navigates to the list page of the given resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { list } = useNavigation();\n\nlist("posts"); // It navigates to the `/posts` page\n')),(0,r.kt)("p",null,"You can also give a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," property as a second parameter to the ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," method."),(0,r.kt)("h3",{id:"create"},(0,r.kt)("inlineCode",{parentName:"h3"},"create")),(0,r.kt)("p",null,"It is a method that navigates to the create page of the given resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { create } = useNavigation();\n\ncreate("posts"); // It navigates to the `/posts/create` page\n')),(0,r.kt)("p",null,"You can also give a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," property as a second parameter to the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method."),(0,r.kt)("h3",{id:"edit"},(0,r.kt)("inlineCode",{parentName:"h3"},"edit")),(0,r.kt)("p",null,"It is a method that navigates to the edit page of the given resource and id. When you use this method, you need to give the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of the record you want to edit."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { edit } = useNavigation();\n\nedit("posts", "1"); // It navigates to the `/posts/edit/1` page\n')),(0,r.kt)("p",null,"You can also give a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," property as a third parameter to the ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," method."),(0,r.kt)("h3",{id:"show"},(0,r.kt)("inlineCode",{parentName:"h3"},"show")),(0,r.kt)("p",null,"It is a method that navigates to the show page of the given resource and id. When you use this method, you need to give the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of the record you want to show."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { show } = useNavigation();\n\nshow("posts", "1"); // It navigates to the `/posts/show/1` page\n')),(0,r.kt)("p",null,"You can also give a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," property as a third parameter to the ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," method."),(0,r.kt)("h3",{id:"clone"},(0,r.kt)("inlineCode",{parentName:"h3"},"clone")),(0,r.kt)("p",null,"It is a method that navigates to the clone page of the given resource and id. When you use this method, you need to give the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of the record you want to clone."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { clone } = useNavigation();\n\nclone("posts", "1"); // It navigates to the `/posts/clone/1` page\n')),(0,r.kt)("p",null,"You can also give a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," property as a third parameter to the ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," method."),(0,r.kt)("h3",{id:"push"},(0,r.kt)("inlineCode",{parentName:"h3"},"push")),(0,r.kt)("p",null,"It is a method that pushes a new entry onto the history stack. It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"push")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useHistory")," from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/router-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"routerProvider")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { push } = useNavigation();\n\npush("custom-page"); // It navigates to the `/custom-page` page\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"push")," method parameters are dependent on your router provider."),(0,r.kt)("h3",{id:"replace"},(0,r.kt)("inlineCode",{parentName:"h3"},"replace")),(0,r.kt)("p",null,"It is a method that replaces the current entry on the history stack. It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useHistory")," from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/router-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"routerProvider")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { replace } = useNavigation();\n\nreplace("custom-page"); // It navigates to the `/custom-page` page\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"replace")," method parameters are dependent on your router provider."),(0,r.kt)("h3",{id:"goback"},(0,r.kt)("inlineCode",{parentName:"h3"},"goBack")),(0,r.kt)("p",null,"It is a method that navigates to the previous page. It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"goBack")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useHistory")," from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/router-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"routerProvider")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { goBack } = useNavigation();\n\ngoBack(); // It navigates to the previous page\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"goBack")," method parameters are dependent on your router provider."),(0,r.kt)("h3",{id:"listurl"},(0,r.kt)("inlineCode",{parentName:"h3"},"listUrl")),(0,r.kt)("p",null,"It is a method that returns the list page URL of the given resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { listUrl } = useNavigation();\n\nlistUrl("posts"); // It returns the `/posts` URL\n')),(0,r.kt)("h3",{id:"createurl"},(0,r.kt)("inlineCode",{parentName:"h3"},"createUrl")),(0,r.kt)("p",null,"It is a method that returns the create page URL of the given resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { createUrl } = useNavigation();\n\ncreateUrl("posts"); // It returns the `/posts/create` URL\n')),(0,r.kt)("h3",{id:"editurl"},(0,r.kt)("inlineCode",{parentName:"h3"},"editUrl")),(0,r.kt)("p",null,"It is a method that returns the edit page URL of the given resource and id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { editUrl } = useNavigation();\n\neditUrl("posts", "1"); // It returns the `/posts/edit/1` URL\n')),(0,r.kt)("h3",{id:"showurl"},(0,r.kt)("inlineCode",{parentName:"h3"},"showUrl")),(0,r.kt)("p",null,"It is a method that returns the show page URL of the given resource and id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { showUrl } = useNavigation();\n\nshowUrl("posts", "1"); // It returns the `/posts/show/1` URL\n')),(0,r.kt)("h3",{id:"cloneurl"},(0,r.kt)("inlineCode",{parentName:"h3"},"cloneUrl")),(0,r.kt)("p",null,"It is a method that returns the clone page URL of the given resource and id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@refinedev/core";\n\nconst { cloneUrl } = useNavigation();\n\ncloneUrl("posts", "1"); // It returns the `/posts/clone/1` URL\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"return-values-1"},"Return values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that navigates to the list page"),(0,r.kt)("td",{parentName:"tr",align:null},"( resource: string, type: ",(0,r.kt)("a",{parentName:"td",href:"#interface"},"HistoryType"),", meta?: Record<string, any> ) => void")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"create"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that navigates to the create page"),(0,r.kt)("td",{parentName:"tr",align:null},"( resource: string, type: ",(0,r.kt)("a",{parentName:"td",href:"#interface"},"HistoryType"),", meta?: Record<string, any> ) => void")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edit"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that navigates to the edit page"),(0,r.kt)("td",{parentName:"tr",align:null},"( resource: string, id: ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#basekey"},"BaseKey"),", type: ",(0,r.kt)("a",{parentName:"td",href:"#interface"},"HistoryType"),", meta?: Record<string, any> ) => void")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that navigates to the show page"),(0,r.kt)("td",{parentName:"tr",align:null},"( resource: string, id: ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#basekey"},"BaseKey"),", type: ",(0,r.kt)("a",{parentName:"td",href:"#interface"},"HistoryType"),", meta?: Record<string, any> ) => void")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clone"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that navigates to the clone page"),(0,r.kt)("td",{parentName:"tr",align:null},"( resource: string, id: ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#basekey"},"BaseKey"),", type: ",(0,r.kt)("a",{parentName:"td",href:"#interface"},"HistoryType"),", meta?: Record<string, any> ) => void")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"push"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that pushes the given path to the history stack"),(0,r.kt)("td",{parentName:"tr",align:null},"( path: string, ...rest: unknown[] ) => void")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replace"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that replaces the current entry on the history stack"),(0,r.kt)("td",{parentName:"tr",align:null},"( path: string, ...rest: unknown[] ) => void")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"goBack"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that navigates to the previous page"),(0,r.kt)("td",{parentName:"tr",align:null},"() => void")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"listUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that returns the list page URL"),(0,r.kt)("td",{parentName:"tr",align:null},"( resource: string, meta?: Record<string, any> ) => string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that returns the create page URL"),(0,r.kt)("td",{parentName:"tr",align:null},"( resource: string, meta?: Record<string, any> ) => string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"editUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that returns the edit page URL"),(0,r.kt)("td",{parentName:"tr",align:null},"( resource: string, id: ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#basekey"},"BaseKey"),", meta?: Record<string, any> ) => string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that returns the show page URL"),(0,r.kt)("td",{parentName:"tr",align:null},"( resource: string, id: ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#basekey"},"BaseKey"),", meta?: Record<string, any> ) => string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cloneUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"Method that returns the clone page URL"),(0,r.kt)("td",{parentName:"tr",align:null},"( resource: string, id: ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#basekey"},"BaseKey"),", meta?: Record<string, any> ) => string")))),(0,r.kt)("h4",{id:"interface"},"Interface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="History Type"',title:'"History','Type"':!0},'export type HistoryType = "push" | "replace";\n')))}c.isMDXComponent=!0}}]);