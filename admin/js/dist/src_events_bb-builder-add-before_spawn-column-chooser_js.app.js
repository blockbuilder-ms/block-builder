/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_events_bb-builder-add-before_spawn-column-chooser_js"],{

/***/ "./src/events/bb-builder-add-before/spawn-column-chooser.js":
/*!******************************************************************!*\
  !*** ./src/events/bb-builder-add-before/spawn-column-chooser.js ***!
  \******************************************************************/
/***/ (() => {

eval("const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  \"bb-builder-add-before\",\r\n  async function (event) {\r\n    let rootId = event.attributes.location;\r\n\r\n    if (!rootId) {\r\n      // No root id\r\n\r\n      return;\r\n    }\r\n\r\n    let node = await appLoader.dom.get(\"#\" + rootId, true);\r\n    if (!node) {\r\n      node = await appLoader.dom.get(\"[data-id='\" + rootId + \"']\", true);\r\n\r\n      if (node[0]) {\r\n        node = node[0];\r\n      }\r\n    }\r\n\r\n    if (!node) {\r\n      console.error(\"Cannot spawn column chooser - no container\");\r\n      return false;\r\n    }\r\n\r\n    let children = node.childNodes;\r\n\r\n    for (let i in children) {\r\n      let child = children[i];\r\n      if (\"object\" !== typeof child) {\r\n        continue;\r\n      }\r\n\r\n      if (child.classList && child.classList.contains(\"standard-view\")) {\r\n        child.classList.add(\"hidden\");\r\n      }\r\n\r\n      if (child.classList && child.classList.contains(\"column-view\")) {\r\n        child.classList.remove(\"hidden\");\r\n        setTimeout(function () {\r\n          child.classList.remove(\"opacity-0\");\r\n        }, 5);\r\n      }\r\n    }\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/events/bb-builder-add-before/spawn-column-chooser.js?");

/***/ })

}]);