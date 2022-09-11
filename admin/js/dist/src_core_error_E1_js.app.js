"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_core_error_E1_js"],{

/***/ "./src/core/error/E1.js":
/*!******************************!*\
  !*** ./src/core/error/E1.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass E1 {\r\n  async apply() {\r\n    const postContent = postObject.post_content;\r\n\r\n    let button = document.getElementById(\"error-fix-button\");\r\n    let viewPageButton = document.getElementById(\"error-view-page\");\r\n    let reloadButton = document.getElementById(\"reload-button\");\r\n\r\n    document.getElementById(\"loading-message\").innerHTML =\r\n      \"Applying solution now.. Please wait..\";\r\n\r\n    setTimeout(() => {\r\n      button.classList.add(\"opacity-0\");\r\n      viewPageButton.classList.add(\"opacity-0\");\r\n      reloadButton.classList.add(\"opacity-0\");\r\n      setTimeout(() => {\r\n        reloadButton.classList.add(\"hidden\");\r\n        button.classList.add(\"hidden\");\r\n        viewPageButton.classList.add(\"hidden\");\r\n      }, 200);\r\n    });\r\n\r\n    // Make template\r\n    let template = await window.getAppLoader().template.get(\"core:html\");\r\n\r\n    if (!template) {\r\n      console.error(\r\n        \"We did not find the template needed to apply the solution.. Aborting..\"\r\n      );\r\n\r\n      return;\r\n    }\r\n\r\n    // Make Block\r\n    const block = await window.getAppLoader().block.make(\"core:html\", template);\r\n    let structure = await window.getAppLoader().block.structure(\"core:html\");\r\n\r\n    structure.content = postContent;\r\n\r\n    // Append to the structured data.\r\n    let result = await window\r\n      .getAppLoader()\r\n      .dom.append(\r\n        block,\r\n        await window\r\n          .getAppLoader()\r\n          .dom.get(\"#content-wrap [x-action='drop']\", true),\r\n        structure,\r\n        true\r\n      );\r\n\r\n    // Do a save\r\n    if (result) {\r\n      window.getAppLoader().event.emit(\"bb-builder-save\", {\r\n        attributes: {\r\n          srcEventElement: document.getElementById(\"bb-builder-save\"),\r\n        },\r\n      });\r\n\r\n      document.getElementById(\"loading-message\").innerHTML =\r\n        \"Solution applied, Reloading..\";\r\n\r\n      setTimeout(function () {\r\n        window.getAppLoader().event.emit(\"bb-builder-reload-before\");\r\n      }, 1500);\r\n\r\n      return true;\r\n    } else {\r\n      document.getElementById(\"loading-message\").innerHTML =\r\n        \"Solution could not be applied..\";\r\n\r\n      window\r\n        .getAppLoader()\r\n        .notification.error(\"Could not apply fix to the post.\");\r\n\r\n      return false;\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (E1);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/core/error/E1.js?");

/***/ })

}]);