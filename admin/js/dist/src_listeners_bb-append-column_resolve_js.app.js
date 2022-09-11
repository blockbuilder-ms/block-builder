/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_listeners_bb-append-column_resolve_js"],{

/***/ "./src/listeners/bb-append-column/resolve.js":
/*!***************************************************!*\
  !*** ./src/listeners/bb-append-column/resolve.js ***!
  \***************************************************/
/***/ (() => {

eval("const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  \"bb-append-column\",\r\n  async function (event) {\r\n    let attrs = event.attributes;\r\n    let location = attrs.location;\r\n    let columns = attrs.columns;\r\n\r\n    if (!columns || !location) {\r\n      return false;\r\n    }\r\n\r\n    let split = columns.split(\"-\");\r\n    let count = parseInt(split[0]);\r\n    let max = parseInt(split[0]);\r\n    let layout = split[1];\r\n    let columnsArr = [];\r\n    let inner = false;\r\n    let root = await appLoader.dom.get(\"#\" + location, true);\r\n\r\n    if (!root || root.length === 0) {\r\n      inner = true;\r\n      root = await appLoader.dom.get(\"[data-id='\" + location + \"']\", true);\r\n    }\r\n\r\n    if (!root || root.length === 0) {\r\n      console.log(\"root was not found\");\r\n      return false;\r\n    }\r\n\r\n    if (root[0]) {\r\n      root = root[0];\r\n    }\r\n\r\n    let target = root.querySelector(\"[x-action='drop']\");\r\n\r\n    if (!target) {\r\n      console.log(\"Target not found\");\r\n      return false;\r\n    }\r\n\r\n    if (layout.indexOf(\"(\") !== -1) {\r\n      // advanced\r\n      layout = layout.replace(\"(\", \"\");\r\n      layout = layout.replace(\")\", \"\");\r\n      columnsArr = layout.split(\"/\");\r\n    } else {\r\n      // simple\r\n      for (let i = 0; i < max; i++) {\r\n        columnsArr.push(layout);\r\n      }\r\n    }\r\n\r\n    const template = await appLoader.template.get(\"core:row\");\r\n    let row;\r\n    if (!inner) {\r\n      const block = await appLoader.block.make(\"core:row\", template);\r\n      row = await appLoader.dom.append(\r\n        block,\r\n        target,\r\n        await appLoader.block.structure(\"core:row\")\r\n      );\r\n    } else {\r\n      row = root;\r\n    }\r\n\r\n    while (max--) {\r\n      let col = columnsArr[max];\r\n      const template = await appLoader.template.get(\"core:column\");\r\n      const block = await appLoader.block.make(\"core:column\", template);\r\n      let structure = await appLoader.block.structure(\"core:column\");\r\n      structure.default.style.flex = \"0 0 calc( \" + col + \"% - 30px);\";\r\n      structure.default.style[\"flex-wrap\"] = \"wrap\";\r\n      const result = await appLoader.dom.appendTo(block, row, structure);\r\n\r\n      if (!result) {\r\n        continue;\r\n      }\r\n\r\n      result.querySelector('[x-action=\"drop\"]').setAttribute(\r\n        \"x-options\",\r\n        JSON.stringify({\r\n          location: result.getAttribute(\"data-id\"),\r\n          root: location.replace(\"-wrap\", \"\"),\r\n        })\r\n      );\r\n\r\n      appLoader.loadIframeActions();\r\n    }\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/listeners/bb-append-column/resolve.js?");

/***/ })

}]);