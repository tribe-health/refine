"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28600],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var m=r.createContext({}),u=function(e){var t=r.useContext(m),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(o),d=n,g=s["".concat(m,".").concat(d)]||s[d]||c[d]||a;return o?r.createElement(g,i(i({ref:t},p),{},{components:o})):r.createElement(g,i({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=s;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}s.displayName="MDXCreateElement"},4870:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const a={title:"Material UI button in React",description:"A complete guide on using Material UI (MUI) button in a React app",slug:"mui-button-in-react",authors:"doro_onome",tags:["material-ui","react","mui","mui-button"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-05-mui-button/social.png",hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/mui-button-in-react",source:"@site/blog/2022-09-05-mui-button.md",title:"Material UI button in React",description:"A complete guide on using Material UI (MUI) button in a React app",date:"2022-09-05T00:00:00.000Z",formattedDate:"September 5, 2022",tags:[{label:"material-ui",permalink:"/blog/tags/material-ui"},{label:"react",permalink:"/blog/tags/react"},{label:"mui",permalink:"/blog/tags/mui"},{label:"mui-button",permalink:"/blog/tags/mui-button"}],readingTime:9.04,hasTruncateMarker:!0,authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],frontMatter:{title:"Material UI button in React",description:"A complete guide on using Material UI (MUI) button in a React app",slug:"mui-button-in-react",authors:"doro_onome",tags:["material-ui","react","mui","mui-button"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-05-mui-button/social.png",hide_table_of_contents:!1},prevItem:{title:"How to become a modern Node.js developer?",permalink:"/blog/node-js-developer-skills"},nextItem:{title:"Introduction to Next.js Link component with examples",permalink:"/blog/next-js-link-component"},relatedPosts:[{title:"Top React Component Libraries and Frameworks Every Developer Should Know",permalink:"/blog/top-react-component-libraries-and-frameworks-every-developer-should-know",formattedDate:"April 29, 2022",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:4.8,date:"2022-04-29T00:00:00.000Z"},{title:"Building a Complete React CRUD App with Airtable",permalink:"/blog/react-crud-app-airtable",formattedDate:"January 17, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:26.005,date:"2023-01-17T00:00:00.000Z"},{title:"How to use Material UI Card Component",permalink:"/blog/material-ui-card",formattedDate:"January 4, 2023",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:12.05,date:"2023-01-04T00:00:00.000Z"}],authorPosts:[{title:"How to use Material UI Card Component",permalink:"/blog/material-ui-card",formattedDate:"January 4, 2023",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:12.05,date:"2023-01-04T00:00:00.000Z"},{title:"How to use Material UI Checkbox",permalink:"/blog/material-ui-checkbox-component",formattedDate:"December 15, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.36,date:"2022-12-15T00:00:00.000Z"},{title:"How to use Material UI Tooltip",permalink:"/blog/material-ui-tooltip-component",formattedDate:"November 29, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:8.38,date:"2022-11-29T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Material UI is a dynamic React library because it provides numerous component infrastructures for responsive web design. One such essential component is the ",(0,n.kt)("inlineCode",{parentName:"p"},"Button"),". "),(0,n.kt)("p",null,"In this article, we will deeply explore the MUI ",(0,n.kt)("inlineCode",{parentName:"p"},"Button")," component, its variants, and the different ways it can be used in a React application."))}c.isMDXComponent=!0}}]);