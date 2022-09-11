/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_core_dom_dom-object_js"],{

/***/ "./src/core/dom/dom-object.js":
/*!************************************!*\
  !*** ./src/core/dom/dom-object.js ***!
  \************************************/
/***/ (() => {

eval("class DomObject {\r\n  attributes = {\r\n    id: \"\",\r\n    class: \"\",\r\n    \"x-options\": \"\",\r\n  };\r\n\r\n  options(key) {\r\n    if (!key) {\r\n      return this.attributes[\"x-options\"];\r\n    }\r\n\r\n    return this.attributes[\"x-options\"][key]\r\n      ? this.attributes[\"x-options\"][key]\r\n      : false;\r\n  }\r\n\r\n  _prepareAttributes() {\r\n    for (let i in this.attributes) {\r\n      this.attributes[i] = this.node.hasAttribute(i)\r\n        ? this.node.getAttribute(i)\r\n        : false;\r\n    }\r\n  }\r\n\r\n  constructor(node) {\r\n    if (node === 0) {\r\n      // Failed to find the node, make that clear to the user.\r\n      console.log(\"Did not find the queried selector\");\r\n      return;\r\n    }\r\n\r\n    this.node = node;\r\n    this._prepareAttributes();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/core/dom/dom-object.js?");

/***/ })

}]);