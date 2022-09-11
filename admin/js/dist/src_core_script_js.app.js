"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_core_script_js"],{

/***/ "./src/core/script.js":
/*!****************************!*\
  !*** ./src/core/script.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Script {\r\n  constructor() {\r\n    this.stackLoaded = {};\r\n  }\r\n\r\n  async loaded(key) {\r\n    console.log(this.stackLoaded[key] !== undefined);\r\n    return this.stackLoaded[key] !== undefined;\r\n  }\r\n\r\n  async load(key, path, where) {\r\n    if (!document.getElementById(key + \"-css\")) {\r\n      var body = document.body;\r\n      var script = document.createElement(\"script\");\r\n\r\n      let base;\r\n\r\n      switch (where) {\r\n        case \"plugin-admin\":\r\n          base =\r\n            window.location.origin + \"/wp-content/plugins/bb-block-builder/\";\r\n          break;\r\n\r\n        default:\r\n          base =\r\n            window.location.origin + \"/wp-content/plugins/bb-block-builder/\";\r\n      }\r\n\r\n      script.id = key;\r\n      script.type = \"text/javascript\";\r\n      script.src = base + path + \".js\";\r\n      body.appendChild(script);\r\n\r\n      this.stackLoaded[key] = true;\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Script);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/core/script.js?");

/***/ })

}]);