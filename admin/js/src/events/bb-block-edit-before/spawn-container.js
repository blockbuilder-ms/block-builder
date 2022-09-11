const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-block-edit-before",
  async function (event) {
    let controller;

    if (event.attributes) {
      if (!event.attributes.item) {
        console.error("Missing data in the event.");
        return false;
      }

      let item = event.attributes.item;
      appLoader.editing = await appLoader.dom.find(item);
      appLoader.editingObject = await appLoader.dom.get(
        '[data-id="' + item + '"]'
      );
    } else {
      appLoader.editing = event.block;
      appLoader.editingObject = event.item;
    }

    if (await appLoader.blockControl.has(appLoader.editing)) {
      controller = await appLoader.blockControl.get(
        appLoader.editing,
        appLoader.editingObject
      );
    } else {
      controller = await appLoader.blockControl.make(
        appLoader.editing,
        appLoader.editingObject
      );
    }

    await controller.spawn();
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
