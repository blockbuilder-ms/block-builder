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
  ["src_listeners_bb-plugin-deactivate-before_resolve_js"],
  {
    /***/ "./src/listeners/bb-plugin-deactivate-before/resolve.js":
      /*!*******************************************************!*\
  !*** ./src/listeners/bb-plugin-deactivate-before/resolve.js ***!
  \*******************************************************/
      /***/ () => {
        eval(
          'const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  "bb-plugin-deactivate-before",\r\n  async function (event) {\r\n    console.log("Deactivating plugin");\r\n    let attrs = event.attributes;\r\n    let plugin = attrs.plugin;\r\n\r\n    let requestObject = await appLoader.request.make();\r\n\r\n    requestObject.setUrl("/wp-json/block-builder/v1/plugin/" + plugin);\r\n\r\n    requestObject.setBody({\r\n      body: {},\r\n    });\r\n\r\n    let result = await appLoader.request.delete(requestObject);\r\n\r\n    let response = await result.json();\r\n\r\n    // Request was not 200 succes\r\n    if (response.status !== 200) {\r\n      appLoader.notification.error(response.response, 2500);\r\n      return;\r\n    }\r\n\r\n    // request was an succes\r\n    appLoader.notification.succes(response.response, 2500);\r\n\r\n    let container = document.querySelector("#plugins");\r\n\r\n    setTimeout(async () => {\r\n      let loadedItems = document.querySelectorAll(".modal [x-loaded]");\r\n      let size = loadedItems.length;\r\n\r\n      while (size--) {\r\n        let lItem = loadedItems[size];\r\n\r\n        if (!lItem || "object" !== typeof lItem || container === lItem) {\r\n          continue;\r\n        }\r\n\r\n        let template = await window.getAppLoader().template.get("spinner");\r\n\r\n        lItem.removeAttribute("x-loaded");\r\n        lItem.innerHTML = "";\r\n        lItem.appendChild(template);\r\n      }\r\n\r\n      let shouldLoadData = container.hasAttribute("x-lazyload") ? true : false;\r\n      let key = shouldLoadData ? container.getAttribute("x-lazyload") : false;\r\n      let space = container.hasAttribute("x-space")\r\n        ? container.getAttribute("x-space")\r\n        : false;\r\n\r\n      if (shouldLoadData) {\r\n        await appLoader.request.loadData(key, container, space, true);\r\n      }\r\n\r\n      appLoader.loadActions();\r\n\r\n      appLoader.request.loadData(\r\n        "lazyload--plugin--modals",\r\n        document.querySelector(\'[x-lazyload="lazyload--plugin--modals"]\'),\r\n        "admin",\r\n        true\r\n      );\r\n\r\n      appLoader.request.loadData(\r\n        "lazyload--block--templates",\r\n        document.querySelector(\'[x-lazyload="lazyload--block--templates"]\'),\r\n        "admin",\r\n        true\r\n      );\r\n      appLoader.request.loadData(\r\n        "lazyload--control--templates",\r\n        document.querySelector(\'[x-lazyload="lazyload--control--templates"]\'),\r\n        "admin",\r\n        true\r\n      );\r\n    });\r\n\r\n    return true;\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/listeners/bb-plugin-deactivate-before/resolve.js?'
        );

        /***/
      },
  },
]);
