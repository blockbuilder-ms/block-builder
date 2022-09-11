/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_listeners_bb-builder-save_on-save_js"],{

/***/ "./src/listeners/bb-builder-save/on-save.js":
/*!**************************************************!*\
  !*** ./src/listeners/bb-builder-save/on-save.js ***!
  \**************************************************/
/***/ (() => {

eval("const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  \"bb-builder-save\",\r\n  async function (event) {\r\n    let button = event.attributes.srcEventElement;\r\n\r\n    appLoader.dom.save();\r\n\r\n    // Update button\r\n    button.classList.add(\"saved\");\r\n    setTimeout(() => {\r\n      // Revert to normal button again.\r\n      button.classList.remove(\"saved\");\r\n    }, 2500);\r\n    return true;\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/listeners/bb-builder-save/on-save.js?");

/***/ })

}]);