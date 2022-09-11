/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_events_bb-block-move-before_show-dropable_js"],{

/***/ "./src/events/bb-block-move-before/show-dropable.js":
/*!**********************************************************!*\
  !*** ./src/events/bb-block-move-before/show-dropable.js ***!
  \**********************************************************/
/***/ (() => {

eval("const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  \"bb-block-move-before\",\r\n  async function (event) {\r\n    if (!appLoader.state.dragItem) {\r\n      return;\r\n    }\r\n\r\n    let item = appLoader.state.dragItem;\r\n\r\n    if (!item || !item.getAttribute) {\r\n      return;\r\n    }\r\n\r\n    let itemOptions = item.getAttribute(\"x-options\");\r\n\r\n    appLoader.state.active = true;\r\n\r\n    if (itemOptions) {\r\n      itemOptions = JSON.parse(itemOptions);\r\n    }\r\n\r\n    let itemId = itemOptions.attributes.id;\r\n\r\n    appLoader.state.dragItem.classList.add(\r\n      \"scale-75\",\r\n      \"border-2\",\r\n      \"py-1\",\r\n      \"px-2\",\r\n      \"border-dark\"\r\n    );\r\n\r\n    let nodes = await appLoader.dom.get(\"[data-id='\" + itemId + \"']\", true);\r\n\r\n    if (nodes[0]) {\r\n      let node = nodes[0];\r\n      node.classList.add(\r\n        \"scale-110\",\r\n        \"duration-200\",\r\n        \"ease-in-out\",\r\n        \"transition-all\",\r\n        \"border-2\",\r\n        \"py-1\",\r\n        \"px-2\",\r\n        \"border-dark\"\r\n      );\r\n    }\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/events/bb-block-move-before/show-dropable.js?");

/***/ })

}]);