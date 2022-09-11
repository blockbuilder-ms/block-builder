/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_events_bb-block-drop-before_add-to-dom_js"],{

/***/ "./src/events/bb-block-drop-before/add-to-dom.js":
/*!*******************************************************!*\
  !*** ./src/events/bb-block-drop-before/add-to-dom.js ***!
  \*******************************************************/
/***/ (() => {

eval("const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  \"bb-block-drop-before\",\r\n  async function (event) {\r\n    let target = event.dragEvent.target;\r\n    let options = {};\r\n    let template;\r\n    let result;\r\n\r\n    try {\r\n      options = target.hasAttribute(\"x-options\")\r\n        ? JSON.parse(target.getAttribute(\"x-options\"))\r\n        : [];\r\n    } catch (e) {\r\n      //\r\n    }\r\n\r\n    root = await findBlockTarget(target);\r\n\r\n    let item = appLoader.state.dragItem;\r\n    let itemOptions = {};\r\n\r\n    try {\r\n      itemOptions = item.hasAttribute(\"x-options\")\r\n        ? JSON.parse(item.getAttribute(\"x-options\"))\r\n        : {};\r\n    } catch (e) {\r\n      //\r\n    }\r\n\r\n    let structure = structuredClone(\r\n      await appLoader.block.structure(itemOptions.tag)\r\n    );\r\n\r\n    if (structure.default) {\r\n      structure.multiStyle = true;\r\n      template = await appLoader.template.get(itemOptions.tag + \"-default\");\r\n    } else {\r\n      template = await appLoader.template.get(itemOptions.tag);\r\n    }\r\n\r\n    if (!template) {\r\n      console.error(\"Template for: \" + itemOptions.tag + \" - is corrupted\");\r\n      return;\r\n    }\r\n\r\n    const block = await appLoader.block.make(itemOptions.tag, template);\r\n    if (root) {\r\n      result = await appLoader.dom.appendTo(block, root, structure, template);\r\n    } else {\r\n      result = await appLoader.dom.append(\r\n        block,\r\n        target,\r\n        structure,\r\n        root,\r\n        template\r\n      );\r\n    }\r\n\r\n    if (!result) {\r\n      appLoader.notification.error(itemOptions.type + \" could not be added\");\r\n      appLoader.debug.log([result]);\r\n    }\r\n\r\n    appLoader.notification.succes(itemOptions.type + \" was added\");\r\n    appLoader.state.dragItem = false;\r\n    appLoader.state.currentTarget = false;\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\r\nasync function findBlockTarget(target) {\r\n  if (!target) {\r\n    return false;\r\n  }\r\n\r\n  if (target.hasAttribute(\"data-id\")) {\r\n    return target;\r\n  }\r\n\r\n  if (target.hasAttribute(\"x-root\")) {\r\n    return false;\r\n  }\r\n\r\n  if (target.hasAttribute(\"x-wrap\")) {\r\n    return false;\r\n  }\r\n\r\n  return await findBlockTarget(target.parentNode);\r\n}\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/events/bb-block-drop-before/add-to-dom.js?");

/***/ })

}]);