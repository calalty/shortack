"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[908],{"./components/ui/header.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>header_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),navigation_menu=__webpack_require__("./components/ui/navigation-menu.tsx"),ui_link=__webpack_require__("./components/ui/link.tsx");const Header=param=>{let{navigationItems,logo,actionLinks}=param;return(0,jsx_runtime.jsx)("header",{className:"flex justify-center p-6",children:(0,jsx_runtime.jsxs)("div",{className:"flex w-full items-center justify-between max-w-[1080px] gap-8",children:[logo,(0,jsx_runtime.jsx)(navigation_menu.B2,{...navigationItems}),actionLinks.map((param=>{let{children,size,target,url,variant}=param;return(0,jsx_runtime.jsx)(ui_link.Y,{url,size,target,variant,children},url)}))]})})};Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{logo:{required:!0,tsType:{name:"ReactElement",elements:[{name:"SVGSVGElement"}],raw:"ReactElement<SVGSVGElement>"},description:""},navigationItems:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  items: {\n    title?: string;\n    children?: React.ReactNode;\n    link?: { url: string; name: string };\n  }[];\n}",signature:{properties:[{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  title?: string;\n  children?: React.ReactNode;\n  link?: { url: string; name: string };\n}",signature:{properties:[{key:"title",value:{name:"string",required:!1}},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"link",value:{name:"signature",type:"object",raw:"{ url: string; name: string }",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:"{\n  title?: string;\n  children?: React.ReactNode;\n  link?: { url: string; name: string };\n}[]",required:!0}}]}},description:""},actionLinks:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:"{\n  children?: ReactNode;\n  url?: string;\n  target?: HTMLAttributeAnchorTarget;\n} & ButtonVariantProps",elements:[{name:"signature",type:"object",raw:"{\n  children?: ReactNode;\n  url?: string;\n  target?: HTMLAttributeAnchorTarget;\n}",signature:{properties:[{key:"children",value:{name:"ReactNode",required:!1}},{key:"url",value:{name:"string",required:!1}},{key:"target",value:{name:"HTMLAttributeAnchorTarget",required:!1}}]}},{name:"VariantProps",elements:[{name:"buttonVariants"}],raw:"VariantProps<typeof buttonVariants>"}]}],raw:"TextLinkProps[]"},description:""}}};const Shortack=()=>(0,jsx_runtime.jsxs)("svg",{className:"fill-black w-44",viewBox:"0 0 175 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"m19.062 11.176-5.523.273a2.138 2.138 0 0 0-.609-1.024c-.311-.31-.722-.557-1.232-.739-.5-.19-1.1-.284-1.799-.284-.934 0-1.723.16-2.365.478-.642.31-.963.727-.963 1.25 0 .417.208.77.623 1.058.416.288 1.129.519 2.139.693l3.937.637c2.115.348 3.692.91 4.73 1.682 1.039.773 1.558 1.79 1.558 3.047 0 1.145-.42 2.149-1.26 3.013-.831.864-1.974 1.539-3.428 2.024-1.444.477-3.11.716-4.999.716-2.88 0-5.174-.481-6.883-1.444C1.288 21.586.293 20.267 0 18.6l5.934-.25c.18.704.614 1.243 1.303 1.614.69.364 1.572.546 2.648.546 1.058 0 1.908-.163 2.55-.49.651-.333.981-.76.99-1.284-.009-.44-.24-.8-.693-1.08-.453-.288-1.152-.508-2.096-.66l-3.767-.602c-2.125-.341-3.706-.932-4.745-1.773-1.029-.842-1.543-1.914-1.543-3.218 0-1.122.377-2.088 1.133-2.899.764-.811 1.836-1.436 3.214-1.876 1.388-.44 3.012-.66 4.872-.66 2.748 0 4.91.467 6.487 1.4 1.586.931 2.511 2.2 2.775 3.808ZM29.383 13.188v10.096H23.35V0h5.863v8.902h.255c.491-1.03 1.284-1.838 2.38-2.422 1.095-.59 2.468-.886 4.12-.886 1.511 0 2.828.265 3.952.795 1.133.523 2.011 1.278 2.634 2.263.633.978.944 2.149.935 3.513v11.119h-6.033V13.029c.01-1.076-.33-1.914-1.02-2.513-.68-.598-1.633-.898-2.86-.898-.822 0-1.55.14-2.182.42-.623.281-1.114.69-1.473 1.229-.349.53-.528 1.17-.538 1.921ZM72.598 23.284V5.82h5.85v3.047h.226c.396-1.084 1.062-1.903 1.997-2.456.934-.56 2.01-.841 3.229-.841.302 0 .627.015.977.045s.656.072.92.125v4.298a9.61 9.61 0 0 0-1.175-.182c-.5-.053-.958-.08-1.374-.08-.887 0-1.68.156-2.379.466-.69.304-1.237.728-1.643 1.274-.396.546-.595 1.175-.595 1.887v9.88h-6.033ZM101.682 6.196v3.638h-13.1V6.196h13.1ZM91.556 2.012h6.033v16.28c0 .448.085.797.255 1.047.17.242.406.413.708.511.311.099.67.148 1.076.148.283 0 .567-.019.85-.057.283-.045.5-.08.651-.102l.949 3.604c-.302.076-.727.163-1.274.261-.548.107-1.214.17-1.997.194-1.454.045-2.729-.11-3.824-.466-1.086-.357-1.93-.91-2.535-1.66-.604-.75-.902-1.698-.892-2.843V2.012ZM113.999 23.693c-1.387 0-2.624-.193-3.71-.58-1.086-.394-1.945-.974-2.578-1.74-.623-.772-.934-1.735-.934-2.887 0-.97.222-1.785.665-2.444.444-.66 1.048-1.19 1.813-1.592.765-.402 1.633-.705 2.606-.91a24.34 24.34 0 0 1 3.087-.432 96.736 96.736 0 0 0 3.059-.295c.775-.099 1.336-.243 1.686-.432.349-.19.524-.47.524-.841v-.069c0-.72-.284-1.277-.85-1.67-.557-.395-1.35-.592-2.379-.592-1.086 0-1.95.193-2.592.58-.642.379-1.067.856-1.275 1.432l-5.58-.364a5.715 5.715 0 0 1 1.672-2.75c.83-.782 1.902-1.38 3.214-1.797 1.322-.425 2.852-.637 4.589-.637 1.209 0 2.365.114 3.47.341 1.114.228 2.101.58 2.96 1.057.868.478 1.553 1.092 2.053 1.842.501.743.751 1.634.751 2.672v11.778h-5.722v-2.421h-.17a5.243 5.243 0 0 1-1.402 1.444c-.585.409-1.289.731-2.11.966-.821.227-1.77.341-2.847.341Zm1.728-3.343c.888 0 1.671-.14 2.351-.42.68-.288 1.213-.675 1.601-1.16.387-.485.58-1.034.58-1.648v-1.853c-.189.098-.448.189-.779.272-.321.076-.684.148-1.09.216-.406.061-.812.118-1.218.171l-1.105.125a8.955 8.955 0 0 0-1.855.398c-.529.182-.94.428-1.232.739-.293.303-.439.682-.439 1.137 0 .66.297 1.163.892 1.512.604.341 1.369.512 2.294.512ZM140.759 23.704c-2.228 0-4.145-.379-5.75-1.137-1.595-.765-2.823-1.826-3.682-3.183-.85-1.357-1.275-2.918-1.275-4.684 0-1.789.43-3.357 1.289-4.707.869-1.356 2.101-2.414 3.697-3.172 1.595-.765 3.493-1.148 5.693-1.148 1.898 0 3.559.277 4.985.83 1.426.553 2.554 1.33 3.385 2.33.831 1.001 1.288 2.176 1.373 3.525h-5.693a3.322 3.322 0 0 0-1.274-2.103c-.68-.538-1.572-.807-2.677-.807-.935 0-1.751.204-2.45.614-.689.401-1.228.989-1.615 1.762s-.58 1.709-.58 2.808c0 1.114.189 2.062.566 2.842.387.78.93 1.376 1.629 1.785.699.41 1.515.614 2.45.614.689 0 1.308-.114 1.855-.341a3.443 3.443 0 0 0 1.374-.99c.368-.439.609-.966.722-1.58h5.693c-.094 1.335-.547 2.51-1.359 3.525-.803 1.008-1.912 1.796-3.328 2.365-1.417.568-3.092.852-5.028.852ZM159.804 18.338l.014-5.81h.878l6.968-6.628h6.925l-9.361 8.777h-1.43l-3.994 3.661Zm-5.467 5.025V.08h6.033v23.283h-6.033Zm13.596 0-6.401-7.606 4.022-3.422L175 23.363h-7.067Z"}),(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M50.11 10.769c.064.22.151.418.257.596.12.206.266.387.425.547.413.418.921.7 1.355.942.226.126.432.24.594.357l.005.004c.225.163.397.364.527.595a2.484 2.484 0 0 1 .246.626 4.078 4.078 0 0 1 .112.663 7.04 7.04 0 0 1 .031.656c.002.215-.004.433-.011.65l-.022.495c-.041.862-.08 1.67.143 2.199.045.106.1.202.168.284.209.253.438.4.664.462.112.03.223.04.33.03.34-.03.644-.249.828-.59.18-.335.243-.787.109-1.295a8.586 8.586 0 0 1-.246-1.397 7.358 7.358 0 0 1-.031-.65 5.42 5.42 0 0 1 .036-.647c.024-.196.061-.377.112-.534.066-.202.154-.366.268-.479a.604.604 0 0 1 .157-.114c.303-.15.502-.089.64.098.082.112.143.269.192.454.049.186.085.4.118.624l.004.022.03.215c.02.137.04.276.062.411.038.232.082.454.143.648.107.339.267.59.534.646.334.07 1.052-.038 1.435-.717.102-.18.18-.399.221-.666a2.887 2.887 0 0 0 .027-.65 4.517 4.517 0 0 0-.047-.447 5.932 5.932 0 0 0-.098-.49l-.005-.02-.018-.073a1.317 1.317 0 0 1-.017-.077.95.95 0 0 1 .017-.479c.085-.263.3-.46.6-.614.514-.264 1.276-.403 2.052-.546.728-.133 1.47-.27 2.028-.512.28-.122.513-.27.677-.458a1.019 1.019 0 0 0 .26-.723c-.02-1.132-.534-2.29-1.986-3.088-1.52-.835-4.069-1.277-8.156-.882 0 0-1.408.202-2.711.746-1.109.462-2.142 1.171-2.172 2.213-.01.363.032.683.113.965Zm-3.34 1.576c.13.158.287.311.466.46.166.138.352.273.555.404.139.09.286.177.44.264.225.126.466.247.72.362.341.155.707.3 1.096.434.444.153.917.292 1.415.416l.035.008c.386.095.786.18 1.2.256a2.683 2.683 0 0 0-.112-.477 1.06 1.06 0 0 0-.374-.522l-.025-.018c-.155-.108-.348-.215-.56-.332a17.825 17.825 0 0 1-.344-.195 6.83 6.83 0 0 1-.395-.246 4.612 4.612 0 0 1-1.044-.94 3.415 3.415 0 0 1-.601-1.155c-.11-.375-.168-.8-.154-1.286.015-.535.2-1.02.51-1.447-.502.193-.96.404-1.367.632-1.158.649-1.914 1.39-1.914 2.255 0 .402.163.776.453 1.127Zm-.453 2.854v.026c.005.218.056.428.15.63.107.23.269.451.476.663.147.15.318.296.508.437a6.853 6.853 0 0 0 .78.499c1.162.65 2.73 1.166 4.549 1.49a3.444 3.444 0 0 1-.027-.145c-.082-.498-.07-1.11-.041-1.759l.011-.239c.009-.176.018-.354.024-.532-.43-.074-.847-.157-1.25-.25a19.517 19.517 0 0 1-1.236-.325 16.295 16.295 0 0 1-1.438-.506 11.81 11.81 0 0 1-1.225-.585 8.331 8.331 0 0 1-.828-.531 2.25 2.25 0 0 0-.277.418 1.56 1.56 0 0 0-.176.709Zm9.39 5.38c-.6.323-1.35.338-2.032-.19-2.462-.324-4.582-.968-6.077-1.805a8.126 8.126 0 0 1-.655-.408c-.397.406-.626.844-.626 1.319 0 .865.756 1.606 1.914 2.255 2.045 1.145 5.348 1.873 9.068 1.873 3.72 0 7.023-.728 9.068-1.873 1.158-.649 1.914-1.39 1.914-2.255 0-.476-.228-.913-.626-1.319-.204.14-.422.277-.656.408-2.188 1.226-5.718 2.038-9.7 2.038-.54 0-1.07-.015-1.591-.044Zm10.845-3.232c.215-.127.414-.258.595-.392.19-.141.36-.287.508-.437.207-.212.369-.432.476-.662.094-.203.146-.413.15-.63v-.027c0-.246-.062-.483-.176-.71a2.235 2.235 0 0 0-.278-.418 7.29 7.29 0 0 1-.828.532 11.854 11.854 0 0 1-1.654.754c-.32.12-.657.232-1.008.337-.395.118-.808.227-1.236.326-.86.197-1.783.352-2.755.458-.056.186-.126.35-.205.495-.632 1.173-1.874 1.322-2.437 1.204-.43-.09-.773-.354-1.013-.783a1.796 1.796 0 0 1-.046-.088c.03.153.066.304.105.45.154.585.125 1.117-.02 1.565.188.004.378.006.569.006 3.72 0 7.023-.728 9.068-1.873.063-.036.125-.071.185-.107Zm-6.18-2.97a6.207 6.207 0 0 1 .105.785c.324-.039.64-.083.951-.132a20.88 20.88 0 0 0 1.673-.337l.035-.008c.498-.124.971-.263 1.415-.416.389-.134.755-.279 1.096-.434a9.585 9.585 0 0 0 1.16-.627c.203-.13.389-.265.555-.403.179-.149.335-.302.466-.46.29-.35.453-.726.453-1.127 0-.865-.756-1.606-1.914-2.255a10.335 10.335 0 0 0-1.218-.574c.552.767.768 1.615.781 2.41a2.16 2.16 0 0 1-.042.476c-.045.22-.126.42-.24.601-.117.19-.271.36-.457.51-.099.082-.207.158-.324.228-.55.334-1.354.536-2.187.701-.17.034-.34.066-.51.097l-.058.01c-.515.095-1.019.188-1.427.33l-.015.006c-.096.034-.185.07-.264.113a1.104 1.104 0 0 0-.128.086l.008.043a8.696 8.696 0 0 1 .086.377Z"})]});Shortack.__docgenInfo={description:"",methods:[],displayName:"Shortack"};var _Default_parameters,_Default_parameters_docs,_Default_parameters1,navigation_menu_mock=__webpack_require__("./mocks/navigation-menu.mock.tsx");const header_stories={title:"Organisms/Header",component:Header,parameters:{layout:"centered"},tags:["autodocs"]},Default={args:{logo:(0,jsx_runtime.jsx)(Shortack,{}),navigationItems:{...navigation_menu_mock.w},actionLinks:[{variant:"default",children:"Default",url:"#"}]}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:'{\n  args: {\n    logo: <Shortack />,\n    navigationItems: {\n      ...navigationMenuMock\n    },\n    actionLinks: [{\n      variant: "default",\n      children: "Default",\n      url: "#"\n    }]\n  }\n}',...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./components/ui/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-slot@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/class-variance-authority@0.7.0/node_modules/class-variance-authority/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/utils.ts");const buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),Button=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,variant,size,asChild=!1,...props}=param;const Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX:"button";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Comp,{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(buttonVariants({variant,size,className})),ref,...props})}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./components/ui/link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>TextLink});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/ui/button.tsx");const TextLink=param=>{let{size,variant,children,url,target}=param;if(url)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.$,{size,variant,asChild:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{target,href:url,children})})};TextLink.__docgenInfo={description:"",methods:[],displayName:"TextLink",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},url:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"HTMLAttributeAnchorTarget"},description:""}}}},"./components/ui/navigation-menu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B2:()=>NavigationItems,Ws:()=>NavigationMenuLink,ck:()=>ListItem});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-navigation-menu@1.2.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1/node_modules/@radix-ui/react-navigation-menu/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/class-variance-authority@0.7.0/node_modules/class-variance-authority/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/utils.ts"),next_link__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);const NavigationMenu=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,children,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.bL,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("relative z-10 flex max-w-max flex-1 items-center justify-center",className),...props,children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NavigationMenuViewport,{})]})}));NavigationMenu.displayName=_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.bL.displayName;const NavigationMenuList=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.B8,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("group flex flex-1 list-none items-center justify-center space-x-1",className),...props})}));NavigationMenuList.displayName=_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.B8.displayName;const NavigationMenuItem=_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.q7,navigationMenuTriggerStyle=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_5__.F)("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"),NavigationMenuTrigger=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,children,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.l9,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(navigationMenuTriggerStyle(),"group",className),...props,children:[children," "]})}));NavigationMenuTrigger.displayName=_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.l9.displayName;const NavigationMenuContent=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.UC,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",className),...props})}));NavigationMenuContent.displayName=_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.UC.displayName;const NavigationMenuLink=_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.N_,NavigationMenuViewport=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("absolute left-0 top-full flex justify-center"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.LM,{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",className),ref,...props})})}));NavigationMenuViewport.displayName=_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.LM.displayName;const NavigationMenuIndicator=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.C1,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",className),...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"})})}));NavigationMenuIndicator.displayName=_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.C1.displayName;const ListItem=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,title,children,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NavigationMenuLink,{asChild:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",className),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"text-sm font-medium leading-none",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"line-clamp-2 text-sm leading-snug text-muted-foreground",children})]})})})}));ListItem.displayName="ListItem";const NavigationItems=param=>{let{items}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NavigationMenu,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NavigationMenuList,{children:items.map(((param,index)=>{let{title,children,link}=param;var _link_url;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NavigationMenuItem,{children:title&&children?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[" ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NavigationMenuTrigger,{children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NavigationMenuContent,{children})," "]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_2___default(),{href:null!==(_link_url=null==link?void 0:link.url)&&void 0!==_link_url?_link_url:"",legacyBehavior:!0,passHref:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NavigationMenuLink,{className:navigationMenuTriggerStyle(),children:null==link?void 0:link.name})})},index)}))})})};ListItem.__docgenInfo={description:"",methods:[],displayName:"ListItem"},NavigationItems.__docgenInfo={description:"",methods:[],displayName:"NavigationItems",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  title?: string;\n  children?: React.ReactNode;\n  link?: { url: string; name: string };\n}",signature:{properties:[{key:"title",value:{name:"string",required:!1}},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"link",value:{name:"signature",type:"object",raw:"{ url: string; name: string }",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:"{\n  title?: string;\n  children?: React.ReactNode;\n  link?: { url: string; name: string };\n}[]"},description:""}}},NavigationMenu.__docgenInfo={description:"",methods:[]},NavigationMenuList.__docgenInfo={description:"",methods:[]},NavigationMenuContent.__docgenInfo={description:"",methods:[]},NavigationMenuTrigger.__docgenInfo={description:"",methods:[]},NavigationMenuIndicator.__docgenInfo={description:"",methods:[]},NavigationMenuViewport.__docgenInfo={description:"",methods:[]}},"./lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.3.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./mocks/navigation-menu.mock.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>components,w:()=>navigationMenuMock});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/ui/navigation-menu.tsx"),_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-navigation-menu@1.2.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1/node_modules/@radix-ui/react-navigation-menu/dist/index.mjs");const components=[{title:"Alert Dialog",href:"/docs/primitives/alert-dialog",description:"A modal dialog that interrupts the user with important content and expects a response."},{title:"Hover Card",href:"/docs/primitives/hover-card",description:"For sighted users to preview content available behind a link."},{title:"Progress",href:"/docs/primitives/progress",description:"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."},{title:"Scroll-area",href:"/docs/primitives/scroll-area",description:"Visually or semantically separates content."},{title:"Tabs",href:"/docs/primitives/tabs",description:"A set of layered sections of content—known as tab panels—that are displayed one at a time."},{title:"Tooltip",href:"/docs/primitives/tooltip",description:"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."}],navigationMenuMock={items:[{title:"Documentation",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"row-span-3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_2__.Ws,{asChild:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{className:"flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md",href:"/",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mb-2 mt-4 text-lg font-medium",children:"shadcn/ui"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"text-sm leading-tight text-muted-foreground",children:"Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source."})]})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.ck,{href:"/docs",title:"Introduction",children:"Re-usable components built using Radix UI and Tailwind CSS."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.ck,{href:"/docs/installation",title:"Installation",children:"How to install dependencies and structure your app."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.ck,{href:"/docs/primitives/typography",title:"Typography",children:"Styles for headings, paragraphs, lists...etc"})]})},{title:"Components",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{className:"grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ",children:components.map((component=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.ck,{title:component.title,href:component.href,children:component.description},component.title)))})},{link:{name:"Link",url:"/link"}}]}}}]);