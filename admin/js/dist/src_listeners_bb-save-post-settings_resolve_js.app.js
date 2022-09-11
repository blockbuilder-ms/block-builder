/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_listeners_bb-save-post-settings_resolve_js"],{

/***/ "./src/listeners/bb-save-post-settings/resolve.js":
/*!********************************************************!*\
  !*** ./src/listeners/bb-save-post-settings/resolve.js ***!
  \********************************************************/
/***/ (() => {

eval("const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  \"bb-save-post-settings\",\r\n  async function (event) {\r\n    let requestObject = await appLoader.request.make();\r\n    let button = event.attributes.srcEventElement;\r\n    let settings = {};\r\n    let settingsObjs = document.querySelectorAll(\"[x-page-setting]\");\r\n    let size = settingsObjs.length;\r\n\r\n    while (size--) {\r\n      let setting = settingsObjs[size];\r\n\r\n      if (\r\n        !setting.hasAttribute(\"name\") ||\r\n        setting.getAttribute(\"name\") === null\r\n      ) {\r\n        continue;\r\n      }\r\n\r\n      if (\r\n        setting.tagName === \"INPUT\" &&\r\n        (setting.type === \"checkbox\" || setting.type === \"radio\")\r\n      ) {\r\n        settings[setting.getAttribute(\"name\")] = setting.checked;\r\n      } else {\r\n        settings[setting.getAttribute(\"name\")] = setting.value;\r\n      }\r\n    }\r\n\r\n    requestObject.setUrl(\r\n      \"/wp-json/block-builder/v1/post/\" + postObject.ID + \"/settings\"\r\n    );\r\n\r\n    requestObject.setBody({\r\n      body: settings,\r\n    });\r\n\r\n    let result = await appLoader.request.put(requestObject);\r\n    let response = await result.json();\r\n\r\n    // Request was not 200 succes\r\n    if (response.status !== 200) {\r\n      appLoader.notification.error(response.response, 2500);\r\n      return;\r\n    }\r\n\r\n    appLoader.notification.succes(response.response, 2500);\r\n\r\n    // Update button\r\n    button.classList.add(\"saved\");\r\n    setTimeout(() => {\r\n      // Revert to normal button again.\r\n      button.classList.remove(\"saved\");\r\n    }, 2500);\r\n\r\n    return true;\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/listeners/bb-save-post-settings/resolve.js?");

/***/ })

}]);