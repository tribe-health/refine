"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78078],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>g});var o=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=o.createContext({}),m=function(e){var t=o.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=m(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(i),g=n,h=u["".concat(c,".").concat(g)]||u[g]||s[g]||a;return i?o.createElement(h,r(r({ref:t},p),{},{components:i})):o.createElement(h,r({ref:t},p))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,r=new Array(a);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var m=2;m<a;m++)r[m]=i[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}u.displayName="MDXCreateElement"},10404:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var o=i(87462),n=(i(67294),i(3905));i(28029),i(90318);const a={title:"How to upload files from your HTML form using Base64 encoding",description:"Uploading files using Base64 encoding is a common practice. In this guide, I'm going to show you how to upload files using base64 encoding",slug:"how-to-base64-upload",authors:"melih",tags:["JavaScript","how-to","base64","file-upload"],image:"/img/placeholder.png",hide_table_of_contents:!1},r=void 0,l={permalink:"/blog/how-to-base64-upload",source:"@site/blog/2021-12-22-base64-upload.md",title:"How to upload files from your HTML form using Base64 encoding",description:"Uploading files using Base64 encoding is a common practice. In this guide, I'm going to show you how to upload files using base64 encoding",date:"2021-12-22T00:00:00.000Z",formattedDate:"December 22, 2021",tags:[{label:"JavaScript",permalink:"/blog/tags/java-script"},{label:"how-to",permalink:"/blog/tags/how-to"},{label:"base64",permalink:"/blog/tags/base-64"},{label:"file-upload",permalink:"/blog/tags/file-upload"}],readingTime:3.575,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"How to upload files from your HTML form using Base64 encoding",description:"Uploading files using Base64 encoding is a common practice. In this guide, I'm going to show you how to upload files using base64 encoding",slug:"how-to-base64-upload",authors:"melih",tags:["JavaScript","how-to","base64","file-upload"],image:"/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"How to Multipart File Upload Using FormData with HTML",permalink:"/blog/how-to-multipart-upload"},nextItem:{title:"Web3 with Refine",permalink:"/blog/web3-with-refine"},relatedPosts:[{title:"How to Multipart File Upload Using FormData with HTML",permalink:"/blog/how-to-multipart-upload",formattedDate:"December 27, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:2.935,date:"2021-12-27T00:00:00.000Z"},{title:"How to Import CSV File with React",permalink:"/blog/how-to-import-csv",formattedDate:"January 18, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.28,date:"2022-01-18T00:00:00.000Z"},{title:"How to Multipart File Upload Using FormData with React Hook Form",permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",formattedDate:"March 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.615,date:"2022-03-29T00:00:00.000Z"}],authorPosts:[{title:"ReactJS Frameworks You Should Know Before Start Developing B2B/Internal Application",permalink:"/blog/best-internal-tool-react-frameworks",formattedDate:"March 16, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.61,date:"2022-03-16T00:00:00.000Z"},{title:"Web3 with Refine",permalink:"/blog/web3-with-refine",formattedDate:"December 13, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:1.72,date:"2021-12-13T00:00:00.000Z"},{title:"Create Full Featured Admin Panel with React and Ant Design",permalink:"/blog/refine-react-ant-design-admin-panel-framework",formattedDate:"February 21, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:12.8,date:"2022-02-21T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[],p={toc:m};function s(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Uploading files using Base64 encoding is a common practice. In this guide, I'm going to show you how to upload files using base64 encoding"))}s.isMDXComponent=!0},90318:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/overview-d7796f796ff01018f96c182efa0c8c52.png"},28029:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/upload-18806eb77c8bdb4c67d067f086a659f0.png"}}]);