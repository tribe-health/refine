"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75487],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(a),g=n,f=u["".concat(s,".").concat(g)]||u[g]||p[g]||i;return a?r.createElement(f,o(o({ref:t},m),{},{components:a})):r.createElement(f,o({ref:t},m))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},90979:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));a(86564),a(97354),a(47634),a(14710),a(13566),a(91718),a(22741);const i={title:"Framer Motion examples for React animations",description:"Framer Motion tutorial - Create text and image animations in React apps easily.",slug:"framer-motion-react-animations",authors:"joel_ezimorah",tags:["css","react","animation","framer-motion"],image:"/img/blog/2022-09-01-framer-text-animations/social.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/framer-motion-react-animations",source:"@site/blog/2022-09-01-framer-text-animations.md",title:"Framer Motion examples for React animations",description:"Framer Motion tutorial - Create text and image animations in React apps easily.",date:"2022-09-01T00:00:00.000Z",formattedDate:"September 1, 2022",tags:[{label:"css",permalink:"/blog/tags/css"},{label:"react",permalink:"/blog/tags/react"},{label:"animation",permalink:"/blog/tags/animation"},{label:"framer-motion",permalink:"/blog/tags/framer-motion"}],readingTime:8.78,hasTruncateMarker:!0,authors:[{name:"Joel Ezimorah",title:"Software Developer",url:"https://github.com/prince-joel",imageURL:"https://github.com/prince-joel.png",key:"joel_ezimorah"}],frontMatter:{title:"Framer Motion examples for React animations",description:"Framer Motion tutorial - Create text and image animations in React apps easily.",slug:"framer-motion-react-animations",authors:"joel_ezimorah",tags:["css","react","animation","framer-motion"],image:"/img/blog/2022-09-01-framer-text-animations/social.png",hide_table_of_contents:!1},prevItem:{title:"How to create a CRUD app with SvelteKit",permalink:"/blog/sveltekit-crud-app-with-svelte-mui"},nextItem:{title:"Using Google Lighthouse to improve app performance",permalink:"/blog/lighthouse-google-chrome"},relatedPosts:[{title:"Material UI Grid System in React",permalink:"/blog/material-ui-grid",formattedDate:"September 18, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:13.25,date:"2022-09-18T00:00:00.000Z"},{title:"10 High-Quality Free Resources That Will Make Every Web Developer's Life Easier",permalink:"/blog/10-high-quality-free-resources",formattedDate:"May 2, 2022",authors:[{name:"Ayd\u0131n Akyol",title:"Software Developer",url:"https://github.com/biskuvit",imageURL:"https://github.com/biskuvit.png",key:"aydin"}],readingTime:4.225,date:"2022-05-02T00:00:00.000Z"},{title:"Create Full Featured Admin Panel with React and Ant Design",permalink:"/blog/refine-react-ant-design-admin-panel-framework",formattedDate:"February 21, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:12.8,date:"2022-02-21T00:00:00.000Z"}],authorPosts:[]},s={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2}],m={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"When a tool like Framer Motion is available, why write many lines of CSS code to create an animation? Web applications look more exciting and beautiful when they are animated."),(0,n.kt)("p",null," Many developers avoid adding animation to their web applications since animation codes can be rigorous to write. However, with Framer Motion, you can execute animations with only a few lines of code. This external library in React.js makes animation incredibly simple, allowing the developer to concentrate on other aspects of the project."),(0,n.kt)("p",null,"In this article, we'll examine Framer Motion's functionality, installation process, and usability by using it to animate text and images."))}p.isMDXComponent=!0},86564:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/photos-1-a65c35e7ff3d9a5ced8f6661500c0e3f.gif"},97354:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/photos-2-da8c8684937cf9061d2f21c0fd3ca991.gif"},47634:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/photos-3-cb710a456c88ca8ee82efb9579edf973.gif"},14710:(e,t,a)=>{a.p},13566:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/scale1-cadce7ecae97e8baec61e0eec00aec8e.gif"},91718:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/scale2-38d1f1ed6fa238404f6420af64c45b01.gif"},22741:(e,t,a)=>{a.p}}]);