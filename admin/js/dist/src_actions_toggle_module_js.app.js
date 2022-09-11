"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_actions_toggle_module_js"],{

/***/ "./src/actions/toggle/module.js":
/*!**************************************!*\
  !*** ./src/actions/toggle/module.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Toggle {\r\n  constructor(container) {\r\n    const self = this;\r\n\r\n    self.open = false;\r\n\r\n    self.container = container;\r\n    self.toggle = container.querySelector(\"[x-toggle]\");\r\n    self.innerContainer = container.querySelector(\"[x-container]\");\r\n\r\n    if (self.container.hasAttribute(\"x-options\")) {\r\n      try {\r\n        self.options = JSON.parse(self.container.getAttribute(\"x-options\"));\r\n      } catch (e) {\r\n        console.log(e);\r\n      }\r\n    }\r\n\r\n    self.toggle.addEventListener(\"click\", function (e) {\r\n      self.onPress(e, self);\r\n    });\r\n\r\n    window.getAppLoader().event.on(\"bb-builder-clear-toggles\", function () {\r\n      self.open = true;\r\n      self._onPress(self);\r\n    });\r\n  }\r\n\r\n  onPress(e, self) {\r\n    e.preventDefault();\r\n\r\n    self._onPress(self);\r\n  }\r\n\r\n  _onPress(self) {\r\n    if (self.active) {\r\n      return;\r\n    }\r\n\r\n    self.active = true;\r\n    if (!self.open) {\r\n      // Spawn\r\n      self.innerContainer.classList.remove(\"hidden\");\r\n      setTimeout(() => {\r\n        if (self.options && self.options.toggle) {\r\n          for (let i in self.options.toggle) {\r\n            self.innerContainer.classList.remove(self.options.toggle[i]);\r\n          }\r\n        } else {\r\n          self.innerContainer.classList.remove(\"scale-95\", \"opacity-0\");\r\n        }\r\n        console.log(self.options);\r\n        if (self.options && self.options.HideToggleWhenActive) {\r\n          self.toggle.classList.add(\"hidden\");\r\n        }\r\n\r\n        self.open = true;\r\n        self.active = false;\r\n      }, 5);\r\n    } else {\r\n      // Hide\r\n      if (self.options && self.options.toggle) {\r\n        for (let i in self.options.toggle) {\r\n          self.innerContainer.classList.add(self.options.toggle[i]);\r\n        }\r\n      } else {\r\n        self.innerContainer.classList.add(\"scale-95\", \"opacity-0\");\r\n      }\r\n\r\n      if (self.options && self.options.HideToggleWhenActive) {\r\n        self.toggle.classList.remove(\"hidden\");\r\n      }\r\n\r\n      setTimeout(() => {\r\n        self.innerContainer.classList.add(\"hidden\");\r\n        self.open = false;\r\n        self.active = false;\r\n      }, 205);\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toggle);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/actions/toggle/module.js?");

/***/ })

}]);