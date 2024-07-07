"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[643],{"./components/ui/accordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>accordion_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-accordion@1.2.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1/node_modules/@radix-ui/react-accordion/dist/index.mjs"),react_icons_esm=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-icons@1.3.0_react@18.3.1/node_modules/@radix-ui/react-icons/dist/react-icons.esm.js"),utils=__webpack_require__("./lib/utils.ts");const AccordionItem=react.forwardRef(((param,ref)=>{let{className,...props}=param;return(0,jsx_runtime.jsx)(dist.q7,{ref,className:(0,utils.cn)("border-b",className),...props})}));AccordionItem.displayName="AccordionItem";const AccordionTrigger=react.forwardRef(((param,ref)=>{let{className,children,...props}=param;return(0,jsx_runtime.jsx)(dist.Y9,{className:"flex",children:(0,jsx_runtime.jsxs)(dist.l9,{ref,className:(0,utils.cn)("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",className),...props,children:[children,(0,jsx_runtime.jsx)(react_icons_esm.D3D,{className:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"})]})})}));AccordionTrigger.displayName=dist.l9.displayName;const AccordionContent=react.forwardRef(((param,ref)=>{let{className,children,...props}=param;return(0,jsx_runtime.jsx)(dist.UC,{ref,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...props,children:(0,jsx_runtime.jsx)("div",{className:(0,utils.cn)("pb-4 pt-0",className),children})})}));AccordionContent.displayName=dist.UC.displayName;const Accordion=param=>{let{additionalClassName,items}=param;return(0,jsx_runtime.jsx)(dist.bL,{className:additionalClassName,type:"single",collapsible:!0,children:items.map((param=>{let{children,title}=param;return(0,jsx_runtime.jsxs)(AccordionItem,{value:"item-".concat(title),children:[(0,jsx_runtime.jsx)(AccordionTrigger,{children:title}),(0,jsx_runtime.jsx)(AccordionContent,{children})]},title)}))})};var _Default_parameters,_Default_parameters_docs,_Default_parameters1;Accordion.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{additionalClassName:{required:!0,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ title: string; children: React.ReactNode }",signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}],raw:"{ title: string; children: React.ReactNode }[]"},description:""}}},AccordionItem.__docgenInfo={description:"",methods:[],displayName:"AccordionItem"},AccordionTrigger.__docgenInfo={description:"",methods:[]},AccordionContent.__docgenInfo={description:"",methods:[]};const accordion_stories={title:"Molecules/Accordion",component:Accordion,parameters:{layout:"centered"},tags:["autodocs"]},Default={args:{additionalClassName:"w-[300px]",items:[{title:"Is it accessible?",children:"Yes. It adheres to the WAI-ARIA design pattern."},{title:"Is it styled?",children:"Yes. It comes with default styles that matches the other components' aesthetic."},{title:"Is it animated?",children:"Yes. It's animated by default, but you can disable it if you prefer."}]}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:'{\n  args: {\n    additionalClassName: "w-[300px]",\n    items: [{\n      title: "Is it accessible?",\n      children: "Yes. It adheres to the WAI-ARIA design pattern."\n    }, {\n      title: "Is it styled?",\n      children: "Yes. It comes with default styles that matches the other components\' aesthetic."\n    }, {\n      title: "Is it animated?",\n      children: "Yes. It\'s animated by default, but you can disable it if you prefer."\n    }]\n  }\n}',...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.3.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);