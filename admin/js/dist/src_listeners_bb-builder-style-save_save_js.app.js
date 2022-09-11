/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_listeners_bb-builder-style-save_save_js"],{

/***/ "./src/listeners/bb-builder-style-save/save.js":
/*!*****************************************************!*\
  !*** ./src/listeners/bb-builder-style-save/save.js ***!
  \*****************************************************/
/***/ (() => {

eval("const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  \"bb-builder-style-save\",\r\n  async function (event) {\r\n    console.log(\"Saving style\");\r\n    let requestObject = await appLoader.request.make();\r\n    requestObject.setUrl(\r\n      \"/wp-json/block-builder/v1/post/style/\" + appLoader.post.ID\r\n    );\r\n    requestObject.setBody({\r\n      body: {\r\n        style: event.data,\r\n      },\r\n    });\r\n\r\n    let result = await appLoader.request.put(requestObject);\r\n    let response = await result.json();\r\n\r\n    // Request was not 200 succes\r\n    if (response.status !== 200) {\r\n      appLoader.notification.error(response.response, 2500);\r\n      return;\r\n    }\r\n\r\n    // request was an succes\r\n    appLoader.notification.succes(response.response, 2500);\r\n\r\n    return true;\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/listeners/bb-builder-style-save/save.js?");

/***/ })

}]);