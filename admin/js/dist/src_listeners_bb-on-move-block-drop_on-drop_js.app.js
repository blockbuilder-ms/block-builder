/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] =
  self["webpackChunkblock_builder_editor"] || []).push([
  ["src_listeners_bb-block-move_drop-before_on-drop_js"],
  {
    /***/ "./src/listeners/bb-block-move_drop-before/on-drop.js":
      /*!********************************************************!*\
  !*** ./src/listeners/bb-block-move_drop-before/on-drop.js ***!
  \********************************************************/
      /***/ () => {
        eval(
          'const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  "bb-block-move_drop-before",\r\n  async function (event) {\r\n    if (\r\n      appLoader.state.active ||\r\n      !appLoader.state.currentTarget ||\r\n      !appLoader.state.dragItem\r\n    ) {\r\n      return;\r\n    }\r\n\r\n    let item = appLoader.state.dragItem;\r\n    let target = appLoader.state.currentTarget;\r\n\r\n    if (item === target) {\r\n      target = target.parentNode.parentNode;\r\n    }\r\n\r\n    if (!item || !item.getAttribute) {\r\n      console.error("Drag item was not found");\r\n      console.log(item);\r\n      return;\r\n    }\r\n\r\n    if (!target || !target.getAttribute) {\r\n      console.error("Target item was not found");\r\n      console.log(target);\r\n      return;\r\n    }\r\n\r\n    let itemOptions = item.getAttribute("x-options");\r\n    let targetOptions = target.getAttribute("x-options");\r\n\r\n    appLoader.state.active = true;\r\n\r\n    if (itemOptions) {\r\n      itemOptions = JSON.parse(itemOptions);\r\n    }\r\n\r\n    if (targetOptions) {\r\n      targetOptions = JSON.parse(targetOptions);\r\n    }\r\n\r\n    let itemId = itemOptions.attributes.id;\r\n    let targetId = targetOptions.attributes.id;\r\n    let itemStruct = structuredClone(await appLoader.dom.find(itemId));\r\n    state = await appLoader.dom.insertBefore(itemStruct, targetId);\r\n\r\n    if (!state) {\r\n      console.error("Failed to insert block");\r\n    }\r\n\r\n    appLoader.state.active = false;\r\n    appLoader.state.dragItem = false;\r\n    appLoader.state.currentTarget = false;\r\n\r\n    await appLoader.dom.sync();\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/listeners/bb-block-move_drop-before/on-drop.js?'
        );

        /***/
      },
  },
]);
