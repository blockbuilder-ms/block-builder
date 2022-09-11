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
  ["src_listeners_bb-builder-load-before_maybe-autosave_js"],
  {
    /***/ "./src/listeners/bb-builder-load-before/maybe-autosave.js":
      /*!*******************************************************!*\
  !*** ./src/listeners/bb-builder-load-before/maybe-autosave.js ***!
  \*******************************************************/
      /***/ () => {
        eval(
          'const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  "bb-builder-load-before",\r\n  async function (event) {\r\n    if (appLoader.settings.settings.auto_save) {\r\n      console.log(\r\n        "Autosave is turned on and set to auto save each " +\r\n          appLoader.settings.settings.auto_save_interval +\r\n          " seconds"\r\n      );\r\n\r\n      setInterval(function () {\r\n        appLoader.event.emit("bb-builder-save", {\r\n          attributes: {\r\n            srcEventElement: document.getElementById("bb-builder-save"),\r\n          },\r\n        });\r\n        appLoader.notification.information("Autosaving.", 2500);\r\n      }, appLoader.settings.settings.auto_save_interval * 1000);\r\n    }\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/listeners/bb-builder-load-before/maybe-autosave.js?'
        );

        /***/
      },
  },
]);
