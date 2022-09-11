"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_actions_dropdown_module_js"],{

/***/ "./src/actions/dropdown/module.js":
/*!****************************************!*\
  !*** ./src/actions/dropdown/module.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Dropdown {\r\n  constructor(container) {\r\n    const self = this;\r\n    self.container = container;\r\n    self.button = container.querySelector(\"[x-button]\");\r\n    self.target = container.querySelector(\"[x-target]\");\r\n    self.height = self.target.clientHeight;\r\n\r\n    self.target.style.height = \"0px\";\r\n    self.target.classList.add(\"hidden\");\r\n    self.open = false;\r\n\r\n    setTimeout(() => {\r\n      self.target.classList.add(\r\n        \"duration-200\",\r\n        \"ease-in-out\",\r\n        \"transition-all\",\r\n        \"opacity-0\"\r\n      );\r\n    });\r\n\r\n    self.button.addEventListener(\"click\", function (e) {\r\n      e.preventDefault();\r\n\r\n      self._onPress(e, self);\r\n    });\r\n  }\r\n\r\n  _onPress(e, self) {\r\n    // Only allow one instance at a time.\r\n    if (self.running) {\r\n      return;\r\n    }\r\n\r\n    self.running = true;\r\n    console.log(self.open);\r\n    if (self.open) {\r\n      self._despawn();\r\n    } else {\r\n      self._spawn();\r\n    }\r\n  }\r\n  _despawn() {\r\n    const self = this;\r\n\r\n    self.target.style.height = \"0px\";\r\n    self.target.classList.add(\"opacity-0\");\r\n    let ti = setTimeout(() => {\r\n      self.target.classList.add(\"hidden\");\r\n      self.open = false;\r\n      self.running = false;\r\n      clearTimeout(ti);\r\n    }, 210);\r\n  }\r\n\r\n  _spawn() {\r\n    const self = this;\r\n    self.target.classList.remove(\"hidden\");\r\n    let ti = setTimeout(() => {\r\n      self.target.classList.remove(\"opacity-0\");\r\n      self.target.style.height = self.height;\r\n      self.open = true;\r\n      self.running = false;\r\n      clearTimeout(ti);\r\n    }, 5);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/actions/dropdown/module.js?");

/***/ })

}]);