"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,p(p({ref:t},c),{},{components:n})):a.createElement(f,p({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={id:"quickstart",title:"Quick Start Guide"},p=void 0,i={unversionedId:"getting-started/quickstart",id:"version-3.xx.xx/getting-started/quickstart",title:"Quick Start Guide",description:"refine works on any environment you can run React (incl. CRA, Next.js, Remix, Vite etc.)",source:"@site/versioned_docs/version-3.xx.xx/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/docs/3.xx.xx/getting-started/quickstart",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/getting-started/quickstart.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1683035623,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{id:"quickstart",title:"Quick Start Guide"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/3.xx.xx/"},next:{title:"API Reference",permalink:"/docs/3.xx.xx/api-reference"}},s={},l=[{value:"Quick Start Example",id:"quick-start-example",level:2},{value:"Next Steps",id:"next-steps",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," works on any environment you can run ",(0,r.kt)("strong",{parentName:"p"},"React")," (incl. ",(0,r.kt)("em",{parentName:"p"},"CRA, Next.js, Remix, Vite")," etc.)"),(0,r.kt)("p",null,"Although you could take the time to manually set up your environment and install ",(0,r.kt)("strong",{parentName:"p"},"refine")," packages afterwards, the smart way to get started with ",(0,r.kt)("strong",{parentName:"p"},"refine")," is using the project starter tool. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"create refine-app")," provides built-in templates for ",(0,r.kt)("em",{parentName:"p"},"CRA"),", ",(0,r.kt)("em",{parentName:"p"},"Next.js")," and ",(0,r.kt)("em",{parentName:"p"},"Remix")," environments so you can bootstrap a ",(0,r.kt)("strong",{parentName:"p"},"refine")," project in a couple of minutes. It also offers a wide range of options that you can automatically configure for your ",(0,r.kt)("em",{parentName:"p"},"UI framework"),", ",(0,r.kt)("em",{parentName:"p"},"i18n"),", ",(0,r.kt)("em",{parentName:"p"},"router"),", ",(0,r.kt)("em",{parentName:"p"},"Auth.")," and ",(0,r.kt)("em",{parentName:"p"},"data provider")," settings."),(0,r.kt)("p",null,"To get started, please run the following command. The ",(0,r.kt)("strong",{parentName:"p"},"CLI wizard")," will assist you for the rest of the setup process:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm create refine-app@latest my-project\n")),(0,r.kt)("p",null,"It will create your ",(0,r.kt)("strong",{parentName:"p"},"refine")," project and install the required packages according to your selections. After completing the setup, navigate to the project folder and start your application with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run dev\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"You can now view ",(0,r.kt)("strong",{parentName:"p"},"refine")," application at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),":"),(0,r.kt)("h2",{id:"quick-start-example"},"Quick Start Example"),(0,r.kt)("p",null,"We will show how you can use the CLI to bootstrap a ",(0,r.kt)("strong",{parentName:"p"},"refine")," app with ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/"},"Ant Design")," and ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),". You can also use ",(0,r.kt)("a",{parentName:"p",href:"https://material-ui.com/"},"Material UI"),", ",(0,r.kt)("a",{parentName:"p",href:"https://chakra-ui.com/"},"Chakra UI")," and ",(0,r.kt)("a",{parentName:"p",href:"https://mantine.dev/"},"Mantine")," as well."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm create refine-app@latest  my-antd-project\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Select the following options to complete CLI wizard:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"? Select your project type: \n\u276f refine-react\n\n? Do you want to use a UI Framework?:\n\u276f Ant Design\n\n? Do you want a customized theme?:\n\u276f Default theme\n\n? Router Provider:\n\u276f React Router v6\n\n? Data Provider:\n\u276f REST API\n\n? Auth Provider:\n\u276f None\n\n? Do you want to add example pages? \n\u276f Yes\n\n? Do you want a customized layout?\n\u276f No\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," We only show important options for this example. You can prefer to select other options like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/timc1/kbar"},"Kbar")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.i18next.com/"},"i18n"),". Different options selections may be result in a different project structure.")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Once the setup is complete, navigate to the project folder and start your project with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run dev\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"You can now view ",(0,r.kt)("strong",{parentName:"p"},"refine")," application at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," and you should see the output as a table populated with ",(0,r.kt)("inlineCode",{parentName:"p"},"post")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," data with filter, sort, and pagination features"),(0,r.kt)("div",null,(0,r.kt)("img",{style:{width:"100%"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/first-example-result.png",alt:"Example result"})),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Since we selected the ",(0,r.kt)("inlineCode",{parentName:"p"},"Do you want to add example pages?")," option as ",(0,r.kt)("inlineCode",{parentName:"p"},"Yes")," during the CLI project creation phase, refine adds example CRUD pages and the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," to the app. You can navigate to the example pages and try out the CRUD operations features."),(0,r.kt)("p",{parentName:"admonition"},"We always recommend to add example pages to your project to get a better understanding of how ",(0,r.kt)("strong",{parentName:"p"},"refine")," works.")),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"\ud83d\udc49 Jump to ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/"},"Tutorials")," to continue your work and turn the example into a full-blown CRUD application."),(0,r.kt)("p",null,"\ud83d\udc49 Read more on ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/advanced-tutorials/"},"Advanced Tutorials")," for different usage scenarios."),(0,r.kt)("p",null,"\ud83d\udc49 See the ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/examples/"},"real-life examples")," built using refine"))}u.isMDXComponent=!0}}]);