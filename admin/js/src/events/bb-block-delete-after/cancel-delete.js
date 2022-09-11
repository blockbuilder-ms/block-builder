const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-block-delete-after",
  async function (event) {
    let state = event.attributes.state;

    if (state === "cancel") {
      // Succes
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
