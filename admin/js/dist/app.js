/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\r\n * Admin facing javascript code execution.\r\n */\r\nlet core = __webpack_require__.e(/*! import() */ \"src_core_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./core/ */ \"./src/core/index.js\"));\r\n\r\nclass AppLoader {\r\n  constructor(core) {\r\n    this.state = {};\r\n    this.references = {};\r\n    this.selector = \"x-action\";\r\n\r\n    this.actions = [\r\n      \"tab\",\r\n      \"accordion-toggle\",\r\n      \"modal\",\r\n      \"event\",\r\n      \"drop\",\r\n      \"drag\",\r\n    ];\r\n\r\n    this.core = core;\r\n  }\r\n\r\n  async applyActionUpdates() {\r\n    this.library = (await __webpack_require__.e(/*! import() */ \"src_actions_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./actions/ */ \"./src/actions/index.js\"))).default;\r\n  }\r\n\r\n  async loadCore() {\r\n    // Loading it asynchronously.\r\n    let extension = this.core[\"filter\"];\r\n\r\n    extension = (await extension).default;\r\n    let ext = new extension();\r\n    this.filter = ext;\r\n\r\n    extension = this.core[\"event\"];\r\n\r\n    extension = (await extension).default;\r\n    ext = new extension();\r\n\r\n    this.event = ext;\r\n\r\n    this.core = await this.filter.apply(\"bb-core-load\", this.core);\r\n\r\n    for (let i in this.core) {\r\n      let extension = this.core[i];\r\n\r\n      if (!extension || i === \"filter\" || i === \"event\") {\r\n        continue;\r\n      }\r\n\r\n      if (this[i]) {\r\n        continue;\r\n      }\r\n\r\n      extension = (await extension).default;\r\n      const ext = new extension();\r\n      this[i] = ext;\r\n    }\r\n  }\r\n\r\n  async loadActions() {\r\n    let actions = document.querySelectorAll(\r\n      \"[\" + this.selector + \"]:not(.hydrated)\"\r\n    );\r\n    let total = actions.length - 1;\r\n    let size = actions.length;\r\n    while (size--) {\r\n      let action = actions[total - size];\r\n\r\n      if (\"object\" !== typeof action) {\r\n        continue;\r\n      }\r\n\r\n      let isMulti = action.hasAttribute(\"x-multi\");\r\n      let actionRef = action.getAttribute(\"x-action\");\r\n      if (isMulti) {\r\n        try {\r\n          actionRef = JSON.parse(actionRef);\r\n          let actionSize = actionRef.length;\r\n\r\n          while (actionSize--) {\r\n            await this._load(actionRef[actionSize], action);\r\n          }\r\n          action.classList.add(\"hydrated\");\r\n        } catch (e) {\r\n          console.log(e);\r\n          continue;\r\n        }\r\n      } else {\r\n        if (await this._load(actionRef, action)) {\r\n          action.classList.add(\"hydrated\");\r\n        }\r\n      }\r\n    }\r\n\r\n    return true;\r\n  }\r\n\r\n  async _load(actionRef, action, isDirect) {\r\n    let options;\r\n\r\n    if (\"undefined\" === typeof this.library[actionRef]) {\r\n      console.log(\"Failed to find the action \" + actionRef);\r\n      return false;\r\n    }\r\n\r\n    if (action.hasAttribute(\"x-options\")) {\r\n      options = action.getAttribute(\"x-options\");\r\n\r\n      try {\r\n        options = JSON.parse(options);\r\n      } catch (e) {\r\n        options = {};\r\n      }\r\n    }\r\n\r\n    let className = (await this.library[actionRef]()).default;\r\n    const instance = new className(action, this.core, isDirect);\r\n\r\n    if (options && options[\"data-id\"]) {\r\n      this.references[options[\"data-id\"]] = instance;\r\n    }\r\n\r\n    return instance;\r\n  }\r\n\r\n  async loadIframeActions() {\r\n    const self = this;\r\n    let iframe = document.querySelector(\"#builder-frame\");\r\n    if (iframe.contentWindow.document.body) {\r\n      await self._loadIframeActions(iframe.contentWindow.document.body);\r\n      return;\r\n    }\r\n\r\n    iframe.addEventListener(\"load\", async function () {\r\n      await self._loadIframeActions(iframe.contentWindow.document.body);\r\n    });\r\n  }\r\n\r\n  async _loadIframeActions(body) {\r\n    const self = this;\r\n    let actions = body.querySelectorAll(\r\n      \"[\" + self.selector + \"]:not(.hydrated)\"\r\n    );\r\n\r\n    let total = actions.length;\r\n    let size = total + 1;\r\n    while (size--) {\r\n      let action = actions[total - size];\r\n\r\n      if (\"object\" !== typeof action) {\r\n        continue;\r\n      }\r\n\r\n      action.classList.add(\"hydrated\");\r\n      let actionRef = action.getAttribute(\"x-action\");\r\n\r\n      if (\"undefined\" === typeof self.library[actionRef]) {\r\n        console.log(\"Failed to find the action \" + actionRef);\r\n        continue;\r\n      }\r\n\r\n      // console.log(\"Loaded action: \" + actionRef);\r\n      let className = (await self.library[actionRef]()).default;\r\n      new className(action, self.core);\r\n    }\r\n  }\r\n}\r\n\r\nlet BBappLoader;\r\n\r\nfunction getAppLoader() {\r\n  return BBappLoader;\r\n}\r\n\r\nwindow.getAppLoader = getAppLoader;\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", async function () {\r\n  /**\r\n   * Initialize app loader\r\n   */\r\n  BBappLoader = new AppLoader((await core).default);\r\n\r\n  /**\r\n   * Load core if needed\r\n   */\r\n  await BBappLoader.loadCore();\r\n  await BBappLoader.applyActionUpdates();\r\n  __webpack_require__.e(/*! import() */ \"src_events_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./events */ \"./src/events/index.js\"));\r\n\r\n  /**\r\n   * Load actions now that we have let others manipulate.\r\n   */\r\n  BBappLoader.event.emit(\"bb-builder-load-before\");\r\n\r\n  let coreLazyloads = document.querySelectorAll(\"body > [x-lazyload]\");\r\n  let lazyloadStack = coreLazyloads.length;\r\n\r\n  while (lazyloadStack--) {\r\n    let item = coreLazyloads[lazyloadStack];\r\n\r\n    if (!item || \"object\" !== typeof item) {\r\n      continue;\r\n    }\r\n\r\n    BBappLoader.request.loadData(\r\n      item.getAttribute(\"x-lazyload\"),\r\n      item,\r\n      \"admin\",\r\n      true\r\n    );\r\n  }\r\n\r\n  let allLazyloads = document.querySelectorAll(\"[x-lazyload]:not([x-loaded])\");\r\n  lazyloadStack = allLazyloads.length;\r\n\r\n  while (lazyloadStack--) {\r\n    let item = allLazyloads[lazyloadStack];\r\n\r\n    if (!item || \"object\" !== typeof item) {\r\n      continue;\r\n    }\r\n\r\n    if (item.hasAttribute(\"x-on\")) {\r\n      let xOn = item.getAttribute(\"x-on\");\r\n\r\n      try {\r\n        let res = JSON.parse(xOn);\r\n\r\n        if (res) {\r\n          xOn = res;\r\n        }\r\n      } catch (e) {\r\n        return false;\r\n      }\r\n\r\n      let name = xOn.name;\r\n      let onSplit = xOn.on.split(\"|\");\r\n      let equal = xOn.equal;\r\n\r\n      let entry = onSplit[0].replace(\"@\", \"\");\r\n      let attribute = onSplit[1];\r\n      let attributeEntry = onSplit[2];\r\n\r\n      if (name) {\r\n        BBappLoader.event.on(\r\n          name,\r\n          function (event) {\r\n            let obj = event[entry];\r\n            if (!obj) {\r\n              return false;\r\n            }\r\n\r\n            let objAttribute = obj.hasAttribute(attribute)\r\n              ? obj.getAttribute(attribute)\r\n              : false;\r\n            let options;\r\n            try {\r\n              options = JSON.parse(objAttribute);\r\n            } catch (e) {\r\n              return false;\r\n            }\r\n\r\n            if (options[attributeEntry] && options[attributeEntry] === equal) {\r\n              BBappLoader.request.loadData(\r\n                item.getAttribute(\"x-lazyload\"),\r\n                item,\r\n                \"admin\",\r\n                true\r\n              );\r\n            }\r\n          },\r\n          function () {\r\n            //\r\n          },\r\n          document\r\n        );\r\n      }\r\n    }\r\n  }\r\n\r\n  await BBappLoader.dom.load();\r\n  if (!BBappLoader.state.error) {\r\n    await BBappLoader.loadIframeActions();\r\n    await BBappLoader.loadActions();\r\n    await BBappLoader.settings.load();\r\n\r\n    let interval = setInterval(function () {\r\n      if (BBappLoader.settings.loaded === true) {\r\n        BBappLoader.event.emit(\"bb-builder-loaded-before\");\r\n        clearInterval(interval);\r\n      }\r\n    }, 300);\r\n  }\r\n\r\n  if (BBappLoader.state.error) {\r\n    document.getElementById(\"loading-message\").innerHTML =\r\n      BBappLoader.state.error_message;\r\n\r\n    let button = document.getElementById(\"error-fix-button\");\r\n    let viewPageButton = document.getElementById(\"error-view-page\");\r\n    let reloadButton = document.getElementById(\"reload-button\");\r\n\r\n    button.classList.remove(\"hidden\");\r\n    viewPageButton.classList.remove(\"hidden\");\r\n    reloadButton.classList.remove(\"hidden\");\r\n    setTimeout(() => {\r\n      button.classList.remove(\"opacity-0\");\r\n      viewPageButton.classList.remove(\"opacity-0\");\r\n      reloadButton.classList.remove(\"opacity-0\");\r\n    });\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".app.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "block-builder-editor:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkblock_builder_editor"] = self["webpackChunkblock_builder_editor"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;