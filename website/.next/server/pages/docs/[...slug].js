(() => {
var exports = {};
exports.id = 86;
exports.ids = [86];
exports.modules = {

/***/ 8588:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Inter_a184c8', '__Inter_Fallback_a184c8'","fontStyle":"normal"},
	"className": "__className_a184c8"
};


/***/ }),

/***/ 6845:
/***/ ((module) => {

// Exports
module.exports = {
	"contents__link": "Toc_contents__link__yMrl_",
	"contents__link--active": "Toc_contents__link--active__224_8"
};


/***/ }),

/***/ 4922:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_docs_slug_tsx__WEBPACK_IMPORTED_MODULE_0__.ZP),
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ private_next_pages_docs_slug_tsx__WEBPACK_IMPORTED_MODULE_0__.Fe),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ private_next_pages_docs_slug_tsx__WEBPACK_IMPORTED_MODULE_0__.b1)
/* harmony export */ });
/* harmony import */ var private_next_pages_docs_slug_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7081);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_docs_slug_tsx__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_docs_slug_tsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4246);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



const Container = ({ className , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("container mx-auto", className),
        ...props
    });
};
Container.displayName = "Container";


/***/ }),

/***/ 3057:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ DocsPageFooter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4246);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9894);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var siteConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7358);
/* harmony import */ var _lib_docs_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6432);
/* harmony import */ var _ReactionForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5321);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ReactionForm__WEBPACK_IMPORTED_MODULE_5__]);
_ReactionForm__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function areEqual(prevProps, props) {
    return prevProps.route?.path === props.route?.path;
}
const DocsPageFooter = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3__.memo(({ route , href , prevRoute , nextRoute  })=>{
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { tag , slug  } = (0,_lib_docs_utils__WEBPACK_IMPORTED_MODULE_6__/* .getSlug */ .QF)(query);
    const editUrl = `${siteConfig__WEBPACK_IMPORTED_MODULE_4__/* .siteConfig.editUrl */ .J.editUrl}${route?.path}`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "py-12",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "space-y-8 md:flex space-between items-center md:space-y-0 md:space-x-8",
                    children: [
                        prevRoute && prevRoute.path ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: (0,_lib_docs_utils__WEBPACK_IMPORTED_MODULE_6__/* .addTagToSlug */ .eM)((0,_lib_docs_utils__WEBPACK_IMPORTED_MODULE_6__/* .removeFromLast */ .zN)(prevRoute.path, "."), tag),
                            className: "flex-1 max-w-md block border border-gray-200 p-4 rounded-lg hover:text-blue-600 duration-150 ease-out",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-sm block text-gray-500 mb-1 ",
                                    children: "Previous"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-xl block  font-semibold",
                                    children: prevRoute.title
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-1"
                        }),
                        nextRoute && nextRoute.path ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: (0,_lib_docs_utils__WEBPACK_IMPORTED_MODULE_6__/* .addTagToSlug */ .eM)((0,_lib_docs_utils__WEBPACK_IMPORTED_MODULE_6__/* .removeFromLast */ .zN)(nextRoute.path, "."), tag),
                            className: "flex-1 max-w-md text-right block border border-gray-200  p-4 rounded-lg hover:text-blue-600 duration-150 ease-out",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-sm block text-gray-500 mb-1 ",
                                    children: "Next"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-xl block  font-semibold ",
                                    children: nextRoute.title
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-1"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "border-t border-b py-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReactionForm__WEBPACK_IMPORTED_MODULE_5__/* .ReactionForm */ .E, {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex my-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "md:flex-1 md:text-right",
                    children: tag ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: href,
                        as: slug,
                        className: "text-gray-600 underline",
                        children: "Go to the live version of this page"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: editUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-gray-600 underline",
                        children: "Edit this page on GitHub"
                    })
                })
            })
        ]
    });
}, areEqual);
DocsPageFooter.displayName = "DocsPageFooter";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5321:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ ReactionForm)
/* harmony export */ });
/* unused harmony export FeedbackButton */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4246);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vercel_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3376);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5049);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_analytics__WEBPACK_IMPORTED_MODULE_2__, react_aria__WEBPACK_IMPORTED_MODULE_6__]);
([_vercel_analytics__WEBPACK_IMPORTED_MODULE_2__, react_aria__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const mapIntentToSource = {
    tears: "/twemoji/1f62d.svg",
    meh: "/twemoji/1f615.svg",
    happy: "/twemoji/1f600.svg",
    awesome: "/twemoji/1f929.svg"
};
function FeedbackButton({ intent , ...props }) {
    const ref = react__WEBPACK_IMPORTED_MODULE_5__.useRef(null);
    const { buttonProps  } = (0,react_aria__WEBPACK_IMPORTED_MODULE_6__.useButton)(props, ref);
    const { isHovered , hoverProps  } = (0,react_aria__WEBPACK_IMPORTED_MODULE_6__.useHover)({});
    const mergedProps = (0,react_aria__WEBPACK_IMPORTED_MODULE_6__.mergeProps)(hoverProps, buttonProps);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                ...mergedProps,
                ref: ref,
                className: "jsx-7542a3d2121374b1" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("inline-flex items-center justify-center py-2", isHovered ? " none transition duration-150 scale-125   ease-in-out " : " grayed transition duration-150 scale-100  ease-in-out ") || ""),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: mapIntentToSource[intent],
                    height: "24",
                    width: "24",
                    className: "jsx-7542a3d2121374b1"
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "7542a3d2121374b1",
                children: ".grayed.jsx-7542a3d2121374b1{-webkit-filter:grayscale(100%);filter:grayscale(100%)}.none.jsx-7542a3d2121374b1{-webkit-filter:none;filter:none}"
            })
        ]
    });
}
FeedbackButton.displayName = "FeedbackButton";
function ReactionForm() {
    const [feedbackGiven, setFeedbackGiven] = react__WEBPACK_IMPORTED_MODULE_5__.useState(false);
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    react__WEBPACK_IMPORTED_MODULE_5__.useEffect(()=>{
        setFeedbackGiven(false);
    }, [
        asPath,
        setFeedbackGiven
    ]);
    const makeTrackedHandler = (value)=>()=>{
            _vercel_analytics__WEBPACK_IMPORTED_MODULE_2__["default"].track("Feedback Button", {
                category: "Feedback Button",
                action: "feedback",
                name: "feedback",
                label: window.location.pathname,
                value
            });
            setFeedbackGiven(true);
        };
    if (feedbackGiven) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mb-4 text-lg font-semibold text-center ",
            children: "Thanks for letting us know!"
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-4 text-lg font-semibold text-center ",
                    children: "Was this page helpful?"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid w-64 grid-cols-4 gap-2 mx-auto",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FeedbackButton, {
                            intent: "tears",
                            onPress: makeTrackedHandler(0)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FeedbackButton, {
                            intent: "meh",
                            onPress: makeTrackedHandler(1)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FeedbackButton, {
                            intent: "happy",
                            onPress: makeTrackedHandler(2)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FeedbackButton, {
                            intent: "awesome",
                            onPress: makeTrackedHandler(3)
                        })
                    ]
                })
            ]
        });
    }
}
ReactionForm.displayName = "ReactionForm";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* binding */ Search)
});

// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4246);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__(9894);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "@docsearch/react"
const react_namespaceObject = require("@docsearch/react");
// EXTERNAL MODULE: ./src/siteConfig.tsx
var siteConfig = __webpack_require__(7358);
;// CONCATENATED MODULE: ./src/components/Search.tsx








