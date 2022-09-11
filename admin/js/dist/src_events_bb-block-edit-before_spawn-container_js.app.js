/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_events_bb-block-edit-before_spawn-container_js"],{

/***/ "./src/events/bb-block-edit-before/spawn-container.js":
/*!************************************************************!*\
  !*** ./src/events/bb-block-edit-before/spawn-container.js ***!
  \************************************************************/
/***/ (() => {

eval("const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  \"bb-block-edit-before\",\r\n  async function (event) {\r\n    let controller;\r\n\r\n    if (event.attributes) {\r\n      if (!event.attributes.item) {\r\n        console.error(\"Missing data in the event.\");\r\n        return false;\r\n      }\r\n\r\n      let item = event.attributes.item;\r\n      appLoader.editing = await appLoader.dom.find(item);\r\n      appLoader.editingObject = await appLoader.dom.get(\r\n        '[data-id=\"' + item + '\"]'\r\n      );\r\n    } else {\r\n      appLoader.editing = event.block;\r\n      appLoader.editingObject = event.item;\r\n    }\r\n\r\n    if (await appLoader.blockControl.has(appLoader.editing)) {\r\n      controller = await appLoader.blockControl.get(\r\n        appLoader.editing,\r\n        appLoader.editingObject\r\n      );\r\n    } else {\r\n      controller = await appLoader.blockControl.make(\r\n        appLoader.editing,\r\n        appLoader.editingObject\r\n      );\r\n    }\r\n\r\n    await controller.spawn();\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/events/bb-block-edit-before/spawn-container.js?");

/***/ })

}]);