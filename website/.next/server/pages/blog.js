(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 6477:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Inter_a184c8', '__Inter_Fallback_a184c8'","fontStyle":"normal"},
	"className": "__className_a184c8"
};


/***/ }),

/***/ 7243:
/***/ ((module) => {

// Exports
module.exports = {
	"markdown": "markdown_markdown__Ylhjy",
	"code-block": "markdown_code-block__yG7FW"
};


/***/ }),

/***/ 2448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ Index),
  "getStaticProps": () => (/* reexport */ getStaticProps)
});

// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4246);
// EXTERNAL MODULE: ../node_modules/next/font/google/target.css?{"path":"src/pages/blog/index.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var index_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(6477);
var index_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(index_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/Banner.tsx
var Banner = __webpack_require__(5877);
// EXTERNAL MODULE: ./src/components/Footer.tsx + 1 modules
var Footer = __webpack_require__(9415);
// EXTERNAL MODULE: ./src/components/markdown.module.css
var markdown_module = __webpack_require__(7243);
var markdown_module_default = /*#__PURE__*/__webpack_require__.n(markdown_module);
// EXTERNAL MODULE: ./src/components/Nav.tsx + 1 modules
var Nav = __webpack_require__(9451);
// EXTERNAL MODULE: ./src/components/Seo.tsx
var Seo = __webpack_require__(6163);
// EXTERNAL MODULE: ./src/components/Sticky.tsx
var Sticky = __webpack_require__(5606);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: ./src/lib/blog/mdxUtils.ts
var mdxUtils = __webpack_require__(7641);
// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__(9894);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
;// CONCATENATED MODULE: ./src/pages/blog/index.tsx














function Index({ posts  }) {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: external_classnames_default()("h-full min-h-full", (index_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className),
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(Banner/* Banner */.j, {}),
                /*#__PURE__*/ jsx_runtime.jsx(Sticky/* Sticky */.L, {
                    children: /*#__PURE__*/ jsx_runtime.jsx(Nav/* Nav */.J, {})
                }),
                /*#__PURE__*/ jsx_runtime.jsx(Seo/* Seo */.p, {
                    title: "Blog",
                    description: "The latest Formik news, announcements, articles, and resources."
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container px-4 lg:px-0 pt-16 pb-20 mx-auto bg-white lg:pt-24 lg:pb-28",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "relative ",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                        className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 lg:text-5xl sm:text-4xl sm:leading-10 ",
                                        children: "Blog"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-xl leading-7 text-gray-500",
                                                children: "Stories, tips, and tools to inspire you to build better software. Subscribe for updates."
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                                action: "https://api.formik.com/submit/palmerhq/formik-newsletter",
                                                method: "post",
                                                className: "flex mt-6 lg:mt-0 lg:justify-end",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                        type: "hidden",
                                                        name: "_honeypot",
                                                        value: ""
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                        "aria-label": "Email address",
                                                        type: "email",
                                                        name: "email",
                                                        required: true,
                                                        className: "w-full px-4 py-2 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring focus:ring-blue focus:border-blue-300 lg:max-w-xs",
                                                        placeholder: "Enter your email"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "inline-flex flex-shrink-0 ml-3 rounded-md shadow-sm",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            type: "button",
                                                            className: "inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue active:bg-blue-700",
                                                            children: "Notify me"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (markdown_module_default()).markdown,
                                children: [
                                    posts.length === 0 && /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: "There are no posts yet"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "grid gap-16 pt-10 mt-6 border-t border-gray-100 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12",
                                        children: posts.map((post)=>{
                                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "pb-6 space-y-2",
                                                children: [
                                                    post.data.date && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "text-sm leading-5 text-gray-500 posted",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("time", {
                                                            dateTime: post.data.date,
                                                            children: post.data.date
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "mt-2 text-2xl font-semibold leading-7 text-gray-900",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: `/blog/${post.filePath.replace(/\.mdx?$/, "")}`,
                                                            className: "block",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                className: "cursor-pointer hover:underline",
                                                                children: [
                                                                    !post.data.published && /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        className: "text-white bg-black rounded-xl",
                                                                        children: "Draft"
                                                                    }),
                                                                    post.data.title
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "mt-3 leading-6 text-gray-500 ",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: external_classnames_default()((markdown_module_default()).markdown, "text-gray-500"),
                                                            children: !post.data.preview || post.data.preview.length === 0 ? "No preview available" : post.data.preview
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "mt-3",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                            href: `/blog/${post.filePath.replace(/\.mdx?$/, "")}`,
                                                            className: "text-base font-semibold leading-6 text-blue-600 transition duration-150 ease-in-out hover:text-blue-500",
                                                            children: [
                                                                "Read More",
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    "aria-hidden": "true",
                                                                    children: "→"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }, post.filePath);
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(Footer/* Footer */.$, {})
            ]
        })
    });
}
function getStaticProps() {
    const posts = mdxUtils/* postFilePaths.map */.B.map((filePath)=>{
        const source = external_fs_default().readFileSync(external_path_default().join(mdxUtils/* POSTS_PATH */.j, filePath));
        const { content , data  } = external_gray_matter_default()(source);
        return {
            content,
            data,
            filePath
        };
    });
    return {
        props: {
            posts
        }
    };
}

;// CONCATENATED MODULE: ../node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fblog&absolutePagePath=private-next-pages%2Fblog%2Findex.tsx&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 7641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ postFilePaths),
/* harmony export */   "j": () => (/* binding */ POSTS_PATH)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


// POSTS_PATH is useful when you want to get the path to a specific file
const POSTS_PATH = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "src", "blog");
// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
const postFilePaths = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(POSTS_PATH)// Only include md(x) files
.filter((path)=>/\.mdx?$/.test(path));


/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

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

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [246,894,317], () => (__webpack_exec__(2448)));
module.exports = __webpack_exports__;

})();