function Hit({ hit , children  }) {
    return /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
        href: hit.url.replace(),
        children: children
    });
}
const options = {
    appId: siteConfig/* siteConfig.algolia.appId */.J.algolia.appId,
    apiKey: siteConfig/* siteConfig.algolia.apiKey */.J.algolia.apiKey,
    indexName: siteConfig/* siteConfig.algolia.indexName */.J.algolia.indexName
};
let DocSearchModal = null;
const Search = ()=>{
    const searchButtonRef = external_react_.useRef(null);
    const [isShowing, setIsShowing] = external_react_.useState(false);
    const [initialQuery, setInitialQuery] = external_react_.useState(null);
    const importDocSearchModalIfNeeded = external_react_.useCallback(function importDocSearchModalIfNeeded() {
        if (DocSearchModal) {
            return Promise.resolve();
        }
        return Promise.resolve(Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2713, 23))).then(({ DocSearchModal: Modal  })=>{
            DocSearchModal = Modal;
        });
    }, []);
    const onOpen = external_react_.useCallback(function onOpen() {
        importDocSearchModalIfNeeded().then(()=>{
            // We check that no other DocSearch modal is showing before opening this
            // one (we use one instance for desktop and one instance for mobile).
            if (document.body.classList.contains("DocSearch--active")) {
                return;
            }
            setIsShowing(true);
        });
    }, [
        importDocSearchModalIfNeeded,
        setIsShowing
    ]);
    const onClose = external_react_.useCallback(function onClose() {
        setIsShowing(false);
    }, [
        setIsShowing
    ]);
    const onInput = external_react_.useCallback((event)=>{
        importDocSearchModalIfNeeded().then(()=>{
            setIsShowing(true);
            setInitialQuery(event.key);
        });
    }, [
        importDocSearchModalIfNeeded,
        setIsShowing,
        setInitialQuery
    ]);
    (0,react_namespaceObject.useDocSearchKeyboardEvents)({
        isOpen: isShowing,
        onOpen,
        onClose,
        onInput,
        searchButtonRef
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime.jsx("link", {
                    rel: "preconnect",
                    href: `https://${options.appId}-dsn.algolia.net`,
                    crossOrigin: "anonymous"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                    ref: searchButtonRef,
                    type: "button",
                    className: "flex items-center w-full px-2 py-2 text-sm leading-6 text-left text-gray-500 align-middle transition duration-150 ease-in-out border rounded-lg group hover:text-gray-600 hover:border-gray-300 pointer bg-gray-50 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50",
                    onClick: onOpen,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                            width: "1em",
                            height: "1em",
                            className: "flex-shrink-0 mr-3 text-gray-600 align-middle group-hover:text-gray-700",
                            style: {
                                marginBottom: 2
                            },
                            viewBox: "0 0 20 20",
                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
                                stroke: "currentColor",
                                fill: "none",
                                strokeWidth: "2",
                                fillRule: "evenodd",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })
                        }),
                        "Search docs",
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                            className: "ml-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("kbd", {
                                    className: "inline-flex items-center justify-center p-0 mr-0 mr-1 text-xs text-center align-middle transition duration-150 ease-in-out bg-gray-100 border border-gray-300 rounded group-hover:border-gray-300 ",
                                    style: {
                                        minWidth: "1.8em"
                                    },
                                    children: "⌘"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("kbd", {
                                    className: "inline-flex items-center justify-center p-0 ml-auto mr-0 text-xs text-center align-middle transition duration-150 ease-in-out bg-gray-100 border border-gray-300 rounded group-hover:border-gray-300 ",
                                    style: {
                                        minWidth: "1.8em"
                                    },
                                    children: "K"
                                })
                            ]
                        })
                    ]
                })
            }),
            isShowing && /*#__PURE__*/ (0,external_react_dom_namespaceObject.createPortal)(/*#__PURE__*/ jsx_runtime.jsx(DocSearchModal, {
                ...options,
                initialQuery: initialQuery,
                onClose: onClose,
                navigator: {
                    navigate ({ suggestionUrl  }) {
                        router_default().push(suggestionUrl);
                    }
                },
                transformItems: (items)=>{
                    return items.map((item)=>{
                        const url = new URL(item.url);
                        return {
                            ...item,
                            url: item.url.replace(url.origin, "").replace("/docs/#", "/docs/overview#")
                        };
                    });
                },
                hitComponent: Hit
            }), document.body)
        ]
    });
};
Search.displayName = "Search";


/***/ }),

/***/ 3317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4246);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8667);





const Sidebar = ({ active , children , fixed  })=>{
    const [searching, setSearching] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
        className: "jsx-9fefb4520ece3b12" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("sidebar bg-white top-24 flex-shrink-0 pr-2", {
            active,
            ["pb-0 flex flex-col z-1 sticky"]: fixed,
            fixed,
            searching
        }) || ""),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-9fefb4520ece3b12" + " " + "sidebar-search my-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Search__WEBPACK_IMPORTED_MODULE_4__/* .Search */ .o, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-9fefb4520ece3b12" + " " + "sidebar-content overflow-y-auto pb-4",
                children: children
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "9fefb4520ece3b12",
                children: ".sidebar.jsx-9fefb4520ece3b12{-webkit-overflow-scrolling:touch}.sidebar.fixed.jsx-9fefb4520ece3b12{width:300px;padding-right:2.5rem;height:-webkit-calc(100vh - 1.5rem - 64px - 42px);height:-moz-calc(100vh - 1.5rem - 64px - 42px);height:calc(100vh - 1.5rem - 64px - 42px)}.sidebar.fixed.searching.jsx-9fefb4520ece3b12>.sidebar-content.jsx-9fefb4520ece3b12{display:none}.sidebar-search.jsx-9fefb4520ece3b12{position:relative;z-index:1}@media screen and (max-width:1024px){.sidebar.jsx-9fefb4520ece3b12,.sidebar.fixed.jsx-9fefb4520ece3b12{display:none}.sidebar.active.jsx-9fefb4520ece3b12{display:block}}"
            })
        ]
    });
};


/***/ }),

/***/ 9991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ SidebarCategory)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4246);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__);





