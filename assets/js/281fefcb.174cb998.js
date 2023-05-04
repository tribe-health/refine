"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71991],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(r),h=n,g=m["".concat(l,".").concat(h)]||m[h]||c[h]||o;return r?a.createElement(g,i(i({ref:t},d),{},{components:r})):a.createElement(g,i({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90528:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={id:"add-create-page",title:"4. Adding Create Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-show-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature"}},i=void 0,p={unversionedId:"tutorial/adding-crud-pages/headless/add-create-page",id:"version-3.xx.xx/tutorial/adding-crud-pages/headless/add-create-page",title:"4. Adding Create Page",description:"Create page is the page where you can create the record. In this tutorial, we will create the create page for the blog_posts resource.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/headless/add-create-page.md",sourceDirName:"tutorial/4-adding-crud-pages/headless",slug:"/tutorial/adding-crud-pages/headless/add-create-page",permalink:"/docs/3.xx.xx/tutorial/adding-crud-pages/headless/add-create-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/headless/add-create-page.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1683210489,formattedLastUpdatedAt:"May 4, 2023",frontMatter:{id:"add-create-page",title:"4. Adding Create Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-show-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature"}}},l={},s=[{value:"Creating Create Page",id:"creating-create-page",level:2},{value:"Understanding the Create Component",id:"understanding-the-create-component",level:2},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the Create Page to the App",id:"adding-the-create-page-to-the-app",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},c=d("Checklist"),m=d("ChecklistItem"),h={toc:s};function g(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Create page is the page where you can create the record. In this tutorial, we will create the create page for the ",(0,n.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource."),(0,n.kt)("h2",{id:"creating-create-page"},"Creating Create Page"),(0,n.kt)("p",null,"First, let's create our file under the ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts")," folder. We will name it ",(0,n.kt)("inlineCode",{parentName:"p"},"create.tsx"),". Then, we will copy the create page code generated by Inferencer and paste it into the file."),(0,n.kt)("p",null,"To copy the code and paste it into the file, follow the steps below:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to the ",(0,n.kt)("a",{href:"http://localhost:3000/blog-posts",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts")," in your browser.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'To open the create page, click the "Create" button in the top right corner of the table.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'On the create page, click on the "Show Code" button in the bottom right corner of the page.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'You can see the create page code generated by Inferencer. Click on the "Copy" button to copy the code.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Paste the code into the you created, ",(0,n.kt)("inlineCode",{parentName:"p"},"create.tsx")," file."))),(0,n.kt)("p",null,"You can see the create page code generated by Inferencer below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/create"},'setInitialRoutes(["/blog-posts/create"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { HeadlessInferencer } from "@pankod/refine-inferencer/headless";\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "blog_posts",\n                    list: HeadlessInferencer,\n                    show: HeadlessInferencer,\n                    create: HeadlessInferencer,\n                    edit: HeadlessInferencer,\n                },\n            ]}\n        />\n    );\n};\nrender(<App />);\n')),(0,n.kt)("p",null,"Instead of coding the create page component from scratch, Inferencer've created the required code base on API response, so that we can customize."),(0,n.kt)("h2",{id:"understanding-the-create-component"},"Understanding the Create Component"),(0,n.kt)("p",null,"We will go through the create page hooks one by one."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"useForm")," hook, imported from ",(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-hook-form")," package, has been developed by using the ",(0,n.kt)("strong",{parentName:"p"},"React Hook Form")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"useForm")," hook imported from ",(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core")," package."),(0,n.kt)("p",{parentName:"li"},"It provides all the features of the ",(0,n.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core")," package as well as the ",(0,n.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,n.kt)("strong",{parentName:"p"},"React Hook Form"),"."),(0,n.kt)("p",{parentName:"li"},"It also provides the ",(0,n.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," prop that we can pass to the submit button of the form."),(0,n.kt)("p",{parentName:"li"},"When you use ",(0,n.kt)("inlineCode",{parentName:"p"},"useForm")," in the create page, it sends the form data to ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"create")," method when the form is submitted."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm/"},"Refer to the ",(0,n.kt)("strong",{parentName:"a"},"@pankod/refine-react-hook-form")," ",(0,n.kt)("inlineCode",{parentName:"a"},"useForm")," documentation for more information ","\u2192")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://react-hook-form.com/"},"Refer to the ",(0,n.kt)("strong",{parentName:"a"},"React Hook Form")," documentation for more information ","\u2192"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"useNavigation")," is a ",(0,n.kt)("strong",{parentName:"p"},"refine")," hook that is used to navigate between pages. In this case, we are using it to navigate to the ",(0,n.kt)("inlineCode",{parentName:"p"},"list"),' page when user clicks the "Blog Posts List" button.'),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation/"},"Refer to the ",(0,n.kt)("inlineCode",{parentName:"a"},"useNavigation")," documentation for more information ","\u2192")))),(0,n.kt)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,n.kt)("p",null,"In the create page, we may need to select a record from another resource. For example, we may need to select a category from the ",(0,n.kt)("inlineCode",{parentName:"p"},"categories")," resource to assign the blog post to the category. In this case, we can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"useSelect")," hook provided by ",(0,n.kt)("strong",{parentName:"p"},"refine"),". This hook fetches the data by passing the resource name to the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"getList")," method. Then, it returns the ",(0,n.kt)("inlineCode",{parentName:"p"},"options")," to be used in the ",(0,n.kt)("inlineCode",{parentName:"p"},"<select/>")," component."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useSelect/"},"Refer to the ",(0,n.kt)("inlineCode",{parentName:"a"},"useSelect")," documentation for more information ","\u2192")),(0,n.kt)("p",null,"In the auto-generated create page code, Inferencer used the ",(0,n.kt)("inlineCode",{parentName:"p"},"useSelect")," hook to select a category from the ",(0,n.kt)("inlineCode",{parentName:"p"},"categories")," resource like below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options: categoryOptions } = useSelect({\n    resource: "categories",\n});\n')),(0,n.kt)("h2",{id:"adding-the-create-page-to-the-app"},"Adding the Create Page to the App"),(0,n.kt)("p",null,"Now that we have created the create page, we need to add it to the ",(0,n.kt)("inlineCode",{parentName:"p"},"App.tsx")," file."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Import the created ",(0,n.kt)("inlineCode",{parentName:"p"},"BlogPostCreate")," component.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Replace the ",(0,n.kt)("inlineCode",{parentName:"p"},"HeadlessInferencer")," component with the ",(0,n.kt)("inlineCode",{parentName:"p"},"BlogPostCreate")," component."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport { BlogPostList } from "pages/blog-posts/list";\nimport { BlogPostEdit } from "pages/blog-posts/edit";\nimport { BlogPostShow } from "pages/blog-posts/show";\n//highlight-next-line\nimport { BlogPostCreate } from "pages/blog-posts/create";\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "blog_posts",\n                    list: BlogPostList,\n                    edit: BlogPostEdit,\n                    show: BlogPostShow,\n                    //highlight-next-line\n                    create: BlogPostCreate,\n                },\n            ]}\n        />\n    );\n};\nexport default App;\n')),(0,n.kt)("p",null,"Now, we can see the create page in the browser at ",(0,n.kt)("a",{href:"http://localhost:3000/blog-posts/create",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/create")),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(c,{mdxType:"Checklist"},(0,n.kt)(m,{id:"add-create-page-headless",mdxType:"ChecklistItem"},"I added the create page to the app."),(0,n.kt)(m,{id:"add-create-page-headless-2",mdxType:"ChecklistItem"},"I understood the create page components and hooks."),(0,n.kt)(m,{id:"add-create-page-headless-3",mdxType:"ChecklistItem"},"I understood the relationship handling.")))}g.isMDXComponent=!0}}]);