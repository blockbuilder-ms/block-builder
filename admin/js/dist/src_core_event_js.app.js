"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_core_event_js"],{

/***/ "./src/core/event.js":
/*!***************************!*\
  !*** ./src/core/event.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Class to control and debug / monitor events\r\n * ran and used by the editor and its assets.\r\n */\r\nclass BBEvent {\r\n  constructor() {\r\n    this.emit(\"bb-before-load\");\r\n  }\r\n\r\n  /**\r\n   * Will hold the events registered with the application through\r\n   * the asssets and extensions\r\n   *\r\n   * @var {object}\r\n   */\r\n  events = {};\r\n  hits = {};\r\n\r\n  /**\r\n   * Registers a new event\r\n   */\r\n  register(name, receiver) {\r\n    const event = new Event(name);\r\n\r\n    this.events[name] = {\r\n      receiver: receiver ? receiver : document,\r\n      name: name,\r\n      dispatchable: event,\r\n    };\r\n\r\n    return this.events[name];\r\n  }\r\n\r\n  /**\r\n   * Listenes to an event\r\n   */\r\n  on(name, callback, errorCallback, receiver) {\r\n    const self = this;\r\n    let obj = typeof receiver === \"object\" ? receiver : document;\r\n\r\n    obj.addEventListener(name, function (e) {\r\n      self.hits[name] = self.hits[name] ? self.hits[name] + 1 : 1;\r\n      callback(e, self);\r\n    });\r\n  }\r\n\r\n  /**\r\n   * Emits an event\r\n   */\r\n  async emit(name, args) {\r\n    const self = this;\r\n    let event = this.events[name];\r\n\r\n    if (!event) {\r\n      event = this.register(name);\r\n    }\r\n\r\n    let receiver = event.receiver;\r\n    if (args && typeof args === \"object\") {\r\n      for (let i in args) {\r\n        event.dispatchable[i] = args[i];\r\n      }\r\n    }\r\n\r\n    await receiver.dispatchEvent(event.dispatchable);\r\n\r\n    if (!self.hits[name] && window.getAppLoader().notification) {\r\n      // window\r\n      //   .getAppLoader()\r\n      //   .notification.warning(\"No events bound for \" + name, 2500);\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BBEvent);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/core/event.js?");

/***/ })

}]);