function SidebarCategory({ isMobile , level =1 , title , selected , opened , children  }) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const [{ toggle , shouldScroll =false  }, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        toggle: selected || opened
    });
    const toggleCategory = ()=>{
        setToggle({
            toggle: !toggle,
            shouldScroll: true
        });
    };
    const levelClass = `level-${level}`;
    // If a category is selected indirectly, open it. This can happen when using the search input
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (selected) {
            setToggle({
                toggle: true
            });
        }
    }, [
        selected
    ]);
    // Navigate to the start of the category when manually opened
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (toggle && shouldScroll && ref.current != null) {
            const content = document.querySelector(isMobile ? ".docs-dropdown" : ".sidebar-content");
            if (content) {
                // 10 is added for better margin
                const height = ref.current.offsetTop - (isMobile ? 10 : content.offsetTop);
                content.scrollTop = height;
                setToggle({
                    toggle
                });
            }
        }
    }, [
        toggle,
        shouldScroll,
        isMobile
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: ref,
        className: "jsx-db0ff455c84adc94" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("category", levelClass, {
            open: toggle,
            selected
        }) || ""),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                onClick: toggleCategory,
                className: "jsx-db0ff455c84adc94" + " " + "label",
                children: [
                    title,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiChevronDown, {
                        className: "text-gray-600"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-db0ff455c84adc94" + " " + "posts",
                children: children
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "db0ff455c84adc94",
                children: ".category.jsx-db0ff455c84adc94{margin:12px 0}.category.jsx-db0ff455c84adc94:first-child{margin-top:0}.category.jsx-db0ff455c84adc94:last-child{margin-bottom:0}.label.jsx-db0ff455c84adc94{font-size:1rem;line-height:1.5rem;font-weight:400;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;color:#4b5563}.label.jsx-db0ff455c84adc94>svg{margin-right:16px;-webkit-transform-origin:center;-moz-transform-origin:center;-ms-transform-origin:center;-o-transform-origin:center;transform-origin:center;-webkit-transition:-webkit-transform.15s ease;-moz-transition:-moz-transform.15s ease;-o-transition:-o-transform.15s ease;transition:-webkit-transform.15s ease;transition:-moz-transform.15s ease;transition:-o-transform.15s ease;transition:transform.15s ease}.selected.jsx-db0ff455c84adc94>.label.jsx-db0ff455c84adc94{font-weight:600;color:#161e2e}.open.jsx-db0ff455c84adc94>.label.jsx-db0ff455c84adc94{color:#161e2e}.open.jsx-db0ff455c84adc94>.label.jsx-db0ff455c84adc94>svg{margin-left:1px;-webkit-transform-origin:center;-moz-transform-origin:center;-ms-transform-origin:center;-o-transform-origin:center;transform-origin:center;-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg)}.level-2.jsx-db0ff455c84adc94 .label.jsx-db0ff455c84adc94{text-transform:none;letter-spacing:0}.label.jsx-db0ff455c84adc94:hover{color:#1a202c}.separated.jsx-db0ff455c84adc94{margin-bottom:32px}.posts.jsx-db0ff455c84adc94{border-left:1px solid#e5e7eb;margin-top:0;height:0;overflow:hidden;padding-left:19px;margin-left:3px}.open.jsx-db0ff455c84adc94>.posts.jsx-db0ff455c84adc94{margin-top:12px;height:auto}@media screen and (max-width:950px){.category.jsx-db0ff455c84adc94{margin:24px 0}}"
            })
        ]
    });
}


/***/ }),

/***/ 5339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ SidebarHeading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4246);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const SidebarHeading = ({ title , children  })=>{
    return(// <div>
    //   <h4 className="font-semibold uppercase text-sm my-4">{title}</h4>
    //   <div>{children}</div>
    // </div>
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-4ac3a4fb51b82686" + " " + "heading",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: "jsx-4ac3a4fb51b82686",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-4ac3a4fb51b82686",
                children: children
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "4ac3a4fb51b82686",
                children: "h4.jsx-4ac3a4fb51b82686{margin:1.25rem 0;font-size:1.2rem;font-weight:600}"
            })
        ]
    }));
};
SidebarHeading.displayName = "SidebarHeading";


/***/ }),

/***/ 4950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K": () => (/* binding */ SidebarMobile)
});

// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4246);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "body-scroll-lock"
const external_body_scroll_lock_namespaceObject = require("body-scroll-lock");
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/Container.tsx
var Container = __webpack_require__(2264);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: ./src/components/Search.tsx + 2 modules
var Search = __webpack_require__(8667);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/SidebarMobile.tsx









function SidebarMobile({ children  }) {
    const [opened, setOpen] = external_react_.useState(false);
    const menuRef = external_react_.useRef(null);
    const searchRef = external_react_.useRef(null);
    const router = (0,router_.useRouter)();
    const openMenu = ()=>{
        if (menuRef.current != null) {
            (0,external_body_scroll_lock_namespaceObject.disableBodyScroll)(menuRef.current);
            setOpen(true);
        }
    };
    const closeMenu = ()=>{
        if (menuRef.current != null) {
            (0,external_body_scroll_lock_namespaceObject.enableBodyScroll)(menuRef.current);
            setOpen(false);
        }
    };
    const toggleOpen = ()=>{
        if (opened) {
            closeMenu();
        } else {
            openMenu();
        }
    };
    const onRouteChange = ()=>{
        closeMenu();
    };
    external_react_.useEffect(()=>{
        onRouteChange();
        return ()=>{
            (0,external_body_scroll_lock_namespaceObject.clearAllBodyScrollLocks)();
        };
    }, [
        router.asPath
    ]);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "lg:hidden",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Container/* Container */.W, {
            className: "px-4",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "jsx-8587c5ea3cc910f8" + " " + "sidebar-search py-2 z-10",
                    children: /*#__PURE__*/ jsx_runtime.jsx(Search/* Search */.o, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                    htmlFor: "dropdown-input",
                    className: "jsx-8587c5ea3cc910f8" + " " + (external_classnames_default()("w-full", {
                        opened
                    }) || ""),
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                            id: "dropdown-input",
                            type: "checkbox",
                            checked: opened,
                            onChange: toggleOpen,
                            className: "jsx-8587c5ea3cc910f8" + " " + "hidden"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "jsx-8587c5ea3cc910f8" + " " + "docs-select flex w-full items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(fi_.FiChevronRight, {
                                    className: "text-gray-600 -ml-1"
                                }),
                                "Menu"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    ref: menuRef,
                    className: "jsx-8587c5ea3cc910f8" + " " + "docs-dropdown shadow-xl",
                    children: /*#__PURE__*/ jsx_runtime.jsx(Container/* Container */.W, {
                        className: "px-4",
                        children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                            className: "jsx-8587c5ea3cc910f8",
                            children: children
                        })
                    })
                }),
                jsx_runtime.jsx((style_default()), {
                    id: "8587c5ea3cc910f8",
                    children: ".docs-select.jsx-8587c5ea3cc910f8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:2.5rem;width:100%;line-height:3rem;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-align:left;cursor:pointer}.docs-dropdown.jsx-8587c5ea3cc910f8{position:absolute;left:0;right:0;top:100%;bottom:100%;background:white;overflow-y:auto;-webkit-overflow-scrolling:touch}.docs-dropdown.jsx-8587c5ea3cc910f8 nav.jsx-8587c5ea3cc910f8{padding:10px 0}.opened.jsx-8587c5ea3cc910f8~.docs-dropdown.jsx-8587c5ea3cc910f8{min-height:80px;bottom:-webkit-calc(153px - 90vh);bottom:-moz-calc(153px - 90vh);bottom:calc(153px - 90vh);border-top:1px solid#eaeaea}.docs-select.jsx-8587c5ea3cc910f8 svg{margin-left:1px;margin-right:14px;-webkit-transition:-webkit-transform.15s ease;-moz-transition:-moz-transform.15s ease;-o-transition:-o-transform.15s ease;transition:-webkit-transform.15s ease;transition:-moz-transform.15s ease;transition:-o-transform.15s ease;transition:transform.15s ease}.opened.jsx-8587c5ea3cc910f8>.docs-select.jsx-8587c5ea3cc910f8 svg{-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg)}@media screen and (max-width:640px){.opened.jsx-8587c5ea3cc910f8~.docs-dropdown.jsx-8587c5ea3cc910f8{bottom:-webkit-calc(203px - 90vh);bottom:-moz-calc(203px - 90vh);bottom:calc(203px - 90vh)}}"
                })
            ]
        })
    });
}


