"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61112],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>u});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return r?t.createElement(h,i(i({ref:n},c),{},{components:r})):t.createElement(h,i({ref:n},c))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},83745:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=r(87462),a=r(67294),o=r(3905);const i={id:"inferencer",title:"Inferencer",sidebar_label:"Inferencer"},s=void 0,l={unversionedId:"api-reference/chakra-ui/components/inferencer",id:"api-reference/chakra-ui/components/inferencer",title:"Inferencer",description:"You can automatically generate views for your resources using @refinedev/inferencer. Inferencer exports ChakraUIListInferencer, ChakraUIShowInferencer, ChakraUIEditInferencer, ChakraUICreateInferencer and ChakraUIInferencer (which combines all in one place) components.",source:"@site/docs/api-reference/chakra-ui/components/inferencer.md",sourceDirName:"api-reference/chakra-ui/components",slug:"/api-reference/chakra-ui/components/inferencer",permalink:"/docs/api-reference/chakra-ui/components/inferencer",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/chakra-ui/components/inferencer.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1682685014,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{id:"inferencer",title:"Inferencer",sidebar_label:"Inferencer"},sidebar:"someSidebar",previous:{title:"<ThemedLayout>",permalink:"/docs/api-reference/chakra-ui/components/chakra-ui-themed-layout"},next:{title:"Create",permalink:"/docs/api-reference/chakra-ui/components/basic-views/create"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Views",id:"views",level:2},{value:"<code>List</code>",id:"list",level:3},{value:"<code>Show</code>",id:"show",level:3},{value:"<code>Create</code>",id:"create",level:3},{value:"<code>Edit</code>",id:"edit",level:3},{value:"Example",id:"example",level:2}],m=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)},d=m("Tabs"),u=m("TabItem"),h=m("CodeSandboxExample"),f={toc:c};function k(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can automatically generate views for your resources using ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer"),". Inferencer exports ",(0,o.kt)("inlineCode",{parentName:"p"},"ChakraUIListInferencer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ChakraUIShowInferencer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ChakraUIEditInferencer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ChakraUICreateInferencer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ChakraUIInferencer")," (which combines all in one place) components."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Inferencer components can be imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer/chakra-ui"),". You can directly use the components in your routes without passing any props. If you use a ",(0,o.kt)("inlineCode",{parentName:"p"},"routerProvider"),", it will infer the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," from the current route."),(0,o.kt)(d,{defaultValue:"resources",values:[{label:(0,o.kt)(a.Fragment,null,"In",(0,o.kt)("code",{style:{margin:"0 0.7ch"}},"resources"),"prop"),value:"resources"},{label:"In Custom Components",value:"custom"}],mdxType:"Tabs"},(0,o.kt)(u,{value:"resources",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Layout, refineTheme } from "@refinedev/chakra-ui";\nimport { ChakraProvider } from "@chakra-ui/react";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nconst App = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <BrowserRouter>\n                <Refine\n                    routerProvider={routerProvider}\n                    resources={[\n                        {\n                            name: "samples",\n                            list: "/samples",\n                        },\n                    ]}\n                >\n                    <Routes>\n                        {/* highlight-next-line */}\n                        <Route\n                            path="/samples"\n                            element={<ChakraUIInferencer />}\n                        />\n                    </Routes>\n                </Refine>\n            </BrowserRouter>\n        </ChakraProvider>\n    );\n};\n'))),(0,o.kt)(u,{value:"custom",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nconst SampleList = () => {\n    return (\n        // highlight-next-line\n        <ChakraUIInferencer resource="samples" action="list" />\n    );\n};\n\nconst SampleShow = () => {\n    return (\n        // highlight-next-line\n        <ChakraUIInferencer resource="samples" action="show" id="1" />\n    );\n};\n\nconst SampleCreate = () => {\n    return (\n        // highlight-next-line\n        <ChakraUIInferencer resource="samples" action="create" />\n    );\n};\n\nconst SampleEdit = () => {\n    return (\n        // highlight-next-line\n        <ChakraUIInferencer resource="samples" action="edit" id="1" />\n    );\n};\n')))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To learn more about ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer")," package, please check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/inferencer"},"Docs"))),(0,o.kt)("h2",{id:"views"},"Views"),(0,o.kt)("h3",{id:"list"},(0,o.kt)("inlineCode",{parentName:"h3"},"List")),(0,o.kt)("p",null,"Generates a sample list view for your resources according to the API response. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," component from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/chakra-ui")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useTable")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/react-table"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples"},'setInitialRoutes(["/samples"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport { ThemedLayoutV2, RefineThemes } from "@refinedev/chakra-ui";\nimport { ChakraProvider } from "@chakra-ui/react";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <ChakraProvider theme={RefineThemes.Blue}>\n            <BrowserRouter>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(API_URL)}\n                    resources={[\n                        {\n                            name: "samples",\n                            list: "/samples",\n                        },\n                    ]}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <ThemedLayoutV2>\n                                    <Outlet />\n                                </ThemedLayoutV2>\n                            }\n                        >\n                            {/* highlight-next-line */}\n                            <Route\n                                path="/samples"\n                                element={<ChakraUIInferencer />}\n                            />\n                        </Route>\n                    </Routes>\n                </Refine>\n            </BrowserRouter>\n        </ChakraProvider>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"show"},(0,o.kt)("inlineCode",{parentName:"h3"},"Show")),(0,o.kt)("p",null,"Generates a sample show view for your resources according to the API response. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Show")," and field components from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/chakra-ui")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"useShow")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/core"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/show/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/show/123"},'setInitialRoutes(["/samples/show/123"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport { ThemedLayoutV2, RefineThemes } from "@refinedev/chakra-ui";\nimport { ChakraProvider } from "@chakra-ui/react";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <ChakraProvider theme={RefineThemes.Blue}>\n            <BrowserRouter>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(API_URL)}\n                    resources={[\n                        {\n                            name: "samples",\n                            show: "/samples/show/:id",\n                        },\n                    ]}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <ThemedLayoutV2>\n                                    <Outlet />\n                                </ThemedLayoutV2>\n                            }\n                        >\n                            {/* highlight-next-line */}\n                            <Route\n                                path="/samples/show/:id"\n                                element={<ChakraUIInferencer />}\n                            />\n                        </Route>\n                    </Routes>\n                </Refine>\n            </BrowserRouter>\n        </ChakraProvider>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"create"},(0,o.kt)("inlineCode",{parentName:"h3"},"Create")),(0,o.kt)("p",null,"Generates a sample create view for your resources according to the first record in list API response. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Create")," component from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/chakra-ui")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/react-hook-form"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/create",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/create"},'setInitialRoutes(["/samples/create"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport { ThemedLayoutV2, RefineThemes } from "@refinedev/chakra-ui";\nimport { ChakraProvider } from "@chakra-ui/react";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <ChakraProvider theme={RefineThemes.Blue}>\n            <BrowserRouter>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(API_URL)}\n                    resources={[\n                        {\n                            name: "samples",\n                            create: "/samples/create",\n                        },\n                    ]}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <ThemedLayoutV2>\n                                    <Outlet />\n                                </ThemedLayoutV2>\n                            }\n                        >\n                            {/* highlight-next-line */}\n                            <Route\n                                path="/samples/create"\n                                element={<ChakraUIInferencer />}\n                            />\n                        </Route>\n                    </Routes>\n                </Refine>\n            </BrowserRouter>\n        </ChakraProvider>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"edit"},(0,o.kt)("inlineCode",{parentName:"h3"},"Edit")),(0,o.kt)("p",null,"Generates a sample edit view for your resources according to the API response. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit")," component from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/chakra-ui")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/react-hook-form"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/edit/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/edit/123"},'setInitialRoutes(["/samples/edit/123"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport { ThemedLayoutV2, RefineThemes } from "@refinedev/chakra-ui";\nimport { ChakraProvider } from "@chakra-ui/react";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <ChakraProvider theme={RefineThemes.Blue}>\n            <BrowserRouter>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(API_URL)}\n                    resources={[\n                        {\n                            name: "samples",\n                            edit: "/samples/edit/:id",\n                        },\n                    ]}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <ThemedLayoutV2>\n                                    <Outlet />\n                                </ThemedLayoutV2>\n                            }\n                        >\n                            {/* highlight-next-line */}\n                            <Route\n                                path="/samples/edit/:id"\n                                element={<ChakraUIInferencer />}\n                            />\n                        </Route>\n                    </Routes>\n                </Refine>\n            </BrowserRouter>\n        </ChakraProvider>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Below you'll find a Live CodeSandbox Example displaying a fully setup ",(0,o.kt)("inlineCode",{parentName:"p"},"Refine")," app with ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer/chakra-ui")," components."),(0,o.kt)(h,{path:"inferencer-chakra-ui",mdxType:"CodeSandboxExample"}))}k.isMDXComponent=!0}}]);