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
  ["src_listeners_bb-walker-build-before_build-walker_js"],
  {
    /***/ "./src/listeners/bb-walker-build-before/build-walker.js":
      /*!**********************************************************************!*\
  !*** ./src/listeners/bb-walker-build-before/build-walker.js ***!
  \**********************************************************************/
      /***/ () => {
        eval(
          'const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  "bb-walker-build-before",\r\n  async function (event) {\r\n    let id = event.data;\r\n    let options = {};\r\n\r\n    let walker = document.getElementById("builder-walker");\r\n    if (["*", "content", "header", "footer"].indexOf(id) === -1) {\r\n      walker.innerHTML = walker.innerHTML.replaceAll("{id}", id);\r\n      options = await window.getAppLoader().dom.find(id);\r\n      walker.innerHTML = walker.innerHTML.replaceAll(\r\n        "{tag}",\r\n        options.tag.split(":")[1]\r\n      );\r\n      options.root = true;\r\n      document.querySelector(\'[x-if="all"]\').classList.add("hidden");\r\n    } else {\r\n      walker.innerHTML = walker.innerHTML.replaceAll("{id}", "content");\r\n      walker.innerHTML = walker.innerHTML.replaceAll("{tag}", id);\r\n      if (id === "*") {\r\n        options = await window.getAppLoader().dom.find(id);\r\n      } else {\r\n        options = await window.getAppLoader().dom.structuredData[id];\r\n\r\n        if (options[0]) {\r\n          options = options[0];\r\n        }\r\n      }\r\n\r\n      document.querySelector(\'[x-if="all"]\').classList.remove("hidden");\r\n    }\r\n    walker.querySelector("[x-content]").innerHTML = "";\r\n\r\n    if (id === "*") {\r\n      if (options.header.length > 0) {\r\n        appendWalkerTitle(walker, "Header");\r\n        for (let i in options.header) {\r\n          let walkerObject = await buildWalkerObject(options.header[i]);\r\n          appendWalkerObject(walker, walkerObject);\r\n        }\r\n      }\r\n\r\n      if (options.content.length > 0) {\r\n        appendWalkerTitle(walker, "Content");\r\n        for (let i in options.content) {\r\n          walkerObject = await buildWalkerObject(options.content[i]);\r\n          console.log(walkerObject);\r\n          appendWalkerObject(walker, walkerObject);\r\n        }\r\n      }\r\n\r\n      if (options.footer.length > 0) {\r\n        appendWalkerTitle(walker, "Footer");\r\n        for (let i in options.footer) {\r\n          walkerObject = await buildWalkerObject(options.footer[i]);\r\n          appendWalkerObject(walker, walkerObject);\r\n        }\r\n      }\r\n    } else {\r\n      walkerObject = await buildWalkerObject(options);\r\n      appendWalkerObject(walker, walkerObject);\r\n    }\r\n\r\n    appLoader.event.emit("bb-walker-build-after");\r\n\r\n    return true;\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\r\nasync function buildWalkerObject(options) {\r\n  console.log(options);\r\n  return await window.getAppLoader().dom.walkerFor(options);\r\n}\r\n\r\nfunction appendWalkerObject(walker, walkerObject) {\r\n  if (!walkerObject || walkerObject.innerHTML === "") {\r\n    let text = document.createElement("p");\r\n    text.classList.add("text-sm", "w-full", "text-center");\r\n    text.innerHTML =\r\n      "Warning: We could not build a walker for the asked content";\r\n    walker.querySelector("[x-content]").appendChild(text);\r\n\r\n    return;\r\n  }\r\n\r\n  walker.querySelector("[x-content]").appendChild(walkerObject);\r\n}\r\n\r\nfunction appendWalkerTitle(walker, title) {\r\n  let text = document.createElement("h3");\r\n  text.classList.add("text-sm", "w-full", "text-center");\r\n  text.innerHTML = title;\r\n  walker.querySelector("[x-content]").appendChild(text);\r\n\r\n  return;\r\n}\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/listeners/bb-walker-build-before/build-walker.js?'
        );

        /***/
      },
  },
]);