/***/ }),

/***/ 2906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G": () => (/* binding */ SidebarPost)
});

// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4246);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__(9894);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/SidebarNavLink.tsx






function SidebarNavLink({ route: { href , pathname , title , selected  } , onClick  }) {
    const router = (0,router_.useRouter)();
    const onlyHashChange = pathname === router.pathname;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "jsx-83fd076a2e59f608" + " " + (external_classnames_default()("nav-link", {
            selected
        }) || ""),
        children: [
            // NOTE: use just anchor element for triggering `hashchange` event
            onlyHashChange ? /*#__PURE__*/ jsx_runtime.jsx("a", {
                href: pathname,
                className: "jsx-83fd076a2e59f608" + " " + ((selected ? "selected" : "") || ""),
                children: title
            }) : /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: pathname,
                children: title
            }),
            jsx_runtime.jsx((style_default()), {
                id: "83fd076a2e59f608",
                children: "div.selected.jsx-83fd076a2e59f608{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.nav-link.jsx-83fd076a2e59f608{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%}.nav-link.jsx-83fd076a2e59f608 a{text-decoration:none;font-size:1rem;line-height:1.5rem;color:#4b5563;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.selected.jsx-83fd076a2e59f608 a{font-weight:600;color:#161e2e}.nav-link.jsx-83fd076a2e59f608:hover a{color:#161e2e}span.jsx-83fd076a2e59f608{color:#a0aec0}@media screen and (max-width:950px){div.jsx-83fd076a2e59f608{padding-top:0;padding-left:0;padding-bottom:0}div.selected.jsx-83fd076a2e59f608{border-left:none;padding-left:0}.nav-link.jsx-83fd076a2e59f608 a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}}"
            })
        ]
    });
}
SidebarNavLink.displayName = "SidebarNavLink";

;// CONCATENATED MODULE: ./src/components/SidebarPost.tsx





const SidebarPost = ({ isMobile , route , level =1 , onClick , ...props })=>{
    const selectedRef = external_react_.useRef(null);
    const ref = route.selected ? selectedRef : null;
    external_react_.useEffect(()=>{
        if (ref && ref.current && !isMobile) {
            const content = document.querySelector(".sidebar-content");
            // 32 is the top and bottom margin for `.link`
            const height = ref.current.offsetTop - 32;
            if (content) {
                content.scrollTop = height - content.offsetHeight / 2;
            }
        }
    }, [
        ref,
        isMobile
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        ref: ref,
        className: "jsx-e753599a78fa2a40" + " " + (external_classnames_default()("link", `level-${level}`) || ""),
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(SidebarNavLink, {
                route: route,
                scrollSelectedIntoView: props.scrollSelectedIntoView,
                categorySelected: props.categorySelected,
                level: level,
                onClick: onClick
            }),
            jsx_runtime.jsx((style_default()), {
                id: "e753599a78fa2a40",
                children: ".link.jsx-e753599a78fa2a40{margin:12px 0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.link.jsx-e753599a78fa2a40:first-child{margin-top:0}.link.jsx-e753599a78fa2a40:last-child{margin-bottom:0}@media screen and (max-width:950px){.link.jsx-e753599a78fa2a40{margin:24px 0}}"
            })
        ]
    });
};


/***/ }),

/***/ 502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* binding */ Toc)
});

// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4246);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/useTocHighlight.tsx

/**
 * Sets up Table of Contents highlighting. It requires that
 */ function useTocHighlight(linkClassName, linkActiveClassName, topOffset, getHeaderAnchors, getHeaderDataFromAnchor, getAnchorHeaderIdentifier) {
    const [lastActiveLink, setLastActiveLink] = external_react_default().useState(undefined);
    const [headings, setHeadings] = external_react_default().useState([]);
    external_react_default().useEffect(()=>{
        setHeadings(getHeaderAnchors().map(getHeaderDataFromAnchor));
    }, [
        setHeadings
    ]);
    external_react_default().useEffect(()=>{
        let headersAnchors = [];
        let links = [];
        function setActiveLink() {
            function getActiveHeaderAnchor() {
                let index = 0;
                let activeHeaderAnchor = null;
                headersAnchors = getHeaderAnchors();
                while(index < headersAnchors.length && !activeHeaderAnchor){
                    const headerAnchor = headersAnchors[index];
                    const { top  } = headerAnchor.getBoundingClientRect();
                    if (top >= 0 && top <= topOffset) {
                        activeHeaderAnchor = headerAnchor;
                    }
                    index += 1;
                }
                return activeHeaderAnchor;
            }
            const activeHeaderAnchor = getActiveHeaderAnchor();
            if (activeHeaderAnchor) {
                let index = 0;
                let itemHighlighted = false;
                links = document.getElementsByClassName(linkClassName);
                while(index < links.length && !itemHighlighted){
                    const link = links[index];
                    const { href  } = link;
                    const anchorValue = decodeURIComponent(href.substring(href.indexOf("#") + 1));
                    if (getAnchorHeaderIdentifier(activeHeaderAnchor) === anchorValue) {
                        if (lastActiveLink) {
                            lastActiveLink.classList.remove(linkActiveClassName);
                        }
                        link.classList.add(linkActiveClassName);
                        setLastActiveLink(link);
                        itemHighlighted = true;
                    }
                    index += 1;
                }
            }
        }
        document.addEventListener("scroll", setActiveLink);
        document.addEventListener("resize", setActiveLink);
        setActiveLink();
        return ()=>{
            document.removeEventListener("scroll", setActiveLink);
            document.removeEventListener("resize", setActiveLink);
        };
    });
    return headings;
}

// EXTERNAL MODULE: ./src/components/Toc.module.css
var Toc_module = __webpack_require__(6845);
var Toc_module_default = /*#__PURE__*/__webpack_require__.n(Toc_module);
;// CONCATENATED MODULE: ./src/components/Toc.tsx





const TOP_OFFSET = 100;
function getHeaderAnchors() {
    return Array.prototype.filter.call(document.getElementsByClassName("anchor"), function(testElement) {
        return testElement.parentNode.nodeName === "H2" || testElement.parentNode.nodeName === "H3";
    });
}
function getHeaderDataFromAnchors(el) {
    return {
        url: el.getAttribute("href"),
        text: el.parentElement?.innerText,
        depth: Number(el.parentElement?.nodeName.replace("H", ""))
    };
}
const Toc = ()=>{
    const headings = useTocHighlight((Toc_module_default()).contents__link, (Toc_module_default())["contents__link--active"], TOP_OFFSET, getHeaderAnchors, getHeaderDataFromAnchors, (el)=>el?.parentElement?.id);
    return /*#__PURE__*/ jsx_runtime.jsx("ul", {
        className: "space-y-3",
        children: headings && headings.length > 0 && headings.map((h, i)=>h.url ? /*#__PURE__*/ jsx_runtime.jsx("li", {
                className: external_classnames_default()("text-sm ", {
                    ["pl-2"]: h?.depth === 3,
                    ["hidden"]: h.depth && h.depth > 3
                }),
                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                    className: (Toc_module_default()).contents__link,
                    href: h.url,
                    children: h.text
                })
            }, `heading-${h.url}-${i}`) : null)
    });
};


/***/ }),

