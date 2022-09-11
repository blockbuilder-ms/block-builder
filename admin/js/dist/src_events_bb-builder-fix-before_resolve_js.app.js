/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_events_bb-builder-fix-before_resolve_js"],{

/***/ "./src/events/bb-builder-fix-before/resolve.js":
/*!*****************************************************!*\
  !*** ./src/events/bb-builder-fix-before/resolve.js ***!
  \*****************************************************/
/***/ (() => {

eval("const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  \"bb-builder-fix-before\",\r\n  async function (event) {\r\n    let Context = await (\r\n      await appLoader.error.byCode(event.attributes.ecode)\r\n    )();\r\n\r\n    if (Context.default) {\r\n      let className = Context.default;\r\n      Context = new className();\r\n    }\r\n\r\n    if (!(await Context.apply())) {\r\n      appLoader.notification.error(\"Solution could not be applied.\", 2500);\r\n    }\r\n\r\n    appLoader.notification.succes(\r\n      \"Solution was applied, Trying to load..\",\r\n      2500\r\n    );\r\n    // Reload the builder.\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/events/bb-builder-fix-before/resolve.js?");

/***/ })

}]);