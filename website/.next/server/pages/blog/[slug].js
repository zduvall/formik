(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 149:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Inter_a184c8', '__Inter_Fallback_a184c8'","fontStyle":"normal"},
	"className": "__className_a184c8"
};


/***/ }),

/***/ 5425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ PostPage),
  "getStaticPaths": () => (/* reexport */ getStaticPaths),
  "getStaticProps": () => (/* reexport */ getStaticProps)
});

// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4246);
// EXTERNAL MODULE: ../node_modules/next/font/google/target.css?{"path":"src/pages/blog/[slug].tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var _slug_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(149);
var _slug_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(_slug_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/components/Banner.tsx
var Banner = __webpack_require__(5877);
// EXTERNAL MODULE: ./src/components/Footer.tsx + 1 modules
var Footer = __webpack_require__(9415);
// EXTERNAL MODULE: ./src/components/markdown.module.css
var markdown_module = __webpack_require__(7243);
var markdown_module_default = /*#__PURE__*/__webpack_require__.n(markdown_module);
// EXTERNAL MODULE: ./src/components/MDXComponents.tsx
var MDXComponents = __webpack_require__(8951);
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
// EXTERNAL MODULE: external "next-mdx-remote"
var external_next_mdx_remote_ = __webpack_require__(276);
// EXTERNAL MODULE: external "next-mdx-remote/serialize"
var serialize_ = __webpack_require__(7112);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
;// CONCATENATED MODULE: external "rehype-img-size"
const external_rehype_img_size_namespaceObject = require("rehype-img-size");
var external_rehype_img_size_default = /*#__PURE__*/__webpack_require__.n(external_rehype_img_size_namespaceObject);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/pages/blog/[slug].tsx

















function PostPage({ source , frontMatter  }) {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: external_classnames_default()("h-full min-h-full", (_slug_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className),
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(Banner/* Banner */.j, {}),
                /*#__PURE__*/ jsx_runtime.jsx(Sticky/* Sticky */.L, {
                    className: "z-20",
                    children: /*#__PURE__*/ jsx_runtime.jsx(Nav/* Nav */.J, {})
                }),
                /*#__PURE__*/ jsx_runtime.jsx(Seo/* Seo */.p, {
                    title: frontMatter.title + " | Blog"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container max-w-3xl px-4 pt-6 pb-12 mx-auto lg:px-8 max-w-screen",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "my-10 space-y-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center ",
                                    children: [
                                        frontMatter.authors && frontMatter.authors.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mr-1 text-gray-700 authors",
                                            children: [
                                                "By ",
                                                frontMatter.authors.join(" "),
                                                " "
                                            ]
                                        }),
                                        frontMatter.date && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "text-gray-700 posted",
                                            children: [
                                                " ",
                                                "• ",
                                                frontMatter.date
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                    className: "max-w-3xl text-5xl font-semibold leading-snug tracking-tighter text-gray-900",
                                    children: frontMatter.title || ""
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "relative",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mx-auto",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: (markdown_module_default()).markdown,
                                    children: /*#__PURE__*/ jsx_runtime.jsx(external_next_mdx_remote_.MDXRemote, {
                                        ...source,
                                        components: MDXComponents/* default */.Z
                                    })
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx(Footer/* Footer */.$, {})
            ]
        })
    });
}
const getStaticProps = async ({ params  })=>{
    const postFilePath = external_path_default().join(mdxUtils/* POSTS_PATH */.j, `${params.slug}.md`);
    const source = external_fs_default().readFileSync(postFilePath);
    const { content , data  } = external_gray_matter_default()(source);
    const mdxSource = await (0,serialize_.serialize)(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [
                [
                    (external_rehype_img_size_default()),
                    {
                        dir: "public"
                    }
                ]
            ]
        },
        scope: data
    });
    return {
        props: {
            source: mdxSource,
            frontMatter: data
        }
    };
};
const getStaticPaths = async ()=>{
    const paths = mdxUtils/* postFilePaths.map */.B.map((path)=>path.replace(/\.mdx?$/, ""))// Map the path into the static paths object required by Next.js
    .map((slug)=>({
            params: {
                slug
            }
        }));
    return {
        paths,
        fallback: false
    };
};

;// CONCATENATED MODULE: ../node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fblog%2F%5Bslug%5D&absolutePagePath=private-next-pages%2Fblog%2F%5Bslug%5D.tsx&preferredRegion=!

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

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

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
var __webpack_exports__ = __webpack_require__.X(0, [246,894,833,579,218,317,427], () => (__webpack_exec__(5425)));
module.exports = __webpack_exports__;

})();