/***/ 7712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ addRouterEvents)
/* harmony export */ });
function hasModifier(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
/**
 * Util to add router events to anchors that weren't added with React Components
 */ function addRouterEvents(node, router, { href  }) {
    function onClick(e) {
        const linkTarget = e.currentTarget.target;
        if (!(e.defaultPrevented || hasModifier(e) || linkTarget && linkTarget !== "_self")) {
            e.preventDefault();
            router.push(href).then((success)=>{
                if (success) {
                    window.scrollTo(0, 0);
                    document.body.focus();
                }
            });
        }
    }
    function onMouseEnter() {
        router.prefetch(href, href, {
            priority: true
        });
    }
    node.addEventListener("click", onClick); // EventListener
    node.addEventListener("mouseenter", onMouseEnter);
    return ()=>{
        node.removeEventListener("click", onClick); // EventListener
        node.removeEventListener("mouseenter", onMouseEnter);
    };
}


/***/ }),

/***/ 1824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useIsMobile)
/* harmony export */ });
/* unused harmony export useMediaQuery */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useMediaQuery = (width)=>{
    const [targetReached, setTargetReached] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const updateTarget = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addListener(updateTarget);
        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }
        return ()=>media.removeListener(updateTarget);
    }, []);
    return targetReached;
};
const useIsMobile = ()=>{
    return useMediaQuery(640);
};



/***/ }),

/***/ 6182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ findRouteByPath)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6432);

// @ts-ignore
function findRouteByPath(path, routes) {
    // eslint-disable-next-line
    for (const route of routes){
        if (route.path && (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .removeFromLast */ .zN)(route.path, ".") === path) {
            return route;
        }
        const childPath = route.routes && findRouteByPath(path, route.routes);
        if (childPath) return childPath;
    }
}


/***/ }),

/***/ 6356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "pY": () => (/* binding */ fetchLocalDocsManifest),
  "Sw": () => (/* binding */ fetchRemoteDocsManifest),
  "Iz": () => (/* binding */ getCurrentTag),
  "w3": () => (/* binding */ getPaths),
  "rS": () => (/* binding */ getRawFileFromLocal)
});

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__(7881);
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
;// CONCATENATED MODULE: external "util"
const external_util_namespaceObject = require("util");
var external_util_default = /*#__PURE__*/__webpack_require__.n(external_util_namespaceObject);
;// CONCATENATED MODULE: ./src/lib/fs-utils.tsx


const readFile = (0,external_util_namespaceObject.promisify)((external_fs_default()).readFile);
const writeFile = (0,external_util_namespaceObject.promisify)((external_fs_default()).writeFile);

// EXTERNAL MODULE: ./src/lib/github/constants.tsx
var constants = __webpack_require__(6017);
;// CONCATENATED MODULE: ./src/lib/github/api.tsx




const USE_CACHE = process.env.USE_CACHE === "true";
const TAG_CACHE_PATH = external_path_default().resolve(".github-latest-tag");
async function getLatestTag() {
    let cachedTag;
    if (USE_CACHE) {
        try {
            cachedTag = await readFile(TAG_CACHE_PATH, "utf8");
        } catch (error) {
        // A cached file is not required
        }
    }
    if (!cachedTag) {
        const res = await external_isomorphic_unfetch_default()(`${constants/* GITHUB_API_URL */.ju}/repos/${constants/* REPO_NAME */.nG}/releases/latest`);
        if (res.ok) {
            const data = await res.json();
            const tag = data.tag_name;
            if (USE_CACHE) {
                try {
                    await writeFile(TAG_CACHE_PATH, tag, "utf8");
                } catch (error) {
                // A cached file is not required
                }
            }
            cachedTag = tag;
        }
    }
    return cachedTag;
}

// EXTERNAL MODULE: ./src/lib/github/raw.tsx
var raw = __webpack_require__(4754);
// EXTERNAL MODULE: ./src/lib/docs/utils.ts
var utils = __webpack_require__(6432);
;// CONCATENATED MODULE: ./src/lib/docs/config.ts
// Default tag if the latest release was not found
const TAG = "v2.4.0";
// If a version different from the latest release is required, update TAG with the wanted
// version and set this to `true`
const FORCE_TAG = true;

;// CONCATENATED MODULE: ./src/lib/docs/page.tsx







const read = external_util_default().promisify((external_fs_default()).readFile);
async function getCurrentTag(tag) {
    if (tag) return tag;
    if (FORCE_TAG) return TAG;
    return getLatestTag();
}
const postsDirectory = (0,external_path_.join)(process.cwd(), "../.");
async function getRawFileFromLocal(path) {
    const fullPath = (0,external_path_.join)(postsDirectory, path);
    const fileContents = await read(fullPath, "utf8");
    return fileContents;
}
async function fetchLocalDocsManifest() {
    const routes = await getRawFileFromLocal("/docs/manifest.json");
    return JSON.parse(routes);
}
async function fetchRemoteDocsManifest(tag) {
    const res = await (0,raw/* getRawFileFromRepo */.V)("/docs/manifest.json", tag);
    return JSON.parse(res);
}
function getPaths(nextRoutes, carry = []) {
    nextRoutes.forEach(({ path , routes  })=>{
        if (path) {
            carry.push((0,utils/* removeFromLast */.zN)(path, "."));
        } else if (routes) {
            getPaths(routes, carry);
        }
    });
    return carry;
}


/***/ }),

/***/ 9782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ rehypeDocs)
});

;// CONCATENATED MODULE: external "url"
const external_url_namespaceObject = require("url");
// EXTERNAL MODULE: external "unist-util-visit"
var external_unist_util_visit_ = __webpack_require__(4704);
var external_unist_util_visit_default = /*#__PURE__*/__webpack_require__.n(external_unist_util_visit_);
;// CONCATENATED MODULE: external "mdast-util-to-string"
const external_mdast_util_to_string_namespaceObject = require("mdast-util-to-string");
var external_mdast_util_to_string_default = /*#__PURE__*/__webpack_require__.n(external_mdast_util_to_string_namespaceObject);
;// CONCATENATED MODULE: external "github-slugger"
const external_github_slugger_namespaceObject = require("github-slugger");
var external_github_slugger_default = /*#__PURE__*/__webpack_require__.n(external_github_slugger_namespaceObject);
// EXTERNAL MODULE: ./src/lib/github/constants.tsx
var constants = __webpack_require__(6017);
;// CONCATENATED MODULE: ./src/lib/docs/rehype-docs.js





