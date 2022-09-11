const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-duplicate-block-after",
  async function (event) {
    let id = event.attributes.item;
    let state = event.attributes.state;

    if (state === "confirm") {
      appLoader.dom.duplicate(id);

      appLoader.action
        .withOptions({
          "data-id": "builder-confirm-duplicate",
          standalone: true,
          attributes: {
            item: event.attributes.item,
          },
        })
        .run("modal", "builder-confirm-duplicate");
    }
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
