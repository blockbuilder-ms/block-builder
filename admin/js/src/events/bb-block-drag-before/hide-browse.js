const appLoader = window.getAppLoader();

appLoader.event.on(
  "bb-block-drag-before",
  function () {
    // Succes
    appLoader.action
      .withOptions({
        id: "builder-browse-modal",
      })
      .run("modal", "builder-browse-modal");
  },
  function (errorCode, errorData, errorMessage) {
    // Error
    appLoader.debug.log([{ errorCode, errorData, errorMessage }]);
  },
  document
);