const ABSOLUTE_URL = /^https?:\/\/|^\/\//i;
const SITE_URL = /^(https?:\/\/|^\/\/)formik\.org/i;
// The headers will be updated to include a link to their hash
const HEADINGS = (/* unused pure expression or super */ null && ([
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
]));
function removeExt(path) {
    const basePath = path.split(/#|\?/)[0];
    const i = basePath.lastIndexOf(".");
    if (i === -1 || i === 0) return path;
    return basePath.substring(0, i) + path.substring(basePath.length);
}
function visitCard(node) {
    if (!node.children || !node.properties || !node.properties.className || !node.properties.className.includes("card")) return;
    const anchor = node.children.find((n)=>n.tagName === "a");
    if (!anchor || !anchor.children) return;
    const title = anchor.children.find((n)=>n.tagName === "b");
    const text = anchor.children.find((n)=>n.tagName === "small");
    if (!title || !text) return;
    const titleText = title.children.pop();
    // Remove `:` from the title if it ends with it
    if (titleText && titleText.value && titleText.value.endsWith(":")) {
        titleText.value = titleText.value.slice(0, -1);
    }
    title.children.push(titleText);
    anchor.children = [
        {
            ...title,
            tagName: "h4"
        },
        text
    ];
}
function rehypeDocs({ filePath , tag  }) {
    const slugger = new (external_github_slugger_default())();
    const anchorSlugger = new (external_github_slugger_default())();
    // Don't use the custom tag here, relative URLs to repo files should always go to canary
    const blobUrl = `${constants/* GITHUB_URL */.Kd}/${constants/* REPO_NAME */.nG}/blob/main`;
    function visitAnchor(node) {
        const props = node.properties;
        const href = props?.href;
        if (!href) return;
        props.href = href.replace(SITE_URL, "");
        const isDocs = href.startsWith("/docs") || href.startsWith(".");
        if (props.href === href) {
            const isAbsoluteUrl = ABSOLUTE_URL.test(href);
            const isHash = href[0] === "#";
            const isRepoUrl = !isHash && !isDocs;
            if (props.className && props.className.includes && props.className.includes("anchor")) {
                return;
            }
            if (isAbsoluteUrl || isRepoUrl) {
                props.className = "absolute-link";
                props.target = "_blank";
                props.rel = "noopener noreferrer";
                if (!isAbsoluteUrl) {
                    // Turn any relative URL that's not handled by the Next.js site into an absolute URL
                    props.href = blobUrl + (0,external_url_namespaceObject.resolve)(filePath, href);
                }
                return;
            }
        }
        const [relativePath, hash] = props.href.split("#");
        // Reset the slugger because single pages can have multiple urls to the same hash
        anchorSlugger.reset();
        // The URL is relative at this point
        props.className = "relative-link";
        // Update the hash used by anchors to match the one set for headers
        props.href = hash ? `${relativePath}#${anchorSlugger.slug(hash)}` : relativePath;
        //turn URL to absolute path for correct doc route
        if (isDocs) {
            let absolutePath = (0,external_url_namespaceObject.resolve)(filePath, relativePath);
            // Reset the slugger because single pages can have multiple urls to the same hash
            anchorSlugger.reset();
            props.href = hash ? `${absolutePath}#${anchorSlugger.slug(hash)}` : absolutePath;
            props.className = "absolute-link";
            props.href = removeExt(tag ? props.href.replace("/docs", `/docs/tag/${tag}`) : props.href);
        }
    }
    function visitHeading(node) {
        const text = external_mdast_util_to_string_default()(node);
        if (!text) return;
        const id = slugger.slug(text);
        node.properties.className = "heading";
        node.children = [
            {
                type: "element",
                tagName: "span",
                properties: {
                    id
                }
            },
            {
                type: "element",
                tagName: "a",
                properties: {
                    href: `#${id}`
                },
                children: node.children
            },
            {
                type: "element",
                tagName: "span",
                properties: {
                    className: "permalink"
                },
                children: [
                    permalinkIcon
                ]
            }
        ];
    }
    return function transformer(tree) {
        external_unist_util_visit_default()(tree, (node)=>node.tagName === "a", visitAnchor);
        // visit(tree, (node) => HEADINGS.includes(node.tagName), visitHeading);
        external_unist_util_visit_default()(tree, (node)=>node.tagName === "div", visitCard);
    };
}


/***/ }),

/***/ 7946:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const is = __webpack_require__(309);
const visit = __webpack_require__(4704);
const sigils = {
    "=>": "success",
    "->": "info",
    "~>": "warning",
    "!>": "danger"
};
module.exports = function paragraphCustomAlertsPlugin() {
    return function transformer(tree) {
        visit(tree, "paragraph", (pNode, _, parent)=>{
            visit(pNode, "text", (textNode)=>{
                Object.keys(sigils).forEach((symbol)=>{
                    if (textNode.value.startsWith(`${symbol} `)) {
                        // Remove the literal sigil symbol from string contents
                        textNode.value = textNode.value.replace(`${symbol} `, "");
                        // Wrap matched nodes with <div> (containing proper attributes)
                        parent.children = parent.children.map((node)=>{
                            return is(pNode, node) ? {
                                type: "wrapper",
                                children: [
                                    node
                                ],
                                data: {
                                    hName: "div",
                                    hProperties: {
                                        className: [
                                            "alert",
                                            `alert-${sigils[symbol]}`
                                        ],
                                        role: "alert"
                                    }
                                }
                            } : node;
                        });
                    }
                });
            });
        });
    };
};


/***/ }),

/***/ 4451:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = [
    __webpack_require__(7456),
    __webpack_require__(7946),
    [
        __webpack_require__(7546),
        {
            behavior: "append",
            linkProperties: {
                class: [
                    "anchor"
                ],
                title: "Direct link to heading"
            }
        }
    ],
    [
        __webpack_require__(8910),
        {
            skip: "Reference",
            maxDepth: 6
        }
    ],
    __webpack_require__(1535),
    __webpack_require__(6203),
    __webpack_require__(6215)
];


/***/ }),

/***/ 6432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QF": () => (/* binding */ getSlug),
/* harmony export */   "eM": () => (/* binding */ addTagToSlug),
/* harmony export */   "zN": () => (/* binding */ removeFromLast)
/* harmony export */ });
function getSlug({ slug  }) {
    if (!slug) {
        return {
            slug: "/docs/overview.md"
        };
    }
    if (slug[0] === "tag") {
        return {
            tag: slug[1],
            slug: `/docs/${slug.slice(2).join("/")}`
        };
    }
    return {
        slug: `/docs/${slug && slug.join("/")}`
    };
}
function removeFromLast(path, key) {
    const i = path.lastIndexOf(key);
    return i === -1 ? path : path.substring(0, i);
}
function addTagToSlug(slug, tag) {
    return tag ? slug.replace("/docs", `/docs/tag/${tag}`) : slug;
}


/***/ }),

/***/ 9848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ getRouteContext)
/* harmony export */ });
/**
 * Returns the siblings of a specific route (that is the previous and next routes).
 */ function getRouteContext(_route, routes, ctx = {}) {
    if (!_route) {
        return ctx;
    }
    const { path  } = _route;
    const { parent  } = ctx;
    for(let i = 0; i < routes.length; i += 1){
        const route = routes[i];
        if (route.routes) {
            ctx.parent = route;
            ctx = getRouteContext(_route, route.routes, ctx);
            // If the active route and the next route was found in nested routes, return it
            if (ctx.nextRoute) return ctx;
        }
        if (!route) continue;
        if (!route.path) continue;
        if (ctx.route) {
            ctx.nextRoute = parent && i === 0 ? {
                ...route,
                title: `${_route.title} | ${parent.title}`
            } : route;
            return ctx;
        }
        if (route && route.path === path) {
            ctx.route = {
                ..._route,
                title: parent && !parent.heading ? `${_route.title} | ${parent.title}` : _route.title
            };
            continue;
        }
        ctx.prevRoute = parent && !parent.heading && !routes[i + 1]?.path ? {
            ...route,
            title: `${route.title} | ${parent.title}`
        } : route;
    }
    // The loop ended and the previous route was found, or nothing
    return ctx;
}


/***/ }),

