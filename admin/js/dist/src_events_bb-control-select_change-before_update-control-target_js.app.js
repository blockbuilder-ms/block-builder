/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_events_bb-control-select_change-before_update-control-target_js"],{

/***/ "./src/events/bb-control-select_change-before/update-control-target.js":
/*!*****************************************************************************!*\
  !*** ./src/events/bb-control-select_change-before/update-control-target.js ***!
  \*****************************************************************************/
/***/ (() => {

eval("/**\r\n * Fetches an instance of the application loader\r\n *\r\n * @var {object}\r\n */\r\nconst appLoader = window.getAppLoader();\r\n\r\n/**\r\n * Event performed each time a succesfull change event is being\r\n * emitted from select fields.\r\n *\r\n * @param {object} event Modified event for the specific scenario\r\n * @return {void}\r\n */\r\nappLoader.event.on(\r\n  \"bb-control-select_change-before\",\r\n  async function (event) {\r\n    let target = event.node;\r\n    let value = target.value;\r\n    let name = target.name;\r\n    let extra = document.querySelector(\"[name='\" + name + \"-type']\");\r\n\r\n    let block = event.controller.block;\r\n    console.log(block);\r\n\r\n    if (\r\n      target.hasAttribute(\"x-standalone\") &&\r\n      target.getAttribute(\"x-standalone\") === \"true\"\r\n    ) {\r\n      console.log(\r\n        \"Standalone event: bb-builder-control-select-\" + name + \"-change\"\r\n      );\r\n      appLoader.event.emit(\"bb-builder-control-select-\" + name + \"-change\", {\r\n        block: block,\r\n        node: target,\r\n        controller: event.controller,\r\n      });\r\n      return;\r\n    }\r\n\r\n    appLoader.dom.performUpdate(block, name, value, extra);\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/events/bb-control-select_change-before/update-control-target.js?");

/***/ })

}]);