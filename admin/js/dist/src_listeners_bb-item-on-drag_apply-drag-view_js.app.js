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
  ["src_listeners_bb-block-drag-before_apply-drag-view_js"],
  {
    /***/ "./src/listeners/bb-block-drag-before/apply-drag-view.js":
      /*!**********************************************************!*\
  !*** ./src/listeners/bb-block-drag-before/apply-drag-view.js ***!
  \**********************************************************/
      /***/ () => {
        eval(
          'const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  "bb-block-drag-before",\r\n  function () {\r\n    // Succes\r\n    let iframe = document.querySelector("#builder-frame");\r\n\r\n    let standard =\r\n      iframe.contentWindow.document.body.querySelectorAll(".standard-view");\r\n    let dragView =\r\n      iframe.contentWindow.document.body.querySelectorAll(".drag-view");\r\n\r\n    let stdSize = standard.length;\r\n    let dragSize = dragView.length;\r\n\r\n    while (stdSize--) {\r\n      hide(standard[stdSize]);\r\n    }\r\n\r\n    setTimeout(function () {\r\n      while (dragSize--) {\r\n        show(dragView[dragSize]);\r\n      }\r\n    }, 150);\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\r\nfunction hide(element) {\r\n  element.classList.add("opacity-0");\r\n\r\n  setTimeout(function () {\r\n    element.classList.add("hidden");\r\n  }, 200);\r\n}\r\n\r\nfunction show(element) {\r\n  element.classList.remove("hidden");\r\n\r\n  setTimeout(function () {\r\n    element.classList.remove("opacity-0");\r\n  }, 50);\r\n}\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/listeners/bb-block-drag-before/apply-drag-view.js?'
        );

        /***/
      },
  },
]);