/***/ 6017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kd": () => (/* binding */ GITHUB_URL),
/* harmony export */   "ju": () => (/* binding */ GITHUB_API_URL),
/* harmony export */   "nG": () => (/* binding */ REPO_NAME),
/* harmony export */   "xs": () => (/* binding */ RAW_GITHUB_URL)
/* harmony export */ });
const GITHUB_URL = "https://github.com";
const GITHUB_API_URL = "https://api.github.com";
const RAW_GITHUB_URL = "https://raw.githubusercontent.com";
const REPO_NAME = "formik/formik";


/***/ }),

/***/ 4754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ getRawFileFromRepo)
/* harmony export */ });
/* unused harmony export getRawFileFromGitHub */
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7881);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6017);


function getErrorText(res) {
    try {
        return res.text();
    } catch (err) {
        return res.statusText;
    }
}
async function getError(res) {
    const errorText = await getErrorText(res);
    const error = new Error(`GitHub raw download error (${res.status}): ${errorText}`);
    error.status = res.status;
    error.headers = res.headers.raw();
    return error;
}
async function getRawFileFromGitHub(path) {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(_constants__WEBPACK_IMPORTED_MODULE_1__/* .RAW_GITHUB_URL */ .xs + path);
    if (res.ok) return res.text();
    throw await getError(res);
}
async function getRawFileFromRepo(path, tag) {
    return getRawFileFromGitHub(`/${_constants__WEBPACK_IMPORTED_MODULE_1__/* .REPO_NAME */ .nG}/${tag}${path}`);
}


/***/ }),

/***/ 7081:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fe": () => (/* binding */ getStaticPaths),
/* harmony export */   "ZP": () => (/* binding */ Docs),
/* harmony export */   "b1": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4246);
/* harmony import */ var next_font_google_target_css_path_src_pages_docs_slug_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(8588);
/* harmony import */ var next_font_google_target_css_path_src_pages_docs_slug_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_docs_slug_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5566);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_markdown_module_css__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(7243);
/* harmony import */ var components_markdown_module_css__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(components_markdown_module_css__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var components_Banner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(5877);
/* harmony import */ var components_SidebarCategory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9991);
/* harmony import */ var components_SidebarPost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2906);
/* harmony import */ var components_Toc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(502);
/* harmony import */ var lib_docs_remark_plugins__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4451);
/* harmony import */ var lib_docs_remark_plugins__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lib_docs_remark_plugins__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lib_docs_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6356);
/* harmony import */ var lib_docs_findRouteByPath__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(6182);
/* harmony import */ var lib_docs_utils__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(6432);
/* harmony import */ var lib_get_route_context__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(9848);
/* harmony import */ var lib_github_raw__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4754);
/* harmony import */ var components_SidebarHeading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5339);
/* harmony import */ var components_Sidebar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3317);
/* harmony import */ var components_SidebarMobile__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4950);
/* harmony import */ var components_Nav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9451);
/* harmony import */ var components_Sticky__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5606);
/* harmony import */ var components_useIsMobile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1824);
/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9415);
/* harmony import */ var components_Seo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6163);
/* harmony import */ var components_DocsPageFooter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(3057);
/* harmony import */ var components_addRouterEvents__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(7712);
/* harmony import */ var components_MDXComponents__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8951);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(7112);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(276);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var lib_docs_rehype_docs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(9782);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_DocsPageFooter__WEBPACK_IMPORTED_MODULE_21__]);
components_DocsPageFooter__WEBPACK_IMPORTED_MODULE_21__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

































