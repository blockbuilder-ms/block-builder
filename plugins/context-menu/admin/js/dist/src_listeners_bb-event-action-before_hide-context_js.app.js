/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_context_menu"] = self["webpackChunkblock_builder_context_menu"] || []).push([["src_listeners_bb-event-action-before_hide-context_js"],{

/***/ "./src/listeners/bb-event-action-before/hide-context.js":
/*!**************************************************************!*\
  !*** ./src/listeners/bb-event-action-before/hide-context.js ***!
  \**************************************************************/
/***/ (() => {

eval("const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  \"bb-event-action-before\",\r\n  async function (event) {\r\n    appLoader.context._despawn();\r\n\r\n    return true;\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-context-menu/./src/listeners/bb-event-action-before/hide-context.js?");

/***/ })

}]);