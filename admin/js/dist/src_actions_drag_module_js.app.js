"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_actions_drag_module_js"],{

/***/ "./src/actions/drag/module.js":
/*!************************************!*\
  !*** ./src/actions/drag/module.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Drag {\r\n  constructor(link) {\r\n    const self = this;\r\n\r\n    // Place local reference in object\r\n    self.link = link;\r\n    let options = {};\r\n\r\n    if (self.link.hasAttribute(\"x-options\")) {\r\n      options = JSON.parse(self.link.getAttribute(\"x-options\"));\r\n    }\r\n\r\n    self.options = options;\r\n\r\n    self.link.addEventListener(\"dragstart\", function (event) {\r\n      self.onDrag(event, self);\r\n    });\r\n\r\n    self.link.addEventListener(\"dragend\", function (event) {\r\n      self.onDragEnd(event, self);\r\n    });\r\n  }\r\n\r\n  onDrag(e, self) {\r\n    const appLoader = window.getAppLoader();\r\n\r\n    let opts = {\r\n      eventType: \"drag\",\r\n      item: self.link,\r\n      dragEvent: e,\r\n    };\r\n\r\n    if (self.options.attributes) {\r\n      opts.attributes = self.options.attributes;\r\n    }\r\n\r\n    if (self.options.emit) {\r\n      appLoader.event.emit(self.options.emit, opts);\r\n    } else {\r\n      appLoader.event.emit(\"bb-block-drag-before\", opts);\r\n    }\r\n  }\r\n\r\n  onDragEnd(e, self) {\r\n    const appLoader = window.getAppLoader();\r\n\r\n    let opts = {\r\n      item: self.link,\r\n      itemTarget: e.target,\r\n      dragEvent: e,\r\n    };\r\n\r\n    if (self.options.attributes) {\r\n      opts.attributes = self.options.attributes;\r\n    }\r\n\r\n    if (self.options.emit) {\r\n      appLoader.event.emit(self.options.emit + \"-end\", opts);\r\n    } else {\r\n      appLoader.event.emit(\"bb-block-drag_end-before\", opts);\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drag);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/actions/drag/module.js?");

/***/ })

}]);