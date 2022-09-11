"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_core_block_js"],{

/***/ "./src/core/block.js":
/*!***************************!*\
  !*** ./src/core/block.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst appLoader = window.getAppLoader();\r\nconst uuidv4 = (__webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\").v4);\r\n\r\nclass Block {\r\n  /**\r\n   * Will build the block\r\n   *\r\n   * @var {}\r\n   *\r\n   * @return {}\r\n   */\r\n  async make(tag, template) {\r\n    const self = this;\r\n    let block = bbBlocks.filter(function (item) {\r\n      return item.tag === tag;\r\n    });\r\n\r\n    if (block[0]) {\r\n      block = block[0];\r\n    }\r\n\r\n    appLoader.event.emit(\"bb-block-created\", {\r\n      tag: tag,\r\n      options: block,\r\n      template: template,\r\n    });\r\n\r\n    return template;\r\n  }\r\n\r\n  async structure(tag) {\r\n    const self = this;\r\n    let block = bbBlocks.filter(function (item) {\r\n      return item.tag === tag;\r\n    });\r\n\r\n    if (block[0]) {\r\n      block = block[0];\r\n    }\r\n\r\n    return block;\r\n  }\r\n\r\n  async injectContent(block, node) {\r\n    block.innerHTML = \"\";\r\n    block.appendChild(node);\r\n\r\n    return block;\r\n  }\r\n\r\n  generateId() {\r\n    return uuidv4();\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Block);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/core/block.js?");

/***/ })

}]);