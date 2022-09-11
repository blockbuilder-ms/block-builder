const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-block-move-before",
  async function (event) {
    if (!appLoader.state.dragItem) {
      return;
    }

    let item = appLoader.state.dragItem;

    if (!item || !item.getAttribute) {
      return;
    }

    let itemOptions = item.getAttribute("x-options");

    appLoader.state.active = true;

    if (itemOptions) {
      itemOptions = JSON.parse(itemOptions);
    }

    let itemId = itemOptions.attributes.id;

    appLoader.state.dragItem.classList.add(
      "scale-75",
      "border-2",
      "py-1",
      "px-2",
      "border-dark"
    );

    let nodes = await appLoader.dom.get("[data-id='" + itemId + "']", true);

    if (nodes[0]) {
      let node = nodes[0];
      node.classList.add(
        "scale-110",
        "duration-200",
        "ease-in-out",
        "transition-all",
        "border-2",
        "py-1",
        "px-2",
        "border-dark"
      );
    }
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
