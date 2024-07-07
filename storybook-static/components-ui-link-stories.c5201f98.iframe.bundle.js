"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[379],{"./components/ui/link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default_parameters,_Default_parameters_docs,_Default_parameters1,_Destructive_parameters,_Destructive_parameters_docs,_Destructive_parameters1,_Ghost_parameters,_Ghost_parameters_docs,_Ghost_parameters1,_Link_parameters,_Link_parameters_docs,_Link_parameters1,_Outline_parameters,_Outline_parameters_docs,_Outline_parameters1,_Secondary_parameters,_Secondary_parameters_docs,_Secondary_parameters1;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Destructive:()=>Destructive,Ghost:()=>Ghost,Link:()=>Link,Outline:()=>Outline,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/TextLink",component:__webpack_require__("./components/ui/link.tsx").Y,parameters:{layout:"centered"},tags:["autodocs"]},Default={args:{variant:"default",children:"Default",url:"#"}},Destructive={args:{variant:"destructive",children:"Destructive",url:"#"}},Ghost={args:{variant:"ghost",children:"Ghost",url:"#"}},Link={args:{variant:"link",children:"Link",url:"#"}},Outline={args:{variant:"outline",children:"Outline",url:"#"}},Secondary={args:{variant:"secondary",children:"Secondary",url:"#"}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:'{\n  args: {\n    variant: "default",\n    children: "Default",\n    url: "#"\n  }\n}',...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}},Destructive.parameters={...Destructive.parameters,docs:{...null===(_Destructive_parameters=Destructive.parameters)||void 0===_Destructive_parameters?void 0:_Destructive_parameters.docs,source:{originalSource:'{\n  args: {\n    variant: "destructive",\n    children: "Destructive",\n    url: "#"\n  }\n}',...null===(_Destructive_parameters1=Destructive.parameters)||void 0===_Destructive_parameters1||null===(_Destructive_parameters_docs=_Destructive_parameters1.docs)||void 0===_Destructive_parameters_docs?void 0:_Destructive_parameters_docs.source}}},Ghost.parameters={...Ghost.parameters,docs:{...null===(_Ghost_parameters=Ghost.parameters)||void 0===_Ghost_parameters?void 0:_Ghost_parameters.docs,source:{originalSource:'{\n  args: {\n    variant: "ghost",\n    children: "Ghost",\n    url: "#"\n  }\n}',...null===(_Ghost_parameters1=Ghost.parameters)||void 0===_Ghost_parameters1||null===(_Ghost_parameters_docs=_Ghost_parameters1.docs)||void 0===_Ghost_parameters_docs?void 0:_Ghost_parameters_docs.source}}},Link.parameters={...Link.parameters,docs:{...null===(_Link_parameters=Link.parameters)||void 0===_Link_parameters?void 0:_Link_parameters.docs,source:{originalSource:'{\n  args: {\n    variant: "link",\n    children: "Link",\n    url: "#"\n  }\n}',...null===(_Link_parameters1=Link.parameters)||void 0===_Link_parameters1||null===(_Link_parameters_docs=_Link_parameters1.docs)||void 0===_Link_parameters_docs?void 0:_Link_parameters_docs.source}}},Outline.parameters={...Outline.parameters,docs:{...null===(_Outline_parameters=Outline.parameters)||void 0===_Outline_parameters?void 0:_Outline_parameters.docs,source:{originalSource:'{\n  args: {\n    variant: "outline",\n    children: "Outline",\n    url: "#"\n  }\n}',...null===(_Outline_parameters1=Outline.parameters)||void 0===_Outline_parameters1||null===(_Outline_parameters_docs=_Outline_parameters1.docs)||void 0===_Outline_parameters_docs?void 0:_Outline_parameters_docs.source}}},Secondary.parameters={...Secondary.parameters,docs:{...null===(_Secondary_parameters=Secondary.parameters)||void 0===_Secondary_parameters?void 0:_Secondary_parameters.docs,source:{originalSource:'{\n  args: {\n    variant: "secondary",\n    children: "Secondary",\n    url: "#"\n  }\n}',...null===(_Secondary_parameters1=Secondary.parameters)||void 0===_Secondary_parameters1||null===(_Secondary_parameters_docs=_Secondary_parameters1.docs)||void 0===_Secondary_parameters_docs?void 0:_Secondary_parameters_docs.source}}};const __namedExportsOrder=["Default","Destructive","Ghost","Link","Outline","Secondary"]},"./components/ui/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-slot@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/class-variance-authority@0.7.0/node_modules/class-variance-authority/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/utils.ts");const buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),Button=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,variant,size,asChild=!1,...props}=param;const Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX:"button";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Comp,{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(buttonVariants({variant,size,className})),ref,...props})}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./components/ui/link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>TextLink});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/ui/button.tsx");const TextLink=param=>{let{size,variant,children,url,target}=param;if(url)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.$,{size,variant,asChild:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{target,href:url,children})})};TextLink.__docgenInfo={description:"",methods:[],displayName:"TextLink",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},url:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"HTMLAttributeAnchorTarget"},description:""}}}},"./lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.3.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);