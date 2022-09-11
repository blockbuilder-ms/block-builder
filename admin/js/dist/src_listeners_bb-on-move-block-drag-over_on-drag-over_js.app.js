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
  ["src_listeners_bb-block-move_drag_over-before_on-drag-over_js"],
  {
    /***/ "./src/listeners/bb-block-move_drag_over-before/on-drag-over.js":
      /*!******************************************************************!*\
  !*** ./src/listeners/bb-block-move_drag_over-before/on-drag-over.js ***!
  \******************************************************************/
      /***/ () => {
        eval(
          'const appLoader = window.getAppLoader();\r\n\r\nappLoader.event.on(\r\n  "bb-block-move_drag_over-before",\r\n  async function (event) {\r\n    let item = event.item;\r\n    let target = event.itemTarget;\r\n    let parentContainer = getCorrectParent(target.parentNode);\r\n    let parentContainerContent = getCorrectParentContent(target.parentNode);\r\n    if (appLoader.state.currentTarget === target) {\r\n      return;\r\n    }\r\n\r\n    appLoader.state.currentTarget = target;\r\n\r\n    let itemOptions = item.getAttribute("x-options");\r\n    let targetOptions = target.getAttribute("x-options");\r\n    let parentOptions;\r\n\r\n    if (parentContainer) {\r\n      parentOptions = parentContainer.getAttribute("x-options");\r\n    }\r\n\r\n    if (itemOptions) {\r\n      itemOptions = JSON.parse(itemOptions);\r\n    }\r\n\r\n    if (targetOptions) {\r\n      targetOptions = JSON.parse(targetOptions);\r\n    }\r\n\r\n    if (parentOptions) {\r\n      parentOptions = JSON.parse(parentOptions);\r\n    }\r\n\r\n    let itemId = itemOptions.attributes.id;\r\n    let targetId = targetOptions.attributes.id;\r\n    let parentId;\r\n\r\n    if (parentOptions && parentOptions.attributes) {\r\n      parentId = parentOptions.attributes.id;\r\n    }\r\n\r\n    let itemStruct = await appLoader.dom.find(itemId);\r\n    let targetStruct = await appLoader.dom.find(targetId);\r\n    let parentStruct;\r\n\r\n    if (parentId) {\r\n      parentStruct = await appLoader.dom.find(parentId);\r\n    }\r\n\r\n    if (itemStruct.dependencies[0] === targetStruct.tag) {\r\n      parentContainerContent = target.querySelector("[x-content]");\r\n      parentContainerContent.prepend(item);\r\n    } else if (\r\n      parentStruct &&\r\n      itemStruct.dependencies[0] === parentStruct.tag\r\n    ) {\r\n      parentContainerContent.insertBefore(item, target.nextSibling);\r\n    }\r\n\r\n    appLoader.state.active = false;\r\n  },\r\n  function (errorCode, errorData, errorMessage) {\r\n    // Error\r\n    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);\r\n  },\r\n  document\r\n);\r\n\r\nasync function OnMoveFindTarget(target) {\r\n  if (!target) {\r\n    return false;\r\n  }\r\n\r\n  if (\r\n    !target.hasAttribute("x-action") ||\r\n    target.getAttribute("x-action") !== "drop"\r\n  ) {\r\n    return await OnMoveFindTarget(target.parentNode);\r\n  }\r\n\r\n  return target;\r\n}\r\n\r\nfunction getCorrectParent(parent) {\r\n  if (!parent || !parent.hasAttribute) {\r\n    return false;\r\n  }\r\n\r\n  let options = parent.hasAttribute("x-options");\r\n  if (options) {\r\n    return parent;\r\n  }\r\n\r\n  return getCorrectParent(parent.parentNode);\r\n}\r\nfunction getCorrectParentContent(parent) {\r\n  if (!parent || !parent.hasAttribute) {\r\n    return false;\r\n  }\r\n\r\n  let options = parent.hasAttribute("x-content");\r\n  if (options) {\r\n    return parent;\r\n  }\r\n\r\n  return getCorrectParent(parent.parentNode);\r\n}\r\n\n\n//# sourceURL=webpack://block-builder-editor/./src/listeners/bb-block-move_drag_over-before/on-drag-over.js?'
        );

        /***/
      },
  },
]);
