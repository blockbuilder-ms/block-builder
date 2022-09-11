/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_events_bb-block-move_end-before_hide-dropable_js"],{

/***/ "./src/events/bb-block-move_end-before/hide-dropable.js":
/*!**************************************************************!*\
  !*** ./src/events/bb-block-move_end-before/hide-dropable.js ***!
  \**************************************************************/
/***/ (() => {

eval("const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  \"bb-block-move_end-before\",\r\n  async function (event) {\r\n    appLoader.state.dragItem.classList.remove(\r\n      \"scale-105\",\r\n      \"border-2\",\r\n      \"py-1\",\r\n      \"px-2\",\r\n      \"border-dark\"\r\n    );\r\n\r\n    appLoader.state.dragItem = false;\r\n    appLoader.state.currentTarget = false;\r\n\r\n    return true;\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/events/bb-block-move_end-before/hide-dropable.js?");

/***/ })

}]);