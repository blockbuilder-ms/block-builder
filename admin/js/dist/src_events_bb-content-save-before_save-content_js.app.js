/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_events_bb-content-save-before_save-content_js"],{

/***/ "./src/events/bb-content-save-before/save-content.js":
/*!***********************************************************!*\
  !*** ./src/events/bb-content-save-before/save-content.js ***!
  \***********************************************************/
/***/ (() => {

eval("const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  \"bb-content-save-before\",\r\n  async function (event) {\r\n    console.log(\"Saving content\");\r\n    let html = await appLoader.dom.build(event.data);\r\n\r\n    let requestObject = await appLoader.request.make();\r\n\r\n    requestObject.setUrl(\r\n      \"/wp-json/block-builder/v1/post/content/\" + appLoader.post.ID\r\n    );\r\n\r\n    event.data = event.data.filter(function (entry) {\r\n      return entry !== null;\r\n    });\r\n\r\n    requestObject.setBody({\r\n      body: {\r\n        html: html,\r\n        structure: event.data,\r\n      },\r\n    });\r\n\r\n    let response = await appLoader.request.put(requestObject);\r\n\r\n    // Request was not 200 succes\r\n    if (response.status !== 200) {\r\n      appLoader.notification.error(response.response, 2500);\r\n      return;\r\n    }\r\n\r\n    // request was an succes\r\n    appLoader.notification.succes(response.response, 2500);\r\n\r\n    return true;\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/events/bb-content-save-before/save-content.js?");

/***/ })

}]);