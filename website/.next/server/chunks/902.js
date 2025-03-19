"use strict";
exports.id = 902;
exports.ids = [902];
exports.modules = {

/***/ 4902:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4246);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7096);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TWButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4289);
/* harmony import */ var _useClipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6768);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TWButton__WEBPACK_IMPORTED_MODULE_3__]);
_TWButton__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





// Original: https://raw.githubusercontent.com/PrismJS/prism-themes/master/themes/prism-ghcolors.css
/*:: import type { PrismTheme } from '../src/types' */ const theme /*: PrismTheme */  = {
    plain: {
        color: "#293742",
        borderRadius: 12,
        fontFamily: `SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace`,
        fontSize: 14,
        lineHeight: "1.5"
    },
    styles: [
        {
            types: [
                "comment",
                "prolog",
                "doctype",
                "cdata"
            ],
            style: {
                color: "#A7B6C2",
                fontStyle: "italic"
            }
        },
        {
            types: [
                "namespace"
            ],
            style: {
                opacity: 0.7
            }
        },
        {
            types: [
                "string",
                "attr-value"
            ],
            style: {
                color: "#DB2C6F"
            }
        },
        {
            types: [
                "punctuation",
                "operator"
            ],
            style: {
                color: "#394B59"
            }
        },
        {
            types: [
                "entity",
                "url",
                "symbol",
                "number",
                "boolean",
                "variable",
                "constant",
                "property",
                "regex",
                "inserted"
            ],
            style: {
                color: "#36acaa"
            }
        },
        {
            types: [
                "atrule",
                "keyword",
                "attr-name",
                "selector"
            ],
            style: {
                color: "#00B3A4"
            }
        },
        {
            types: [
                "function",
                "deleted",
                "tag"
            ],
            style: {
                color: "#DB2C6F"
            }
        },
        {
            types: [
                "function-variable"
            ],
            style: {
                color: "#634DBF"
            }
        },
        {
            types: [
                "tag",
                "selector",
                "keyword"
            ],
            style: {
                color: "#1a56db"
            }
        }
    ]
};
const Code = ({ children , codeString , className ="language-js" , ...props })=>{
    const language = className.replace(/language-/, "");
    const [hasCopied, onCopy] = (0,_useClipboard__WEBPACK_IMPORTED_MODULE_4__/* .useClipboard */ .V)(children.trim());
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((prism_react_renderer__WEBPACK_IMPORTED_MODULE_2___default()), {
            ...prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__.defaultProps,
            code: children.trim(),
            language: language,
            theme: theme,
            children: ({ className , style , tokens , getLineProps , getTokenProps  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute top-0 right-0 p-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TWButton__WEBPACK_IMPORTED_MODULE_3__/* .TWButton */ .J, {
                                size: "xs",
                                className: "font-sans",
                                onClick: onCopy,
                                children: hasCopied ? "Copied!" : "Copy"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                            className: className + " bg-gray-50 pb-4 pt-4 pr-4 overflow-scroll mb-4",
                            style: {
                                ...style,
                                border: "1px solid #eee",
                                fontSize: 13,
                                lineHeight: "1.5"
                            },
                            children: tokens.map((line, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    ...getLineProps({
                                        line,
                                        key: i
                                    }),
                                    children: [
                                        tokens.length > 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            "aria-hidden": "true",
                                            className: "inline-block w-5 mx-2 text-right text-gray-300 select-none",
                                            children: i + 1
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "w-5 mx-2"
                                        }),
                                        " ",
                                        line.map((token, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                ...getTokenProps({
                                                    token,
                                                    key
                                                })
                                            }, key))
                                    ]
                                }, i))
                        })
                    ]
                })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Code);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4289:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ TWButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4246);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _forwardRefWithAs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8804);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5049);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_aria__WEBPACK_IMPORTED_MODULE_4__]);
