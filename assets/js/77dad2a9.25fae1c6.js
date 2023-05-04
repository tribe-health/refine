"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[93661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"React 18 Upgrade Guide and New Features",description:"React 18 was released! Are you looking to upgrade to React 18?  Learn about the new features and changes in this comprehensive guide.",slug:"react-18-upgrade-guide",authors:"joel_adewole",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-09-react-18/social.jpeg",featured_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-09-react-18/featured.png",is_featured:!0,hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/react-18-upgrade-guide",source:"@site/blog/2022-09-09-react-18.md",title:"React 18 Upgrade Guide and New Features",description:"React 18 was released! Are you looking to upgrade to React 18?  Learn about the new features and changes in this comprehensive guide.",date:"2022-09-09T00:00:00.000Z",formattedDate:"September 9, 2022",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:8.07,hasTruncateMarker:!1,authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],frontMatter:{title:"React 18 Upgrade Guide and New Features",description:"React 18 was released! Are you looking to upgrade to React 18?  Learn about the new features and changes in this comprehensive guide.",slug:"react-18-upgrade-guide",authors:"joel_adewole",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-09-react-18/social.jpeg",featured_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-09-react-18/featured.png",is_featured:!0,hide_table_of_contents:!1},prevItem:{title:"Build a Progressive Web App (PWA) with Next.js",permalink:"/blog/next-js-pwa"},nextItem:{title:"refine swag store is now open!",permalink:"/blog/refine-swag-store"},relatedPosts:[{title:"Build internal tools using Low-Code with refine, React-based framework",permalink:"/blog/build-internal-tools-using-low-code-with-refine",formattedDate:"February 21, 2022",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:9.675,date:"2022-02-21T00:00:00.000Z"},{title:"React Props Explained with Examples",permalink:"/blog/react-props",formattedDate:"November 16, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:11.01,date:"2022-11-16T00:00:00.000Z"},{title:"Refine vs AdminBro - Comparison Admin Panel Framework",permalink:"/blog/refine-vs-adminbro",formattedDate:"November 29, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:13.495,date:"2021-11-29T00:00:00.000Z"}],authorPosts:[{title:"Understanding the React useRef Hook",permalink:"/blog/react-useref-hook-and-ref",formattedDate:"October 26, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:8.19,date:"2022-10-26T00:00:00.000Z"},{title:"A Quick Start Guide to React Suspense",permalink:"/blog/react-suspense-guide",formattedDate:"September 23, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:4.55,date:"2022-09-23T00:00:00.000Z"},{title:"Neumorphism with CSS - A new design trend",permalink:"/blog/neumorphic-css",formattedDate:"August 20, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:8.26,date:"2022-08-20T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Upgrading to React 18",id:"upgrading-to-react-18",level:2},{value:"Client Rendering",id:"client-rendering",level:2},{value:"Hydration",id:"hydration",level:2},{value:"Render Callback",id:"render-callback",level:2},{value:"Automatic Batching",id:"automatic-batching",level:2},{value:"Transitions",id:"transitions",level:2},{value:"Dropped support for Internet Explorer",id:"dropped-support-for-internet-explorer",level:2}],p=(d="PromotionBanner",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const u={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Since updates frequently include modifications that changes features completely or even eliminate certain features and add others, some developers may find it difficult to transition between different versions of libraries. It is better to use the most recent versions of libraries to get the best performance possible."),(0,r.kt)("p",null,"You can either create a new React project or reinstall React in an existing project to migrate from ",(0,r.kt)("strong",{parentName:"p"},"React 17 to React 18"),"."),(0,r.kt)("p",null,"This article will discuss what ",(0,r.kt)("strong",{parentName:"p"},"React 18")," is, issues with React 17, new features in React 18, and reasons why you should use the most recent version. You should be familiar with JavaScript, React, and NPM to follow along with this article."),(0,r.kt)("p",null,"Step we'll cover:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#what-is-react-18"},"What is React 18"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#upgrading-to-react-18"},"Upgrading to React 18")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#issues-with-react-17"},"Issues with React 17")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#what-changed-in-react-18"},"What changed in React 18"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#client-rendering"},"Client Rendering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#hydration"},"Hydration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#render-callback"},"Render Callback")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#automatic-batching"},"Automatic Batching")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#transitions"},"Transitions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dropped-support-for-internet-explorer"},"Dropped support for Internet Explorer")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#benefits-of-react-18-over-react-17"},"Benefits of React 18 over React 17"))),(0,r.kt)("h1",{id:"what-is-react-18"},"What is React 18"),(0,r.kt)("p",null,"Before we look into ",(0,r.kt)("strong",{parentName:"p"},"\u201cWhat\u2019s new in React 18\u201d"),", what does React 18 mean?\nAny stable version of the React library from 18.0.0 upwards but not including 19.0.0 is known as React 18. "),(0,r.kt)("p",null,"The creation of React 18 introduced concurrent rendering in React applications. React has been taking care of DOM rendering and giving developers tools to control and track component lifecycle. With some new capabilities, React 18 can now adapt the rendering process to suit client devices."),(0,r.kt)("h2",{id:"upgrading-to-react-18"},"Upgrading to React 18"),(0,r.kt)("p",null,"The React community offers a variety of installation options. To install React 18 in your application, you can use the CDN URL as the source(src) in an HTML script tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'  \x3c!-- Load React. --\x3e\n  \x3c!-- Note: when deploying, replace "development.js" with "production.min.js". --\x3e\n  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin><\/script>  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin><\/script>\n  \x3c!-- Load our React component. --\x3e\n  <script src="app.js"><\/script>\n</body>\n')),(0,r.kt)("p",null,"By executing the following commands in a terminal of your working directory, you can upgrade or ",(0,r.kt)("strong",{parentName:"p"},"install React 18")," using NPM or Yarn for single-page and bundled applications.\nFor NPM:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install react react-dom\n")),(0,r.kt)("p",null,"For Yarn:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn add react react-dom\n")),(0,r.kt)("p",null,"The above commands will automatically detect and install or upgrade the most recent React and React DOM versions in your development environment."),(0,r.kt)("h1",{id:"issues-with-react-17"},"Issues with React 17"),(0,r.kt)("p",null,"The React community has noticed some issues or problems with the library which require improvement. **React 18 and higher versions wouldn't need to be released if React 17 was functioning flawlessly."),(0,r.kt)("p",null,"According to ",(0,r.kt)("strong",{parentName:"p"},"the changelog of React 18.0.0"),", the following issues with React 17 or earlier were addressed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Render throws an error if ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," is returned: When a component returns a value of ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),", the application will break.")),(0,r.kt)("p",null,"The application displays the following error:"),(0,r.kt)("br",null),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-09-react-18/firstError.png",alt:"firstError"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"You will also notice the error below in your console:"),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-09-react-18/secondError.png",alt:"secondError"})),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setState")," of unmounted component gives a warning: In an attempt to update the state of an unmounted component, React might warn you of a memory leak.")),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-09-react-18/thirdError.png",alt:"thirdError"})),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Strict mode console log suppression: From community feedback, it was noticed that the suppression of the console log message when using Strict Mode creates confusion since only one shows instead of two.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Memory consumption: React 17 and earlier had issues with memory leaks, especially in unmounted components."))),(0,r.kt)("h1",{id:"what-changed-in-react-18"},"What changed in React 18"),(0,r.kt)("p",null,"More emphasis is made on application concurrency in React 18. This idea includes functions such as Automatic Batching, Transition, and Suspense, as well as APIs like createRoot, hydrateRoot, renderToPipeableStream, and renderToReadableStream. It also includes hooks such as useId, useTransition, useDeferredValue, useSyncExternalStore, and useInsertionEffect, as well as updates on Strict Mode and the deprecation of ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactDOM.render")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"renderToString"),"."),(0,r.kt)("p",null,"Let\u2019s take a deeper look at these changes \ud83d\udc40:"),(0,r.kt)("h2",{id:"client-rendering"},"Client Rendering"),(0,r.kt)("p",null,"You might want to keep an eye out for the console warning listed below after an upgrade: "),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-09-react-18/clientError.png",alt:"clientError"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"If you continue to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactDOM.render()"),' API supported in React 17; you will see this warning. Typically, we import a component and render it inside a div element with the id=app".'),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import ReactDOM from 'react-dom';\nimport App from 'App';\n\nconst app = document.getElementById('app');\n\nReactDOM.render(<App />, app);\n")),(0,r.kt)("p",null,"In React 18, as in the following code sample, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"createRoot()"),' API imported from "react-dom/client":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createRoot } from 'react-dom/client';\nimport App from 'App';\n\nconst app = document.getElementById('app');\n\n// create a root\nconst root = createRoot(app);\n\n//render app to root\nroot.render(<App />);\n")),(0,r.kt)("h2",{id:"hydration"},"Hydration"),(0,r.kt)("p",null,"React 17 used the ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactDOM.hydrate()")," API for rendering with hydration, as in the following code sample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import * as ReactDOM from 'react-dom';\nimport App from 'App';\n\nconst app = document.getElementById('app');\n\n// Render with hydration.\nReactDOM.hydrate(<App tab=\"home\" />, app);\n")),(0,r.kt)("p",null,"In React 18, hydration uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"hydrateRoot()")," API imported from \u201creact-dom/client\u201d and doesn\u2019t require a separate ",(0,r.kt)("inlineCode",{parentName:"p"},"render()")," method as in the code snippet below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import {hydrateRoot} from 'react-dom/client';\n\nimport App from 'App';\n\nconst app = document.getElementById('app');\n\nconst root = hydrateRoot(app, <App tab=\"home\" />);\n")),(0,r.kt)("hr",null),(0,r.kt)(p,{title:"Tired of looking for the best template for your B2B app?",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/diagram.png",mdxType:"PromotionBanner"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"render-callback"},"Render Callback"),(0,r.kt)("p",null,"You could pass a callback function when rendering the root component so that it would execute after the component renders or updates. "),(0,r.kt)("p",null,"In the render method of React 17, you could pass a callback function as the third argument, as in the code snippet below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import * as ReactDOM from 'react-dom';\nimport App from 'App';\n\nconst app = document.getElementById('app');\n\nReactDOM.render(app, <App tab=\"home\" />, function() {\n  // Called after initial render or any update.\n  console.log('Rendered or Updated').\n});\n")),(0,r.kt)("p",null,"The callback function is not allowed in ",(0,r.kt)("strong",{parentName:"p"},"React 18")," because it affects the application's runtime with progressive or partial hydration. Instead, you could use a ref callback, ",(0,r.kt)("inlineCode",{parentName:"p"},"setTimeout"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"requestIdleCallback")," on the root element, as in the code example below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import {createRoot} from \'react-dom/client\';\n\nfunction App({ callback }) {\n  // Callback will be called when the div is first created.\n  return (\n    <div ref={callback}>\n      <h1>Hello World</h1>\n    </div>\n  );\n}\n\nconst app = document.getElementById("root");\n\nconst root = createRoot(app);\nroot.render(<App callback={() => console.log("Rendered or Updated")} />);\n')),(0,r.kt)("h2",{id:"automatic-batching"},"Automatic Batching"),(0,r.kt)("p",null,"State updates were only batch processed in React event handlers before version 17. Therefore any state updates made outside of event handlers resulted in a re-render, which required React to perform additional background tasks. For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const handleClick = () => {\n  setFirstState(\u201c1\u201d);\n  setSecondState(\u201c2\u201d);\n}\n")),(0,r.kt)("p",null,"React will only re-render in the code snippet above once all the states have been changed at the end of the event callback function. Otherwise is the case for state updates in promises, native events or outside React event handlers. For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'fetch(\u2018https://api.com\u2019).then(() => {\n  setFirstState("1");\n  setSecondState("2");\n})\n\n//OR\n\nsetTimeout(() => {\n  setFirstState("1");\n  setSecondState("2");\n})\n')),(0,r.kt)("p",null,"In the code snippet above, React will re-render for each state update."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"createRoot()")," API in React 18 enables batching all state updates, regardless of where they happen in the application. React then re-renders the page after all state-updates. "),(0,r.kt)("p",null,"Since this is a breaking change, you can stop automatic batching using the ",(0,r.kt)("inlineCode",{parentName:"p"},"flushSync()")," API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { flushSync } from \'react-dom\';\n\nfunction handleClick() {\n  flushSync(() => {\n    setFirstState("1");\n  });\n\n  flushSync(() => {\n    setSecondState("2");\n  });\n\n}\n')),(0,r.kt)("p",null,"In the code snippet above, each instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"flushSync()")," updates state and allows React to re-render."),(0,r.kt)("h2",{id:"transitions"},"Transitions"),(0,r.kt)("p",null,"You can use Transitions to distinguish between resources that need urgent/immediate state updates and those that do not. "),(0,r.kt)("p",null,"The functionality of the search bar is a good example. While a user types the search word, you might want to display visual feedback. However, you don't want the search to start until the user has finished typing. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { startTransition } from 'react';\n\n// Urgent: Show what was currently typed\nsetSearchCurrentValue(input);\n\n\nstartTransition(() => {\n  // Not-urgent: Show what was finally typed\n  setSearchFinalValue(input);\n});\n")),(0,r.kt)("p",null,"In the code snippet, instead of using ",(0,r.kt)("inlineCode",{parentName:"p"},"setTimeout()")," which will delay state updates, we used ",(0,r.kt)("inlineCode",{parentName:"p"},"startTransition()")," to monitor the state update. ",(0,r.kt)("inlineCode",{parentName:"p"},"setSearchCurrentValue()")," only updates the state that is concerned with the feedback we want the user to get immediately, the ",(0,r.kt)("inlineCode",{parentName:"p"},"setSearchFinalValue()")," updates the state we want to use to eventually make the search when the user has finished typing."),(0,r.kt)("p",null,"Unlike ",(0,r.kt)("inlineCode",{parentName:"p"},"setTimeout"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"startTransition")," updates can be interrupted, can track a pending update, and it executes immediately."),(0,r.kt)("h2",{id:"dropped-support-for-internet-explorer"},"Dropped support for Internet Explorer"),(0,r.kt)("p",null,"The React community has also dropped support for Internet Explorer which means that only browser feature up until React 17 will work on Internet Explorer. Modern browser features such as multitasks, ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.assign")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Symbol"),"  won\u2019t be pollyfilled in Internet Explorer."),(0,r.kt)("br",null),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://discord.gg/refine"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,r.kt)("h1",{id:"benefits-of-react-18-over-react-17"},"Benefits of React 18 over React 17"),(0,r.kt)("p",null,"Even after learning the ",(0,r.kt)("strong",{parentName:"p"},"differences between React 17 and React 18"),", you may still be unsure about switching to React 18 or sticking with React 17. "),(0,r.kt)("p",null,"A new version won't be appreciated if it doesn't provide more benefits over previous ones. "),(0,r.kt)("p",null,"Concurrency is one of React 18's main advantages. It is a brand-new concept, not a feature, that enables React apps running on React 18 and higher to optimize their performance on client devices. "),(0,r.kt)("p",null,"By clearing out background tasks on unmount, React 18 enhances memory management and lowers the danger of memory leaks."),(0,r.kt)("h1",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"You should be able to update your React version and refactor your codebases to seamlessly use ",(0,r.kt)("strong",{parentName:"p"},"React 18")," after reading this tutorial. "),(0,r.kt)("p",null,"To get the most recent information on changes and new releases, you should also keep a close eye on the React library changelogs for updates and stay in touch with the React community."))}m.isMDXComponent=!0}}]);