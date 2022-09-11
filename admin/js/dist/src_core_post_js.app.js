"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_core_post_js"],{

/***/ "./src/core/post.js":
/*!**************************!*\
  !*** ./src/core/post.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Class to control the post being edited\r\n */\r\nclass BBPost {\r\n  constructor() {\r\n    this.load();\r\n  }\r\n\r\n  load() {\r\n    if (!postObject) {\r\n      console.log(\"No post object\");\r\n      return false;\r\n    }\r\n\r\n    for (let i in postObject) {\r\n      this[i] = postObject[i];\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BBPost);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/core/post.js?");

/***/ })

}]);