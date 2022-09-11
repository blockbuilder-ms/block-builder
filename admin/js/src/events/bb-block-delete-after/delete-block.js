const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-block-delete-after",
  async function (event) {
    let id = event.attributes.item;
    let state = event.attributes.state;

    if (state === "confirm") {
      if (!appLoader.dom.delete(id)) {
        console.log("Failed to delete");
      }

      appLoader.action
        .withOptions({
          id: "builder-confirm-delete",
          standalone: true,
          attributes: {
            item: event.attributes.item,
          },
        })
        .run("modal", "builder-confirm-delete");
    }
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
