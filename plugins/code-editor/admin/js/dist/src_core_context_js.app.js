"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_context_menu"] = self["webpackChunkblock_builder_context_menu"] || []).push([["src_core_context_js"],{

/***/ "./src/core/context.js":
/*!*****************************!*\
  !*** ./src/core/context.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Customizeable and dynamic context menu.\r\n */\r\nclass BBContext {\r\n  constructor() {\r\n    this.scope = document;\r\n    this._load();\r\n  }\r\n\r\n  /**\r\n   * Loads in the context feature\r\n   */\r\n  _load() {\r\n    const self = this;\r\n    const frame = self.scope.querySelector(\"#builder-frame\");\r\n    self.container = self.scope.getElementById(\"context-menu\");\r\n\r\n    if (frame.contentWindow.document.body) {\r\n      self.contentScope = frame.contentWindow.document;\r\n\r\n      self.contentScope.addEventListener(\"contextmenu\", (event) => {\r\n        if (event.ctrlKey) {\r\n          return;\r\n        }\r\n        event.preventDefault();\r\n\r\n        self._processContextRequest(event);\r\n      });\r\n      return;\r\n    }\r\n\r\n    frame.addEventListener(\"load\", async function () {\r\n      self.contentScope = frame.contentWindow.document;\r\n\r\n      self.contentScope.addEventListener(\"contextmenu\", (event) => {\r\n        if (event.ctrlKey) {\r\n          return;\r\n        }\r\n        event.preventDefault();\r\n\r\n        self._processContextRequest(event);\r\n      });\r\n    });\r\n\r\n    document.addEventListener(\"contextmenu\", (event) => {\r\n      if (event.ctrlKey) {\r\n        return;\r\n      }\r\n      event.preventDefault();\r\n\r\n      self._processContextRequest(event);\r\n    });\r\n  }\r\n\r\n  /**\r\n   * Processes the context request, builds up the list dynamicly all depending on the items\r\n   * currently found on the path of the click.\r\n   *\r\n   * @param {object} event\r\n   */\r\n  async _processContextRequest(event) {\r\n    const self = this;\r\n    const { clientX: mouseX, clientY: mouseY } = event;\r\n\r\n    if (!self.container) {\r\n      console.log(\"No container was found for context menu\");\r\n      return false;\r\n    }\r\n    /**\r\n     * Use event to dynamicly fill up the context all depending on dynamic\r\n     * scenarios, which can be altered.\r\n     */\r\n    await window.getAppLoader().event.emit(\"bb-context-display-before\", {\r\n      event: event,\r\n      container: self.container,\r\n    });\r\n\r\n    self.container.style.top = `${mouseY}px`;\r\n    self.container.style.left = `${mouseX}px`;\r\n    self.container.classList.remove(\"hidden\");\r\n\r\n    /**\r\n     * Use event to dynamicly fill up the context all depending on dynamic\r\n     * scenarios, which can be altered.\r\n     */\r\n    await window.getAppLoader().event.emit(\"bb-context-spawn-before\", {\r\n      event: event,\r\n      container: self.container,\r\n    });\r\n\r\n    setTimeout(() => {\r\n      self.container.classList.remove(\"opacity-0\");\r\n    }, 50);\r\n\r\n    /**\r\n     * Allow for further actions after spawn, whether it be notifications\r\n     * or other informational actions.\r\n     */\r\n    window.getAppLoader().event.emit(\"bb-context-spawn-after\", {\r\n      event: event,\r\n      container: self.container,\r\n    });\r\n  }\r\n\r\n  async _despawn() {\r\n    const self = this;\r\n    const { clientX: mouseX, clientY: mouseY } = event;\r\n\r\n    if (!self.container) {\r\n      console.log(\"No container was found for context menu\");\r\n      return false;\r\n    }\r\n    /**\r\n     * Use event to dynamicly fill up the context all depending on dynamic\r\n     * scenarios, which can be altered.\r\n     */\r\n    await window.getAppLoader().event.emit(\"bb-context-fade-before\", {\r\n      container: self.container,\r\n    });\r\n\r\n    self.container.classList.add(\"opacity-0\");\r\n\r\n    /**\r\n     * Use event to dynamicly fill up the context all depending on dynamic\r\n     * scenarios, which can be altered.\r\n     */\r\n    await window.getAppLoader().event.emit(\"bb-context-hide-before\", {\r\n      container: self.container,\r\n    });\r\n\r\n    setTimeout(() => {\r\n      self.container.classList.add(\"hidden\");\r\n    }, 250);\r\n\r\n    /**\r\n     * Allow for further actions after spawn, whether it be notifications\r\n     * or other informational actions.\r\n     */\r\n    window.getAppLoader().event.emit(\"bb-context-hide-after\", {\r\n      container: self.container,\r\n    });\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BBContext);\r\n\n\n//# sourceURL=webpack://block-builder-context-menu/./src/core/context.js?");

/***/ })

}]);