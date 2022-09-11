/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_listeners_bb-builder-header-save_save-header_js"],{

/***/ "./src/listeners/bb-builder-header-save/save-header.js":
/*!*************************************************************!*\
  !*** ./src/listeners/bb-builder-header-save/save-header.js ***!
  \*************************************************************/
/***/ (() => {

eval("const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  \"bb-builder-header-save\",\r\n  async function (event) {\r\n    console.log(\"Saving header\");\r\n    let html = await appLoader.dom.build(event.data);\r\n\r\n    let requestObject = await appLoader.request.make();\r\n\r\n    requestObject.setUrl(\r\n      \"/wp-json/block-builder/v1/post/header/\" + appLoader.post.ID\r\n    );\r\n\r\n    event.data = event.data.filter(function (entry) {\r\n      return entry !== null;\r\n    });\r\n\r\n    requestObject.setBody({\r\n      body: {\r\n        html: html,\r\n        structure: event.data,\r\n      },\r\n    });\r\n\r\n    let result = await appLoader.request.put(requestObject);\r\n    let response = await result.json();\r\n\r\n    // Request was not 200 succes\r\n    if (response.status !== 200) {\r\n      appLoader.notification.error(response.response, 2500);\r\n      return;\r\n    }\r\n\r\n    // request was an succes\r\n    appLoader.notification.succes(response.response, 2500);\r\n\r\n    return true;\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/listeners/bb-builder-header-save/save-header.js?");

/***/ })

}]);