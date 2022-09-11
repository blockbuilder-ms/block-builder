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
  ["src_listeners_bb-block-drag-before_hide-browse_js"],
  {
    /***/ "./src/listeners/bb-block-drag-before/hide-browse.js":
      /*!******************************************************!*\
  !*** ./src/listeners/bb-block-drag-before/hide-browse.js ***!
  \******************************************************/
      /***/ () => {
        eval(
          'const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  "bb-block-drag-before",\r\n  function () {\r\n    // Succes\r\n    appLoader.action\r\n      .withOptions({\r\n        id: "builder-browse-modal",\r\n      })\r\n      .run("modal", "builder-browse-modal");\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/listeners/bb-block-drag-before/hide-browse.js?'
        );

        /***/
      },
  },
]);
