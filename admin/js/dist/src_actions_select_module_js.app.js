"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_actions_select_module_js"],{

/***/ "./src/actions/select/module.js":
/*!**************************************!*\
  !*** ./src/actions/select/module.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Select {\r\n  constructor(container) {\r\n    const self = this;\r\n    self.container = container;\r\n\r\n    self._load();\r\n  }\r\n\r\n  async _load() {\r\n    const self = this;\r\n    let options = self.container.hasAttribute(\"x-options\")\r\n      ? self.container.getAttribute(\"x-options\")\r\n      : {};\r\n\r\n    try {\r\n      options = JSON.parse(options);\r\n    } catch (e) {\r\n      options = {};\r\n    }\r\n\r\n    // Load in script if it has not already\r\n    if (\r\n      false === (await window.getAppLoader().script.loaded(\"virtual-select\"))\r\n    ) {\r\n      console.log(\"loading script\");\r\n      await window\r\n        .getAppLoader()\r\n        .script.load(\r\n          \"virtual-select\",\r\n          \"admin/js/lib/virtual-select/virtual-select.min\"\r\n        );\r\n    }\r\n\r\n    // Load in script styles if it has not already\r\n    if (\r\n      false === (await window.getAppLoader().style.loaded(\"virtual-select\"))\r\n    ) {\r\n      console.log(\"loading style\");\r\n      await window\r\n        .getAppLoader()\r\n        .style.load(\r\n          \"virtual-select\",\r\n          \"admin/js/lib/virtual-select/virtual-select.min\"\r\n        );\r\n    }\r\n\r\n    setTimeout(() => {\r\n      let instance = new VirtualSelect({\r\n        ele: self.container,\r\n        options: options ? options.items : {},\r\n      });\r\n    }, 100);\r\n  }\r\n\r\n  onPress(e, self) {\r\n    e.preventDefault();\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/actions/select/module.js?");

/***/ })

}]);