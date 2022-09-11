"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_core_filter_js"],{

/***/ "./src/core/filter.js":
/*!****************************!*\
  !*** ./src/core/filter.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Class to control and debug / monitor events\r\n * ran and used by the editor and its assets.\r\n */\r\nclass BBFilters {\r\n  /**\r\n   * Will hold the events registered with the application through\r\n   * the asssets and extensions\r\n   *\r\n   * @var {object}\r\n   */\r\n  filters = {};\r\n  hits = {};\r\n\r\n  /**\r\n   * Registers a new event\r\n   */\r\n  add(name, closure, priority) {\r\n    if (!this.filters[name]) {\r\n      this.filters[name] = {};\r\n    }\r\n\r\n    if (!this.filters[priority]) {\r\n      this.filters[name][priority] = [];\r\n    }\r\n\r\n    this.filters[name][priority].push(closure);\r\n  }\r\n\r\n  /**\r\n   * Emits an event\r\n   */\r\n  apply(name, data) {\r\n    for (let i in this.filters[name]) {\r\n      let filter = this.filters[name][i];\r\n\r\n      for (let j in filter) {\r\n        data = filter[j](data);\r\n      }\r\n    }\r\n\r\n    return data;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BBFilters);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/core/filter.js?");

/***/ })

}]);