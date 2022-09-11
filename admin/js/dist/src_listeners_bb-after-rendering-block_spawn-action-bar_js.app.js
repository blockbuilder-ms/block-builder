/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || []).push([["src_listeners_bb-after-rendering-block_spawn-action-bar_js"],{

/***/ "./src/listeners/bb-after-rendering-block/spawn-action-bar.js":
/*!********************************************************************!*\
  !*** ./src/listeners/bb-after-rendering-block/spawn-action-bar.js ***!
  \********************************************************************/
/***/ (() => {

eval("const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  \"bb-after-rendering-block\",\r\n  async function (event) {\r\n    // let current = event.blockObject.querySelector(\".action-bar\");\r\n\r\n    // if (\r\n    //   !current &&\r\n    //   event.block &&\r\n    //   \"undefined\" !== typeof event.block.showActionBar\r\n    // ) {\r\n    //   let template = await appLoader.template.get(\"action-bar\");\r\n\r\n    //   template.innerHTML = template.innerHTML.replaceAll(\r\n    //     \"{id}\",\r\n    //     event.block[\"data-id\"]\r\n    //   );\r\n\r\n    //   event.blockObject.appendChild(template);\r\n\r\n    //   appLoader.loadActions();\r\n    //   appLoader.loadIframeActions();\r\n    // }\r\n\r\n    return true;\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/listeners/bb-after-rendering-block/spawn-action-bar.js?");

/***/ })

}]);