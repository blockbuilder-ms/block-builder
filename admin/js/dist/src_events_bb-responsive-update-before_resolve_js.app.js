/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_events_bb-responsive-update-before_resolve_js"],{

/***/ "./src/events/bb-responsive-update-before/resolve.js":
/*!***********************************************************!*\
  !*** ./src/events/bb-responsive-update-before/resolve.js ***!
  \***********************************************************/
/***/ (() => {

eval("const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  \"bb-responsive-update-before\",\r\n  async function (event) {\r\n    let frame = document.getElementById(\"iframe-inner-wrap\");\r\n    let viewport = document.getElementById(\"viewport\");\r\n\r\n    let dimension = viewport.value;\r\n    frame.style.maxWidth = dimension + \"px\";\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/events/bb-responsive-update-before/resolve.js?");

/***/ })

}]);