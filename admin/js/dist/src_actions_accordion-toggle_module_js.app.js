"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_actions_accordion-toggle_module_js"],{

/***/ "./src/actions/accordion-toggle/module.js":
/*!************************************************!*\
  !*** ./src/actions/accordion-toggle/module.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass AccordionToggle {\r\n  constructor(link) {\r\n    const self = this;\r\n    self.timeout = false;\r\n    self.link = link;\r\n    self.content = link.parentNode.querySelector(\".accordion-content\");\r\n\r\n    if (self.link.hasAttribute(\"x-options\")) {\r\n      self.options = link.getAttribute(\"x-options\");\r\n\r\n      if (self.options) {\r\n        self.options = JSON.parse(self.options);\r\n      }\r\n    }\r\n\r\n    self.link.addEventListener(\"click\", function (e) {\r\n      self.onPress(e, self);\r\n    });\r\n  }\r\n\r\n  onPress(e, self) {\r\n    e.preventDefault();\r\n\r\n    self._despawnToggles();\r\n    self._spawn();\r\n\r\n    let backs = self.content.querySelectorAll(\"[x-back]\");\r\n    let bSize = backs.length;\r\n\r\n    while (bSize--) {\r\n      backs[bSize].addEventListener(\"click\", function () {\r\n        self._despawn();\r\n        setTimeout(function () {\r\n          self._spawnToggles();\r\n        }, 215);\r\n      });\r\n    }\r\n  }\r\n\r\n  _spawnToggles() {\r\n    let toggles = document.querySelectorAll(\".accordion-toggle\");\r\n    let size = toggles.length;\r\n\r\n    while (size--) {\r\n      toggles[size].classList.remove(\"hidden\");\r\n      toggles[size]\r\n        .querySelector(\"a.accordion-header\")\r\n        .classList.remove(\"hidden\");\r\n    }\r\n  }\r\n\r\n  _despawnToggles() {\r\n    let toggles = document.querySelectorAll(\".accordion-toggle:not(.hidden)\");\r\n    let size = toggles.length;\r\n\r\n    while (size--) {\r\n      toggles[size].classList.add(\"hidden\");\r\n      toggles[size].querySelector(\"a.accordion-header\").classList.add(\"hidden\");\r\n    }\r\n  }\r\n\r\n  _spawn() {\r\n    const self = this;\r\n    self.content.parentNode.classList.remove(\"hidden\");\r\n    self.content.classList.remove(\"hidden\");\r\n\r\n    setTimeout(function () {\r\n      self.content.classList.remove(\"opacity-0\");\r\n    }, 15);\r\n  }\r\n\r\n  _despawn() {\r\n    const self = this;\r\n    self.content.classList.add(\"opacity-0\");\r\n\r\n    setTimeout(function () {\r\n      self.content.classList.add(\"hidden\");\r\n    }, 215);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccordionToggle);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/actions/accordion-toggle/module.js?");

/***/ })

}]);