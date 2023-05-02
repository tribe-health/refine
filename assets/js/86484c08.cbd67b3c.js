"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=i,u=m["".concat(s,".").concat(f)]||m[f]||c[f]||o;return n?r.createElement(u,a(a({ref:t},d),{},{components:n})):r.createElement(u,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={id:"file",title:"File",swizzle:!0},a=void 0,l={unversionedId:"api-reference/antd/components/fields/file",id:"version-3.xx.xx/api-reference/antd/components/fields/file",title:"File",description:"This field is used to display files and uses `` from Ant Design.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/components/fields/file.md",sourceDirName:"api-reference/antd/components/fields",slug:"/api-reference/antd/components/fields/file",permalink:"/docs/3.xx.xx/api-reference/antd/components/fields/file",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/components/fields/file.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1683035623,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{id:"file",title:"File",swizzle:!0},sidebar:"someSidebar",previous:{title:"Email",permalink:"/docs/3.xx.xx/api-reference/antd/components/fields/email"},next:{title:"Image",permalink:"/docs/3.xx.xx/api-reference/antd/components/fields/image"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],d=(c="PropsTable",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var c;const m={toc:p};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This field is used to display files and uses ",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/components/typography"},(0,i.kt)("inlineCode",{parentName:"a"},"<Typography.Link>"))," from Ant Design."),(0,i.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,i.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,i.kt)("strong",{parentName:"a"},"refine CLI")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Let's see how we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"<FileField>")," with the example in the edit page. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'// visible-block-start\nimport { \n    List,\n    Table,\n    useTable,\n    // highlight-next-line\n    FileField \n} from "@pankod/refine-antd";\n\nconst PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column\n                    dataIndex="title"\n                    title="Title"\n                    width="50%"\n                />\n                <Table.Column<IPost>\n                    title="Image"\n                    dataIndex="image"\n                    render={(_, record) => (\n                        // highlight-next-line\n                        <FileField src={record.image[0].url} />\n                    )}\n                    width="50%"\n                />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n    image: [\n        {\n            url: string;\n        },\n    ];\n}\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        resources={[\n            {\n                name: "posts",\n                list: PostList\n            },\n        ]}\n    />,\n);\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you don't use ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," prop it will use ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"title"))),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)(d,{module:"@pankod/refine-antd/FileField",mdxType:"PropsTable"}),(0,i.kt)("admonition",{title:"External Props",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"It also accepts all props of Ant Design ",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/components/typography/#How-to-use-Typography.Link-in-react-router"},"Link"),".")))}f.isMDXComponent=!0}}]);