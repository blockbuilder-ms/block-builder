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
  ["src_listeners_bb-walker-hover_step-before_resolve_js"],
  {
    /***/ "./src/listeners/bb-walker-hover_step-before/resolve.js":
      /*!*******************************************************!*\
  !*** ./src/listeners/bb-walker-hover_step-before/resolve.js ***!
  \*******************************************************/
      /***/ () => {
        eval(
          'const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  "bb-walker-hover_step-before",\r\n  async function (event) {\r\n    let id = event.attributes.id;\r\n    let obj = await appLoader.dom.get("[data-id=\'" + id + "\']", true);\r\n\r\n    if (obj[0]) {\r\n      obj = obj[0];\r\n    }\r\n\r\n    if (!obj || event.attributes.type !== "hover") {\r\n      return false;\r\n    }\r\n\r\n    if (event.attributes.state === "enter") {\r\n      if (document.body.style.overflow === "auto") {\r\n        document.body.style.overflow = "hidden";\r\n        obj.classList.add("duration-100", "transition-all");\r\n\r\n        setTimeout(() => {\r\n          obj.classList.add("highlight");\r\n        });\r\n      } else {\r\n        let current = await appLoader.dom.get(".highlight", true);\r\n        let currentStack = current.length;\r\n\r\n        while (currentStack--) {\r\n          let item = current[currentStack];\r\n\r\n          if (item === obj) {\r\n            continue;\r\n          }\r\n\r\n          item.classList.remove("highlight");\r\n          setTimeout(() => {\r\n            item.classList.remove("duration-100", "transition-all");\r\n            document.body.style.overflow = "auto";\r\n          });\r\n        }\r\n\r\n        document.body.style.overflow = "hidden";\r\n        obj.classList.add("duration-100", "transition-all");\r\n\r\n        setTimeout(() => {\r\n          obj.classList.add("highlight");\r\n        });\r\n      }\r\n    }\r\n\r\n    if (event.attributes.state === "leave") {\r\n      obj.classList.remove("highlight");\r\n      setTimeout(() => {\r\n        obj.classList.remove("duration-100", "transition-all");\r\n        document.body.style.overflow = "auto";\r\n      });\r\n    }\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/listeners/bb-walker-hover_step-before/resolve.js?'
        );

        /***/
      },
  },
]);
