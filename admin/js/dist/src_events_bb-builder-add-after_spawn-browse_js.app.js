/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_events_bb-builder-add-after_spawn-browse_js"],{

/***/ "./src/events/bb-builder-add-after/spawn-browse.js":
/*!*********************************************************!*\
  !*** ./src/events/bb-builder-add-after/spawn-browse.js ***!
  \*********************************************************/
/***/ (() => {

eval("const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  \"bb-builder-add-after\",\r\n  async function (e) {\r\n    // Succes\r\n    appLoader.state.addContainer = await appLoader.dom.get(\r\n      '[data-id=\"' + e.attributes.location + '\"]',\r\n      true\r\n    );\r\n\r\n    if (appLoader.state.addContainer.length === 0) {\r\n      appLoader.state.addContainerRoot = true;\r\n      appLoader.state.addContainer = await appLoader.dom.get(\r\n        \"#\" + e.attributes.location,\r\n        true\r\n      );\r\n    }\r\n\r\n    if (!appLoader.state.addContainer) {\r\n      console.error(\"We did not find the container you are asking for.\");\r\n      appLoader.notification.error(\"We ran into an issue..\");\r\n      return false;\r\n    }\r\n\r\n    appLoader.action\r\n      .withOptions({\r\n        id: \"builder-browse-modal\",\r\n      })\r\n      .run(\"modal\", \"builder-browse-modal\");\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/events/bb-builder-add-after/spawn-browse.js?");

/***/ })

}]);