"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_core_settings_js"],{

/***/ "./src/core/settings.js":
/*!******************************!*\
  !*** ./src/core/settings.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Settings {\r\n  constructor() {\r\n    this.loaded = false;\r\n  }\r\n  async reload() {\r\n    this.settings = null;\r\n    this.loaded = false;\r\n    this.load();\r\n  }\r\n  async load() {\r\n    const self = this;\r\n    // 1. Load settings\r\n    if (!this.settings && bbSettings) {\r\n      this.settings = bbSettings;\r\n    }\r\n\r\n    await self._loadData();\r\n\r\n    self.loaded = true;\r\n\r\n    return true;\r\n  }\r\n\r\n  async _loadData() {\r\n    // 2. Iterate settings in K/V\r\n    for (let i in this.settings) {\r\n      let key = i;\r\n      let value = this.settings[key];\r\n\r\n      // 3. Find dom object by name equal to K\r\n      let owner = document.querySelector('[name=\"' + key + '\"]');\r\n\r\n      if (!owner) {\r\n        continue;\r\n      }\r\n\r\n      if (owner.tagName === \"INPUT\") {\r\n        switch (owner.type) {\r\n          case \"checkbox\":\r\n          case \"radio\":\r\n            if (value) {\r\n              owner.checked = true;\r\n            }\r\n            break;\r\n\r\n          default:\r\n            owner.value = value;\r\n        }\r\n      } else {\r\n        owner.value = value;\r\n      }\r\n    }\r\n\r\n    return true;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/core/settings.js?");

/***/ })

}]);