react_aria__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const mapIntentToColor = {
    primary: "blue",
    success: "green",
    danger: "red",
    warning: "yellow"
};
const TWButton = (0,_forwardRefWithAs__WEBPACK_IMPORTED_MODULE_2__/* .forwardRefWithAs */ .y)(({ as: is = "button" , color , intent ="none" , size ="md" , className , icon , minimal , iconRight , ...props }, ref)=>{
    const { children  } = props;
    const tailwindColor = mapIntentToColor[intent] ?? color;
    const iconIsOnlyChild = !!(icon && !iconRight && !children || iconRight && !icon && !children);
    let sizeClasses;
    let iconClasses;
    if (size === "xs") {
        sizeClasses = "text-xs rounded-md leading-4";
        sizeClasses += iconIsOnlyChild ? " p-1.5" : " py-1.5 px-2.5";
        iconClasses = "h-3 w-3";
    }
    if (size === "sm") {
        sizeClasses = "text-sm rounded-md leading-4";
        sizeClasses += iconIsOnlyChild ? " p-2" : " py-2 px-3";
        iconClasses = "h-3 w-3";
    }
    if (size === "md") {
        sizeClasses = "text-sm rounded-md leading-5";
        sizeClasses += iconIsOnlyChild ? " p-2" : " py-2 px-4";
        iconClasses = "h-5 w-5";
    }
    if (size === "lg") {
        sizeClasses = "text-base rounded-md leading-6";
        sizeClasses += iconIsOnlyChild ? " p-2" : " py-2 px-4";
        iconClasses = "h-6 w-6";
    }
    if (size === "xl") {
        sizeClasses = "text-base rounded-md leading-6";
        sizeClasses += iconIsOnlyChild ? " p-3" : " py-3 px-6";
        iconClasses = "h-6 w-6";
    }
    const leftIcon = icon ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(icon, {
        ...icon.props,
        height: "1em",
        width: "1em",
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("block", {
            "text-white": !!tailwindColor && !minimal,
            [`text-${tailwindColor}-700`]: !!tailwindColor && !!minimal,
            "text-gray-600": !tailwindColor,
            "-ml-1 mr-2": !iconIsOnlyChild
        }, iconClasses, icon?.props.className)
    }) : null;
    const rightIcon = iconRight ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(iconRight, {
        ...iconRight.props,
        height: "1em",
        width: "1em",
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("block ", {
            "text-white": !!tailwindColor && !minimal,
            [`text-${tailwindColor}-700`]: !!tailwindColor && !!minimal,
            "text-gray-600": !tailwindColor,
            "-mr-1 ml-2": !iconIsOnlyChild
        }, iconClasses, iconRight?.props.className)
    }) : null;
    const propsToPass = {
        ...props,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("font-medium inline-flex items-center  focus:outline-none transition duration-150 ease-in-out", {
            [`ring-1 ring-black ring-opacity-5  border border-transparent text-white bg-${tailwindColor}-600 hover:bg-${tailwindColor}-500 focus:border-${tailwindColor}-700 focus:ring focus:ring-${tailwindColor} active:border-${tailwindColor}-700`]: !!tailwindColor && !minimal,
            [`ring-1 ring-black ring-opacity-5 border border-gray-300 text-gray-700 bg-white hover:text-gray-500  focus:ring focus:ring-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50`]: !tailwindColor && !minimal,
            [`hover:bg-${tailwindColor}-100 active:bg-${tailwindColor}-200 text-${tailwindColor}-700 focus:ring focus:ring-${tailwindColor} border-transparent`]: minimal && tailwindColor,
            [`hover:bg-gray-200 active:bg-gray-300 text-gray-900 focus:ring focus:ring-blue border-transparent`]: minimal && !tailwindColor
        }, sizeClasses, className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                leftIcon,
                children,
                rightIcon
            ]
        })
    };
    let { buttonProps  } = (0,react_aria__WEBPACK_IMPORTED_MODULE_4__.useButton)({
        ...props,
        elementType: is
    }, ref);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(is, {
        ...propsToPass,
        ...buttonProps,
        ref,
        className: propsToPass.className
    });
});
TWButton.displayName = "TWButton";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ forwardRefWithAs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * This is a hack for sure. The thing is, getting a component to intelligently
 * infer props based on a component or JSX string passed into an `as` prop is
 * kind of a huge pain. Getting it to work and satisfy the constraints of
 * `forwardRef` seems dang near impossible. To avoid needing to do this awkward
 * type song-and-dance every time we want to forward a ref into a component
 * that accepts an `as` prop, we abstract all of that mess to this function for
 * the time time being.
 *
 * TODO: Eventually we should probably just try to get the type defs above
 * working across the board, but ain't nobody got time for that mess!
 *
 * @param Comp
 */ function forwardRefWithAs(comp) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(comp);
} /*
Test components to make sure our dynamic As prop components work as intended 
type PopupProps = {
  lol: string;
  children?: React.ReactNode | ((value?: number) => JSX.Element);
};
export const Popup = forwardRefWithAs<PopupProps, 'input'>(
  ({ as: Comp = 'input', lol, className, children, ...props }, ref) => {
    return (
      <Comp ref={ref} {...props}>
        {typeof children === 'function' ? children(56) : children}
      </Comp>
    );
  }
);
export const TryMe1: React.FC = () => {
  return <Popup as="input" lol="lol" name="me" />;
};
export const TryMe2: React.FC = () => {
  let ref = React.useRef(null);
  return <Popup ref={ref} as="div" lol="lol" />;
};

export const TryMe4: React.FC = () => {
  return <Popup as={Whoa} lol="lol" test="123" name="boop" />;
};
export const Whoa: React.FC<{
  help?: boolean;
  lol: string;
  name: string;
  test: string;
}> = props => {
  return <input {...props} />;
};
*/  // export const TryMe3: React.FC = () => {
 //   return <Popup as={Cool} lol="lol" name="me" test="123" />;
 // };
 // let Cool = styled(Whoa)`
 //   padding: 10px;
 // `


/***/ }),

/***/ 6768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useClipboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8887);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);


/**
 * React hook to copy content to clipboard
 *
 * @param text the text or value to copy
 * @param timeout delay (in ms) to switch back to initial state once copied.
 */ function useClipboard(text, timeout = 1500) {
    const [hasCopied, setHasCopied] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const onCopy = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{
        const didCopy = copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default()(text);
        setHasCopied(didCopy);
    }, [
        text
    ]);
    // @ts-ignore
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (hasCopied) {
            const id = setTimeout(()=>{
                setHasCopied(false);
            }, timeout);
            return ()=>clearTimeout(id);
        }
    }, [
        timeout,
        hasCopied
    ]);
    return [
        hasCopied,
        onCopy
    ];
}


/***/ })

};
;