function Docs({ page , routes , route: _route  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { asPath , isFallback , query  } = router;
    const isMobile = (0,components_useIsMobile__WEBPACK_IMPORTED_MODULE_18__/* .useIsMobile */ .d)();
    // @ts-ignore
    const { route , prevRoute , nextRoute  } = (0,lib_get_route_context__WEBPACK_IMPORTED_MODULE_26__/* .getRouteContext */ .i)(_route, routes);
    const title = route && `${page.title || route.title} | Formik`;
    const { tag  } = (0,lib_docs_utils__WEBPACK_IMPORTED_MODULE_27__/* .getSlug */ .QF)(query);
    // This effect adds `next/link`-like behavior to any non-hash relative link
    // @source @timer
    react__WEBPACK_IMPORTED_MODULE_6__.useEffect(()=>{
        const listeners = [];
        document.querySelectorAll(".docs .relative-link").forEach((node)=>{
            const href = node.getAttribute("href");
            // Exclude paths like #setup and hashes that have the same current path
            if (href && href[0] !== "#") {
                // Handle any relative path
                router.prefetch(href);
                listeners.push((0,components_addRouterEvents__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z)(node, router, {
                    href
                }));
            }
        });
        return ()=>{
            listeners.forEach((cleanUpListener)=>cleanUpListener());
        };
    }, [
        router
    ]);
    if (!route && !isFallback) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_error__WEBPACK_IMPORTED_MODULE_3___default()), {
            statusCode: 404
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            tag && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "robots",
                    content: "noindex",
                    className: "jsx-708e48b0a9d581b3"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-708e48b0a9d581b3" + " " + ((next_font_google_target_css_path_src_pages_docs_slug_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_29___default().className) || ""),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Banner__WEBPACK_IMPORTED_MODULE_30__/* .Banner */ .j, {}),
                    isMobile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Nav__WEBPACK_IMPORTED_MODULE_16__/* .Nav */ .J, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Sticky__WEBPACK_IMPORTED_MODULE_17__/* .Sticky */ .L, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Nav__WEBPACK_IMPORTED_MODULE_16__/* .Nav */ .J, {})
                    }),
                    route ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Seo__WEBPACK_IMPORTED_MODULE_20__/* .Seo */ .p, {
                                title: title || page.title,
                                description: page.description
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-708e48b0a9d581b3" + " " + "block",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Sticky__WEBPACK_IMPORTED_MODULE_17__/* .Sticky */ .L, {
                                            shadow: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_SidebarMobile__WEBPACK_IMPORTED_MODULE_15__/* .SidebarMobile */ .K, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SidebarRoutes, {
                                                    isMobile: true,
                                                    routes: routes
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-708e48b0a9d581b3" + " " + "container mx-auto pb-12 pt-6 px-4 lg:px-0 content",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-708e48b0a9d581b3" + " " + "flex relative",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Sidebar__WEBPACK_IMPORTED_MODULE_14__/* .Sidebar */ .Y, {
                                                        fixed: true,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SidebarRoutes, {
                                                            routes: routes
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-708e48b0a9d581b3" + " " + ((components_markdown_module_css__WEBPACK_IMPORTED_MODULE_31___default().markdown) + " w-full docs" || 0),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                className: "jsx-708e48b0a9d581b3",
                                                                children: page.title
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "jsx-708e48b0a9d581b3" + " " + ((components_markdown_module_css__WEBPACK_IMPORTED_MODULE_31___default().markdown) || ""),
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_24__.MDXRemote, {
                                                                        ...page.mdxSource,
                                                                        components: components_MDXComponents__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_DocsPageFooter__WEBPACK_IMPORTED_MODULE_21__/* .DocsPageFooter */ .h, {
                                                                href: route?.path || "",
                                                                route: route,
                                                                prevRoute: prevRoute,
                                                                nextRoute: nextRoute
                                                            })
                                                        ]
                                                    }),
                                                    !route?.path?.includes("example") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            width: 200
                                                        },
                                                        className: "jsx-708e48b0a9d581b3" + " " + "hidden xl:block ml-10 flex-shrink-0",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-708e48b0a9d581b3" + " " + "sticky top-24 ",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                    className: "jsx-708e48b0a9d581b3" + " " + "font-semibold uppercase text-sm mb-2 mt-2 text-gray-500",
                                                                    children: "On this page"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toc__WEBPACK_IMPORTED_MODULE_9__/* .Toc */ .o, {}, asPath)
                                                            ]
                                                        })
                                                    }) : null
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-708e48b0a9d581b3",
                        children: "loading...."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Footer__WEBPACK_IMPORTED_MODULE_19__/* .Footer */ .$, {}),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "708e48b0a9d581b3",
                children: ".docs.jsx-708e48b0a9d581b3{min-width:-webkit-calc(100% - 300px - 1rem - 200px);min-width:-moz-calc(100% - 300px - 1rem - 200px);min-width:calc(100% - 300px - 1rem - 200px)}"
            })
        ]
    });
}
function getCategoryPath(routes) {
    const route = routes.find((r)=>r.path);
    return route && (0,lib_docs_utils__WEBPACK_IMPORTED_MODULE_27__/* .removeFromLast */ .zN)(route.path, "/");
}
function SidebarRoutes({ isMobile , routes: currentRoutes , level =1  }) {
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { tag , slug  } = (0,lib_docs_utils__WEBPACK_IMPORTED_MODULE_27__/* .getSlug */ .QF)(query);
    return currentRoutes.map(({ path , title , routes , heading , open  }, idx)=>{
        if (routes) {
            const pathname = getCategoryPath(routes);
            const selected = slug.startsWith(pathname);
            const opened = selected || isMobile ? false : open;
            if (heading) {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_SidebarHeading__WEBPACK_IMPORTED_MODULE_13__/* .SidebarHeading */ .a, {
                    title: title,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SidebarRoutes, {
                        isMobile: isMobile,
                        routes: routes,
                        level: level + 1
                    })
                }, `${pathname}-heading-${idx}`);
            }
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_SidebarCategory__WEBPACK_IMPORTED_MODULE_7__/* .SidebarCategory */ .L, {
                isMobile: isMobile,
                level: level,
                title: title,
                selected: selected,
                opened: opened,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SidebarRoutes, {
                    isMobile: isMobile,
                    routes: routes,
                    level: level + 1
                })
            }, `${pathname}-category-${idx}`);
        }
        const href = "/docs/[...slug]";
        const pagePath = (0,lib_docs_utils__WEBPACK_IMPORTED_MODULE_27__/* .removeFromLast */ .zN)(path, ".");
        const pathname = (0,lib_docs_utils__WEBPACK_IMPORTED_MODULE_27__/* .addTagToSlug */ .eM)(pagePath, tag);
        const selected = slug === pagePath;
        const route = {
            href,
            path,
            title,
            pathname,
            selected
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_SidebarPost__WEBPACK_IMPORTED_MODULE_8__/* .SidebarPost */ .G, {
            isMobile: isMobile,
            level: level,
            route: route
        }, title);
    });
}
const getStaticProps = async ({ params  })=>{
    const { tag , slug  } = (0,lib_docs_utils__WEBPACK_IMPORTED_MODULE_27__/* .getSlug */ .QF)(params ?? {
        slug: []
    });
    const currentTag = await (0,lib_docs_page__WEBPACK_IMPORTED_MODULE_11__/* .getCurrentTag */ .Iz)(tag);
    // console.log('tag', tag);
    // console.log('slug', slug);
    // console.log('product', product);
    let manifest;
    if (tag) {
        // console.log('remote');
        manifest = await (0,lib_docs_page__WEBPACK_IMPORTED_MODULE_11__/* .fetchRemoteDocsManifest */ .Sw)(tag);
    } else {
        // console.log('local');
        manifest = await (0,lib_docs_page__WEBPACK_IMPORTED_MODULE_11__/* .fetchLocalDocsManifest */ .pY)();
    }
    if (!manifest) {
        return {
            props: {},
            notFound: true
        };
    }
    const route = manifest && (0,lib_docs_findRouteByPath__WEBPACK_IMPORTED_MODULE_32__/* .findRouteByPath */ .U)(slug, manifest.routes);
    if (!route) {
        return {
            props: {},
            notFound: true
        };
    }
    let md;
    if (tag) {
        md = await (0,lib_github_raw__WEBPACK_IMPORTED_MODULE_12__/* .getRawFileFromRepo */ .V)(route.path, currentTag);
    } else {
        md = await (0,lib_docs_page__WEBPACK_IMPORTED_MODULE_11__/* .getRawFileFromLocal */ .rS)(route.path);
    }
    const { content , data  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(md);
    const mdxSource = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_23__.serialize)(content ?? "", {
        mdxOptions: {
            remarkPlugins: (lib_docs_remark_plugins__WEBPACK_IMPORTED_MODULE_10___default()),
            rehypePlugins: [
                [
                    lib_docs_rehype_docs__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z,
                    {
                        filePath: route.path,
                        tag
                    }
                ]
            ]
        }
    });
    return {
        props: {
            route,
            routes: manifest.routes,
            page: {
                mdxSource,
                ...data
            }
        }
    };
};
const getStaticPaths = async ()=>{
    const manifest = await (0,lib_docs_page__WEBPACK_IMPORTED_MODULE_11__/* .fetchLocalDocsManifest */ .pY)();
    return {
        paths: (0,lib_docs_page__WEBPACK_IMPORTED_MODULE_11__/* .getPaths */ .w3)([
            ...manifest.routes
        ]),
        fallback: "blocking"
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2713:
/***/ ((module) => {

"use strict";
module.exports = require("@docsearch/react/modal");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 8887:
/***/ ((module) => {

"use strict";
module.exports = require("copy-to-clipboard");

/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 7881:
/***/ ((module) => {

"use strict";
module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 276:
/***/ ((module) => {

"use strict";
module.exports = require("next-mdx-remote");

/***/ }),

/***/ 7112:
/***/ ((module) => {

"use strict";
module.exports = require("next-mdx-remote/serialize");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 5566:
/***/ ((module) => {

"use strict";
module.exports = require("next/error");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 7096:
/***/ ((module) => {

"use strict";
module.exports = require("prism-react-renderer");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2750:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ 7546:
/***/ ((module) => {

"use strict";
module.exports = require("remark-autolink-headings");

/***/ }),

/***/ 1535:
/***/ ((module) => {

"use strict";
module.exports = require("remark-emoji");

/***/ }),

/***/ 6203:
/***/ ((module) => {

"use strict";
module.exports = require("remark-footnotes");

/***/ }),

/***/ 6215:
/***/ ((module) => {

"use strict";
module.exports = require("remark-images");

/***/ }),

/***/ 7456:
/***/ ((module) => {

"use strict";
module.exports = require("remark-slug");

/***/ }),

/***/ 8910:
/***/ ((module) => {

"use strict";
module.exports = require("remark-toc");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ 309:
/***/ ((module) => {

"use strict";
module.exports = require("unist-util-is");

/***/ }),

/***/ 4704:
/***/ ((module) => {

"use strict";
module.exports = require("unist-util-visit");

/***/ }),

/***/ 3376:
/***/ ((module) => {

"use strict";
module.exports = import("@vercel/analytics");;

/***/ }),

/***/ 5049:
/***/ ((module) => {

"use strict";
module.exports = import("react-aria");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [246,894,833,579,218,317,427], () => (__webpack_exec__(4922)));
module.exports = __webpack_exports__;

})();