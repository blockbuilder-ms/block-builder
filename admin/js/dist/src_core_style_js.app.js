"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_core_style_js"],{

/***/ "./src/core/style.js":
/*!***************************!*\
  !*** ./src/core/style.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Style {\r\n  constructor() {\r\n    this.stackLoaded = {};\r\n  }\r\n\r\n  async loaded(key) {\r\n    return this.stackLoaded[key] !== undefined;\r\n  }\r\n\r\n  async load(key, path, where) {\r\n    if (!document.getElementById(key + \"-css\")) {\r\n      var head = document.getElementsByTagName(\"head\")[0];\r\n      var link = document.createElement(\"link\");\r\n\r\n      let base;\r\n\r\n      switch (where) {\r\n        case \"plugin-admin\":\r\n          base =\r\n            window.location.origin + \"/wp-content/plugins/bb-block-builder/\";\r\n          break;\r\n\r\n        default:\r\n          base =\r\n            window.location.origin + \"/wp-content/plugins/bb-block-builder/\";\r\n      }\r\n\r\n      link.id = key;\r\n      link.rel = \"stylesheet\";\r\n      link.type = \"text/css\";\r\n      link.href = base + path + \".css\";\r\n      head.appendChild(link);\r\n\r\n      this.stackLoaded[key] = true;\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/core/style.js?");

/***/ })

}]);