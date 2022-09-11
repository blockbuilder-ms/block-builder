const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-block-move_drop-before",
  async function (event) {
    if (
      appLoader.state.active ||
      !appLoader.state.currentTarget ||
      !appLoader.state.dragItem
    ) {
      return;
    }

    let item = appLoader.state.dragItem;
    let target = appLoader.state.currentTarget;

    if (item === target) {
      target = target.parentNode.parentNode;
    }

    if (!item || !item.getAttribute) {
      console.error("Drag item was not found");
      console.log(item);
      return;
    }

    if (!target || !target.getAttribute) {
      console.error("Target item was not found");
      return;
    }

    let itemOptions = item.getAttribute("x-options");
    let targetOptions = target.getAttribute("x-options");

    appLoader.state.active = true;

    if (itemOptions) {
      itemOptions = JSON.parse(itemOptions);
    }

    if (targetOptions) {
      targetOptions = JSON.parse(targetOptions);
    }

    let itemId = itemOptions.attributes.id;
    let targetId = targetOptions.attributes.id;
    let itemStruct = structuredClone(await appLoader.dom.find(itemId));
    state = await appLoader.dom.insertBefore(itemStruct, targetId);

    if (!state) {
      console.error("Failed to insert block");
    }

    appLoader.state.active = false;
    appLoader.state.dragItem = false;
    appLoader.state.currentTarget = false;

    await appLoader.dom.sync();
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
