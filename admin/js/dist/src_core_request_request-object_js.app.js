"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_core_request_request-object_js"],{

/***/ "./src/core/request/request-object.js":
/*!********************************************!*\
  !*** ./src/core/request/request-object.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass RequestObject {\r\n  url = \"\";\r\n  headers = {\r\n    \"Content-Type\": \"application/json\",\r\n  };\r\n  redirect = \"follow\";\r\n  body = {};\r\n  method = \"GET\";\r\n  mode = \"cors\";\r\n  cache = \"no-cache\";\r\n  referererPolicy = \"\";\r\n  credentials = \"same-origin\";\r\n\r\n  setUrl(url) {\r\n    if (url === \"\") {\r\n      return false;\r\n    }\r\n\r\n    this.url = url;\r\n  }\r\n\r\n  getUrl() {\r\n    return this.url;\r\n  }\r\n\r\n  setHeaders(headers) {\r\n    this.headers = headers;\r\n  }\r\n\r\n  setHeader(name, value) {\r\n    this.headers[name] = value;\r\n  }\r\n\r\n  getHeaders() {\r\n    return this.headers;\r\n  }\r\n\r\n  getHeader(key) {\r\n    return this.headers[key];\r\n  }\r\n\r\n  setRedirect(policy) {\r\n    this.redirect = policy;\r\n  }\r\n\r\n  getRedirect() {\r\n    return this.redirect;\r\n  }\r\n\r\n  setBody(body) {\r\n    this.body = JSON.stringify(body);\r\n  }\r\n\r\n  getBody() {\r\n    return this.body;\r\n  }\r\n\r\n  setMethod(method) {\r\n    this.method = method;\r\n  }\r\n\r\n  getMethod() {\r\n    return this.method;\r\n  }\r\n\r\n  setMode(mode) {\r\n    this.mode = mode;\r\n  }\r\n\r\n  getMode() {\r\n    return this.mode;\r\n  }\r\n\r\n  setCacheMode(cacheMode) {\r\n    this.cache = cacheMode;\r\n  }\r\n\r\n  getCacheMode() {\r\n    return this.cache;\r\n  }\r\n\r\n  setReferererPolicy(policy) {\r\n    this.referererPolicy = policy;\r\n  }\r\n\r\n  getReferrerPolicy() {\r\n    return this.referererPolicy;\r\n  }\r\n\r\n  setCredentials(credentials) {\r\n    this.credentials = credentials;\r\n  }\r\n\r\n  getCredentials() {\r\n    return this.credentials;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestObject);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/core/request/request-object.js?");

/***/ })

}]);