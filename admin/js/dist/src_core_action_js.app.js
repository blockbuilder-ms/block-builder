"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_core_action_js"],{

/***/ "./src/core/action.js":
/*!****************************!*\
  !*** ./src/core/action.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Action {\r\n  constructor() {\r\n    this.options = {};\r\n  }\r\n\r\n  /**\r\n   * Adds options to the action to be ran\r\n   *\r\n   * @param {object} options\r\n   */\r\n  withOptions(options) {\r\n    this.options = options;\r\n\r\n    return this;\r\n  }\r\n\r\n  /**\r\n   * Force runs a specific action\r\n   *\r\n   * @param {string} name\r\n   */\r\n  async run(name, id) {\r\n    const appLoader = window.getAppLoader();\r\n    let obj = document.getElementById(id);\r\n\r\n    if (!obj)\r\n      obj = document.querySelector('[x-options=\\'{\"data-id\":\"' + id + \"\\\"}']\");\r\n\r\n    let refKeys = Object.keys(appLoader.references);\r\n    if (refKeys.indexOf(id) !== -1) {\r\n      const instance = appLoader.references[id];\r\n\r\n      if (!instance) {\r\n        console.error(\"Action not found for: \" + id);\r\n        return;\r\n      }\r\n\r\n      if (typeof instance.forceRun === \"function\") {\r\n        instance.forceRun(this.options);\r\n      }\r\n    } else {\r\n      const instance = await appLoader._load(name, obj, true);\r\n\r\n      if (!instance) {\r\n        console.error(\"Action not found for: \" + id);\r\n        return;\r\n      }\r\n\r\n      if (typeof instance.forceRun === \"function\") {\r\n        instance.forceRun(this.options);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Action);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/core/action.js?");

/***/ })

}]);