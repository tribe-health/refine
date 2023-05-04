"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49477],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,y=c["".concat(d,".").concat(m)]||c[m]||l[m]||o;return a?r.createElement(y,i(i({ref:t},u),{},{components:a})):r.createElement(y,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},30887:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={id:"hasura",title:"Hasura","example-tags":["antd","data-provider","hasura","graphql","live-provider"]},i=void 0,p={unversionedId:"examples/data-provider/hasura",id:"version-3.xx.xx/examples/data-provider/hasura",title:"Hasura",description:"Any REST or GraphQL custom backend work integrated with refine. refine Hasura GraphQL Data Provider comes out-of-the-box. Thanks to refine, you can connect to your Hasura database and create special queries and use your data easily. This example shows in detail how you can use the data in your Hasura database with refine project.",source:"@site/versioned_docs/version-3.xx.xx/examples/data-provider/hasura.md",sourceDirName:"examples/data-provider",slug:"/examples/data-provider/hasura",permalink:"/docs/3.xx.xx/examples/data-provider/hasura",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/data-provider/hasura.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1683210489,formattedLastUpdatedAt:"May 4, 2023",frontMatter:{id:"hasura",title:"Hasura","example-tags":["antd","data-provider","hasura","graphql","live-provider"]},sidebar:"someSidebar",previous:{title:"Elide",permalink:"/docs/3.xx.xx/examples/data-provider/elide"},next:{title:"Multiple Providers",permalink:"/docs/3.xx.xx/examples/data-provider/multiple"}},d={},s=[{value:"ID Data Type",id:"id-data-type",level:2},{value:"Passing &#39;Int&#39; or &#39;uuid&#39; to <code>idType</code>",id:"passing-int-or-uuid-to-idtype",level:4},{value:"Passing function to <code>idType</code>",id:"passing-function-to-idtype",level:4}],u=(l="CodeSandboxExample",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var l;const c={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Any REST or GraphQL custom backend work integrated with ",(0,n.kt)("strong",{parentName:"p"},"refine"),". ",(0,n.kt)("strong",{parentName:"p"},"refine")," ",(0,n.kt)("a",{parentName:"p",href:"https://hasura.io/"},"Hasura")," GraphQL Data Provider comes out-of-the-box. Thanks to ",(0,n.kt)("strong",{parentName:"p"},"refine"),", you can connect to your Hasura database and create special queries and use your data easily. This example shows in detail how you can use the data in your Hasura database with ",(0,n.kt)("strong",{parentName:"p"},"refine")," project."),(0,n.kt)("h2",{id:"id-data-type"},"ID Data Type"),(0,n.kt)("p",null," By default, the data provider assume that your ",(0,n.kt)("inlineCode",{parentName:"p"},"ID")," type is ",(0,n.kt)("inlineCode",{parentName:"p"},"uuid"),", you can change this behavior by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"idType")," option. You can pass ",(0,n.kt)("inlineCode",{parentName:"p"},"Int")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"uuid")," as the value of ",(0,n.kt)("inlineCode",{parentName:"p"},"idType")," option or use function to determine the ",(0,n.kt)("inlineCode",{parentName:"p"},"idType")," based on the resource name."),(0,n.kt)("h4",{id:"passing-int-or-uuid-to-idtype"},"Passing 'Int' or 'uuid' to ",(0,n.kt)("inlineCode",{parentName:"h4"},"idType")),(0,n.kt)("p",null," This will allow you to determine the ",(0,n.kt)("inlineCode",{parentName:"p"},"idType")," for all resources."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const myDataProvider = dataProvider(client, {\n    idType: "Int",\n});\n')),(0,n.kt)("h4",{id:"passing-function-to-idtype"},"Passing function to ",(0,n.kt)("inlineCode",{parentName:"h4"},"idType")),(0,n.kt)("p",null," This will allow you to determine the ",(0,n.kt)("inlineCode",{parentName:"p"},"idType")," based on the resource name."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const idTypeMap: Record<string, "Int" | "uuid"> = {\n    users: "Int",\n    posts: "uuid",\n};\nconst myDataProvider = dataProvider(client, {\n    idType: (resource) => idTypeMap[resource] ?? "uuid",\n});\n')),(0,n.kt)(u,{path:"data-provider-hasura",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);