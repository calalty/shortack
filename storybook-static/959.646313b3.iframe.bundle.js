"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[959],{"./node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useComposedRefs,t:()=>composeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/index.js");function composeRefs(...refs){return node=>refs.forEach((ref=>function setRef(ref,value){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}(ref,node)))}function useComposedRefs(...refs){return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs),refs)}},"./node_modules/.pnpm/@radix-ui+react-slot@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DX:()=>Slot});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.2.4_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),Slot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),slottable=childrenArray.find(isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?newElement.props.children:null:child));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children:react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(newElement,void 0,newChildren):null})}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children})}));Slot.displayName="Slot";var SlotClone=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props;if(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)){const childrenRef=function getElementRef(element){let getter=Object.getOwnPropertyDescriptor(element.props,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning;if(mayWarn)return element.ref;if(getter=Object.getOwnPropertyDescriptor(element,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning,mayWarn)return element.props.ref;return element.props.ref||element.ref}(children);return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,{...mergeProps(slotProps,children.props),ref:forwardedRef?(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.t)(forwardedRef,childrenRef):childrenRef})}return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):null}));SlotClone.displayName="SlotClone";var Slottable=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children});function isSlottable(child){return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)&&child.type===Slottable}function mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}},"./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{$:()=>clsx})},"./node_modules/.pnpm/tailwind-merge@2.3.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{QP:()=>twMerge});const CLASS_PART_SEPARATOR="-";function createClassUtils(config){const classMap=function createClassMap(config){const{theme,prefix}=config,classMap={nextPart:new Map,validators:[]},prefixedClassGroupEntries=function getPrefixedClassGroupEntries(classGroupEntries,prefix){if(!prefix)return classGroupEntries;return classGroupEntries.map((([classGroupId,classGroup])=>[classGroupId,classGroup.map((classDefinition=>"string"==typeof classDefinition?prefix+classDefinition:"object"==typeof classDefinition?Object.fromEntries(Object.entries(classDefinition).map((([key,value])=>[prefix+key,value]))):classDefinition))]))}(Object.entries(config.classGroups),prefix);return prefixedClassGroupEntries.forEach((([classGroupId,classGroup])=>{processClassesRecursively(classGroup,classMap,classGroupId,theme)})),classMap}(config),{conflictingClassGroups,conflictingClassGroupModifiers}=config;return{getClassGroupId:function getClassGroupId(className){const classParts=className.split(CLASS_PART_SEPARATOR);return""===classParts[0]&&1!==classParts.length&&classParts.shift(),getGroupRecursive(classParts,classMap)||function getGroupIdForArbitraryProperty(className){if(arbitraryPropertyRegex.test(className)){const arbitraryPropertyClassName=arbitraryPropertyRegex.exec(className)[1],property=arbitraryPropertyClassName?.substring(0,arbitraryPropertyClassName.indexOf(":"));if(property)return"arbitrary.."+property}}(className)},getConflictingClassGroupIds:function getConflictingClassGroupIds(classGroupId,hasPostfixModifier){const conflicts=conflictingClassGroups[classGroupId]||[];return hasPostfixModifier&&conflictingClassGroupModifiers[classGroupId]?[...conflicts,...conflictingClassGroupModifiers[classGroupId]]:conflicts}}}function getGroupRecursive(classParts,classPartObject){if(0===classParts.length)return classPartObject.classGroupId;const currentClassPart=classParts[0],nextClassPartObject=classPartObject.nextPart.get(currentClassPart),classGroupFromNextClassPart=nextClassPartObject?getGroupRecursive(classParts.slice(1),nextClassPartObject):void 0;if(classGroupFromNextClassPart)return classGroupFromNextClassPart;if(0===classPartObject.validators.length)return;const classRest=classParts.join(CLASS_PART_SEPARATOR);return classPartObject.validators.find((({validator})=>validator(classRest)))?.classGroupId}const arbitraryPropertyRegex=/^\[(.+)\]$/;function processClassesRecursively(classGroup,classPartObject,classGroupId,theme){classGroup.forEach((classDefinition=>{if("string"!=typeof classDefinition){if("function"==typeof classDefinition)return function isThemeGetter(func){return func.isThemeGetter}(classDefinition)?void processClassesRecursively(classDefinition(theme),classPartObject,classGroupId,theme):void classPartObject.validators.push({validator:classDefinition,classGroupId});Object.entries(classDefinition).forEach((([key,classGroup])=>{processClassesRecursively(classGroup,getPart(classPartObject,key),classGroupId,theme)}))}else{(""===classDefinition?classPartObject:getPart(classPartObject,classDefinition)).classGroupId=classGroupId}}))}function getPart(classPartObject,path){let currentClassPartObject=classPartObject;return path.split(CLASS_PART_SEPARATOR).forEach((pathPart=>{currentClassPartObject.nextPart.has(pathPart)||currentClassPartObject.nextPart.set(pathPart,{nextPart:new Map,validators:[]}),currentClassPartObject=currentClassPartObject.nextPart.get(pathPart)})),currentClassPartObject}function createLruCache(maxCacheSize){if(maxCacheSize<1)return{get:()=>{},set:()=>{}};let cacheSize=0,cache=new Map,previousCache=new Map;function update(key,value){cache.set(key,value),cacheSize++,cacheSize>maxCacheSize&&(cacheSize=0,previousCache=cache,cache=new Map)}return{get(key){let value=cache.get(key);return void 0!==value?value:void 0!==(value=previousCache.get(key))?(update(key,value),value):void 0},set(key,value){cache.has(key)?cache.set(key,value):update(key,value)}}}const IMPORTANT_MODIFIER="!";function createSplitModifiers(config){const separator=config.separator,isSeparatorSingleCharacter=1===separator.length,firstSeparatorCharacter=separator[0],separatorLength=separator.length;return function splitModifiers(className){const modifiers=[];let postfixModifierPosition,bracketDepth=0,modifierStart=0;for(let index=0;index<className.length;index++){let currentCharacter=className[index];if(0===bracketDepth){if(currentCharacter===firstSeparatorCharacter&&(isSeparatorSingleCharacter||className.slice(index,index+separatorLength)===separator)){modifiers.push(className.slice(modifierStart,index)),modifierStart=index+separatorLength;continue}if("/"===currentCharacter){postfixModifierPosition=index;continue}}"["===currentCharacter?bracketDepth++:"]"===currentCharacter&&bracketDepth--}const baseClassNameWithImportantModifier=0===modifiers.length?className:className.substring(modifierStart),hasImportantModifier=baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);return{modifiers,hasImportantModifier,baseClassName:hasImportantModifier?baseClassNameWithImportantModifier.substring(1):baseClassNameWithImportantModifier,maybePostfixModifierPosition:postfixModifierPosition&&postfixModifierPosition>modifierStart?postfixModifierPosition-modifierStart:void 0}}}const SPLIT_CLASSES_REGEX=/\s+/;function twJoin(){let argument,resolvedValue,index=0,string="";for(;index<arguments.length;)(argument=arguments[index++])&&(resolvedValue=toValue(argument))&&(string&&(string+=" "),string+=resolvedValue);return string}function toValue(mix){if("string"==typeof mix)return mix;let resolvedValue,string="";for(let k=0;k<mix.length;k++)mix[k]&&(resolvedValue=toValue(mix[k]))&&(string&&(string+=" "),string+=resolvedValue);return string}function createTailwindMerge(createConfigFirst,...createConfigRest){let configUtils,cacheGet,cacheSet,functionToCall=function initTailwindMerge(classList){const config=createConfigRest.reduce(((previousConfig,createConfigCurrent)=>createConfigCurrent(previousConfig)),createConfigFirst());return configUtils=function createConfigUtils(config){return{cache:createLruCache(config.cacheSize),splitModifiers:createSplitModifiers(config),...createClassUtils(config)}}(config),cacheGet=configUtils.cache.get,cacheSet=configUtils.cache.set,functionToCall=tailwindMerge,tailwindMerge(classList)};function tailwindMerge(classList){const cachedResult=cacheGet(classList);if(cachedResult)return cachedResult;const result=function mergeClassList(classList,configUtils){const{splitModifiers,getClassGroupId,getConflictingClassGroupIds}=configUtils,classGroupsInConflict=new Set;return classList.trim().split(SPLIT_CLASSES_REGEX).map((originalClassName=>{const{modifiers,hasImportantModifier,baseClassName,maybePostfixModifierPosition}=splitModifiers(originalClassName);let classGroupId=getClassGroupId(maybePostfixModifierPosition?baseClassName.substring(0,maybePostfixModifierPosition):baseClassName),hasPostfixModifier=Boolean(maybePostfixModifierPosition);if(!classGroupId){if(!maybePostfixModifierPosition)return{isTailwindClass:!1,originalClassName};if(classGroupId=getClassGroupId(baseClassName),!classGroupId)return{isTailwindClass:!1,originalClassName};hasPostfixModifier=!1}const variantModifier=function sortModifiers(modifiers){if(modifiers.length<=1)return modifiers;const sortedModifiers=[];let unsortedModifiers=[];return modifiers.forEach((modifier=>{"["===modifier[0]?(sortedModifiers.push(...unsortedModifiers.sort(),modifier),unsortedModifiers=[]):unsortedModifiers.push(modifier)})),sortedModifiers.push(...unsortedModifiers.sort()),sortedModifiers}(modifiers).join(":");return{isTailwindClass:!0,modifierId:hasImportantModifier?variantModifier+IMPORTANT_MODIFIER:variantModifier,classGroupId,originalClassName,hasPostfixModifier}})).reverse().filter((parsed=>{if(!parsed.isTailwindClass)return!0;const{modifierId,classGroupId,hasPostfixModifier}=parsed,classId=modifierId+classGroupId;return!classGroupsInConflict.has(classId)&&(classGroupsInConflict.add(classId),getConflictingClassGroupIds(classGroupId,hasPostfixModifier).forEach((group=>classGroupsInConflict.add(modifierId+group))),!0)})).reverse().map((parsed=>parsed.originalClassName)).join(" ")}(classList,configUtils);return cacheSet(classList,result),result}return function callTailwindMerge(){return functionToCall(twJoin.apply(null,arguments))}}function fromTheme(key){const themeGetter=theme=>theme[key]||[];return themeGetter.isThemeGetter=!0,themeGetter}const arbitraryValueRegex=/^\[(?:([a-z-]+):)?(.+)\]$/i,fractionRegex=/^\d+\/\d+$/,stringLengths=new Set(["px","full","screen"]),tshirtUnitRegex=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,lengthUnitRegex=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,colorFunctionRegex=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,shadowRegex=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,imageRegex=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function isLength(value){return isNumber(value)||stringLengths.has(value)||fractionRegex.test(value)}function isArbitraryLength(value){return getIsArbitraryValue(value,"length",isLengthOnly)}function isNumber(value){return Boolean(value)&&!Number.isNaN(Number(value))}function isArbitraryNumber(value){return getIsArbitraryValue(value,"number",isNumber)}function isInteger(value){return Boolean(value)&&Number.isInteger(Number(value))}function isPercent(value){return value.endsWith("%")&&isNumber(value.slice(0,-1))}function isArbitraryValue(value){return arbitraryValueRegex.test(value)}function isTshirtSize(value){return tshirtUnitRegex.test(value)}const sizeLabels=new Set(["length","size","percentage"]);function isArbitrarySize(value){return getIsArbitraryValue(value,sizeLabels,isNever)}function isArbitraryPosition(value){return getIsArbitraryValue(value,"position",isNever)}const imageLabels=new Set(["image","url"]);function isArbitraryImage(value){return getIsArbitraryValue(value,imageLabels,isImage)}function isArbitraryShadow(value){return getIsArbitraryValue(value,"",isShadow)}function isAny(){return!0}function getIsArbitraryValue(value,label,testValue){const result=arbitraryValueRegex.exec(value);return!!result&&(result[1]?"string"==typeof label?result[1]===label:label.has(result[1]):testValue(result[2]))}function isLengthOnly(value){return lengthUnitRegex.test(value)&&!colorFunctionRegex.test(value)}function isNever(){return!1}function isShadow(value){return shadowRegex.test(value)}function isImage(value){return imageRegex.test(value)}Symbol.toStringTag;function getDefaultConfig(){const colors=fromTheme("colors"),spacing=fromTheme("spacing"),blur=fromTheme("blur"),brightness=fromTheme("brightness"),borderColor=fromTheme("borderColor"),borderRadius=fromTheme("borderRadius"),borderSpacing=fromTheme("borderSpacing"),borderWidth=fromTheme("borderWidth"),contrast=fromTheme("contrast"),grayscale=fromTheme("grayscale"),hueRotate=fromTheme("hueRotate"),invert=fromTheme("invert"),gap=fromTheme("gap"),gradientColorStops=fromTheme("gradientColorStops"),gradientColorStopPositions=fromTheme("gradientColorStopPositions"),inset=fromTheme("inset"),margin=fromTheme("margin"),opacity=fromTheme("opacity"),padding=fromTheme("padding"),saturate=fromTheme("saturate"),scale=fromTheme("scale"),sepia=fromTheme("sepia"),skew=fromTheme("skew"),space=fromTheme("space"),translate=fromTheme("translate"),getSpacingWithAutoAndArbitrary=()=>["auto",isArbitraryValue,spacing],getSpacingWithArbitrary=()=>[isArbitraryValue,spacing],getLengthWithEmptyAndArbitrary=()=>["",isLength,isArbitraryLength],getNumberWithAutoAndArbitrary=()=>["auto",isNumber,isArbitraryValue],getZeroAndEmpty=()=>["","0",isArbitraryValue],getNumber=()=>[isNumber,isArbitraryNumber],getNumberAndArbitrary=()=>[isNumber,isArbitraryValue];return{cacheSize:500,separator:":",theme:{colors:[isAny],spacing:[isLength,isArbitraryLength],blur:["none","",isTshirtSize,isArbitraryValue],brightness:getNumber(),borderColor:[colors],borderRadius:["none","","full",isTshirtSize,isArbitraryValue],borderSpacing:getSpacingWithArbitrary(),borderWidth:getLengthWithEmptyAndArbitrary(),contrast:getNumber(),grayscale:getZeroAndEmpty(),hueRotate:getNumberAndArbitrary(),invert:getZeroAndEmpty(),gap:getSpacingWithArbitrary(),gradientColorStops:[colors],gradientColorStopPositions:[isPercent,isArbitraryLength],inset:getSpacingWithAutoAndArbitrary(),margin:getSpacingWithAutoAndArbitrary(),opacity:getNumber(),padding:getSpacingWithArbitrary(),saturate:getNumber(),scale:getNumber(),sepia:getZeroAndEmpty(),skew:getNumberAndArbitrary(),space:getSpacingWithArbitrary(),translate:getSpacingWithArbitrary()},classGroups:{aspect:[{aspect:["auto","square","video",isArbitraryValue]}],container:["container"],columns:[{columns:[isTshirtSize]}],"break-after":[{"break-after":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-before":[{"break-before":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",isArbitraryValue]}],overflow:[{overflow:["auto","hidden","clip","visible","scroll"]}],"overflow-x":[{"overflow-x":["auto","hidden","clip","visible","scroll"]}],"overflow-y":[{"overflow-y":["auto","hidden","clip","visible","scroll"]}],overscroll:[{overscroll:["auto","contain","none"]}],"overscroll-x":[{"overscroll-x":["auto","contain","none"]}],"overscroll-y":[{"overscroll-y":["auto","contain","none"]}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[inset]}],"inset-x":[{"inset-x":[inset]}],"inset-y":[{"inset-y":[inset]}],start:[{start:[inset]}],end:[{end:[inset]}],top:[{top:[inset]}],right:[{right:[inset]}],bottom:[{bottom:[inset]}],left:[{left:[inset]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",isInteger,isArbitraryValue]}],basis:[{basis:getSpacingWithAutoAndArbitrary()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",isArbitraryValue]}],grow:[{grow:getZeroAndEmpty()}],shrink:[{shrink:getZeroAndEmpty()}],order:[{order:["first","last","none",isInteger,isArbitraryValue]}],"grid-cols":[{"grid-cols":[isAny]}],"col-start-end":[{col:["auto",{span:["full",isInteger,isArbitraryValue]},isArbitraryValue]}],"col-start":[{"col-start":getNumberWithAutoAndArbitrary()}],"col-end":[{"col-end":getNumberWithAutoAndArbitrary()}],"grid-rows":[{"grid-rows":[isAny]}],"row-start-end":[{row:["auto",{span:[isInteger,isArbitraryValue]},isArbitraryValue]}],"row-start":[{"row-start":getNumberWithAutoAndArbitrary()}],"row-end":[{"row-end":getNumberWithAutoAndArbitrary()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",isArbitraryValue]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",isArbitraryValue]}],gap:[{gap:[gap]}],"gap-x":[{"gap-x":[gap]}],"gap-y":[{"gap-y":[gap]}],"justify-content":[{justify:["normal","start","end","center","between","around","evenly","stretch"]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal","start","end","center","between","around","evenly","stretch","baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":["start","end","center","between","around","evenly","stretch","baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[padding]}],px:[{px:[padding]}],py:[{py:[padding]}],ps:[{ps:[padding]}],pe:[{pe:[padding]}],pt:[{pt:[padding]}],pr:[{pr:[padding]}],pb:[{pb:[padding]}],pl:[{pl:[padding]}],m:[{m:[margin]}],mx:[{mx:[margin]}],my:[{my:[margin]}],ms:[{ms:[margin]}],me:[{me:[margin]}],mt:[{mt:[margin]}],mr:[{mr:[margin]}],mb:[{mb:[margin]}],ml:[{ml:[margin]}],"space-x":[{"space-x":[space]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[space]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",isArbitraryValue,spacing]}],"min-w":[{"min-w":[isArbitraryValue,spacing,"min","max","fit"]}],"max-w":[{"max-w":[isArbitraryValue,spacing,"none","full","min","max","fit","prose",{screen:[isTshirtSize]},isTshirtSize]}],h:[{h:[isArbitraryValue,spacing,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[isArbitraryValue,spacing,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[isArbitraryValue,spacing,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[isArbitraryValue,spacing,"auto","min","max","fit"]}],"font-size":[{text:["base",isTshirtSize,isArbitraryLength]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",isArbitraryNumber]}],"font-family":[{font:[isAny]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",isArbitraryValue]}],"line-clamp":[{"line-clamp":["none",isNumber,isArbitraryNumber]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",isLength,isArbitraryValue]}],"list-image":[{"list-image":["none",isArbitraryValue]}],"list-style-type":[{list:["none","disc","decimal",isArbitraryValue]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[colors]}],"placeholder-opacity":[{"placeholder-opacity":[opacity]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[colors]}],"text-opacity":[{"text-opacity":[opacity]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:["solid","dashed","dotted","double","none","wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",isLength,isArbitraryLength]}],"underline-offset":[{"underline-offset":["auto",isLength,isArbitraryValue]}],"text-decoration-color":[{decoration:[colors]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:getSpacingWithArbitrary()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",isArbitraryValue]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",isArbitraryValue]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[opacity]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",isArbitraryPosition]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",isArbitrarySize]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},isArbitraryImage]}],"bg-color":[{bg:[colors]}],"gradient-from-pos":[{from:[gradientColorStopPositions]}],"gradient-via-pos":[{via:[gradientColorStopPositions]}],"gradient-to-pos":[{to:[gradientColorStopPositions]}],"gradient-from":[{from:[gradientColorStops]}],"gradient-via":[{via:[gradientColorStops]}],"gradient-to":[{to:[gradientColorStops]}],rounded:[{rounded:[borderRadius]}],"rounded-s":[{"rounded-s":[borderRadius]}],"rounded-e":[{"rounded-e":[borderRadius]}],"rounded-t":[{"rounded-t":[borderRadius]}],"rounded-r":[{"rounded-r":[borderRadius]}],"rounded-b":[{"rounded-b":[borderRadius]}],"rounded-l":[{"rounded-l":[borderRadius]}],"rounded-ss":[{"rounded-ss":[borderRadius]}],"rounded-se":[{"rounded-se":[borderRadius]}],"rounded-ee":[{"rounded-ee":[borderRadius]}],"rounded-es":[{"rounded-es":[borderRadius]}],"rounded-tl":[{"rounded-tl":[borderRadius]}],"rounded-tr":[{"rounded-tr":[borderRadius]}],"rounded-br":[{"rounded-br":[borderRadius]}],"rounded-bl":[{"rounded-bl":[borderRadius]}],"border-w":[{border:[borderWidth]}],"border-w-x":[{"border-x":[borderWidth]}],"border-w-y":[{"border-y":[borderWidth]}],"border-w-s":[{"border-s":[borderWidth]}],"border-w-e":[{"border-e":[borderWidth]}],"border-w-t":[{"border-t":[borderWidth]}],"border-w-r":[{"border-r":[borderWidth]}],"border-w-b":[{"border-b":[borderWidth]}],"border-w-l":[{"border-l":[borderWidth]}],"border-opacity":[{"border-opacity":[opacity]}],"border-style":[{border:["solid","dashed","dotted","double","none","hidden"]}],"divide-x":[{"divide-x":[borderWidth]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[borderWidth]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[opacity]}],"divide-style":[{divide:["solid","dashed","dotted","double","none"]}],"border-color":[{border:[borderColor]}],"border-color-x":[{"border-x":[borderColor]}],"border-color-y":[{"border-y":[borderColor]}],"border-color-t":[{"border-t":[borderColor]}],"border-color-r":[{"border-r":[borderColor]}],"border-color-b":[{"border-b":[borderColor]}],"border-color-l":[{"border-l":[borderColor]}],"divide-color":[{divide:[borderColor]}],"outline-style":[{outline:["","solid","dashed","dotted","double","none"]}],"outline-offset":[{"outline-offset":[isLength,isArbitraryValue]}],"outline-w":[{outline:[isLength,isArbitraryLength]}],"outline-color":[{outline:[colors]}],"ring-w":[{ring:getLengthWithEmptyAndArbitrary()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[colors]}],"ring-opacity":[{"ring-opacity":[opacity]}],"ring-offset-w":[{"ring-offset":[isLength,isArbitraryLength]}],"ring-offset-color":[{"ring-offset":[colors]}],shadow:[{shadow:["","inner","none",isTshirtSize,isArbitraryShadow]}],"shadow-color":[{shadow:[isAny]}],opacity:[{opacity:[opacity]}],"mix-blend":[{"mix-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"]}],filter:[{filter:["","none"]}],blur:[{blur:[blur]}],brightness:[{brightness:[brightness]}],contrast:[{contrast:[contrast]}],"drop-shadow":[{"drop-shadow":["","none",isTshirtSize,isArbitraryValue]}],grayscale:[{grayscale:[grayscale]}],"hue-rotate":[{"hue-rotate":[hueRotate]}],invert:[{invert:[invert]}],saturate:[{saturate:[saturate]}],sepia:[{sepia:[sepia]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[blur]}],"backdrop-brightness":[{"backdrop-brightness":[brightness]}],"backdrop-contrast":[{"backdrop-contrast":[contrast]}],"backdrop-grayscale":[{"backdrop-grayscale":[grayscale]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[hueRotate]}],"backdrop-invert":[{"backdrop-invert":[invert]}],"backdrop-opacity":[{"backdrop-opacity":[opacity]}],"backdrop-saturate":[{"backdrop-saturate":[saturate]}],"backdrop-sepia":[{"backdrop-sepia":[sepia]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[borderSpacing]}],"border-spacing-x":[{"border-spacing-x":[borderSpacing]}],"border-spacing-y":[{"border-spacing-y":[borderSpacing]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",isArbitraryValue]}],duration:[{duration:getNumberAndArbitrary()}],ease:[{ease:["linear","in","out","in-out",isArbitraryValue]}],delay:[{delay:getNumberAndArbitrary()}],animate:[{animate:["none","spin","ping","pulse","bounce",isArbitraryValue]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[scale]}],"scale-x":[{"scale-x":[scale]}],"scale-y":[{"scale-y":[scale]}],rotate:[{rotate:[isInteger,isArbitraryValue]}],"translate-x":[{"translate-x":[translate]}],"translate-y":[{"translate-y":[translate]}],"skew-x":[{"skew-x":[skew]}],"skew-y":[{"skew-y":[skew]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",isArbitraryValue]}],accent:[{accent:["auto",colors]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",isArbitraryValue]}],"caret-color":[{caret:[colors]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":getSpacingWithArbitrary()}],"scroll-mx":[{"scroll-mx":getSpacingWithArbitrary()}],"scroll-my":[{"scroll-my":getSpacingWithArbitrary()}],"scroll-ms":[{"scroll-ms":getSpacingWithArbitrary()}],"scroll-me":[{"scroll-me":getSpacingWithArbitrary()}],"scroll-mt":[{"scroll-mt":getSpacingWithArbitrary()}],"scroll-mr":[{"scroll-mr":getSpacingWithArbitrary()}],"scroll-mb":[{"scroll-mb":getSpacingWithArbitrary()}],"scroll-ml":[{"scroll-ml":getSpacingWithArbitrary()}],"scroll-p":[{"scroll-p":getSpacingWithArbitrary()}],"scroll-px":[{"scroll-px":getSpacingWithArbitrary()}],"scroll-py":[{"scroll-py":getSpacingWithArbitrary()}],"scroll-ps":[{"scroll-ps":getSpacingWithArbitrary()}],"scroll-pe":[{"scroll-pe":getSpacingWithArbitrary()}],"scroll-pt":[{"scroll-pt":getSpacingWithArbitrary()}],"scroll-pr":[{"scroll-pr":getSpacingWithArbitrary()}],"scroll-pb":[{"scroll-pb":getSpacingWithArbitrary()}],"scroll-pl":[{"scroll-pl":getSpacingWithArbitrary()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",isArbitraryValue]}],fill:[{fill:[colors,"none"]}],"stroke-w":[{stroke:[isLength,isArbitraryLength,isArbitraryNumber]}],stroke:[{stroke:[colors,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const twMerge=createTailwindMerge(getDefaultConfig)}}]);