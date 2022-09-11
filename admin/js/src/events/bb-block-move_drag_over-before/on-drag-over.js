const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-block-move_drag_over-before",
  async function (event) {
    let item = event.item;
    let target = event.itemTarget;
    let parentContainer = getCorrectParent(target.parentNode);
    let parentContainerContent = getCorrectParentContent(target.parentNode);
    if (appLoader.state.currentTarget === target) {
      return;
    }

    appLoader.state.currentTarget = target;

    let itemOptions = item.getAttribute("x-options");
    let targetOptions = target.getAttribute("x-options");
    let parentOptions;

    if (parentContainer) {
      parentOptions = parentContainer.getAttribute("x-options");
    }

    if (itemOptions) {
      itemOptions = JSON.parse(itemOptions);
    }

    if (targetOptions) {
      targetOptions = JSON.parse(targetOptions);
    }

    if (parentOptions) {
      parentOptions = JSON.parse(parentOptions);
    }

    let itemId = itemOptions.attributes.id;
    let targetId = targetOptions.attributes.id;
    let parentId;

    if (parentOptions && parentOptions.attributes) {
      parentId = parentOptions.attributes.id;
    }

    let itemStruct = await appLoader.dom.find(itemId);
    let targetStruct = await appLoader.dom.find(targetId);
    let parentStruct;

    if (parentId) {
      parentStruct = await appLoader.dom.find(parentId);
    }

    if (itemStruct.dependencies[0] === targetStruct.tag) {
      parentContainerContent = target.querySelector("[x-content]");
      parentContainerContent.prepend(item);
    } else if (
      parentStruct &&
      itemStruct.dependencies[0] === parentStruct.tag
    ) {
      parentContainerContent.insertBefore(item, target.nextSibling);
    }

    appLoader.state.active = false;
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);

async function OnMoveFindTarget(target) {
  if (!target) {
    return false;
  }

  if (
    !target.hasAttribute("x-action") ||
    target.getAttribute("x-action") !== "drop"
  ) {
    return await OnMoveFindTarget(target.parentNode);
  }

  return target;
}

function getCorrectParent(parent) {
  if (!parent || !parent.hasAttribute) {
    return false;
  }

  let options = parent.hasAttribute("x-options");
  if (options) {
    return parent;
  }

  return getCorrectParent(parent.parentNode);
}
function getCorrectParentContent(parent) {
  if (!parent || !parent.hasAttribute) {
    return false;
  }

  let options = parent.hasAttribute("x-content");
  if (options) {
    return parent;
  }

  return getCorrectParent(parent.parentNode);
}
