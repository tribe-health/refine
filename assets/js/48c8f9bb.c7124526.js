"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30044],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={id:"date",title:"Date",swizzle:!0},o=void 0,s={unversionedId:"api-reference/mui/components/fields/date",id:"version-3.xx.xx/api-reference/mui/components/fields/date",title:"Date",description:"This field is used to display dates. It uses Day.js to display date format.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mui/components/fields/date.md",sourceDirName:"api-reference/mui/components/fields",slug:"/api-reference/mui/components/fields/date",permalink:"/docs/3.xx.xx/api-reference/mui/components/fields/date",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mui/components/fields/date.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1683210489,formattedLastUpdatedAt:"May 4, 2023",frontMatter:{id:"date",title:"Date",swizzle:!0},sidebar:"someSidebar",previous:{title:"Boolean",permalink:"/docs/3.xx.xx/api-reference/mui/components/fields/boolean"},next:{title:"Email",permalink:"/docs/3.xx.xx/api-reference/mui/components/fields/email"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],d=(c="PropsTable",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var c;const m={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This field is used to display dates. It uses ",(0,i.kt)("a",{parentName:"p",href:"https://day.js.org/docs/en/display/format"},(0,i.kt)("inlineCode",{parentName:"a"},"Day.js"))," to display date format."),(0,i.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,i.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,i.kt)("strong",{parentName:"a"},"refine CLI")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Let's see how we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"<DateField>")," with the example in the post list."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=340px",live:!0,url:"http://localhost:3000/posts",previewHeight:"340px"},'// visible-block-start\nimport {\n    useDataGrid,\n    DataGrid,\n    GridColumns,\n    List,\n    // highlight-next-line\n    DateField,\n} from "@pankod/refine-mui";\n\nconst columns: GridColumns = [\n    { field: "id", headerName: "ID", type: "number" },\n    { field: "title", headerName: "Title", minWidth: 100, flex: 1 },\n    {\n        field: "createdAt",\n        headerName: "Created At",\n        renderCell: function render({ row }) {\n            // highlight-start\n            return (\n                <DateField format="LLL" value={row.createdAt} />\n            );\n            // highlight-end\n        },\n        minWidth: 100,\n        flex: 1,\n    },\n];\n\nconst PostsList: React.FC = () => {\n    const { dataGridProps } = useDataGrid<IPost>();\n\n    return (\n        <List>\n            <DataGrid {...dataGridProps} columns={columns} autoHeight />\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n    createdAt: string;\n}\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        resources={[\n            {\n                name: "posts",\n                list: PostsList,\n            },\n        ]}\n    />,\n);\n')),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)(d,{module:"@pankod/refine-mui/DateField","format-default":"`L`",mdxType:"PropsTable"}),(0,i.kt)("admonition",{title:"External Props",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"It also accepts all props of Material UI ",(0,i.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-typography/#main-content"},"Typography"),".")))}u.isMDXComponent=!0}}]);