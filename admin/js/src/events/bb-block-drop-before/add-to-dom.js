const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-block-drop-before",
  async function (event) {
    let target = event.dragEvent.target;
    let options = {};
    let template;
    let result;

    try {
      options = target.hasAttribute("x-options")
        ? JSON.parse(target.getAttribute("x-options"))
        : [];
    } catch (e) {
      //
    }

    root = await findBlockTarget(target);

    let item = appLoader.state.dragItem;
    let itemOptions = {};

    try {
      itemOptions = item.hasAttribute("x-options")
        ? JSON.parse(item.getAttribute("x-options"))
        : {};
    } catch (e) {
      //
    }

    let structure = structuredClone(
      await appLoader.block.structure(itemOptions.tag)
    );

    if (structure.default) {
      structure.multiStyle = true;
      template = await appLoader.template.get(itemOptions.tag + "-default");
    } else {
      template = await appLoader.template.get(itemOptions.tag);
    }

    if (!template) {
      console.error("Template for: " + itemOptions.tag + " - is corrupted");
      return;
    }

    const block = await appLoader.block.make(itemOptions.tag, template);
    if (root) {
      result = await appLoader.dom.appendTo(block, root, structure, template);
    } else {
      result = await appLoader.dom.append(
        block,
        target,
        structure,
        root,
        template
      );
    }

    if (!result) {
      appLoader.notification.error(itemOptions.type + " could not be added");
      appLoader.debug.log([result]);
    }

    appLoader.notification.succes(itemOptions.type + " was added");
    appLoader.state.dragItem = false;
    appLoader.state.currentTarget = false;
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);

async function findBlockTarget(target) {
  if (!target) {
    return false;
  }

  if (target.hasAttribute("data-id")) {
    return target;
  }

  if (target.hasAttribute("x-root")) {
    return false;
  }

  if (target.hasAttribute("x-wrap")) {
    return false;
  }

  return await findBlockTarget(target.parentNode);
}
