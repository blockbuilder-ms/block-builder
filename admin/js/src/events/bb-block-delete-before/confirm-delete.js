const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-block-delete-before",
  async function (event) {
    // Succes
    appLoader.action
      .withOptions({
        "data-id": "builder-confirm-delete",
        standalone: true,
        attributes: {
          item: event.attributes.item,
        },
      })
      .run("modal", "builder-confirm-delete");

    setTimeout(() => {
      appLoader.loadActions();
    });
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
