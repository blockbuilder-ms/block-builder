"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_core_blockControl_js"],{

/***/ "./src/core/blockControl.js":
/*!**********************************!*\
  !*** ./src/core/blockControl.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst appLoader = window.getAppLoader();\r\nlet controllerObj = Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_uuid_dist_esm-browser_index_js\"), __webpack_require__.e(\"src_core_block-control_controller_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./block-control/controller */ \"./src/core/block-control/controller.js\"));\r\n\r\nclass BlockControl {\r\n  /**\r\n   * Holds the current build build controllers.\r\n   *\r\n   * @var {object}\r\n   */\r\n  instances = {};\r\n\r\n  /**\r\n   * Will build the block controller\r\n   *\r\n   * @var {}\r\n   *\r\n   * @return {}\r\n   */\r\n  async make(block, item) {\r\n    const self = this;\r\n    const controller = (await controllerObj).default;\r\n    const instance = new controller();\r\n\r\n    instance.build(block, item);\r\n\r\n    self.instances[block[\"data-id\"]] = instance;\r\n\r\n    return instance;\r\n  }\r\n\r\n  async has(block) {\r\n    const self = this;\r\n\r\n    return self.instances[block[\"data-id\"]];\r\n  }\r\n\r\n  async get(block) {\r\n    const self = this;\r\n\r\n    if (!self.instances[block[\"data-id\"]]) {\r\n      console.log(self.instances);\r\n      return false;\r\n    }\r\n\r\n    const object = self.instances[block[\"data-id\"]];\r\n    const instance = object.instance;\r\n\r\n    let currentInstances = object.mainContainer.querySelectorAll(\r\n      \".instance:not(.hidden)\"\r\n    );\r\n\r\n    for (let j in currentInstances) {\r\n      let ci = currentInstances[j];\r\n\r\n      if (\"object\" !== typeof ci) {\r\n        continue;\r\n      }\r\n\r\n      ci.classList.add(\"hidden\");\r\n    }\r\n\r\n    instance.classList.remove(\"hidden\");\r\n\r\n    return self.instances[block[\"data-id\"]];\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockControl);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/core/blockControl.js?");

/***/ })

}]);