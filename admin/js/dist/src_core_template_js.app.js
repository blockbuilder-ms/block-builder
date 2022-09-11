"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_core_template_js"],{

/***/ "./src/core/template.js":
/*!******************************!*\
  !*** ./src/core/template.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Template {\r\n  /**\r\n   * Will fetch the template from dom\r\n   *\r\n   * @var {}\r\n   *\r\n   * @return {}\r\n   */\r\n  async get(tag, type) {\r\n    if (!tag) {\r\n      return false;\r\n    }\r\n\r\n    if (!type) {\r\n      type = \"block\";\r\n    }\r\n\r\n    const $template = document.getElementById(\"bb-\" + type + \"-\" + tag);\r\n\r\n    if (!$template) {\r\n      return false;\r\n    }\r\n\r\n    return $template.content.firstElementChild.cloneNode(true);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Template);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/core/template.js?");

/***/ })

}]);