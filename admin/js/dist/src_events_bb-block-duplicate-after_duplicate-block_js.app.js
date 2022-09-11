/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_events_bb-block-duplicate-after_duplicate-block_js"],{

/***/ "./src/events/bb-block-duplicate-after/duplicate-block.js":
/*!****************************************************************!*\
  !*** ./src/events/bb-block-duplicate-after/duplicate-block.js ***!
  \****************************************************************/
/***/ (() => {

eval("const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  \"bb-duplicate-block-after\",\r\n  async function (event) {\r\n    let id = event.attributes.item;\r\n    let state = event.attributes.state;\r\n\r\n    if (state === \"confirm\") {\r\n      appLoader.dom.duplicate(id);\r\n\r\n      appLoader.action\r\n        .withOptions({\r\n          \"data-id\": \"builder-confirm-duplicate\",\r\n          standalone: true,\r\n          attributes: {\r\n            item: event.attributes.item,\r\n          },\r\n        })\r\n        .run(\"modal\", \"builder-confirm-duplicate\");\r\n    }\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/events/bb-block-duplicate-after/duplicate-block.js?");

/***/ })

}]);