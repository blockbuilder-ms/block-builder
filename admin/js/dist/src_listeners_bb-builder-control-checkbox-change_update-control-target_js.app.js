/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_listeners_bb-builder-control-checkbox-change_update-control-target_js"],{

/***/ "./src/listeners/bb-builder-control-checkbox-change/update-control-target.js":
/*!***********************************************************************************!*\
  !*** ./src/listeners/bb-builder-control-checkbox-change/update-control-target.js ***!
  \***********************************************************************************/
/***/ (() => {

eval("/**\r\n * Fetches an instance of the application loader\r\n *\r\n * @var {object}\r\n */\r\nconst appLoader = window.getAppLoader();\r\n\r\n/**\r\n * Event performed each time a succesfull change event is being\r\n * emitted from checkbox fields.\r\n *\r\n * @param {object} event Modified event for the specific scenario\r\n * @return {void}\r\n */\r\nappLoader.event.on(\r\n  \"bb-builder-control-checkbox-change\",\r\n  async function (event) {\r\n    //\r\n    let target = event.node;\r\n    let value = target.value;\r\n    let name = target.name;\r\n    let extra = document.querySelector(\"[name='\" + name + \"-type']\");\r\n\r\n    let block = event.controller.block;\r\n\r\n    appLoader.dom.performUpdate(block, name, value, extra);\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/listeners/bb-builder-control-checkbox-change/update-control-target.js?");

/***/ })

}]);