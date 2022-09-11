/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_listeners_bb-builder-has-synced_ensure-columns-controls_js"],{

/***/ "./src/listeners/bb-builder-has-synced/ensure-columns-controls.js":
/*!************************************************************************!*\
  !*** ./src/listeners/bb-builder-has-synced/ensure-columns-controls.js ***!
  \************************************************************************/
/***/ (() => {

eval("const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  \"bb-builder-has-synced\",\r\n  async function () {\r\n    console.log(\"Ensuring columns has control elements\");\r\n    let columns = await appLoader.dom.get(\".col[x-inner-content]\", true);\r\n    let stackSize = columns.length;\r\n\r\n    while (stackSize--) {\r\n      let column = columns[stackSize];\r\n\r\n      if (!column || \"object\" !== typeof column) {\r\n        continue;\r\n      }\r\n\r\n      let id = column.getAttribute(\"data-id\");\r\n      let block = await appLoader.dom.find(id);\r\n\r\n      // 1. Check if it has add element.\r\n      let addBlock = Object.values(column.children).filter(function (node) {\r\n        return (\r\n          node.hasAttribute(\"x-action\") &&\r\n          node.getAttribute(\"x-action\") === \"drop\"\r\n        );\r\n      });\r\n\r\n      let hasAddBlock = addBlock.length > 0;\r\n      if (!hasAddBlock) {\r\n        // Append add block element\r\n      }\r\n\r\n      // Check if it has content\r\n      let hasContent = block && block.content && block.content.length > 0;\r\n\r\n      if (!hasContent) {\r\n        // if not make sure its shown without drag\r\n        let entry = addBlock[0];\r\n\r\n        if (entry.classList.contains(\"hidden\")) {\r\n          entry.classList.remove(\"hidden\");\r\n        }\r\n\r\n        if (entry.classList.contains(\"opacity-0\")) {\r\n          entry.classList.remove(\"opacity-0\");\r\n        }\r\n      } else {\r\n        // if it does have content it should only display on drag.\r\n        let entry = addBlock[0];\r\n\r\n        if (!entry.classList.contains(\"hidden\")) {\r\n          entry.classList.add(\"hidden\");\r\n        }\r\n\r\n        if (!entry.classList.contains(\"opacity-0\")) {\r\n          entry.classList.add(\"opacity-0\");\r\n        }\r\n      }\r\n    }\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/listeners/bb-builder-has-synced/ensure-columns-controls.js?");

/***/ })

}]);