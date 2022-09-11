const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-block-duplicate-before",
  async function (event) {
    // Succes
    appLoader.action
      .withOptions({
        "data-id": "builder-confirm-duplicate",
        standalone: true,
        attributes: {
          item: event.attributes.item,
        },
      })
      .run("modal", "builder-confirm-duplicate");

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
