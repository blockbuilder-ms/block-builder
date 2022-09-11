/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_listeners_bb-after-resolve-dependency_spawn-action-bar_js"],{

/***/ "./src/listeners/bb-after-resolve-dependency/spawn-action-bar.js":
/*!***********************************************************************!*\
  !*** ./src/listeners/bb-after-resolve-dependency/spawn-action-bar.js ***!
  \***********************************************************************/
/***/ (() => {

eval("const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  \"bb-after-resolve-dependency\",\r\n  async function (event) {\r\n    if (event.options && event.options.showActionBar) {\r\n      let template = await appLoader.template.get(\"action-bar\");\r\n\r\n      event.block.appendChild(template);\r\n    }\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/listeners/bb-after-resolve-dependency/spawn-action-bar.js?");

/***/ })

}]);