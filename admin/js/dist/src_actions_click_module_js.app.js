"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_actions_click_module_js"],{

/***/ "./src/actions/click/module.js":
/*!*************************************!*\
  !*** ./src/actions/click/module.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Click {\r\n  constructor(link) {\r\n    const self = this;\r\n\r\n    // Place local reference in object\r\n    self.link = link;\r\n    let options = {};\r\n\r\n    if (self.link.hasAttribute(\"x-options\")) {\r\n      options = JSON.parse(self.link.getAttribute(\"x-options\"));\r\n    }\r\n\r\n    self.options = options;\r\n\r\n    self.link.addEventListener(\"mousedown\", function (event) {\r\n      self.onClick(event, self);\r\n    });\r\n  }\r\n\r\n  onClick(e, self) {\r\n    e.preventDefault();\r\n    const appLoader = window.getAppLoader();\r\n    let ti = setTimeout(function () {\r\n      if (!window.getAppLoader().state.dragItem) {\r\n        clearTimeout(ti);\r\n        return;\r\n      }\r\n\r\n      let opts = {\r\n        eventType: \"click\",\r\n        item: self.link,\r\n        dragEvent: e,\r\n      };\r\n\r\n      if (self.options.attributes) {\r\n        opts.attributes = self.options.attributes;\r\n      }\r\n\r\n      if (self.options.emit) {\r\n        appLoader.event.emit(self.options.emit, opts);\r\n      } else {\r\n        appLoader.event.emit(\"bb-block-click-before\", opts);\r\n      }\r\n      clearTimeout(ti);\r\n    }, 5);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Click);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/actions/click/module.js?");

/***/ })

}]);