const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-duplicate-block-after",
  async function (event) {
    let state = event.attributes.state;

    if (state === "cancel") {
      // Succes
      appLoader.action
        .withOptions({
          id: "builder-confirm-duplicate",
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
