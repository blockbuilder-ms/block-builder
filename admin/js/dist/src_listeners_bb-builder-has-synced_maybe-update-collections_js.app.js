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
  ["src_listeners_bb-builder-has-synced_maybe-update-collections_js"],
  {
    /***/ "./src/listeners/bb-builder-has-synced/maybe-update-collections.js":
      /*!*************************************************************************!*\
  !*** ./src/listeners/bb-builder-has-synced/maybe-update-collections.js ***!
  \*************************************************************************/
      /***/ () => {
        eval(
          'const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  "bb-builder-has-synced",\r\n  function (event) {\r\n    let sel = document.querySelector(\'[name="block-tag-entry"]\');\r\n\r\n    appLoader.event.emit("bb-walker-build-before", {\r\n      data: sel.value ? sel.value : "content",\r\n      changeEvent: true,\r\n    });\r\n\r\n    return true;\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/listeners/bb-builder-has-synced/maybe-update-collections.js?'
        );

        /***/
      },
  },
]);
