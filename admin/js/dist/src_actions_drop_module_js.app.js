"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_actions_drop_module_js"],{

/***/ "./src/actions/drop/module.js":
/*!************************************!*\
  !*** ./src/actions/drop/module.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Drop {\r\n  constructor(container) {\r\n    const self = this;\r\n\r\n    // Place local reference in object\r\n    self.container = container;\r\n\r\n    let options = {};\r\n\r\n    if (self.container.hasAttribute(\"x-options\")) {\r\n      options = JSON.parse(self.container.getAttribute(\"x-options\"));\r\n    }\r\n\r\n    self.options = options;\r\n\r\n    self.container.addEventListener(\"drop\", function (event) {\r\n      self.onDrop(event, self);\r\n    });\r\n\r\n    self.container.addEventListener(\"dragover\", function (event) {\r\n      self.onDragOver(event, self);\r\n    });\r\n  }\r\n\r\n  onDrop(e, self) {\r\n    e.preventDefault();\r\n    const appLoader = window.getAppLoader();\r\n\r\n    let opts = {\r\n      item: self.container,\r\n      itemTarget: self.getDropArea(e.target),\r\n      dragEvent: e,\r\n    };\r\n\r\n    if (self.options.attributes) {\r\n      opts.attributes = self.options.attributes;\r\n    }\r\n\r\n    if (self.options.emit) {\r\n      appLoader.event.emit(self.options.emit + \"-drop\", opts);\r\n    } else {\r\n      appLoader.event.emit(\"bb-block-drop-before\", opts);\r\n    }\r\n  }\r\n\r\n  getDropArea(link) {\r\n    if (!link || !link.hasAttribute) {\r\n      return false;\r\n    }\r\n\r\n    if (\r\n      link.hasAttribute(\"x-action\") &&\r\n      link.getAttribute(\"x-action\") === \"drop\"\r\n    ) {\r\n      return link;\r\n    }\r\n\r\n    return this.getDropArea(link.parentNode);\r\n  }\r\n\r\n  onDragOver(e, self) {\r\n    e.preventDefault();\r\n    const appLoader = window.getAppLoader();\r\n\r\n    let opts = {\r\n      item: appLoader.state.dragItem,\r\n      itemTarget: self.getDropArea(e.target),\r\n      dragEvent: e,\r\n    };\r\n\r\n    if (self.options.attributes) {\r\n      opts.attributes = self.options.attributes;\r\n    }\r\n\r\n    if (self.options.emit) {\r\n      appLoader.event.emit(self.options.emit + \"-drag-over\", opts);\r\n    } else {\r\n      appLoader.event.emit(\"bb-block-drag_over-before\", opts);\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drop);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/actions/drop/module.js?");

/***/ })

}]);