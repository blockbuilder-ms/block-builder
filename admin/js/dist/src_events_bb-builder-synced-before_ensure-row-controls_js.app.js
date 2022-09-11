/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_events_bb-builder-synced-before_ensure-row-controls_js"],{

/***/ "./src/events/bb-builder-synced-before/ensure-row-controls.js":
/*!********************************************************************!*\
  !*** ./src/events/bb-builder-synced-before/ensure-row-controls.js ***!
  \********************************************************************/
/***/ (() => {

eval("const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  \"bb-builder-synced-before\",\r\n  async function () {\r\n    setTimeout(async () => {\r\n      let rows = await appLoader.dom.get(\".row\", true);\r\n      let size = rows.length;\r\n      while (size--) {\r\n        let row = rows[size];\r\n\r\n        if (!row || \"object\" !== typeof row) {\r\n          continue;\r\n        }\r\n\r\n        if (row.innerHTML === \"\") {\r\n          // If empty add the column chooser template.\r\n          let template = await appLoader.template.get(\"column-chooser-inner\");\r\n          template.innerHTML = template.innerHTML.replaceAll(\r\n            \"{name}\",\r\n            row.getAttribute(\"data-id\")\r\n          );\r\n\r\n          row.innerHTML = template.innerHTML;\r\n        } else {\r\n          // Check if column chooser is there, and delete it.\r\n          let chooser = row.querySelector(\".column-chooser-inner\");\r\n          if (chooser) {\r\n            chooser.parentNode.removeChild(chooser);\r\n          }\r\n\r\n          chooser = row.querySelector(\".fixed-column-chooser\");\r\n          if (chooser && false === chooser.classList.contains(\"hidden\")) {\r\n            chooser.classList.add(\"opacity-0\");\r\n            setTimeout(() => {\r\n              chooser.parentNode.removeChild(chooser);\r\n            }, 200);\r\n          }\r\n        }\r\n      }\r\n\r\n      appLoader.loadIframeActions();\r\n    });\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/events/bb-builder-synced-before/ensure-row-controls.js?");

/***/ })

}]);