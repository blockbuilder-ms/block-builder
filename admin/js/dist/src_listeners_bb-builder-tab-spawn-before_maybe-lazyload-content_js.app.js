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
  ["src_listeners_bb-tab-spawn-before_maybe-lazyload-content_js"],
  {
    /***/ "./src/listeners/bb-tab-spawn-before/maybe-lazyload-content.js":
      /*!*****************************************************************************!*\
  !*** ./src/listeners/bb-tab-spawn-before/maybe-lazyload-content.js ***!
  \*****************************************************************************/
      /***/ () => {
        eval(
          'const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  "bb-tab-spawn-before",\r\n  async function (event) {\r\n    let target = event.tabTarget || false;\r\n\r\n    if (!target) {\r\n      return false;\r\n    }\r\n\r\n    let shouldLazyload = target.hasAttribute("x-lazyload") ? true : false;\r\n    let isLoaded = target.hasAttribute("x-loaded") ? true : false;\r\n    let key = shouldLazyload ? target.getAttribute("x-lazyload") : false;\r\n    let supressNotify = target.hasAttribute("x-notify")\r\n      ? target.getAttribute("x-notify")\r\n      : false;\r\n\r\n    if (isLoaded) {\r\n      return true;\r\n    }\r\n\r\n    if (!key) {\r\n      return false;\r\n    }\r\n\r\n    setTimeout(async () => {\r\n      let space = target.hasAttribute("x-space")\r\n        ? target.getAttribute("x-space")\r\n        : false;\r\n\r\n      await appLoader.request.loadData(\r\n        key,\r\n        target,\r\n        space,\r\n        supressNotify === "true" ? true : false\r\n      );\r\n    }, 200);\r\n\r\n    return true;\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/listeners/bb-tab-spawn-before/maybe-lazyload-content.js?'
        );

        /***/
      },
  },
]);
