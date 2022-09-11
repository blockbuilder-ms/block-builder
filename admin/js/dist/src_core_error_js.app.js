/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_core_error_js"],{

/***/ "./src/core/error.js":
/*!***************************!*\
  !*** ./src/core/error.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Class to control and debug / monitor events\r\n * ran and used by the editor and its assets.\r\n */\r\nclass BBError {\r\n  byCode(code) {\r\n    return () => __webpack_require__(\"./src/core/error lazy recursive ^\\\\.\\\\/.*$\")(\"./\" + code);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BBError);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/core/error.js?");

/***/ }),

/***/ "./src/core/error lazy recursive ^\\.\\/.*$":
/*!********************************************************!*\
  !*** ./src/core/error/ lazy ^\.\/.*$ namespace object ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./E1\": [\n\t\t\"./src/core/error/E1.js\",\n\t\t\"src_core_error_E1_js\"\n\t],\n\t\"./E1.js\": [\n\t\t\"./src/core/error/E1.js\",\n\t\t\"src_core_error_E1_js\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(() => {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(() => {\n\t\treturn __webpack_require__(id);\n\t});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.id = \"./src/core/error lazy recursive ^\\\\.\\\\/.*$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://block-builder-editor/./src/core/error/_lazy_^\\.\\/.*$_namespace_object?");

/***/ })

}]);